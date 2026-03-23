'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaFigma } from 'react-icons/fa';
import './page.css';


export default function Projects() {
  const [filter, setFilter] = useState('ALL');

  const projects = [
    {
      id: 1,
      title: 'MINI_MAX Algorithm',
      category: 'AI',
      tags: ['JAVA','GIT'],
      description: 'Implemented mini-max algorithm in gomoku AI application using alpha beta prunning to make decision making faster.',
      image: '/ref/Gomoku.png',

      github: 'https://github.com/rONin01010101010/MINI_MAX',
      year: '2024',

    },

    {
      id: 2,
      title: 'Radiotherapy Care Resource Center',
      category: 'FULLSTACK',
      tags: ['REACT', 'NODE', 'EXPRESS', 'CLOUDFLARE', 'GITHUB ACTIONS'],
      description: 'This was a fullstack application for a clinic providing resources to cancer patients during treatments. ',
      image: '/ref/RCRC.png',
      link: 'https://rtcx.ca/',
      github: 'https://github.com/rONin01010101010/radiotherapy-clinic',
      year: '2024',
      status: 'LIVE'
    },
    {
      id: 3,
      title: 'Radiotherapy Late Effects Center',
      category: 'FRONTEND',
      tags: ['CLOUDFLARE', 'NEXT JS', 'VERCEL'],
      description: 'Redesigned website for clinic giving site modern and fresh ui design to improve user experience',
      image: '/ref/RLEC.png',
      link: 'https://rlec-mu.vercel.app/',
      github: 'https://github.com/rONin01010101010/RLEC',
      year: '2023',
      status: 'BETA'
    },
    {
      id: 4,
      title: 'Student Wellness Hub',
      category: 'BACKEND',
      tags: ['JAVA', 'SPRINGBOOT', 'DOCKER','REDIS','JUNIT', 'GIT'],
      description: 'Built backend application that focused on uunit testing, containerization and redis caching to improve response time. Utilized microservices and API gateways for application architecture.',
      image: '/ref/Springboot.png',

      github: 'https://github.com/rONin01010101010/Comp3095Assign01',
      year: '2025',

    },
    {
      id: 5,
      title: 'Client Consultation Website',
      category: 'FRONTEND',
      tags: ['NEXT.JS', "GIT"],
      description: 'Built client application for fitness consultation, used next js for overall proper ui/ux design. ',
      image: '/ref/Consultation.png',
      link: 'https://selucia-wellness.onrender.com/',
      github: 'https://github.com/rONin01010101010/Consultation/tree/master/selucia-wellness',
      year: '2025',
      status: 'LIVE'
    },
    {
      id: 6,
      title: 'Weather Website',
      category: 'FULLSTACK',
      tags: ['EXPRESS JS', "GIT", 'NODE JS ', 'AXIOS','REACT JS', 'RENDER'],
      description: 'Built a weather application that integrated the open weather api to pull data of weather from over 200+ cities and regions utilizing axios for api fetching and requests. ',
      image: '/ref/weather.png',
      link: 'https://one01487858-labtest2.onrender.com/',
      github: 'https://github.com/rONin01010101010/101487858_Labtest2/tree/master',
      year: '2025',
      status: 'LIVE'
    }
  ];

  const capstone = {
    title: 'SOCCER CONNECT CAPSTONE PROJECT',
    subtitle: 'Final Year Capstone',
    year: '2026',
    image: '/ref/soccer.png',
    summary: 'A fully functional capstone application built using the MERN stack utilizng best practices for real world implementation.',
    vision: 'To build a scalable, user-centric application that solves a real-world problem while demonstrating mastery of modern software engineering practices, from architecture design through to production deployment.',
    requirements: 'The system must support user authentication and authorization, provide a responsive cross-platform interface, integrate with third-party APIs, maintain 99.9% uptime.',
    projectPlan: 'The project follows an Agile methodology with two-week sprints across a 16-week timeline. Key milestones include: requirements gathering (Weeks 1–2), system design (Weeks 3–4), core development (Weeks 5–10), testing and QA (Weeks 11–13), deployment and documentation (Weeks 14–16).',
    requirementsAnalysis: 'Requirements were gathered through case studies, research and potential user surveys.',
    figmaUrl: 'https://www.figma.com/design/CiLlsmkWWiiggfPrHYuHUo/Capstone_Project_T46?t=d7R8U1ln0OgWcrYw-0',
    figmaEmbedUrl: 'https://www.figma.com/design/CiLlsmkWWiiggfPrHYuHUo/Capstone_Project_T46?node-id=0-1&p=f&t=d7R8U1ln0OgWcrYw-0',
    statusReports: [
      { date: 'Sept 2025', title: 'Project Kickoff & Requirements Gathering', status: 'COMPLETE' },
      { date: 'Sept 2025', title: ' Review & Scope Finalization', status: 'COMPLETE' },
      { date: 'Nov 2025', title: 'System Architecture & Database Design', status: 'COMPLETE' },
      { date: 'Nov 2025', title: 'UI/UX Wireframes & Prototype', status: 'COMPLETE' },
      { date: 'Jan 2025', title: 'Core Backend Development — Sprint 1', status: 'COMPLETE' },
      { date: 'Jan 2025', title: 'Frontend Development — Sprint 1', status: 'COMPLETE' },
      { date: 'Apr 2025', title: 'API Integration & Testing', status: 'IN PROGRESS' },
      { date: 'Mar 2025', title: 'Final QA, Deployment & Presentation', status: 'UPCOMING' },
    ],
    systemImplementation: 'The system was implemented using a React/Next.js frontend paired with a Node.js/Express REST API backend. MongoDB serves as the primary database and CI/CD done automatically through vercel inbuilt pipelines along with github actions.',
  };

  const categories = ['ALL', 'FULLSTACK', 'FRONTEND', 'BACKEND', 'AI', 'CAPSTONE'];

  const filteredProjects = filter === 'ALL'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="projects-page">
      <div className="projects-hero">
        <div className="container">
          <div className="hero-label mono">COLLECTION // LIBRARY</div>
          <h1 className="projects-hero-title">
            DIGITAL<br />
            LOOKBOOK
          </h1>
          <p className="projects-hero-desc">
            A comprehensive showcase documenting the evolution of projects<br />
            <br />
            Curated projects.
          </p>
        </div>
      </div>

      <div className="projects-filters">
        <div className="container">
          <div className="filter-label mono">FILTER_BY:</div>
          <div className="filter-buttons">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn mono ${filter === cat ? 'active' : ''} ${cat === 'CAPSTONE' ? 'filter-btn-capstone' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filter === 'CAPSTONE' ? (
        <div className="capstone-wrapper grid-bg">
          <div className="container">
            <div className="section-label mono">// CAPSTONE</div>

            {/* Top Row: Identity + Documentation */}
            <div className="capstone-top-row">
              {/* Left: Title + Photo */}
              <div className="capstone-card capstone-identity">
                <div className="capstone-identity-label mono">PROJECT_IDENTITY</div>
                <div className="capstone-image-wrap">
                  <img src={capstone.image} alt={capstone.title} />
                </div>
                <div className="capstone-identity-info">
                  <h2 className="capstone-title">{capstone.title}</h2>
                  <p className="capstone-subtitle mono">{capstone.subtitle} — {capstone.year}</p>
                </div>
              </div>

              {/* Right: Documentation */}
              <div className="capstone-card capstone-docs">
                <div className="capstone-docs-label mono">PROJECT_DOCUMENTATION</div>
                <div className="capstone-doc-section">
                  <div className="capstone-doc-heading mono">// PROJECT SUMMARY</div>
                  <p className="capstone-doc-text">{capstone.summary}</p>
                </div>
                <div className="capstone-doc-section">
                  <div className="capstone-doc-heading mono">// PROJECT VISION</div>
                  <p className="capstone-doc-text">{capstone.vision}</p>
                </div>
                <div className="capstone-doc-section">
                  <div className="capstone-doc-heading mono">// PROJECT / BUSINESS REQUIREMENTS</div>
                  <p className="capstone-doc-text">{capstone.requirements}</p>
                </div>
                <div className="capstone-doc-section">
                  <div className="capstone-doc-heading mono">// PROJECT PLAN</div>
                  <p className="capstone-doc-text">{capstone.projectPlan}</p>
                </div>
                <div className="capstone-doc-section">
                  <div className="capstone-doc-heading mono">// REQUIREMENTS ANALYSIS & DESIGN</div>
                  <p className="capstone-doc-text">{capstone.requirementsAnalysis}</p>
                </div>
              </div>
            </div>

            {/* Bottom Row: Figma + Status Reports + System Implementation */}
            <div className="capstone-bottom-row">
              {/* Figma Preview */}
              <a
                href={capstone.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="capstone-card capstone-figma"
                aria-label="Open Figma designs"
              >
                <div className="capstone-card-label mono">
                  <FaFigma className="capstone-label-icon" />
                  FIGMA_DESIGNS
                  <FaExternalLinkAlt className="capstone-ext-icon" />
                </div>
                <div className="capstone-figma-preview">
                  <iframe
                    src={capstone.figmaEmbedUrl}
                    allowFullScreen
                    title="Figma Design Preview"
                    className="capstone-figma-iframe"
                    onClick={(e) => e.preventDefault()}
                  />
                  <div className="capstone-figma-overlay">
                    <span className="mono">OPEN IN FIGMA →</span>
                  </div>
                </div>
              </a>

              {/* Status Reports */}
              <div className="capstone-card capstone-status">
                <div className="capstone-card-label mono">STATUS_REPORTS</div>
                <div className="capstone-reports-list">
                  {capstone.statusReports.map((report, i) => (
                    <div key={i} className="capstone-report-item">
                      <div className="capstone-report-header">
                        <span className="capstone-report-week mono">{report.week}</span>
                        <span className={`capstone-report-badge mono ${
                          report.status === 'COMPLETE' ? 'badge-complete' :
                          report.status === 'IN PROGRESS' ? 'badge-progress' : 'badge-upcoming'
                        }`}>
                          {report.status}
                        </span>
                      </div>
                      <div className="capstone-report-title">{report.title}</div>
                      <div className="capstone-report-date mono">{report.date}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Implementation */}
              <div className="capstone-card capstone-implementation">
                <div className="capstone-card-label mono">SYSTEM_IMPLEMENTATION</div>
                <p className="capstone-doc-text">{capstone.systemImplementation}</p>
                <div className="capstone-impl-tags">
                  {['REACT', 'NEXT.JS', 'NODE.JS', 'EXPRESS', 'POSTGRESQL', 'REDIS', 'DOCKER', 'GITHUB ACTIONS'].map((tag, i) => (
                    <span key={i} className="tag tag-outline">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="projects-grid-wrapper grid-bg">
          <div className="container">
            <div className="section-label mono">// KEY FEATURES</div>
            <div className="projects-grid">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="project-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="project-image">
                    <div className="project-overlay">
                      <a href={project.link} className="view-project-btn">
                        VIEW CASE →
                      </a>
                    </div>
                    <img src={project.image} alt={project.title} />
                    <div className="project-status tag mono">{project.status}</div>
                  </div>

                  <div className="project-content">
                    <div className="project-header">
                      <div className="project-meta">
                        <span className="project-category mono">{project.category}</span>
                        <span className="project-year mono">{project.year}</span>
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-btn"
                        aria-label="View on GitHub"
                      >
                        <FaGithub />
                      </a>
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <div className="project-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="tag tag-outline">{tag}</span>
                      ))}
                    </div>

                    <a href={project.link} className="project-link mono">
                      VIEW_PROJECT →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">READY TO CREATE?</h2>
            <p className="cta-subtitle mono">LET'S MAKE THE NEXT BIG RELEASE</p>
            <Link href="/contact" className="btn btn-primary">START PROJECT →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
