import React, { useEffect, useState } from 'react';

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 56 56" fill="none">
        <path
          d="M28 4L47 11V25C47 37.5 39.5 46 28 52C16.5 46 9 37.5 9 25V11L28 4Z"
          fill="#77D2BD"
          stroke="#263D4B"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <rect x="15" y="20" width="26" height="17" rx="3" fill="#FFF8E9" stroke="#263D4B" strokeWidth="2.5" />
        <path d="M16 22L28 31L40 22" stroke="#263D4B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 35L24 29M39 35L32 29" stroke="#263D4B" strokeWidth="2" strokeLinecap="round" />
        <g className="brand-alert">
          <circle cx="40" cy="16" r="8" fill="#F17B62" stroke="#263D4B" strokeWidth="2" />
          <path d="M40 12.5V17" stroke="white" strokeWidth="2.3" strokeLinecap="round" />
          <circle cx="40" cy="20" r="1.2" fill="white" />
        </g>
        <path d="M10 12L11.5 15L14.5 16.5L11.5 18L10 21L8.5 18L5.5 16.5L8.5 15L10 12Z" fill="#FFD36E" stroke="#263D4B" strokeWidth="1" strokeLinejoin="round" />
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

function SkyDecorations() {
  return (
    <div className="sky-decorations" aria-hidden="true">
      <div className="floating-cloud cloud-one"><i /><i /><i /></div>
      <div className="floating-cloud cloud-two"><i /><i /><i /></div>
      <div className="floating-cloud cloud-three"><i /><i /><i /></div>
      <div className="floating-cloud cloud-four"><i /><i /><i /></div>
      <svg className="bird-flight bird-flight-one" viewBox="0 0 54 25">
        <path d="M2 17Q10 5 18 17Q26 5 34 17" />
        <path d="M25 11Q32 1 40 11Q46 5 52 9" />
      </svg>
      <svg className="bird-flight bird-flight-two" viewBox="0 0 54 25">
        <path d="M2 17Q10 5 18 17Q26 5 34 17" />
        <path d="M25 11Q32 1 40 11Q46 5 52 9" />
      </svg>
      <svg className="bird-flight bird-flight-three" viewBox="0 0 54 25">
        <path d="M2 17Q10 5 18 17Q26 5 34 17" />
        <path d="M25 11Q32 1 40 11Q46 5 52 9" />
      </svg>
      <svg className="bird-flight bird-flight-four" viewBox="0 0 54 25">
        <path d="M2 17Q10 5 18 17Q26 5 34 17" />
        <path d="M25 11Q32 1 40 11Q46 5 52 9" />
      </svg>
      <Sparkle className="ambient-star ambient-star-one" />
      <Sparkle className="ambient-star ambient-star-two" />
      <Sparkle className="ambient-star ambient-star-three" />
      <Sparkle className="ambient-star ambient-star-four" />
      <Sparkle className="ambient-star ambient-star-five" />
      <Sparkle className="ambient-star ambient-star-six" />
    </div>
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
      icon: '▤',
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

function AnnouncementRibbon() {
  return (
    <section className="announcement-ribbon" aria-label="PhishVille announcement">
      <span className="ribbon-icon" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none">
          <path d="M20 4L34 9V19C34 28 28.5 33.5 20 37C11.5 33.5 6 28 6 19V9L20 4Z" fill="#82D4C2" stroke="#263B4B" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M13 16H27V25H13V16Z" fill="#FFF8E9" stroke="#263B4B" strokeWidth="2" strokeLinejoin="round" />
          <path d="M13.5 16.5L20 21.5L26.5 16.5" stroke="#263B4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="ribbon-copy">
        <strong>THE PHISHVILLE NOTICEBOARD</strong>
        <span>A colourful new way to build your cyber-smarts is taking shape.</span>
      </span>
      <span className="ribbon-stamp">COMING TO TOWN <b>✦</b></span>
      <span className="ribbon-confetti confetti-one" aria-hidden="true">✦</span>
      <span className="ribbon-confetti confetti-two" aria-hidden="true">✳</span>
    </section>
  );
}

function IllustratedFooter({ openNotice }) {
  return (
    <footer className="site-footer">
      <div className="footer-skyline" aria-hidden="true">
        <span className="footer-building building-a" />
        <span className="footer-building building-b" />
        <span className="footer-building building-c" />
        <span className="footer-tower"><i /></span>
        <span className="footer-cloud footer-cloud-a" />
        <span className="footer-cloud footer-cloud-b" />
      </div>

      <div className="footer-main">
        <a className="brand footer-brand" href="#home" aria-label="PhishVille home">
          <BrandMark />
          <span className="brand-copy">
            <span className="brand-name">Phish<span className="brand-ville">Ville</span><i>!</i></span>
            <span className="brand-tagline">SPOT SCAMS · STAY SAFE</span>
          </span>
        </a>
        <p className="footer-description">A playful place to grow your cyber-smarts and learn to spot the tricks hiding online.</p>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#home">Home</a>
          <button type="button" onClick={() => openNotice('story')}>Story Mode</button>
          <button type="button" onClick={() => openNotice('study')}>Study Mode <span>IN DEV</span></button>
          <button type="button" onClick={() => openNotice('teacher')}>Teacher Portal</button>
        </nav>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} PHISHVILLE</span>
        <span>STAY CURIOUS. STAY CYBER-SMART. <b>✦</b></span>
      </div>
    </footer>
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
          <SkyDecorations />
          <div className="hero-doodle doodle-one" aria-hidden="true"><Sparkle /></div>
          <div className="hero-doodle doodle-two" aria-hidden="true"><Sparkle /></div>

          <header className="site-header">
            <a className="brand" href="#home" aria-label="PhishVille home" onClick={() => setMenuOpen(false)}>
              <BrandMark />
              <span className="brand-copy">
                <span className="brand-name">Phish<span className="brand-ville">Ville</span><i>!</i></span>
                <span className="brand-tagline">SPOT SCAMS · STAY SAFE</span>
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
            <h1 id="hero-title">Welcome to<br /><span className="hero-phishville"><span>Phish</span><span className="hero-ville">Ville</span></span><b className="title-period">!</b></h1>
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

      <AnnouncementRibbon />
      <IllustratedFooter openNotice={openNotice} />
      <NoticeDialog notice={notice} onClose={() => setNotice(null)} />
    </div>
  );
}
