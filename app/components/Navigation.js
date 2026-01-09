'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Navigation.css';

const Navigation = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isActive = (path) => {
    return pathname === path;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setNavHidden(true);
        setMobileMenuOpen(false); // Close menu when hiding navbar
      } else {
        // Scrolling up
        setNavHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    // Only add listener on mobile devices
    if (window.innerWidth <= 1024) {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <nav className={`navigation ${navHidden ? 'nav-hidden' : ''}`}>
      <div className="nav-container">
        <Link href="/" className="logo">
          <div className="logo-icon">
            <span className="mono">{'{ }'}</span>
          </div>
          <span className="logo-text mono">PORTFOLIO</span>
        </Link>

        <div className="nav-center-glass">
          <Link
            href="/work"
            className={`nav-link mono ${isActive('/work') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            WORK
          </Link>
          <Link
            href="/experience"
            className={`nav-link mono ${isActive('/experience') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            EXPERIENCE
          </Link>
          <Link
            href="/about"
            className={`nav-link mono ${isActive('/about') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            ABOUT
          </Link>
          <Link
            href="/skills"
            className={`nav-link mono ${isActive('/skills') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            SKILLS
          </Link>
        </div>

        <div className={`nav-right ${mobileMenuOpen ? 'mobile-active' : ''}`}>
          <Link
            href="/contact"
            className={`nav-link btn-contact ${isActive('/contact') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            CONTACT
          </Link>
          <a
            href="/ref/Kenan_Dev_Resume.pdf"
            className="nav-link btn-resume"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          >
            RESUME ↗
          </a>
        </div>

        <div className={`nav-mobile-menu ${mobileMenuOpen ? 'mobile-active' : ''}`}>
          <Link
            href="/work"
            className={`nav-link mono ${isActive('/work') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            WORK
          </Link>
          <Link
            href="/experience"
            className={`nav-link mono ${isActive('/experience') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            EXPERIENCE
          </Link>
          <Link
            href="/about"
            className={`nav-link mono ${isActive('/about') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            ABOUT
          </Link>
          <Link
            href="/skills"
            className={`nav-link mono ${isActive('/skills') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            SKILLS
          </Link>
          <Link
            href="/contact"
            className={`nav-link btn-contact ${isActive('/contact') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            CONTACT
          </Link>
          <a
            href="/ref/Kenan_Dev_Resume.pdf"
            className="nav-link btn-resume"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          >
            RESUME ↗
          </a>
        </div>

        <button
          className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
