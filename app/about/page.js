'use client'

import React from 'react';
import dynamic from 'next/dynamic';
import { FaGraduationCap, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';
import './page.css';

// Load GitHubCalendar only on client-side to avoid SSR issues
const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then(mod => mod.GitHubCalendar),
  { ssr: false }
);

export default function About() {
  const educationData = [
    {
      year: '2024-2026',
      degree: 'Advanced Diploma in Computer Programmming',
      institution: 'George Brown Polytechnic',
      description: 'Studied computer programming and software engineering ',
      coursework: ['Data Structures and Algorithms' , 'System Design and Analysis', 'Machine Learning', "DevOps", 'FullStack Development'],
      location: 'Toronto, ON',
      icon: <FaGraduationCap />
    },
    {
      year: '2025 — Present',
      degree: 'Computer Science Club Member',
      institution: 'George Brown Polytechnic',
      description: 'Active member contributing to the Computer Science Club community',
      coursework: ['Organized Events', 'Club Meeting Contributions', 'Event Promotion'],
      location: 'Toronto, ON',
      icon: <FaGraduationCap />
    }
  ];

  return (
    <div className="about-page grid-bg">
      <div className="about-container container">
        <div className="about-header">
          <div className="section-label mono">/// THE NARRATIVE</div>
          <h1 className="section-title">
            ABOUT<br />
            <span className="italic-text">ME</span>
          </h1>
        </div>

        <div className="about-grid">
          <div className="about-left">
            <div className="profile-image-large accent-border">
              <div className="collection-tag mono">COLLECTION 01</div>
              <img src="/ref/Photo_3.jpeg" alt="Profile" />
            </div>
          </div>

          <div className="about-right">
            <div className="about-description">
              <p>
                I'm an aspiring software engineer currently studying at George Brown Polytechnic with experience in developing applications
                with user focused designs, although I'm capable in frontend or fullstack development, I learn towards backend development because of my 
                like towards problem-solving. I have developed applications in <strong>React</strong>, 
                <strong> Node.js</strong>,<strong>Springboot</strong> and more with proper ui and system design.
              </p>

              <p>
                I enjoy learning constantly whether it's new technology or a new hobby. Currently i'm exploring <strong>AI</strong>
                 as it is an interesting field that can contribute to the world. 
              </p>

              <blockquote className="quote">
                "Simplicity is the greatest sophistication - Da Vinci"
              </blockquote>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <div className="mono stat-label">LOCATION</div>
                <div className="stat-value"><FaMapMarkerAlt style={{marginRight: '8px', color: '#ffcc00'}} />TORONTO <span className="mono">CANADA</span></div>
              </div>
              <div className="stat-item">
                <div className="mono stat-label">AVAILABILITY</div>
                <div className="stat-value availability">
                  <span className="status-dot-green"></span> OPEN
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="github-section">
          <div className="section-label mono">/// CONTINUALLY EXPANDING KNOWLEDGE</div>
          <div className="github-icon-wrapper">
            <FaGithub className="github-icon" />
          </div>
          <h3 className="github-title">GitHub Contributions</h3>
          <p className="github-subtitle">
            Here are my contributions to projects I have worked on and collaborated on with other developers.
          </p>

          <div className="github-calendar-wrapper">
            <GitHubCalendar
              username="rONin01010101010"
              blockSize={12}
              blockMargin={4}
              fontSize={14}
              colorScheme="light"
              theme={{
                light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
              }}
            />
          </div>
        </div>

        <div className="education-section" id="education">
          <div className="education-grid-container">
            <div className="section-header">
              <h2 className="section-heading">
                EDUCATION
              </h2>
              <div className="yellow-bar"></div>
              <p className="section-subtitle">
                A curated timeline of academic milestones,<br/>
                certifications, and technical foundations.
              </p>
            </div>

            <div className="education-list">
              {educationData.map((edu, index) => (
                <div key={index} className="education-card">
                  <div className="card-header">
                    <div className="card-icon">{edu.icon}</div>
                    {edu.status && (
                      <div className="status-badge tag-accent mono">{edu.status}</div>
                    )}
                  </div>

                  <h3 className="edu-degree">{edu.degree}</h3>
                  <div className="edu-institution mono">{edu.institution}</div>

                  <p className="edu-description">{edu.description}</p>

                  <div className="edu-coursework">
                    <div className="mono coursework-label">RELEVANT COURSEWORK</div>
                    <div className="coursework-tags">
                      {edu.coursework.map((course, i) => (
                        <span key={i} className="tag tag-outline">{course}</span>
                      ))}
                    </div>
                  </div>

                  <div className="edu-meta">
                    <span className="mono">{edu.year}</span>
                    <span className="edu-location">{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
