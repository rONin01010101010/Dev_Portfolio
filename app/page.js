import Link from 'next/link';
import { FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import './page.css';

export default function Home() {
  const techStack = [
    'REACT', 'NATIVE', 'NEXT_JS_14', 'TAILWIND',
    'TYPESCRIPT', 'DESIGN_SYSTEMS', 'FULL_STACK'
  ];

  return (
    <div className="home-page grid-bg">
      <div className="marquee-top">
        <div className="marquee-content">
          {Array(10).fill(['LEARNER', 'POLYMATH', 'DEVELOPER', 'CODE']).flat().map((text, i) => (
            <span key={i} className="mono">/// {text} ///</span>
          ))}
        </div>
      </div>

      <div className="home-container container">
        <div className="home-content">
          <div className="left-section">
            <div className="tag-status mono">● OPEN FOR WORK</div>

            <h1 className="hero-title">
               KENAN<br />
              <span className="outline-text">ODONGO</span>
            </h1>

            <div className="yellow-bar"></div>

            <p className="hero-description">
              I'm a software developer constantly learning whatever seems interesting and useful to me and the world. 
            </p>

            <div className="cta-buttons">
              <Link href="/work" className="btn btn-primary">
                VIEW PROJECTS →
              </Link>
              <Link href="/about" className="play-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7z" fill="currentColor"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className="right-section">
            <div className="profile-card accent-border">
              <div className="profile-image">
                <div className="profile-tag mono">VOL: 01 // 2024</div>
                <img src="/ref/Photo_1.jpeg" alt="Profile" />
              </div>

              <div className="profile-info">
                <div className="info-item">
                  <div className="info-icon"><FaMapMarkerAlt /></div>
                  <div>
                    <div className="mono info-label">TORONTO</div>
                    <div className="info-value">ONTARIO</div>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><FaBriefcase /></div>
                  <div>
                    <div className="mono info-label">SOFTWARE ENGINEER</div>
                  </div>
                </div>

                <div className="code-display">
                  <div className="code-line mono">const style = "urban";</div>
                  <div className="code-line mono">return culture();</div>
                </div>

                <div className="status-indicators">
                  <span className="status-dot active"></span>
                  <span className="status-dot active"></span>
                  <span className="status-dot active"></span>
                  <span className="status-dot"></span>
                </div>

                <div className="build-tag mono">BUILD: v3.0</div>
              </div>
            </div>
          </div>
        </div>

        <div className="tech-stack-bar">
          <div className="tech-stack-scroll">
            {techStack.map((tech, index) => (
              <span key={index} className="tech-item mono">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
