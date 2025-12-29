'use client'

import React, { useState, version } from 'react';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaFigma, FaJava, FaGithub, FaGit, FaPhp} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiPostgresql, SiGraphql, SiExpress, SiMongodb, SiCloudflare,} from 'react-icons/si';
import './page.css';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('ALL_NETWORKS');

  const skillsData = {
    frontend: [
      {
        name: 'REACT.JS',
        version: 'v18 // STABLE',
        
        icon: <FaReact />,
        category: 'REACT'
      },
      
      {
        name: 'NEXT.JS',
        version: 'v14 // APP_ROUTER',
        icon: <SiNextdotjs />,
        category: 'NEXT'
      },
      
    ],
    backend: [
      {
        name: 'NODE.JS',
        version: 'RUNTIME',
        icon: <FaNodeJs />
      },
      {
       name: 'EXPRESS JS',
       version: 'Server Side logic',
       icon: <SiExpress />
      },
      {
        name: "Java",
        version: 'Springboot framework',
        icon: <FaJava />
      },
      {
        name: 'PYTHON',
        version: 'SCRIPTING',
        icon: <FaPython />
      },
      {
        name: 'POSTGRES',
        version: 'DATABASE',
        icon: <SiPostgresql />
      },
      {
        name: 'MONGODB',
        version: 'DATABASE',
        icon: <SiMongodb />
      },
      {
        name: 'PHP',
        version: 'Laravel Framework',
        icon: <FaPhp />
      }
    ],
    tools: [
      {
        name: 'DOCKER',
        version: 'CONTAINERIZATION',
        icon: <FaDocker />
      },
      {
        name: 'GIT',
        version: 'VERSION CONTROL',
        icon: <FaGit />
      },
      {
       name: "CLOUDFLARE",
       version: "DEPLOYMENT, DNS HANDLING",
       icon: <SiCloudflare />
      },
      {
        name: 'AWS',
        version: 'CLOUD INFRASTRUCTURE',
        icon: <FaAws />
      },
      {
        name: 'Github actions',
        version: 'CI/CD deployment',
        icon: <FaGithub />
      }
    ],
    extra: ['ELOQUENT ORM', 'ASP.NET', 'REDIS', 'LARAVEL', 'PRISMA']
  };

  return (
    <div className="skills-page grid-bg">
      <div className="marquee-top">
        <div className="marquee-content">
          {Array(10).fill(['LEARNER', 'DEVELOPER', 'CODE', 'POLYMATH']).flat().map((text, i) => (
            <span key={i} className="mono">/// {text} ///</span>
          ))}
        </div>
      </div>

      <div className="skills-container container">
        <div className="skills-header">
          <div className="status-tag mono">● SYSTEM_ONLINE</div>

          <h1 className="skills-title">
            TECHNICAL<br />
            <span className="accent-text">ARSENAL</span>
          </h1>

          <div className="skills-intro">
            <p>Engineering digital experiences with precision and flair.</p>
            <p>A collection of my most potent frameworks.</p>
          </div>

          <div className="build-status">
            <span className="tag mono">BUILD: v3.0</span>
            <span className="tag tag-accent mono">STATUS: READY</span>
          </div>
        </div>

        <div className="filter-tabs">
          <button
            className={`filter-tab ${activeCategory === 'ALL_NETWORKS' ? 'active' : ''}`}
            onClick={() => setActiveCategory('ALL_NETWORKS')}
          >
            <span className="mono">■ ALL_NETWORKS</span>
          </button>
          <button
            className={`filter-tab ${activeCategory === 'FRONTEND' ? 'active' : ''}`}
            onClick={() => setActiveCategory('FRONTEND')}
          >
            <span className="mono">FRONTEND</span>
          </button>
          <button
            className={`filter-tab ${activeCategory === 'BACKEND' ? 'active' : ''}`}
            onClick={() => setActiveCategory('BACKEND')}
          >
            <span className="mono">BACKEND</span>
          </button>
          <button
            className={`filter-tab ${activeCategory === 'DEVOPS' ? 'active' : ''}`}
            onClick={() => setActiveCategory('DEVOPS')}
          >
            <span className="mono">DEVOPS</span>
          </button>
        </div>

        {(activeCategory === 'ALL_NETWORKS' || activeCategory === 'FRONTEND') && (
          <div className="skills-grid">
            <div className="skills-category">
              <div className="category-badge">01</div>
              <h2 className="category-title italic">FRONTEND</h2>
              <p className="category-desc">
                Constructing high-fidelity interfaces.<br />
                Utilizing modern component-driven<br />
                methodologies for maximum impact.
              </p>
              <div className="category-tags">
                <span className="tag">Visuals</span>
                <span className="tag tag-accent">Interactivity</span>
              </div>
            </div>

            <div className="skill-cards">
              {skillsData.frontend.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-header">
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-tag tag">{skill.category || 'REACT'}</div>
                  </div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <div className="skill-version mono">{skill.version}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {(activeCategory === 'ALL_NETWORKS' || activeCategory === 'BACKEND') && (
          <div className="skills-grid">
            <div className="skills-category">
              <div className="category-badge">02</div>
              <h2 className="category-title italic">BACKEND</h2>
              <p className="category-desc">
                Server-side logic and scalable databases.<br />
              </p>
              <div className="category-tags">
                <span className="tag">APIs</span>
                <span className="tag tag-accent">Data</span>
              </div>
            </div>

            <div className="skill-cards backend-grid">
              {skillsData.backend.map((skill, index) => (
                <div key={index} className="skill-card-small">
                  <div className="skill-icon-large">{skill.icon}</div>
                  <h3 className="skill-name-small">{skill.name}</h3>
                  <div className="skill-version-small mono">{skill.version}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeCategory === 'ALL_NETWORKS' && (
          <div className="extra-modules">
            <div className="module-header mono">─── EXTRA MODULES ───────────────────────────</div>
            <div className="module-tags">
              {skillsData.extra.map((module, index) => (
                <span key={index} className="tag tag-outline">{module}</span>
              ))}
            </div>
          </div>
        )}

        {(activeCategory === 'ALL_NETWORKS' || activeCategory === 'DEVOPS') && (
          <div className="skills-grid">
            <div className="skills-category">
              <div className="category-badge">03</div>
              <h2 className="category-title italic">LOGISTICS<br />& TOOLS</h2>
              <p className="category-desc">
                The operational backbone. CI/CD pipelines,<br />
                containerization, and design collaboration<br />
                tools.
              </p>
              <div className="category-tags">
                <span className="tag">DevOps</span>
                <span className="tag tag-accent">Design</span>
              </div>
            </div>

            <div className="skill-cards tools-grid">
              {skillsData.tools.map((skill, index) => (
                <div key={index} className="skill-card-tool">
                  <div className="tool-icon">{skill.icon}</div>
                  <h3 className="tool-name">{skill.name}</h3>
                  <div className="tool-version mono">{skill.version}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="skills-footer">
          <div className="footer-info mono">LAST SYNC: DEC 2024</div>
          <div className="footer-region mono">REGION: US-EAST-1</div>
        </div>
      </div>
    </div>
  );
}
