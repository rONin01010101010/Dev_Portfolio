'use client'

import React, { useState } from 'react';
import './page.css';

export default function Experience() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const experiences = [
    {
      years: '2024 — Present',
      role: 'Lab Monitor',
      company: 'George Brown Polytechnic School of Technology and Design',
      
      category: '',
      description: 'Monitor and worked with computer system experts to setup computers for exams, reported any issues with the computers and ensured proper use',
      achievements: [
        'Assisted in ensuring computer health of different devices in the computer lab',
        "Handled and assisted in setting up computers for exams, tests or lessons",
        "Assisted in scripting tasks to diagnose issues and setup new computers"
      ],
      technologies: ['POWERSHELL','LINUX','BASH SCRIPTING']
    },
    {

      years: '2025',
      role: 'Full Stack Developer',
      company: 'Radiotherapy Late Effects Clinic',
      
      category: 'FULLSTACK',
      description: 'Developed medical websites with user focused ui and functionality. Worked closely with non technical team members to understand company needs to be integrated into sites.',
      achievements: [
        'Built sites using React JS and Next js',
        'Implemented user focused ui/ux design as well as optimal backend system that is scalable'
      ],
      technologies: ['REACT JS', 'NEXT js', 'STRAPI CMS', 'CLOUDFLARE','AWS']
    }
  ];

  // Filter experiences based on active filter
  const filteredExperiences = activeFilter === 'ALL'
    ? experiences
    : experiences.filter(exp => exp.category === activeFilter);

  return (
    <div className="experience-page grid-bg">
      <div className="experience-container container">
        <div className="experience-header">
          <h1 className="experience-title">03. EXPERIENCE</h1>
          <p className="experience-subtitle">
            A timeline of professional impact, technical leadership, and<br />
            engineering excellence.
          </p>
        </div>

        <div className="filter-tabs">
          <button
            className={`filter-tab ${activeFilter === 'ALL' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ALL')}
          >
            <span className="mono">■ ALL</span>
          </button>
          <button
            className={`filter-tab ${activeFilter === 'FULLSTACK' ? 'active' : ''}`}
            onClick={() => setActiveFilter('FULLSTACK')}
          >
            <span className="mono">FULLSTACK</span>
          </button>
          <button
            className={`filter-tab ${activeFilter === 'FRONTEND' ? 'active' : ''}`}
            onClick={() => setActiveFilter('FRONTEND')}
          >
            <span className="mono">FRONTEND</span>
          </button>
          <button
            className={`filter-tab ${activeFilter === 'BACKEND' ? 'active' : ''}`}
            onClick={() => setActiveFilter('BACKEND')}
          >
            <span className="mono">BACKEND</span>
          </button>
        </div>

        <div className="timeline">
          {filteredExperiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">
                <div className="year-display">{exp.period}</div>
                <div className="year-range mono">{exp.years}</div>
              </div>

              <div className="timeline-connector">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>

              <div className="experience-card">
                <div className="card-header">
                  {exp.status && (
                    <div className="status-badge tag mono">{exp.status}</div>
                  )}
                </div>

                <div className="company-info">
                  <div className="company-icon">{exp.companyIcon}</div>
                  <div>
                    <h2 className="role-title">{exp.role}</h2>
                    <div className="company-name mono">{exp.company}</div>
                  </div>
                </div>

                <p className="experience-description">{exp.description}</p>

                <div className="achievements">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="achievement-item">
                      <span className="achievement-icon">▸</span>
                      <span className="achievement-text">{achievement}</span>
                    </div>
                  ))}
                </div>

                <div className="tech-stack">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag tag tag-outline">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-footer">
          <div className="footer-card">
            <h3 className="footer-title">VIEW MY RESUME BELOW</h3>
            <a href="/ref/Kenan_Dev_Resume.pdf" className="btn btn-primary" download>
              DOWNLOAD RESUME ↓
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
