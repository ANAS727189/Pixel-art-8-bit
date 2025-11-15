export interface ResumeData {
  id: string;
  name: string;
  title?: string; // Job title/role from resume
  email: string;
  phone: string;
  location?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  summary?: string;
  skills: string[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  location?: string;
  description: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Education {
  institution: string;
  degree: string;
  field?: string;
  duration: string;
  location?: string;
  gpa?: string;
}

export function parseResume(text: string): Omit<ResumeData, 'id'> {
  // Clean the text first
  const cleanedText = text.replace(/\n{3,}/g, '\n\n').trim();
  const lines = cleanedText.split('\n').map(line => line.trim()).filter(line => line);
  
  // Extract basic contact info first
  const emailMatch = text.match(/[\w.-]+@[\w.-]+\.\w+/);
  const phoneMatch = text.match(/(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}|\d{10}/);
  const linkedinMatch = text.match(/(?:linkedin\.com\/in\/|linkedin:)\s*([\w-]+)/i);
  const githubMatch = text.match(/(?:github\.com\/|github:)\s*([\w-]+)/i);
  const portfolioMatch = text.match(/(https?:\/\/(?:www\.)?(?!linkedin|github)[\w-]+\.[\w]+(?:\/[\w.-]*)*)/);
  
  // Extract name and title - look in first few lines only
  let name = '';
  let title = '';
  
  // Common section headers to avoid
  const sectionHeaders = [
    'education', 'experience', 'projects', 'skills', 'technical skills',
    'work experience', 'summary', 'objective', 'certifications', 'awards'
  ];
  
  for (let i = 0; i < Math.min(5, lines.length); i++) {
    const line = lines[i];
    const lowerLine = line.toLowerCase();
    
    // Skip if it's a section header
    if (sectionHeaders.some(header => lowerLine === header || lowerLine.startsWith(header + ':'))) {
      continue;
    }
    
    // Skip if line contains contact info
    if (line.includes('@') || 
        (phoneMatch && line.includes(phoneMatch[0])) ||
        line.includes('linkedin') ||
        line.includes('github') ||
        line.includes('leetcode') ||
        line.includes('portfolio')) {
      // But try to extract name from contact line if no name yet
      if (!name && line.length > 10) {
        // Name is usually at the start of contact line
        const parts = line.split(/[|\/]|(?=\d{10})|(?=\+?\d)/);
        const potentialName = parts[0]?.trim();
        if (potentialName && 
            potentialName.length > 3 && 
            potentialName.length < 50 &&
            !potentialName.includes('@') &&
            !/^\d/.test(potentialName)) {
          name = potentialName;
        }
      }
      continue;
    }
    
    // Skip very short or very long lines
    if (line.length < 3 || line.length > 100) continue;
    
    // Skip lines with mostly numbers/dates
    if (/^\d{4}/.test(line) || /\d{4}\s*-\s*\d{4}/.test(line)) continue;
    
    // If we don't have a name yet, this is likely it
    if (!name) {
      name = line;
    } 
    // If we have name but no title, this might be the title
    else if (!title && i <= 3) {
      // Check if it looks like a job title (not too long, doesn't look like a section)
      if (!line.includes('|') && !line.includes('–') && !line.includes('—')) {
        title = line;
        break;
      }
    }
  }
  
  // Extract summary/objective
  const summary = extractSummary(text);
  
  // Extract skills
  const skills = extractSkills(text);
  console.log(`[Parser] Extracted ${skills.length} skills`);
  
  // Extract experience
  const experience = extractExperience(text);
  console.log(`[Parser] Extracted ${experience.length} experiences`);
  
  // Extract projects
  const projects = extractProjects(text);
  console.log(`[Parser] Extracted ${projects.length} projects`);
  
  // Extract education
  const education = extractEducation(text);
  console.log(`[Parser] Extracted ${education.length} education entries`);
  
  const result = {
    name: name || 'Professional',
    title: title || undefined,
    email: emailMatch?.[0] || '',
    phone: phoneMatch?.[0] || '',
    linkedin: linkedinMatch ? `https://linkedin.com/in/${linkedinMatch[1]}` : undefined,
    github: githubMatch ? `https://github.com/${githubMatch[1]}` : undefined,
    portfolio: portfolioMatch?.[0],
    summary,
    skills,
    experience,
    projects,
    education,
  };
  
  console.log('[Parser] Final result:', {
    name: result.name,
    title: result.title,
    skillsCount: result.skills.length,
    experienceCount: result.experience.length,
    projectsCount: result.projects.length,
    educationCount: result.education.length
  });
  
  return result;
}

function extractSkills(text: string): string[] {
  const skillsSection = extractSection(text, ['skills', 'technical skills', 'technologies', 'tech stack', 'core competencies']);
  
  const skills: string[] = [];
  
  if (skillsSection) {
    // Common tech skills to look for
    const commonSkills = [
      'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#', 'Ruby', 'Go', 'Rust', 'PHP', 'Swift', 'Kotlin',
      'React', 'Vue', 'Angular', 'Next.js', 'Nuxt', 'Svelte', 'Node.js', 'Express', 'Django', 'Flask', 'Spring', 'FastAPI',
      'HTML', 'CSS', 'Tailwind', 'Bootstrap', 'SASS', 'SCSS', 'Material-UI', 'Chakra UI',
      'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'Supabase', 'DynamoDB', 'Cassandra',
      'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Git', 'GitHub', 'GitLab', 'Vercel', 'Netlify',
      'REST', 'GraphQL', 'API', 'Microservices', 'CI/CD', 'Jenkins', 'GitHub Actions',
      'TensorFlow', 'PyTorch', 'Machine Learning', 'AI', 'Data Science', 'Pandas', 'NumPy',
      'Redux', 'MobX', 'Zustand', 'React Query', 'SWR',
      'Jest', 'Mocha', 'Cypress', 'Playwright', 'Testing Library',
      'Webpack', 'Vite', 'Rollup', 'Babel', 'ESLint', 'Prettier',
    ];
    
    const lowerText = skillsSection.toLowerCase();
    
    for (const skill of commonSkills) {
      if (lowerText.includes(skill.toLowerCase()) && !skills.includes(skill)) {
        skills.push(skill);
      }
    }
    
    // Also split by common separators and add unique ones
    const separated = skillsSection
      .split(/[,;|•\n\t]/)
      .map(s => s.trim())
      .filter(s => {
        // Filter valid skills
        return s && 
               s.length > 1 && 
               s.length < 30 && 
               !s.toLowerCase().includes('skills') &&
               !s.toLowerCase().includes('technologies') &&
               !/^\d+$/.test(s) && // Not just numbers
               !skills.some(existing => existing.toLowerCase() === s.toLowerCase());
      });
    
    skills.push(...separated);
  }
  
  // Also scan entire document for tech keywords if we don't have many skills
  if (skills.length < 5) {
    const techKeywords = ['React', 'Node.js', 'Python', 'JavaScript', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'];
    for (const keyword of techKeywords) {
      if (text.includes(keyword) && !skills.includes(keyword)) {
        skills.push(keyword);
      }
    }
  }
  
  // Remove duplicates (case-insensitive) and limit
  const uniqueSkills = Array.from(new Map(
    skills.map(s => [s.toLowerCase(), s])
  ).values());
  
  return uniqueSkills.slice(0, 25);
}

function extractSummary(text: string): string | undefined {
  const summarySection = extractSection(text, ['summary', 'objective', 'about', 'profile', 'professional summary']);
  if (!summarySection) return undefined;
  
  // Clean up the summary
  const lines = summarySection.split('\n').map(l => l.trim()).filter(l => l);
  const summary = lines.join(' ').trim();
  
  // Only return if it's a reasonable length
  if (summary.length > 20 && summary.length < 500) {
    return summary;
  }
  
  return undefined;
}

function extractExperience(text: string): Experience[] {
  const experienceSection = extractSection(text, ['experience', 'work experience', 'employment', 'professional experience']);
  if (!experienceSection) return [];
  
  const experiences: Experience[] = [];
  const lines = experienceSection.split('\n').map(l => l.trim()).filter(l => l && l.length > 2);
  
  let currentExp: Partial<Experience> | null = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Skip very short lines
    if (line.length < 5) continue;
    
    // Check if this is a company/organization line (usually has location or ends with "Remote")
    const hasLocation = /Remote$|India$|USA$|UK$|[A-Z][a-z]+,\s*[A-Z]/.test(line);
    const isCompanyLine = hasLocation && !line.startsWith('•') && !line.startsWith('-');
    
    // Check if next line is a position line (has job title and dates)
    const nextLine = lines[i + 1];
    const hasDatePattern = /\d{4}|present|current|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/i;
    const isPositionLine = nextLine && hasDatePattern.test(nextLine) && !nextLine.startsWith('•');
    
    if (isCompanyLine && isPositionLine) {
      // Save previous experience
      if (currentExp?.company && currentExp?.position) {
        experiences.push({
          company: currentExp.company,
          position: currentExp.position,
          duration: currentExp.duration || '',
          location: currentExp.location,
          description: currentExp.description || []
        });
      }
      
      // Extract company and location
      const companyParts = line.split(/[-–—]/);
      const company = companyParts[0].trim();
      const location = line.includes('Remote') ? 'Remote' : companyParts[companyParts.length - 1]?.trim();
      
      // Move to next line for position
      i++;
      const positionLine = lines[i];
      
      // Extract position and duration
      const positionParts = positionLine.split(/[-–—]/);
      let position = positionParts[0].trim();
      let duration = '';
      
      // Find the duration pattern
      const durationMatch = positionLine.match(/([A-Z][a-z]+\s+\d{4}\s*[-–—]\s*(?:[A-Z][a-z]+\s+\d{4}|Present|Current))/i);
      if (durationMatch) {
        duration = durationMatch[0];
        // Remove duration from position
        position = positionLine.replace(durationMatch[0], '').split(/[-–—]/)[0].trim();
      }
      
      currentExp = {
        company,
        position,
        duration,
        location: location !== company ? location : undefined,
        description: []
      };
    }
    // Description bullet points
    else if (currentExp && (line.startsWith('•') || line.startsWith('-') || line.startsWith('*') || line.startsWith('○'))) {
      const cleaned = line.replace(/^[•\-*○]\s*/, '').trim();
      if (cleaned.length > 10) {
        if (!currentExp.description) currentExp.description = [];
        currentExp.description.push(cleaned);
      }
    }
  }
  
  // Add last experience
  if (currentExp?.company && currentExp?.position) {
    experiences.push({
      company: currentExp.company,
      position: currentExp.position,
      duration: currentExp.duration || '',
      location: currentExp.location,
      description: currentExp.description || []
    });
  }
  
  return experiences.slice(0, 10);
}

function extractProjects(text: string): Project[] {
  const projectsSection = extractSection(text, ['projects', 'personal projects', 'portfolio', 'key projects']);
  if (!projectsSection) return [];
  
  const projects: Project[] = [];
  const lines = projectsSection.split('\n').map(l => l.trim()).filter(l => l && l.length > 2);
  
  let currentProject: Partial<Project> | null = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    const hasTechStack = line.includes('|') && !line.startsWith('•');
    const hasLink = /Live|GitHub|Demo|Link/i.test(line);
    const isProjectTitle = !line.startsWith('•') && !line.startsWith('-') && (hasTechStack || hasLink || line.length < 100);
    
    if (isProjectTitle && !line.toLowerCase().includes('skill')) {
      // Save previous project
      if (currentProject?.name && (currentProject.description || currentProject.technologies?.length)) {
        projects.push({
          name: currentProject.name,
          description: currentProject.description || '',
          technologies: currentProject.technologies || [],
          link: currentProject.link
        });
      }
      
      // Parse new project
      let projectName = line;
      let technologies: string[] = [];
      let projectLink = '';
      
      // Extract technologies from the title line (usually after |)
      if (line.includes('|')) {
        const parts = line.split('|');
        projectName = parts[0].trim();
        
        // Second part usually contains technologies
        if (parts[1]) {
          technologies = parts[1]
            .split(/[,;]/)
            .map(t => t.trim())
            .filter(t => t.length > 1 && t.length < 30 && !t.includes('http'));
        }
      }
      
      // Extract link from title line
      const linkMatch = line.match(/\b(Live|GitHub|Demo)\b/i);
      if (linkMatch) {
        projectLink = linkMatch[0];
        projectName = projectName.replace(linkMatch[0], '').trim();
      }
      
      // Remove any trailing punctuation
      projectName = projectName.replace(/[-–—|]+$/, '').trim();
      
      currentProject = {
        name: projectName,
        description: '',
        technologies: technologies,
        link: projectLink || undefined
      };
    } 
    // Description bullets
    else if (currentProject && (line.startsWith('•') || line.startsWith('-') || line.startsWith('*') || line.startsWith('○'))) {
      const cleaned = line.replace(/^[•\-*○]\s*/, '').trim();
      
      // Check if this bullet contains technologies
      const techIndicators = /technologies|tech stack|built with|using|tools|frameworks/i;
      if (techIndicators.test(cleaned)) {
        const techMatch = cleaned.match(/(?:technologies|tech stack|built with|using|tools|frameworks)[:\s]+(.*)/i);
        if (techMatch) {
          const techs = techMatch[1]
            .split(/[,;|&]/)
            .map(t => t.trim())
            .filter(t => t.length > 1 && t.length < 30);
          currentProject.technologies = [...(currentProject.technologies || []), ...techs];
        }
      } else if (cleaned.length > 15) {
        // Add to description
        currentProject.description = currentProject.description 
          ? `${currentProject.description} ${cleaned}` 
          : cleaned;
      }
      
      // Check for links in description
      const urlMatch = cleaned.match(/(https?:\/\/[^\s]+)/);
      if (urlMatch && !currentProject.link) {
        currentProject.link = urlMatch[0];
      }
      
      // Check for link keywords
      const linkKeywordMatch = cleaned.match(/\b(Live|GitHub|Demo|Documentation|Code|Video|Link)\b/i);
      if (linkKeywordMatch && !currentProject.link) {
        currentProject.link = linkKeywordMatch[0];
      }
    }
  }
  
  // Add last project
  if (currentProject?.name && (currentProject.description || currentProject.technologies?.length)) {
    projects.push({
      name: currentProject.name,
      description: currentProject.description || '',
      technologies: currentProject.technologies || [],
      link: currentProject.link
    });
  }
  
  // If no technologies found in structure, extract from description
  projects.forEach(project => {
    if (project.technologies.length === 0 && project.description) {
      const commonTech = ['React', 'Node', 'Python', 'Java', 'TypeScript', 'JavaScript', 'Go', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Next.js', 'Redis', 'Express'];
      project.technologies = commonTech.filter(tech => 
        project.description.toLowerCase().includes(tech.toLowerCase())
      );
    }
  });
  
  return projects.slice(0, 10);
}

function extractEducation(text: string): Education[] {
  const educationSection = extractSection(text, ['education', 'academic', 'qualification', 'academic background']);
  if (!educationSection) return [];
  
  const education: Education[] = [];
  const lines = educationSection.split('\n').map(l => l.trim()).filter(l => l && l.length > 3);
  
  let currentEdu: Partial<Education> | null = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Skip section headers
    if (line.toLowerCase() === 'education') continue;
    
    // Institution line: usually longer, doesn't start with bullet, may have location
    const isInstitutionLine = !line.startsWith('•') && 
                               !line.startsWith('-') && 
                               !line.startsWith('*') &&
                               line.length > 10 &&
                               !/^(bachelor|master|phd|b\.tech|m\.tech|b\.sc|m\.sc|diploma)/i.test(line);
    
    if (isInstitutionLine && !line.includes('|')) {
      // Save previous education
      if (currentEdu?.institution && currentEdu?.degree) {
        education.push({
          institution: currentEdu.institution,
          degree: currentEdu.degree,
          field: currentEdu.field,
          duration: currentEdu.duration || '',
          location: currentEdu.location,
          gpa: currentEdu.gpa
        });
      }
      
      // Parse institution name (may include location)
      let institution = line;
      
      // Remove common location indicators at end
      const locationPatterns = /[-–—,]\s*(Remote|India|USA|UK|[A-Z][a-z]+,\s*[A-Z]{2})\s*$/;
      institution = institution.replace(locationPatterns, '').trim();
      
      // Remove dates at end if present
      institution = institution.replace(/\d{4}\s*[-–—]\s*\d{4}$/, '').trim();
      institution = institution.replace(/\d{4}\s*[-–—]\s*Present$/i, '').trim();
      
      currentEdu = {
        institution,
        degree: '',
        duration: '',
        field: '',
        location: undefined,
        gpa: undefined
      };
    }
    // Degree line: usually has degree type, may have CGPA and dates
    else if (currentEdu && (
      /bachelor|master|phd|b\.tech|m\.tech|b\.sc|m\.sc|diploma|undergraduate|graduate/i.test(line) ||
      line.includes('|') ||
      /\d{4}\s*[-–—]\s*\d{4}/.test(line) ||
      /cgpa|gpa|percentage/i.test(line)
    )) {
      let degree = line;
      let gpa = '';
      let duration = '';
      
      // Extract CGPA/GPA (pattern: CGPA: 8.5 or GPA 3.8 or 85%)
      const cgpaMatch = line.match(/(?:cgpa|gpa)[:\s]*([\d.]+)|(\d+\.\d+)\s*\/\s*(\d+)|(\d+)%/i);
      if (cgpaMatch) {
        if (cgpaMatch[1]) {
          gpa = cgpaMatch[1];
        } else if (cgpaMatch[2]) {
          gpa = `${cgpaMatch[2]}/${cgpaMatch[3]}`;
        } else if (cgpaMatch[4]) {
          gpa = `${cgpaMatch[4]}%`;
        }
        // Remove CGPA from degree string
        degree = degree.replace(/\s*(?:cgpa|gpa)[:\s]*[\d.]+(?:\/[\d.]+)?/i, '').trim();
        degree = degree.replace(/\s*\d+%/, '').trim();
      }
      
      // Extract duration (pattern: 2020-2024 or Aug 2020 - May 2024)
      const durationMatch = line.match(/(\w+\s+)?\d{4}\s*[-–—]\s*(\w+\s+)?\d{4}|(\w+\s+)?\d{4}\s*[-–—]\s*Present/i);
      if (durationMatch) {
        duration = durationMatch[0];
        // Remove duration from degree string
        degree = degree.replace(durationMatch[0], '').trim();
      }
      
      // If line has | separator, split by it (common format: Degree | CGPA | Dates)
      if (degree.includes('|')) {
        const parts = degree.split('|').map(p => p.trim());
        degree = parts[0]; // First part is usually the degree
        
        // Check other parts for CGPA or duration
        parts.slice(1).forEach(part => {
          if (/cgpa|gpa|\d+\.\d+/.test(part.toLowerCase()) && !gpa) {
            gpa = part.replace(/cgpa|gpa/i, '').trim().replace(/^:\s*/, '');
          } else if (/\d{4}/.test(part) && !duration) {
            duration = part;
          }
        });
      }
      
      // Clean up degree
      degree = degree.replace(/[-–—|]+$/, '').trim();
      degree = degree.replace(/^[-–—|]+/, '').trim();
      
      if (currentEdu) {
        currentEdu.degree = degree;
        if (gpa) currentEdu.gpa = gpa;
        if (duration) currentEdu.duration = duration;
      }
    }
    // Additional info bullets (coursework, achievements, etc.)
    else if (currentEdu && (line.startsWith('•') || line.startsWith('-') || line.startsWith('*'))) {
      // We can add coursework or achievements if needed
      // For now, we'll skip these
      continue;
    }
  }
  
  // Add last education
  if (currentEdu?.institution && currentEdu?.degree) {
    education.push({
      institution: currentEdu.institution,
      degree: currentEdu.degree,
      field: currentEdu.field,
      duration: currentEdu.duration || '',
      location: currentEdu.location,
      gpa: currentEdu.gpa
    });
  }
  
  return education.slice(0, 5);
}

function extractSection(text: string, headers: string[]): string | null {
  const lines = text.split('\n');
  let sectionStart = -1;
  let sectionEnd = lines.length;
  
  // Find section start
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].toLowerCase().trim();
    if (headers.some(header => line.includes(header))) {
      sectionStart = i + 1;
      break;
    }
  }
  
  if (sectionStart === -1) return null;
  
  // Find section end (next major section)
  const commonHeaders = ['experience', 'education', 'skills', 'projects', 'certifications', 'awards'];
  for (let i = sectionStart; i < lines.length; i++) {
    const line = lines[i].toLowerCase().trim();
    if (commonHeaders.some(header => line === header || line.startsWith(header + ':'))) {
      sectionEnd = i;
      break;
    }
  }
  
  return lines.slice(sectionStart, sectionEnd).join('\n');
}

function extractDuration(text: string): string | null {
  const match = text.match(/(\w+\s+\d{4})\s*[-–—]\s*(\w+\s+\d{4}|present|current)/i);
  if (match) {
    return `${match[1]} - ${match[2]}`;
  }
  
  const yearMatch = text.match(/\d{4}\s*[-–—]\s*(\d{4}|present|current)/i);
  if (yearMatch) {
    return yearMatch[0];
  }
  
  return null;
}
