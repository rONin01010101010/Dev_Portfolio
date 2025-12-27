'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
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
      image: '/Gomoku.png',

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
    }
  ];

  const categories = ['ALL', 'FULLSTACK', 'FRONTEND', 'BACKEND', 'AI'];

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
                className={`filter-btn mono ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

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
