'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { ResumeData } from '@/lib/resume-parser';
import GradientText from '@/components/GradientText';
import BlurText from '@/components/BlurText';
import SpotlightCard from '@/components/SpotlightCard';
import ShinyText from '@/components/ShinyText';
import StarBorder from '@/components/StarBorder';
import GlitchText from '@/components/GlitchText';
import ElectricBorder from '@/components/ElectricBorder';
import FadeContent from '@/components/FadeContent';

export default function PortfolioPage() {
  const params = useParams();
  const [data, setData] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      fetch(`/api/parse-resume?id=${params.id}`)
        .then(res => res.json())
        .then(result => {
          if (result.success) {
            console.log('📊 Parsed Resume Data:', result.data);
            setData(result.data);
          }
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center space-y-4">
          <div className="text-white text-xl">Portfolio not found</div>
          <a href="/resume" className="text-blue-400 hover:text-blue-300">
            Upload a new resume
          </a>
        </div>
      </div>
    );
  }

  const hasAnySection = data.skills?.length > 0 || 
                        data.experience?.length > 0 || 
                        data.projects?.length > 0 || 
                        data.education?.length > 0;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-black to-black" />
        
        <FadeContent className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          <BlurText
            text={data.name}
            className="text-6xl md:text-8xl font-bold"
            delay={50}
          />
          
          {data.title && (
            <div className="text-2xl md:text-4xl font-semibold">
              <GlitchText>{data.title}</GlitchText>
            </div>
          )}

          {data.summary && (
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {data.summary}
            </p>
          )}

          <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
            {data.email && (
              <ElectricBorder className="px-6 py-3 bg-transparent rounded-lg transition-colors cursor-pointer">
                <a href={`mailto:${data.email}`}>Contact Me</a>
              </ElectricBorder>
            )}
            {data.github && (
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-700 hover:border-gray-500 rounded-lg transition-colors"
              >
                GitHub
              </a>
            )}
            {data.linkedin && (
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-700 hover:border-gray-500 rounded-lg transition-colors"
              >
                LinkedIn
              </a>
            )}
            {data.phone && (
              <a
                href={`tel:${data.phone}`}
                className="px-6 py-3 border border-gray-700 hover:border-gray-500 rounded-lg transition-colors"
              >
                {data.phone}
              </a>
            )}
          </div>
        </FadeContent>
      </section>

      {/* Show message if no sections were extracted */}
      {!hasAnySection && (
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-400">
              Unable to extract detailed information from your resume
            </h2>
            <p className="text-gray-500">
              The resume parser couldn't identify standard sections. 
              Try uploading a resume with clear section headers like "Experience", "Skills", "Projects", and "Education".
            </p>
            <a 
              href="/resume" 
              className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Try Another Resume
            </a>
          </div>
        </section>
      )}

      {/* Skills Section */}
      {data.skills && data.skills.length > 0 && (
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              <ShinyText text="Skills & Technologies" />
            </h2>
            
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              {data.skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-blue-600/10 border border-blue-500/30 rounded-full text-sm font-medium backdrop-blur-sm hover:bg-blue-600/20 hover:scale-105 transition-all"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {data.experience && data.experience.length > 0 && (
        <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-950 to-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <GradientText>Work Experience</GradientText>
            </h2>

            <div className="space-y-8">
              {data.experience.map((exp, index) => (
                <SpotlightCard key={index} className="p-8">
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-blue-400">
                          {exp.position}
                        </h3>
                        <h4 className="text-xl font-semibold text-gray-300 mt-1">
                          {exp.company}
                        </h4>
                      </div>
                      <div className="text-right">
                        <span className="text-gray-400 block">{exp.duration}</span>
                        {exp.location && (
                          <span className="text-gray-500 text-sm block mt-1">{exp.location}</span>
                        )}
                      </div>
                    </div>

                    {exp.description && exp.description.length > 0 && (
                      <ul className="list-disc list-inside space-y-2 text-gray-400 mt-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {data.projects && data.projects.length > 0 && (
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <ShinyText text="Featured Projects" />
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {data.projects.map((project, index) => (
                <SpotlightCard key={index} className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">
                    {project.name}
                  </h3>
                  
                  {project.description && (
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  )}

                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                      View Project →
                    </a>
                  )}
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Education Section */}
      {data.education && data.education.length > 0 && (
        <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-950 to-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <GradientText>Education</GradientText>
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              {data.education.map((edu, index) => (
                <StarBorder key={index} className="p-8">
                  <div className="space-y-3">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-blue-400">
                          {edu.institution}
                        </h3>
                        <p className="text-xl text-gray-300 mt-2">{edu.degree}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-gray-400 block">{edu.duration}</span>
                        {edu.gpa && (
                          <span className="text-gray-500 text-sm block mt-1">GPA: {edu.gpa}</span>
                        )}
                      </div>
                    </div>
                    
                    {edu.field && (
                      <p className="text-gray-400">{edu.field}</p>
                    )}
                    
                    {edu.location && (
                      <p className="text-gray-500 text-sm">{edu.location}</p>
                    )}
                  </div>
                </StarBorder>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© {new Date().getFullYear()} {data.name}. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with ❤️ using Resume to Portfolio Generator
          </p>
        </div>
      </footer>
    </div>
  );
}
