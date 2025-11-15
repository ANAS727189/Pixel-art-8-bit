export interface ResumeData {
  id: string;
  name: string;
  title?: string;
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
  const cleanedText = text.replace(/\n{3,}/g, '\n\n').trim();
  const lines = cleanedText.split('\n').map(line => line.trim()).filter(line => line);
  
  // Extract contact info
  const emailMatch = text.match(/[\w.-]+@[\w.-]+\.\w+/);
  const phoneMatch = text.match(/(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}|\d{10}/);
  const linkedinMatch = text.match(/(?:linkedin\.com\/in\/|linkedin:)\s*([\w-]+)/i);
  const githubMatch = text.match(/(?:github\.com\/|github:)\s*([\w-]+)/i);
  const portfolioMatch = text.match(/(https?:\/\/(?:www\.)?(?!linkedin|github)[\w-]+\.[\w]+(?:\/[\w.-]*)*)/);
  
  let name = '';
  let title = '';
  
  const sectionHeaders = [
    'education', 'experience', 'projects', 'skills', 'technical skills',
    'work experience', 'summary', 'objective', 'certifications', 'awards'
  ];
  
  for (let i = 0; i < Math.min(5, lines.length); i++) {
    const line = lines[i];
    const lowerLine = line.toLowerCase();
    
    if (sectionHeaders.some(header => lowerLine === header || lowerLine.startsWith(header + ':'))) {
      continue;
    }
    
    if (line.includes('@') || 
        (phoneMatch && line.includes(phoneMatch[0])) ||
        /linkedin|github|leetcode/.test(lowerLine)) {
      
      if (!name && line.length > 10) {
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
      
      if (!title && /engineer|developer|designer|manager|analyst|scientist|architect/i.test(line)) {
        const titleMatch = line.match(/([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*\s*\([A-Z]+\)|[A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)/);
        if (titleMatch && /engineer|developer|designer/i.test(titleMatch[0])) {
          title = titleMatch[0].split(/www\.|http|linkedin|github/i)[0].trim();
        }
      }
      continue;
    }
    
    if (line.length < 3 || line.length > 100) continue;
    if (/^\d{4}/.test(line) || /\d{4}\s*[-–—]\s*\d{4}/.test(line)) continue;
    
    if (!name) {
      name = line;
    } else if (!title && i <= 3) {
      if (!line.includes('|') && !line.includes('–') && !line.includes('—')) {
        title = line;
        break;
      }
    }
  }
  
  const summary = extractSummary(text);
  const skills = extractSkills(text);
  const experience = extractExperience(text);
  const projects = extractProjects(text);
  const education = extractEducation(text);
  
  return {
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
}

function extractSkills(text: string): string[] {
  const skillsSection = extractSection(text, ['technical skills', 'skills']);
  
  const skills: string[] = [];
  
  if (skillsSection) {
    // Skip category labels
    const lines = skillsSection.split('\n').filter(line => 
      !line.match(/^(languages|frontend|backend|devops|soft skills|ai|machine learning)[\s:]/i)
    );
    
    const cleanedSection = lines.join(' ');
    
    // Extract from colon-separated format (Languages: Go, JavaScript, ...)
    const categoryMatches = skillsSection.match(/:\s*([^\\]+?)(?=\n|$)/g);
    if (categoryMatches) {
      categoryMatches.forEach(match => {
        const content = match.replace(/^:\s*/, '');
        const extracted = content
          .split(/[,;]/)
          .map(s => s.trim())
          .filter(s => s.length > 1 && s.length < 40 && !s.includes('&'));
        skills.push(...extracted);
      });
    }
    
    // Common tech skills to look for
    const commonSkills = [
      'Go', 'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#', 'Ruby', 'Rust', 'PHP', 'Swift', 'Kotlin',
      'React', 'Vue', 'Angular', 'Next.js', 'Svelte', 'Node.js', 'Express', 'Django', 'Flask', 'FastAPI',
      'HTML', 'CSS', 'Tailwind', 'Bootstrap', 'Material-UI', 'Chakra UI', 'ShadCN',
      'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'Supabase', 'SQL',
      'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Git', 'GitHub', 'GitLab', 'Vercel',
      'REST API', 'GraphQL', 'JWT', 'Swagger', 'Microservices', 'CI/CD', 'GitHub Actions',
      'TensorFlow', 'PyTorch', 'Machine Learning', 'AI', 'Pandas', 'NumPy',
      'Fiber', 'Colly', 'Drogon', 'Bubble Tea', 'OpenAI', 'OpenRouter', 'Hugging Face',
      'Jest', 'Cypress', 'Playwright', 'Supertest',
      'Webpack', 'Vite', 'ESLint', 'CLI Development',
      'NoSQL', 'Vectara', 'Llama', 'Gemma', 'RAG',
      'Matplotlib', 'Seaborn', 'Plotly'
    ];
    
    const lowerText = cleanedSection.toLowerCase();
    
    for (const skill of commonSkills) {
      if (lowerText.includes(skill.toLowerCase()) && !skills.some(s => s.toLowerCase() === skill.toLowerCase())) {
        skills.push(skill);
      }
    }
  }
  
  const uniqueSkills = Array.from(new Map(
    skills.map(s => [s.toLowerCase(), s])
  ).values()).filter(s => s.length > 0);
  
  return uniqueSkills.slice(0, 50);
}

function extractSummary(text: string): string | undefined {
  const summarySection = extractSection(text, ['summary', 'objective', 'about', 'profile']);
  if (!summarySection) return undefined;
  
  const lines = summarySection.split('\n').map(l => l.trim()).filter(l => l);
  const summary = lines.join(' ').trim();
  
  if (summary.length > 20 && summary.length < 500) {
    return summary;
  }
  
  return undefined;
}

function extractExperience(text: string): Experience[] {
  const experienceSection = extractSection(text, ['experience', 'work experience']);
  if (!experienceSection) return [];
  
  const experiences: Experience[] = [];
  const lines = experienceSection.split('\n').map(l => l.trim()).filter(l => l);
  
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    
    // Skip empty lines and standalone bullets
    if (line.length < 3 || line === '•' || line === '-') {
      i++;
      continue;
    }
    
    // Company line: ends with location (Remote, India, etc.) or has dash with location
    const endsWithLocation = /Remote$|India$|USA$|UK$|Karnataka$|,\s*[A-Z]{2}$/i.test(line);
    const nextLine = i + 1 < lines.length ? lines[i + 1] : '';
    const nextIsPosition = /^(Software Engineer|API Engineer|Developer|Intern|Manager|Analyst|Fellow|Lead)/i.test(nextLine);
    
    if ((endsWithLocation || nextIsPosition) && !line.startsWith('•')) {
      // This is a company line
      let company = line;
      let location = '';
      
      if (line.includes('Remote')) {
        location = 'Remote';
        company = line.replace(/\s*[-–—]\s*.*Remote.*$/, '').trim();
      } else {
        const parts = line.split(/\s*[-–—]\s*/);
        if (parts.length > 1) {
          company = parts[0].trim();
          location = parts[parts.length - 1].trim();
        }
      }
      
      // Move to position line
      i++;
      if (i >= lines.length) break;
      
      const positionLine = lines[i];
      
      // Extract duration
      const durationMatch = positionLine.match(/([A-Z][a-z]{2,9}\s+\d{4})\s*[-–—]\s*([A-Z][a-z]{2,9}\s+\d{4}|Present|Current)/i);
      const duration = durationMatch ? durationMatch[0] : '';
      
      // Position is everything before the duration
      let position = positionLine;
      if (durationMatch) {
        position = positionLine.substring(0, positionLine.indexOf(durationMatch[0])).trim();
      }
      position = position.replace(/[-–—]+$/, '').trim();
      
      // Collect description bullets
      const description: string[] = [];
      i++;
      
      while (i < lines.length) {
        const descLine = lines[i];
        
        // Check if this is start of next experience (another company line)
        const isNextCompany = /Remote$|India$|USA$/i.test(descLine) && 
                              i + 1 < lines.length &&
                              /^(Software Engineer|API Engineer|Developer)/i.test(lines[i + 1]);
        
        if (isNextCompany) break;
        
        // Bullet point handling
        if (descLine === '•' || descLine === '-') {
          i++;
          if (i < lines.length && lines[i] !== '•') {
            description.push(lines[i]);
          }
        } else if (descLine.startsWith('•')) {
          const content = descLine.substring(1).trim();
          if (content) description.push(content);
        } else if (description.length > 0 && descLine.length > 20) {
          // Continuation of previous bullet
          description[description.length - 1] += ' ' + descLine;
        } else {
          // Might be start of next section or company
          break;
        }
        
        i++;
      }
      
      experiences.push({
        company,
        position,
        duration,
        location: location || undefined,
        description
      });
      
      continue;
    }
    
    i++;
  }
  
  return experiences.slice(0, 10);
}

function extractProjects(text: string): Project[] {
  const projectsSection = extractSection(text, ['projects', 'personal projects']);
  if (!projectsSection) return [];
  
  const projects: Project[] = [];
  const lines = projectsSection.split('\n').map(l => l.trim()).filter(l => l);
  
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    
    if (line.length < 3 || line === '•' || line === '-') {
      i++;
      continue;
    }
    
    // Project title line: has pipe separator with technologies
    // Format: "ProjectName|Go,Tech1,Tech2Live" or "ProjectName|TechGitHub"
    const hasPipe = line.includes('|');
    const notBullet = !line.startsWith('•') && !line.startsWith('-');
    
    // Also check if it looks like a project based on certain keywords in title
    const hasProjectKeywords = /(Winner|Gallery|Tool|API|App|System|Platform)/i.test(line);
    
    if (hasPipe && notBullet) {
      // This is a project title line
      const parts = line.split('|');
      const projectName = parts[0].trim();
      
      let technologies: string[] = [];
      let projectLink = '';
      
      // Second part contains technologies and possibly link
      if (parts.length > 1) {
        const techPart = parts[1];
        
        // Extract link keywords (Live, GitHub, Demo, etc.) - they appear at the end
        const linkMatch = techPart.match(/(Live|GitHub|Demo|Link|Code|Video|Documentation)$/i);
        if (linkMatch) {
          projectLink = linkMatch[0];
        }
        
        // Everything before the link is technologies (comma-separated)
        let techString = techPart;
        if (linkMatch) {
          techString = techPart.substring(0, techPart.lastIndexOf(linkMatch[0]));
        }
        
        technologies = techString
          .split(',')
          .map(t => t.trim())
          .filter(t => t.length > 0 && t.length < 35);
      }
      
      // Collect description bullets
      const descriptionParts: string[] = [];
      i++;
      
      while (i < lines.length) {
        const descLine = lines[i];
        
        // Check if this is the next project title
        const isNextProject = descLine.includes('|') && !descLine.startsWith('•');
        if (isNextProject) break;
        
        // Bullet handling
        if (descLine === '•' || descLine === '-') {
          i++;
          if (i < lines.length && lines[i] !== '•') {
            descriptionParts.push(lines[i]);
          }
        } else if (descLine.startsWith('•')) {
          const content = descLine.substring(1).trim();
          if (content) descriptionParts.push(content);
        } else if (descriptionParts.length > 0 && descLine.length > 20 && !descLine.includes('|')) {
          // Continuation of previous bullet
          descriptionParts[descriptionParts.length - 1] += ' ' + descLine;
        } else {
          // Might be next section
          break;
        }
        
        i++;
      }
      
      projects.push({
        name: projectName,
        description: descriptionParts.join(' '),
        technologies,
        link: projectLink || undefined
      });
      
      continue;
    }
    
    i++;
  }
  
  return projects.slice(0, 15);
}

function extractEducation(text: string): Education[] {
  const educationSection = extractSection(text, ['education', 'academic background']);
  if (!educationSection) return [];
  
  const education: Education[] = [];
  const lines = educationSection.split('\n').map(l => l.trim()).filter(l => l && l.length > 3);
  
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    
    // Institution line: long line with location at end
    const hasLocation = /,\s*[A-Z][a-z]+(?:\s+[A-Z][a-z]+)?,\s*[A-Z][a-z]+$/i.test(line);
    const isLongEnough = line.length > 20;
    const notDegree = !/^B\.Tech|^M\.Tech|^Bachelor|^Master/i.test(line);
    
    if (hasLocation && isLongEnough && notDegree) {
      // Extract institution and location
      const locationMatch = line.match(/,\s*([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?,\s*[A-Z][a-z]+)$/i);
      const location = locationMatch ? locationMatch[1] : '';
      const institution = line.replace(locationMatch?.[0] || '', '').trim();
      
      // Next line should be degree info
      i++;
      if (i >= lines.length) break;
      
      const degreeLine = lines[i];
      
      // Format: "B.Tech in Computer Science and Engineering|8.2 CGPAAugust 2023 – July 2027"
      let degree = degreeLine;
      let gpa = '';
      let duration = '';
      
      // Extract GPA
      const gpaMatch = degreeLine.match(/(\d+\.\d+)\s*CGPA/i);
      if (gpaMatch) {
        gpa = gpaMatch[1];
      }
      
      // Extract duration
      const durationMatch = degreeLine.match(/([A-Z][a-z]{2,9}\s+\d{4})\s*[-–—]\s*([A-Z][a-z]{2,9}\s+\d{4})/i);
      if (durationMatch) {
        duration = durationMatch[0];
      }
      
      // Clean degree string
      if (degreeLine.includes('|')) {
        const parts = degreeLine.split('|');
        degree = parts[0].trim();
      } else {
        degree = degreeLine.split(/\d+\.\d+/)[0].trim();
      }
      
      education.push({
        institution,
        degree,
        field: '',
        duration,
        location,
        gpa
      });
      
      i++;
      continue;
    }
    
    i++;
  }
  
  return education.slice(0, 5);
}

function extractSection(text: string, headers: string[]): string | null {
  const lines = text.split('\n');
  let sectionStart = -1;
  let sectionEnd = lines.length;
  
  // Find exact section match
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim().toLowerCase();
    
    for (const header of headers) {
      if (line === header || line === header + ':') {
        sectionStart = i + 1;
        break;
      }
    }
    
    if (sectionStart !== -1) break;
  }
  
  if (sectionStart === -1) return null;
  
  // Find section end
  const allHeaders = [
    'experience', 'work experience',
    'education', 'academic background',
    'skills', 'technical skills',
    'projects', 'personal projects',
    'certifications', 'achievements', 'awards'
  ];
  
  for (let i = sectionStart; i < lines.length; i++) {
    const line = lines[i].trim().toLowerCase();
    
    for (const header of allHeaders) {
      if (line === header || line === header + ':') {
        sectionEnd = i;
        break;
      }
    }
    
    if (sectionEnd !== lines.length) break;
  }
  
  const section = lines.slice(sectionStart, sectionEnd).join('\n');
  return section.length > 0 ? section : null;
}