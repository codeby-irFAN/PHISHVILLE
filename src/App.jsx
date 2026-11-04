import React, { useEffect, useState } from 'react';

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 52 52" fill="none">
        <path d="M7 23.5 26 8l19 15.5v19a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3v-19Z" fill="#69C7B5" stroke="#263D4B" strokeWidth="3" strokeLinejoin="round" />
        <path d="M19 45V29h14v16" fill="#FFF5D8" stroke="#263D4B" strokeWidth="3" strokeLinejoin="round" />
        <path d="m4 24 22-18 22 18" stroke="#263D4B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M35.5 14.2V8.5h6v10.6" fill="#F4B74F" stroke="#263D4B" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="15.5" cy="25.5" r="2" fill="#263D4B" />
        <circle cx="36.5" cy="25.5" r="2" fill="#263D4B" />
      </svg>
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 12h14m-5.5-5.5L18.5 12 13 17.5" />
    </svg>
  );
}

function Sparkle({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 36 36" aria-hidden="true">
      <path d="M18 2.5c2.2 8.5 5 11.3 15.5 15.5C23 22.2 20.2 25 18 33.5 15.8 25 13 22.2 2.5 18 13 13.8 15.8 11 18 2.5Z" fill="currentColor" />
    </svg>
  );
}

function NoticeDialog({ notice, onClose }) {
  useEffect(() => {
    if (!notice) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [notice, onClose]);

  if (!notice) return null;

  const content = {
    story: {
      tag: 'STORY MODE',
      title: 'Your adventure is up next!',
      body: 'We are building the streets, characters and missions of PhishVille. Story Mode will open here as soon as the playable world is ready.',
      icon: '✦',
      tone: 'coral',
    },
    study: {
      tag: 'STUDY MODE · IN DEVELOPMENT',
      title: 'A little learning zone is on its way.',
      body: 'Study Mode is still in development. We are shaping short, playful lessons to help you understand the clues you will find around PhishVille.',
      icon: '✎',
      tone: 'mint',
    },
    teacher: {
      tag: 'TEACHER PORTAL',
      title: 'The classroom corner is coming soon.',
      body: 'The Teacher Portal will offer a dedicated space for educators. It is planned for a later development stage.',
      icon: '⌂',
      tone: 'gold',
    },
  }[notice];

  return (
    <div className="dialog-backdrop" onMouseDown={onClose}>
      <section
        className={`notice-dialog notice-${content.tone}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="dialog-close" type="button" onClick={onClose} aria-label="Close dialog">×</button>
        <span className="dialog-icon" aria-hidden="true">{content.icon}</span>
        <span className="dialog-kicker">PHISHVILLE <span>·</span> {content.tag}</span>
        <h2 id="dialog-title">{content.title}</h2>
        <p>{content.body}</p>
        <button className="dialog-action" type="button" onClick={onClose}>Got it! <span>✦</span></button>
      </section>
    </div>
  );
}

export default function App() {
  const [notice, setNotice] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const openNotice = (type) => {
    setNotice(type);
    setMenuOpen(false);
  };

  return (
    <div className="site-shell" id="home">
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-wash" aria-hidden="true" />
          <div className="hero-doodle doodle-one" aria-hidden="true"><Sparkle /></div>
          <div className="hero-doodle doodle-two" aria-hidden="true"><Sparkle /></div>

          <header className="site-header">
            <a className="brand" href="#home" aria-label="PhishVille home" onClick={() => setMenuOpen(false)}>
              <BrandMark />
              <span className="brand-copy">
                <span className="brand-name">Phish<span>Ville</span><i>!</i></span>
                <span className="brand-tagline">THE CYBER ADVENTURE</span>
              </span>
            </a>

            <button
              className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
              type="button"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span /><span /><span />
            </button>

            <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
              <a className="nav-link nav-link-active" href="#home" onClick={() => setMenuOpen(false)}>
                <span className="nav-icon" aria-hidden="true">⌂</span> Home
              </a>
              <button className="nav-link" type="button" onClick={() => openNotice('story')}>
                <span className="nav-icon nav-play" aria-hidden="true">▶</span> Story Mode
              </button>
              <button className="nav-link nav-study" type="button" onClick={() => openNotice('study')}>
                <span className="nav-icon" aria-hidden="true">✎</span>
                <span>Study Mode</span>
                <span className="soon-badge">IN DEV</span>
              </button>
              <button className="nav-link" type="button" onClick={() => openNotice('teacher')}>
                <span className="nav-icon" aria-hidden="true">▤</span> Teacher Portal
              </button>
              <button className="mobile-adventure" type="button" onClick={() => openNotice('story')}>
                Enter PhishVille <ArrowIcon />
              </button>
            </nav>

            <button className="header-cta" type="button" onClick={() => openNotice('story')}>
              Enter PhishVille <ArrowIcon />
            </button>
          </header>

          <div className="hero-content">
            <div className="eyebrow"><span className="eyebrow-star">✦</span> THE CITY IS YOURS TO EXPLORE <span className="eyebrow-star">✦</span></div>
            <h1 id="hero-title">Welcome to<br /><span>PhishVille</span><b className="title-period">!</b></h1>
            <p className="hero-description">
              A colourful city. Curious characters. Hidden clues everywhere. Explore the neighbourhood and discover how to outsmart the tricks of the digital world.
            </p>
            <div className="hero-actions">
              <button className="primary-cta" type="button" onClick={() => openNotice('story')}>
                Start Story Mode <ArrowIcon />
              </button>
              <div className="hero-note">
                <span className="note-stamp" aria-hidden="true">★</span>
                <span><strong>Explore · Discover · Learn</strong><small>Your cyber adventure begins here</small></span>
              </div>
            </div>
          </div>

          <div className="quest-sticker" aria-label="Your first adventure awaits">
            <span className="sticker-sparkle" aria-hidden="true">✦</span>
            <span className="sticker-topline">NEW IN TOWN?</span>
            <strong>Your first<br />quest awaits.</strong>
            <span className="sticker-bottom">LET'S EXPLORE <span>↗</span></span>
          </div>

          <div className="hero-bottom">
            <span className="location-label"><span className="location-pin" /> PHISHVILLE CITY <span className="location-divider">/</span> EST. 2026</span>
            <span className="scroll-hint">TAKE A LOOK AROUND <span>↓</span></span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} PHISHVILLE</span>
        <span>STAY CURIOUS. STAY CYBER-SMART. <span className="footer-star">✦</span></span>
      </footer>

      <NoticeDialog notice={notice} onClose={() => setNotice(null)} />
    </div>
  );
}
