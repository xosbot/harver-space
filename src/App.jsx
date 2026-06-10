import { useState, useEffect, useRef } from "react";

// ─── FONTS ───────────────────────────────────────────────────────────────────
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Share+Tech+Mono&family=Barlow+Condensed:wght@300;400;500;600;700&family=Barlow:wght@300;400&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --black:   #04060F;
      --deep:    #080C1A;
      --panel:   #0B1022;
      --border:  rgba(0,212,255,0.15);
      --cyan:    #00D4FF;
      --cyan2:   #00A8CC;
      --gold:    #C9A84C;
      --white:   #F0F4FF;
      --muted:   #6B7FA3;
      --danger:  #FF4444;
      --success: #00FF88;
      --font-display: 'Syncopate', sans-serif;
      --font-mono:    'Share Tech Mono', monospace;
      --font-body:    'Barlow Condensed', sans-serif;
      --font-light:   'Barlow', sans-serif;
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--black);
      color: var(--white);
      font-family: var(--font-body);
    }

    ::selection { background: var(--cyan); color: var(--black); }

    :focus-visible {
      outline: 2px solid var(--cyan);
      outline-offset: 3px;
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }

    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: var(--black); }
    ::-webkit-scrollbar-thumb { background: var(--cyan2); }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(40px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; } to { opacity: 1; }
    }
    @keyframes scanline {
      0%   { transform: translateY(-100%); }
      100% { transform: translateY(100vh); }
    }
    @keyframes pulse-border {
      0%, 100% { border-color: rgba(0,212,255,0.15); }
      50%       { border-color: rgba(0,212,255,0.5); }
    }
    @keyframes ticker {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes blink {
      0%, 100% { opacity: 1; } 50% { opacity: 0; }
    }
    @keyframes glow {
      0%, 100% { box-shadow: 0 0 20px rgba(0,212,255,0.3); }
      50%       { box-shadow: 0 0 40px rgba(0,212,255,0.6); }
    }
    @keyframes rotate-slow {
      from { transform: rotate(0deg); } to { transform: rotate(360deg); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(-8px); }
    }
    @keyframes counter-up {
      from { opacity: 0; transform: translateY(10px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes shimmer {
      0%   { background-position: -200% center; }
      100% { background-position:  200% center; }
    }
    @keyframes ping-slow {
      0% { transform: scale(1); opacity: 0.8; }
      100% { transform: scale(2.5); opacity: 0; }
    }

    .reveal {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .reveal-delay-1 { transition-delay: 0.1s; }
    .reveal-delay-2 { transition-delay: 0.2s; }
    .reveal-delay-3 { transition-delay: 0.3s; }
    .reveal-delay-4 { transition-delay: 0.4s; }
    .reveal-delay-5 { transition-delay: 0.5s; }

    .scanline-overlay {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 4px;
      background: linear-gradient(transparent, rgba(0,212,255,0.04), transparent);
      animation: scanline 8s linear infinite;
      pointer-events: none;
      z-index: 9999;
    }

    .noise-overlay {
      position: fixed;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E");
      pointer-events: none;
      z-index: 9998;
      opacity: 0.4;
    }

    .grid-bg {
      background-image:
        linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px);
      background-size: 60px 60px;
    }

    .cyan-text {
      color: var(--cyan);
    }
    .gold-text {
      color: var(--gold);
    }
    .muted-text {
      color: var(--muted);
    }

    .section-label {
      font-family: var(--font-mono);
      font-size: 11px;
      letter-spacing: 0.3em;
      color: var(--cyan);
      text-transform: uppercase;
      margin-bottom: 16px;
    }

    .section-label::before {
      content: '// ';
      color: var(--muted);
    }

    .display-title {
      font-family: var(--font-display);
      font-weight: 700;
      letter-spacing: 0.05em;
      line-height: 1.1;
    }

    .mono-data {
      font-family: var(--font-mono);
    }

    .panel-card {
      background: var(--panel);
      border: 1px solid var(--border);
      position: relative;
      overflow: hidden;
    }

    .panel-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0;
      right: 0; height: 1px;
      background: linear-gradient(90deg, transparent, var(--cyan), transparent);
      opacity: 0.6;
    }

    .btn-primary {
      font-family: var(--font-mono);
      font-size: 12px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      background: var(--cyan);
      color: var(--black);
      border: none;
      padding: 14px 32px;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.2s;
      position: relative;
      overflow: hidden;
    }

    .btn-primary:hover {
      background: white;
      transform: translateY(-1px);
      box-shadow: 0 8px 30px rgba(0,212,255,0.4);
    }

    .btn-outline {
      font-family: var(--font-mono);
      font-size: 12px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      background: transparent;
      color: var(--cyan);
      border: 1px solid var(--cyan);
      padding: 13px 32px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .btn-outline:hover {
      background: rgba(0,212,255,0.1);
      transform: translateY(-1px);
    }

    .corner-bracket {
      position: absolute;
      width: 16px; height: 16px;
    }
    .corner-bracket.tl { top: 0; left: 0; border-top: 2px solid var(--cyan); border-left: 2px solid var(--cyan); }
    .corner-bracket.tr { top: 0; right: 0; border-top: 2px solid var(--cyan); border-right: 2px solid var(--cyan); }
    .corner-bracket.bl { bottom: 0; left: 0; border-bottom: 2px solid var(--cyan); border-left: 2px solid var(--cyan); }
    .corner-bracket.br { bottom: 0; right: 0; border-bottom: 2px solid var(--cyan); border-right: 2px solid var(--cyan); }

    .nav-link {
      font-family: var(--font-mono);
      font-size: 11px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--muted);
      text-decoration: none;
      transition: color 0.2s;
      cursor: pointer;
    }
    .nav-link:hover { color: var(--white); }

    .stat-number {
      font-family: var(--font-display);
      font-size: clamp(2.5rem, 6vw, 5rem);
      font-weight: 700;
      color: var(--cyan);
      line-height: 1;
    }

    .timeline-dot {
      width: 12px; height: 12px;
      border-radius: 50%;
      background: var(--cyan);
      position: relative;
      flex-shrink: 0;
    }

    .timeline-dot::after {
      content: '';
      position: absolute;
      inset: -4px;
      border-radius: 50%;
      border: 1px solid var(--cyan);
      animation: ping-slow 2s ease-out infinite;
    }

    .status-dot {
      width: 8px; height: 8px;
      border-radius: 50%;
      background: var(--success);
      display: inline-block;
      margin-right: 8px;
      animation: blink 2s ease-in-out infinite;
    }

    .shimmer-text {
      background: linear-gradient(90deg, var(--white) 25%, var(--cyan) 50%, var(--white) 75%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 4s linear infinite;
    }

    @media (max-width: 768px) {
      .hide-mobile { display: none !important; }
      .full-mobile { width: 100% !important; }
    }
  `}</style>
);

// ─── ORBITAL CANVAS ───────────────────────────────────────────────────────────
const OrbitalCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let W, H;

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Orbital rings
    const rings = [
      { radius: 0.18, speed: 0.0003, color: "rgba(0,212,255,0.12)", dots: 8 },
      { radius: 0.26, speed: 0.0002, color: "rgba(0,212,255,0.08)", dots: 14 },
      { radius: 0.35, speed: 0.00015, color: "rgba(0,168,204,0.06)", dots: 20 },
      { radius: 0.44, speed: 0.0001, color: "rgba(0,212,255,0.05)", dots: 28 },
      { radius: 0.52, speed: 0.00007, color: "rgba(201,168,76,0.08)", dots: 18 },
    ];

    // Debris particles (background field)
    const debris = Array.from({ length: 280 }, () => ({
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
      size: Math.random() * 1.5 + 0.3,
      speed: Math.random() * 0.00005 + 0.00001,
      angle: Math.random() * Math.PI * 2,
      alpha: Math.random() * 0.4 + 0.1,
      orbit: Math.random() * 0.55 + 0.05,
      color: Math.random() > 0.85 ? "201,168,76" : "0,212,255",
    }));

    let t = 0;
    const cx = () => W / 2;
    const cy = () => H / 2;
    const scale = () => Math.min(W, H);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Earth glow
      const earthGlow = ctx.createRadialGradient(cx(), cy(), 0, cx(), cy(), scale() * 0.14);
      earthGlow.addColorStop(0, "rgba(0,50,100,0.9)");
      earthGlow.addColorStop(0.6, "rgba(0,20,60,0.5)");
      earthGlow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = earthGlow;
      ctx.beginPath();
      ctx.arc(cx(), cy(), scale() * 0.14, 0, Math.PI * 2);
      ctx.fill();

      // Earth core
      const earthCore = ctx.createRadialGradient(cx() - scale()*0.03, cy() - scale()*0.03, 0, cx(), cy(), scale() * 0.09);
      earthCore.addColorStop(0, "rgba(20,80,180,0.95)");
      earthCore.addColorStop(0.5, "rgba(10,50,120,0.9)");
      earthCore.addColorStop(1, "rgba(0,20,80,0.8)");
      ctx.fillStyle = earthCore;
      ctx.beginPath();
      ctx.arc(cx(), cy(), scale() * 0.09, 0, Math.PI * 2);
      ctx.fill();

      // Atmosphere
      const atmo = ctx.createRadialGradient(cx(), cy(), scale()*0.09, cx(), cy(), scale()*0.11);
      atmo.addColorStop(0, "rgba(0,150,255,0.2)");
      atmo.addColorStop(1, "rgba(0,150,255,0)");
      ctx.fillStyle = atmo;
      ctx.beginPath();
      ctx.arc(cx(), cy(), scale() * 0.11, 0, Math.PI * 2);
      ctx.fill();

      // Orbital rings + debris dots
      rings.forEach((ring, ri) => {
        const r = ring.radius * scale();
        ctx.strokeStyle = ring.color;
        ctx.lineWidth = 0.5;
        ctx.setLineDash([4, 8]);
        ctx.beginPath();
        ctx.arc(cx(), cy(), r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        for (let i = 0; i < ring.dots; i++) {
          const angle = (i / ring.dots) * Math.PI * 2 + t * ring.speed * 1000 * (ri % 2 === 0 ? 1 : -0.7);
          const dx = cx() + Math.cos(angle) * r;
          const dy = cy() + Math.sin(angle) * r * 0.38; // elliptical perspective
          const alpha = 0.3 + Math.sin(t * 0.002 + i) * 0.2;
          ctx.fillStyle = ri === 4 ? `rgba(201,168,76,${alpha})` : `rgba(0,212,255,${alpha})`;
          ctx.beginPath();
          ctx.arc(dx, dy, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Background debris field
      debris.forEach((d) => {
        const r = d.orbit * scale();
        d.angle += d.speed * (d.orbit > 0.35 ? -0.6 : 1);
        const dx = cx() + Math.cos(d.angle) * r;
        const dy = cy() + Math.sin(d.angle) * r * 0.4;
        const alpha = d.alpha * (0.6 + Math.sin(t * 0.001 + d.angle) * 0.4);
        ctx.fillStyle = `rgba(${d.color},${alpha})`;
        ctx.beginPath();
        ctx.arc(dx, dy, d.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Collision flash occasionally
      if (Math.random() < 0.001) {
        const flashR = (0.2 + Math.random() * 0.3) * scale();
        const flashAngle = Math.random() * Math.PI * 2;
        const fx = cx() + Math.cos(flashAngle) * flashR;
        const fy = cy() + Math.sin(flashAngle) * flashR * 0.4;
        const flash = ctx.createRadialGradient(fx, fy, 0, fx, fy, 20);
        flash.addColorStop(0, "rgba(255,200,0,0.9)");
        flash.addColorStop(1, "rgba(255,100,0,0)");
        ctx.fillStyle = flash;
        ctx.beginPath();
        ctx.arc(fx, fy, 20, 0, Math.PI * 2);
        ctx.fill();
      }

      t++;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
      }}
    />
  );
};

// ─── ANIMATED COUNTER ─────────────────────────────────────────────────────────
const Counter = ({ target, suffix = "", prefix = "" }) => {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const startTime = performance.now();
        const tick = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setVal(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}{val.toLocaleString()}{suffix}
    </span>
  );
};

// ─── REVEAL HOOK ──────────────────────────────────────────────────────────────
const useReveal = () => {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    }, { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
};

// ─── NAV ─────────────────────────────────────────────────────────────────────
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      padding: "0 40px",
      height: "64px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: scrolled ? "rgba(4,6,15,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "none",
      transition: "all 0.4s ease",
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{
          width: "32px", height: "32px",
          border: "2px solid var(--cyan)",
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative",
        }}>
          <div style={{
            width: "12px", height: "12px",
            background: "var(--cyan)",
            animation: "rotate-slow 8s linear infinite",
          }} />
        </div>
        <span style={{
          fontFamily: "var(--font-display)",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.25em",
          color: "var(--white)",
        }}>HSI</span>
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--muted)",
          letterSpacing: "0.15em",
        }}>HARVER SPACE INDUSTRIES</span>
      </div>

      {/* Desktop Nav */}
      <div className="hide-mobile" style={{ display: "flex", gap: "32px", alignItems: "center" }}>
        {[
          ["mission", "Mission"],
          ["technology", "Technology"],
          ["legal", "Legal"],
          ["roadmap", "Roadmap"],
          ["market", "Market"],
        ].map(([id, label]) => (
          <span key={id} className="nav-link" onClick={() => scrollTo(id)}>{label}</span>
        ))}
        <button className="btn-primary" style={{ padding: "8px 20px", fontSize: "10px" }}
          onClick={() => scrollTo("contact")}>
          Partner With Us
        </button>
      </div>

      {/* Mobile Menu */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          color: "var(--cyan)",
          fontSize: "20px",
          cursor: "pointer",
          fontFamily: "var(--font-mono)",
        }}
        className="show-mobile"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <style>{`
        @media (max-width: 768px) {
          nav .hide-mobile { display: none !important; }
          nav .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

// ─── DATA TICKER ──────────────────────────────────────────────────────────────
const DataTicker = () => {
  const items = [
    "TRACKED OBJECTS IN ORBIT: 35,000+",
    "PROJECTED MARKET BY 2035: $15.3 BILLION",
    "SUB-CM FRAGMENTS: 140 MILLION+",
    "ECONOMIC RISK NEXT DECADE: $42.3 BILLION",
    "ACTIVE REMOVAL CAGR: 25%",
    "ESA ADR CONTRACT BENCHMARK: €86M",
    "LEO DEBRIS ≥10CM: 54,000 OBJECTS",
    "COMMERCIAL ADR MISSIONS COMPLETED: 0",
  ];
  const full = [...items, ...items];

  return (
    <div style={{
      position: "absolute",
      bottom: 0, left: 0, right: 0,
      height: "40px",
      background: "rgba(0,212,255,0.06)",
      borderTop: "1px solid var(--border)",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
    }}>
      <div style={{
        display: "flex",
        gap: "0",
        whiteSpace: "nowrap",
        animation: "ticker 60s linear infinite",
        willChange: "transform",
      }}>
        {full.map((item, i) => (
          <span key={i} style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--cyan)",
            padding: "0 40px",
            letterSpacing: "0.12em",
            borderRight: "1px solid var(--border)",
          }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

// ─── HERO ─────────────────────────────────────────────────────────────────────
const Hero = () => (
  <section id="hero" style={{
    position: "relative",
    height: "100vh",
    minHeight: "700px",
    overflow: "hidden",
    background: "var(--black)",
    display: "flex",
    alignItems: "center",
  }}>
    <OrbitalCanvas />

    {/* Overlay gradient */}
    <div style={{
      position: "absolute", inset: 0,
      background: "linear-gradient(135deg, rgba(4,6,15,0.85) 0%, rgba(4,6,15,0.4) 50%, rgba(4,6,15,0.7) 100%)",
    }} />

    {/* Grid */}
    <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />

    {/* Content */}
    <div style={{
      position: "relative", zIndex: 10,
      maxWidth: "900px",
      padding: "0 40px",
      marginLeft: "calc(50% - 450px)",
      animation: "fadeUp 1s ease 0.3s both",
    }}>
      {/* Status badge */}
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        background: "rgba(0,255,136,0.08)",
        border: "1px solid rgba(0,255,136,0.2)",
        padding: "6px 16px",
        marginBottom: "32px",
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "0.2em",
        color: "var(--success)",
      }}>
        <span className="status-dot" />
        PHASE III OPERATIONS — DEBRIS REMOVAL INITIATIVE ACTIVE
      </div>

      {/* Main headline */}
      <h1 className="display-title" style={{
        fontSize: "clamp(2.5rem, 7vw, 6rem)",
        color: "var(--white)",
        marginBottom: "8px",
        lineHeight: 1.05,
      }}>
        WE REMOVE WHAT
      </h1>
      <h1 className="display-title shimmer-text" style={{
        fontSize: "clamp(2.5rem, 7vw, 6rem)",
        marginBottom: "32px",
        lineHeight: 1.05,
      }}>
        HUMANITY LEFT BEHIND
      </h1>

      {/* Subheadline */}
      <p style={{
        fontFamily: "var(--font-light)",
        fontSize: "clamp(1rem, 2vw, 1.25rem)",
        color: "rgba(240,244,255,0.65)",
        maxWidth: "620px",
        lineHeight: 1.7,
        marginBottom: "48px",
        fontWeight: 300,
      }}>
        Harver Space Industries operates at the intersection of sovereign law,
        precision engineering, and orbital stewardship. The debris problem is
        civilizational. The solution is us.
      </p>

      {/* CTAs */}
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <button className="btn-primary" onClick={() => document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" })}>
          Explore the Mission
        </button>
        <button className="btn-outline" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
          Partner With Us
        </button>
      </div>

      {/* Coordinates */}
      <div style={{
        marginTop: "64px",
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        color: "var(--muted)",
        letterSpacing: "0.15em",
        display: "flex",
        gap: "32px",
        flexWrap: "wrap",
      }}>
        <span>LEO OPERATIONS: 400–800 KM ALTITUDE</span>
        <span>|</span>
        <span>CLEARANCE: FAA/AST · ESA · JAXA · UAE</span>
        <span>|</span>
        <span>PHASE: III — ACTIVE</span>
      </div>
    </div>

    {/* Vertical label */}
    <div style={{
      position: "absolute",
      right: "40px",
      top: "50%",
      transform: "translateY(-50%) rotate(90deg)",
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      color: "var(--muted)",
      letterSpacing: "0.3em",
      textTransform: "uppercase",
    }}>
      HARVER — DEBRIS — REMOVAL — T25
    </div>

    <DataTicker />
  </section>
);

// ─── PROBLEM SECTION ──────────────────────────────────────────────────────────
const Problem = () => (
  <section id="mission" style={{
    padding: "120px 40px",
    background: "var(--deep)",
    position: "relative",
    overflow: "hidden",
  }}>
    {/* Background accent */}
    <div style={{
      position: "absolute",
      top: "-200px", right: "-200px",
      width: "600px", height: "600px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)",
      pointerEvents: "none",
    }} />

    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div className="reveal">
        <div className="section-label">THE PROBLEM</div>
        <h2 className="display-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "16px" }}>
          ORBIT IS FILLING UP.<br />
          <span style={{ color: "var(--cyan)" }}>NO ONE IS CLEANING IT.</span>
        </h2>
        <p style={{
          fontFamily: "var(--font-light)",
          fontSize: "1.1rem",
          color: "rgba(240,244,255,0.6)",
          maxWidth: "600px",
          lineHeight: 1.8,
          marginBottom: "80px",
          fontWeight: 300,
        }}>
          Every defunct satellite and rocket stage remains the sovereign property of its
          launching nation — permanently. No maritime salvage doctrine applies in space.
          The result: a global commons becoming a debris minefield with no legal path to cleanup.
        </p>
      </div>

      {/* Stat Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2px" }}>
        {[
          {
            number: 54000,
            suffix: "+",
            label: "Objects ≥10cm in Earth orbit",
            sub: "ESA Space Environment Report 2024",
            color: "var(--cyan)",
            delay: "reveal-delay-1",
          },
          {
            number: 42,
            prefix: "$",
            suffix: "B",
            label: "Industry cost over next decade",
            sub: "If debris crisis goes unaddressed",
            color: "var(--danger)",
            delay: "reveal-delay-2",
          },
          {
            number: 0,
            suffix: "",
            label: "Commercial cross-border removals",
            sub: "No operator has legally done this. Yet.",
            color: "var(--gold)",
            delay: "reveal-delay-3",
          },
        ].map((stat, i) => (
          <div key={i} className={`panel-card reveal ${stat.delay}`} style={{ padding: "48px 40px" }}>
            <div className="corner-bracket tl" />
            <div className="corner-bracket br" />
            <div className="stat-number" style={{ color: stat.color, marginBottom: "16px" }}>
              <Counter target={stat.number} prefix={stat.prefix || ""} suffix={stat.suffix} />
            </div>
            <div style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "var(--white)",
              marginBottom: "8px",
              letterSpacing: "0.05em",
            }}>
              {stat.label}
            </div>
            <div className="mono-data" style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.1em" }}>
              {stat.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Extended problem text */}
      <div className="panel-card reveal" style={{ marginTop: "2px", padding: "48px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 600, letterSpacing: "0.15em", color: "var(--cyan)", marginBottom: "20px", textTransform: "uppercase" }}>
              The Sovereignty Paradox
            </h3>
            <p style={{ fontFamily: "var(--font-light)", fontSize: "1rem", color: "rgba(240,244,255,0.65)", lineHeight: 1.8, fontWeight: 300 }}>
              Under Article VIII of the Outer Space Treaty of 1967, jurisdiction and control
              over a space object remain with the State of Registry — indefinitely. Unlike
              maritime law, a satellite cannot be declared abandoned. It remains property even
              when defunct, tumbling, or shattered into fragments.
            </p>
          </div>
          <div>
            <h3 style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 600, letterSpacing: "0.15em", color: "var(--gold)", marginBottom: "20px", textTransform: "uppercase" }}>
              The Economic Reality
            </h3>
            <p style={{ fontFamily: "var(--font-light)", fontSize: "1rem", color: "rgba(240,244,255,0.65)", lineHeight: 1.8, fontWeight: 300 }}>
              Debris-related costs already exceed $100M annually in collision avoidance,
              shielding, and insurance. ESA and OECD estimate 5–10% of total mission cost
              is debris-driven. As constellations scale to tens of thousands of satellites,
              this becomes a multi-billion dollar structural tax on the entire space economy.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── SOLUTION SECTION ─────────────────────────────────────────────────────────
const Solution = () => (
  <section style={{ padding: "120px 40px", background: "var(--black)" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div className="reveal">
        <div className="section-label">OUR SOLUTION</div>
        <h2 className="display-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "64px" }}>
          THREE SYSTEMS.<br />
          <span className="cyan-text">ONE MISSION.</span>
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2px" }}>
        {[
          {
            num: "01",
            title: "Legal Architecture",
            subtitle: "Bilateral Transfer of Liability",
            body: "HSI has pioneered the BTL agreement framework — making us a licensed sovereign agent for partner nations. This is the legal moat no competitor has built. We have pre-clearance with the US (FAA/AST), ESA member states, JAXA, and the UAE Space Agency.",
            tag: "LEGAL MOAT",
            color: "var(--gold)",
            delay: "reveal-delay-1",
          },
          {
            num: "02",
            title: "Capture Technology",
            subtitle: "Harver-Claw Mark III",
            body: "A three-phase uncooperative capture system: LiDAR synchronization, magnetic eddy-current de-tumbling, and four-arm mechanical embrace. Maximum capture mass: 12,000 kg. Operates at -150°C. Designed for the toughest orbital conditions.",
            tag: "PROPRIETARY R&D",
            color: "var(--cyan)",
            delay: "reveal-delay-2",
          },
          {
            num: "03",
            title: "Operations Platform",
            subtitle: "SV-1 Vessel + Constellation",
            body: "Our SV-1 servicing vessel executes debris capture and graveyard orbit transfer. By 2029, six autonomous SV-1 units will form the Orbital Dredger Constellation — dedicated to continuous 800km Sun-Synchronous orbit cleaning campaigns.",
            tag: "2029 DEPLOYMENT",
            color: "var(--success)",
            delay: "reveal-delay-3",
          },
        ].map((p, i) => (
          <div key={i} className={`panel-card reveal ${p.delay}`} style={{ padding: "48px 40px", position: "relative" }}>
            <div className="corner-bracket tl" style={{ borderColor: p.color }} />
            <div className="corner-bracket br" style={{ borderColor: p.color }} />

            {/* Number */}
            <div style={{
              fontFamily: "var(--font-display)",
              fontSize: "4rem",
              fontWeight: 700,
              color: "rgba(240,244,255,0.05)",
              lineHeight: 1,
              marginBottom: "24px",
              letterSpacing: "0.05em",
            }}>{p.num}</div>

            {/* Tag */}
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.25em",
              color: p.color,
              marginBottom: "12px",
              textTransform: "uppercase",
            }}>{p.tag}</div>

            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "var(--white)",
              marginBottom: "6px",
            }}>{p.title.toUpperCase()}</h3>

            <div style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              color: p.color,
              fontWeight: 500,
              marginBottom: "20px",
              letterSpacing: "0.05em",
            }}>{p.subtitle}</div>

            <p style={{
              fontFamily: "var(--font-light)",
              fontSize: "1rem",
              color: "rgba(240,244,255,0.6)",
              lineHeight: 1.8,
              fontWeight: 300,
            }}>{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── TECHNOLOGY SECTION ───────────────────────────────────────────────────────
const Technology = () => {
  const phases = [
    {
      num: "01",
      name: "LiDAR Synchronization",
      detail: "AI-driven sub-millisecond thruster bursts match the SV-1 vessel's rotation to the debris tumbling frequency before any physical contact is made. Targeting precision: ±0.1°.",
    },
    {
      num: "02",
      name: "Magnetic Soft-Dock",
      detail: "Eddy-Current Braking System projects high-intensity magnetic flux — inducing electrical currents in the aluminum debris hull to dampen spin contactlessly, eliminating fragmentation risk.",
    },
    {
      num: "03",
      name: "Mechanical Embrace",
      detail: "Four articulated carbon-fiber arms with tactile haptic sensors lock onto structural hardpoints — typically the engine bell or adapter ring — securing the object for controlled deorbit transfer.",
    },
  ];

  const specs = [
    ["Maximum Capture Mass", "12,000 kg"],
    ["Operating Temperature", "-150°C to +120°C"],
    ["Targeting System", "LiDAR + AI Attitude Match"],
    ["De-tumbling Method", "Eddy-Current Induction"],
    ["Capture Arms", "4 × Articulated Carbon-Fiber"],
    ["Arm Sensors", "Tactile Haptic Array"],
    ["Capture Sequence", "3-Phase Protocol"],
    ["Classification", "Uncooperative Debris Capable"],
  ];

  return (
    <section id="technology" style={{ padding: "120px 40px", background: "var(--deep)", position: "relative" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal">
          <div className="section-label">CAPTURE TECHNOLOGY</div>
          <h2 className="display-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "16px" }}>
            ENGINEERING THE<br />
            <span className="cyan-text">HARVER-CLAW MARK III</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-light)", fontWeight: 300,
            fontSize: "1.05rem",
            color: "rgba(240,244,255,0.55)",
            maxWidth: "560px",
            lineHeight: 1.8,
            marginBottom: "80px",
          }}>
            Capturing a dead satellite is a kinetic nightmare. Without an active Attitude
            Control System, debris often tumbles on multiple axes simultaneously. The
            Harver-Claw Mark III is engineered specifically for this problem.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
          {/* Phase Timeline */}
          <div className="panel-card reveal reveal-delay-1" style={{ padding: "48px 40px" }}>
            <div className="corner-bracket tl" />
            <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.25em", color: "var(--cyan)", marginBottom: "40px" }}>
              THREE-PHASE CAPTURE SEQUENCE
            </h3>

            {phases.map((ph, i) => (
              <div key={i} style={{
                display: "flex",
                gap: "24px",
                marginBottom: i < phases.length - 1 ? "0" : "0",
                position: "relative",
              }}>
                {/* Connector line */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div className="timeline-dot" />
                  {i < phases.length - 1 && (
                    <div style={{ width: "1px", flex: 1, background: "var(--border)", margin: "8px 0", minHeight: "60px" }} />
                  )}
                </div>

                <div style={{ paddingBottom: i < phases.length - 1 ? "40px" : "0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                    <span className="mono-data" style={{ fontSize: "10px", color: "var(--muted)", letterSpacing: "0.2em" }}>PHASE {ph.num}</span>
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 600, color: "var(--white)", marginBottom: "8px" }}>
                    {ph.name}
                  </div>
                  <p style={{ fontFamily: "var(--font-light)", fontWeight: 300, fontSize: "0.9rem", color: "rgba(240,244,255,0.55)", lineHeight: 1.7 }}>
                    {ph.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Spec Sheet */}
          <div className="panel-card reveal reveal-delay-2" style={{ padding: "48px 40px" }}>
            <div className="corner-bracket tr" />
            <div className="corner-bracket bl" />
            <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.25em", color: "var(--cyan)", marginBottom: "40px" }}>
              TECHNICAL SPECIFICATIONS — MK III
            </h3>

            {specs.map(([key, val], i) => (
              <div key={i} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 0",
                borderBottom: "1px solid rgba(0,212,255,0.06)",
              }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--muted)", letterSpacing: "0.1em" }}>
                  {key}
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--cyan)", letterSpacing: "0.05em" }}>
                  {val}
                </span>
              </div>
            ))}

            {/* Compliance status */}
            <div style={{ marginTop: "32px", padding: "20px", background: "rgba(0,255,136,0.04)", border: "1px solid rgba(0,255,136,0.15)" }}>
              <div className="mono-data" style={{ fontSize: "10px", color: "var(--success)", letterSpacing: "0.2em", marginBottom: "12px" }}>
                COMPLIANCE STATUS — LIVE
              </div>
              {[
                "UN OOSA Registration",
                "Sovereign Consent Framework",
                "FAA/AST Authorization",
                "ESA Space Safety Compliance",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span style={{ color: "var(--success)", fontSize: "12px" }}>✓</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "rgba(240,244,255,0.6)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── LEGAL SECTION ────────────────────────────────────────────────────────────
const Legal = () => (
  <section id="legal" style={{ padding: "120px 40px", background: "var(--black)", position: "relative" }}>
    <div style={{
      position: "absolute", top: 0, left: 0, right: 0, height: "1px",
      background: "linear-gradient(90deg, transparent, var(--cyan), transparent)",
      opacity: 0.3,
    }} />

    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div className="reveal">
        <div className="section-label">LEGAL FRAMEWORK</div>
        <h2 className="display-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "16px" }}>
          THE LEGAL MOAT<br />
          <span className="gold-text">OTHERS CANNOT CROSS</span>
        </h2>
        <p style={{
          fontFamily: "var(--font-light)", fontWeight: 300,
          fontSize: "1.05rem",
          color: "rgba(240,244,255,0.55)",
          maxWidth: "560px",
          lineHeight: 1.8,
          marginBottom: "80px",
        }}>
          Space debris removal is not merely a technology problem. It is a sovereignty problem.
          HSI's legal architecture is the only commercial framework that solves it.
        </p>
      </div>

      {/* Legal Pillars */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2px", marginBottom: "2px" }}>
        {[
          {
            treaty: "OUTER SPACE TREATY 1967 — ARTICLE VIII",
            title: "Jurisdiction Never Expires",
            body: "Under international law, a satellite remains the legal property of its launching state indefinitely — even when defunct and tumbling. Unlike maritime law, there is no abandoned property doctrine in space. This is the legal deadlock that has prevented cleanup for 60 years.",
            color: "var(--cyan)",
            delay: "reveal-delay-1",
          },
          {
            treaty: "OUTER SPACE TREATY 1967 — ARTICLE IX",
            title: "Neglect is a Treaty Violation",
            body: "Article IX mandates space activities with 'due regard to the corresponding interests of all other States Parties.' HSI's legal position: leaving high-risk debris in LEO is itself a violation of the due regard principle. Orbital neglect has legal consequences.",
            color: "var(--gold)",
            delay: "reveal-delay-2",
          },
          {
            treaty: "HSI INNOVATION — BTL FRAMEWORK",
            title: "Bilateral Transfer of Liability",
            body: "BTL agreements make HSI a licensed sovereign agent for partner nations. We provide first-ever Third-Party Salvage Insurance covering states against accidental fragmentation during capture. Every HSI mission carries the legal authorization no other commercial operator has obtained.",
            color: "var(--success)",
            delay: "reveal-delay-3",
          },
        ].map((p, i) => (
          <div key={i} className={`panel-card reveal ${p.delay}`} style={{ padding: "48px 40px" }}>
            <div className="corner-bracket tl" style={{ borderColor: p.color }} />
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: p.color,
              letterSpacing: "0.12em",
              marginBottom: "20px",
              lineHeight: 1.5,
            }}>{p.treaty}</div>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "var(--white)",
              letterSpacing: "0.08em",
              marginBottom: "20px",
            }}>{p.title.toUpperCase()}</h3>
            <p style={{
              fontFamily: "var(--font-light)", fontWeight: 300,
              fontSize: "1rem",
              color: "rgba(240,244,255,0.6)",
              lineHeight: 1.8,
            }}>{p.body}</p>
          </div>
        ))}
      </div>

      {/* Partner Nations */}
      <div className="panel-card reveal" style={{ padding: "40px" }}>
        <div className="corner-bracket tl" />
        <div className="corner-bracket tr" />
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--muted)",
          letterSpacing: "0.25em",
          marginBottom: "24px",
        }}>SOVEREIGN PARTNERS — BTL AUTHORIZATION ACTIVE</div>
        <div style={{ display: "flex", gap: "2px", flexWrap: "wrap" }}>
          {[
            ["USA", "FAA/AST COMPLIANT", "var(--cyan)"],
            ["ESA", "MEMBER STATE AGREEMENTS", "var(--cyan)"],
            ["JAPAN (JAXA)", "BILATERAL AUTHORIZATION", "var(--cyan)"],
            ["UAE SPACE AGENCY", "PARTNER STATUS", "var(--gold)"],
          ].map(([nation, status, color], i) => (
            <div key={i} style={{
              flex: "1 1 200px",
              padding: "20px 24px",
              background: "var(--black)",
              border: "1px solid var(--border)",
              position: "relative",
            }}>
              <div style={{
                position: "absolute",
                top: 0, left: 0, right: 0, height: "2px",
                background: color,
                opacity: 0.5,
              }} />
              <div style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 700, color: "var(--white)", marginBottom: "6px", letterSpacing: "0.1em" }}>
                {nation}
              </div>
              <div className="mono-data" style={{ fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em" }}>
                {status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── ROADMAP SECTION ──────────────────────────────────────────────────────────
const Roadmap = () => {
  const milestones = [
    {
      year: "2026",
      title: "Vespa Capture Mission",
      body: "Launch of HSI's first operational mission. Target: 112kg Vespa payload adapter in Sun-Synchronous orbit. First commercially BTL-authorized debris removal in history.",
      tag: "PHASE I",
      color: "var(--cyan)",
      status: "FUNDED",
    },
    {
      year: "2027",
      title: "First Orbital Recycling Test",
      body: "Instead of deorbiting, HSI tows a defunct telecommunications satellite to the Vanguard-R Recycling Hub for aluminum harvesting. First in-space material recovery operation.",
      tag: "PHASE II",
      color: "var(--gold)",
      status: "PLANNED",
    },
    {
      year: "2028",
      title: "ClearSpace Partnership Integration",
      body: "Full commercial pipeline alignment with ClearSpace mission architecture. Multi-mission cooperative framework across European and Asian LEO orbital bands.",
      tag: "PARTNERSHIP",
      color: "var(--cyan2)",
      status: "SCOPED",
    },
    {
      year: "2029",
      title: "Orbital Dredger Constellation",
      body: "Deployment of six autonomous SV-1 units dedicated to cleaning the 800km Sun-Synchronous orbit belt. First continuous active debris removal operations at scale.",
      tag: "PHASE III",
      color: "var(--success)",
      status: "ROADMAP",
    },
    {
      year: "2030",
      title: "Debris-as-a-Service Platform",
      body: "Full commercial operator-paid removal platform. Constellation operators subscribe to end-of-life deorbit services. HSI becomes the infrastructure layer for orbital sustainability.",
      tag: "COMMERCIAL",
      color: "var(--gold)",
      status: "VISION",
    },
  ];

  return (
    <section id="roadmap" style={{ padding: "120px 40px", background: "var(--deep)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal">
          <div className="section-label">MISSION ROADMAP</div>
          <h2 className="display-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "80px" }}>
            2026 — 2030:<br />
            <span className="cyan-text">THE CLEANUP BEGINS</span>
          </h2>
        </div>

        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: "110px",
            top: "0", bottom: "0",
            width: "1px",
            background: "linear-gradient(to bottom, var(--cyan), rgba(0,212,255,0.1))",
          }} />

          {milestones.map((m, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1}`} style={{
              display: "flex",
              gap: "40px",
              marginBottom: i < milestones.length - 1 ? "48px" : "0",
              alignItems: "flex-start",
            }}>
              {/* Year */}
              <div style={{
                width: "80px",
                flexShrink: 0,
                textAlign: "right",
              }}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: m.color,
                  lineHeight: 1,
                }}>{m.year}</div>
              </div>

              {/* Dot */}
              <div style={{ position: "relative", flexShrink: 0, paddingTop: "4px" }}>
                <div style={{
                  width: "20px", height: "20px",
                  borderRadius: "50%",
                  background: m.color,
                  border: "3px solid var(--deep)",
                  boxShadow: `0 0 16px ${m.color}`,
                  position: "relative",
                  zIndex: 2,
                }} />
              </div>

              {/* Content */}
              <div className="panel-card" style={{ flex: 1, padding: "32px 36px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <div>
                    <span className="mono-data" style={{ fontSize: "10px", color: m.color, letterSpacing: "0.2em", marginRight: "16px" }}>
                      {m.tag}
                    </span>
                  </div>
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    padding: "4px 10px",
                    border: `1px solid ${m.color}`,
                    color: m.color,
                    letterSpacing: "0.15em",
                  }}>{m.status}</span>
                </div>
                <h3 style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "var(--white)",
                  letterSpacing: "0.05em",
                  marginBottom: "12px",
                }}>{m.title}</h3>
                <p style={{
                  fontFamily: "var(--font-light)", fontWeight: 300,
                  fontSize: "0.95rem",
                  color: "rgba(240,244,255,0.6)",
                  lineHeight: 1.8,
                }}>{m.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── MARKET SECTION ───────────────────────────────────────────────────────────
const Market = () => {
  const marketStats = [
    { label: "Market Size 2024", value: "$1.5B", sub: "Monitoring + Removal" },
    { label: "Projected by 2035", value: "$15.3B", sub: "MRFR Services Forecast" },
    { label: "Active Removal CAGR", value: "25%", sub: "Through 2035" },
    { label: "N. America Share 2030", value: "61%", sub: "BIS Research Projection" },
  ];

  const revenue = [
    {
      num: "01",
      stream: "Government Service Contracts",
      status: "ACTIVE NOW",
      statusColor: "var(--success)",
      body: "National space agencies procure end-to-end debris removal as a commercial service. ESA's €86M ClearSpace-1 contract establishes the sector benchmark. JAXA's phased CRD2 program validates the model. This is where HSI generates near-term revenue.",
    },
    {
      num: "02",
      stream: "Operator-Paid Removal",
      status: "2026+",
      statusColor: "var(--cyan)",
      body: "Constellation operators pay per-satellite or per-mission for end-of-life deorbit. New 5-year deorbit compliance requirements create mandatory spending. Multi-client sequential removal dramatically reduces per-unit cost for operators.",
    },
    {
      num: "03",
      stream: "Orbital Recycling",
      status: "2027+",
      statusColor: "var(--gold)",
      body: "In-orbit aluminum and material recovery from retired satellites. Recovered materials transferred to in-space manufacturing facilities. First-mover advantage in a market that does not yet exist commercially — HSI's Vanguard-R hub is the enabling infrastructure.",
    },
  ];

  return (
    <section id="market" style={{ padding: "120px 40px", background: "var(--black)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal">
          <div className="section-label">MARKET & ECONOMICS</div>
          <h2 className="display-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "16px" }}>
            THE $15 BILLION<br />
            <span className="cyan-text">CLEANUP ECONOMY</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-light)", fontWeight: 300,
            fontSize: "1.05rem",
            color: "rgba(240,244,255,0.55)",
            maxWidth: "560px",
            lineHeight: 1.8,
            marginBottom: "80px",
          }}>
            The space debris removal market is real, growing, and increasingly well-funded.
            Government agencies are the anchor customers. Commercial operators are the growth engine.
          </p>
        </div>

        {/* Market Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2px", marginBottom: "2px" }}>
          {marketStats.map((s, i) => (
            <div key={i} className={`panel-card reveal reveal-delay-${i + 1}`} style={{ padding: "36px 32px", textAlign: "center" }}>
              <div className="corner-bracket tl" />
              <div className="corner-bracket br" />
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.5rem",
                fontWeight: 700,
                color: "var(--cyan)",
                marginBottom: "8px",
              }}>{s.value}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", fontWeight: 600, color: "var(--white)", marginBottom: "6px" }}>
                {s.label}
              </div>
              <div className="mono-data" style={{ fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em" }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Revenue Streams */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2px", marginBottom: "2px" }}>
          {revenue.map((r, i) => (
            <div key={i} className={`panel-card reveal reveal-delay-${i + 1}`} style={{ padding: "40px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                <span className="mono-data" style={{ fontSize: "2rem", color: "rgba(240,244,255,0.06)", fontWeight: 700 }}>{r.num}</span>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  padding: "4px 12px",
                  border: `1px solid ${r.statusColor}`,
                  color: r.statusColor,
                  letterSpacing: "0.15em",
                }}>{r.status}</span>
              </div>
              <h3 style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "var(--white)",
                letterSpacing: "0.05em",
                marginBottom: "16px",
              }}>{r.stream}</h3>
              <p style={{
                fontFamily: "var(--font-light)", fontWeight: 300,
                fontSize: "0.95rem",
                color: "rgba(240,244,255,0.6)",
                lineHeight: 1.8,
              }}>{r.body}</p>
            </div>
          ))}
        </div>

        {/* Comparable Funding */}
        <div className="panel-card reveal" style={{ padding: "40px" }}>
          <div className="corner-bracket tl" />
          <div className="corner-bracket tr" />
          <div className="mono-data" style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.2em", marginBottom: "24px" }}>
            SECTOR FUNDING BENCHMARKS — COMPARABLE COMPANIES
          </div>
          <div style={{ display: "flex", gap: "2px", flexWrap: "wrap" }}>
            {[
              ["Astroscale", "$383M", "Series G — Equity + Agency Contracts"],
              ["ClearSpace", "€110M", "Series A + ESA Service Contract"],
              ["D-Orbit", "$166M", "Series C — Orbital Logistics"],
              ["LeoLabs", "$29M", "2024 Expansion Round"],
            ].map(([co, amt, note], i) => (
              <div key={i} style={{
                flex: "1 1 200px",
                padding: "20px 24px",
                background: "rgba(0,212,255,0.03)",
                borderRight: "2px solid var(--border)",
              }}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 600, color: "var(--muted)", marginBottom: "4px" }}>{co}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "6px" }}>{amt}</div>
                <div className="mono-data" style={{ fontSize: "10px", color: "rgba(107,127,163,0.7)", letterSpacing: "0.05em" }}>{note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── ABOUT + AASHRAYAM ────────────────────────────────────────────────────────
const About = () => (
  <section style={{ padding: "120px 40px", background: "var(--deep)" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div className="reveal">
        <div className="section-label">ABOUT HSI</div>
        <h2 className="display-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "80px" }}>
          ORBITAL STEWARDSHIP.<br />
          <span className="gold-text">HUMAN RESPONSIBILITY.</span>
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
        <div className="panel-card reveal reveal-delay-1" style={{ padding: "48px 40px" }}>
          <div className="corner-bracket tl" />
          <div className="mono-data" style={{ fontSize: "10px", color: "var(--cyan)", letterSpacing: "0.25em", marginBottom: "24px" }}>
            ABOUT HARVER SPACE INDUSTRIES
          </div>
          <p style={{
            fontFamily: "var(--font-light)", fontWeight: 300,
            fontSize: "1.05rem",
            color: "rgba(240,244,255,0.7)",
            lineHeight: 1.9,
            marginBottom: "24px",
          }}>
            Harver Space Industries was founded on the belief that the space economy's
            long-term survival depends on addressing the infrastructure crisis we have
            inherited. We are not simply a debris removal company.
          </p>
          <p style={{
            fontFamily: "var(--font-light)", fontWeight: 300,
            fontSize: "1.05rem",
            color: "rgba(240,244,255,0.7)",
            lineHeight: 1.9,
          }}>
            We are building the legal and technical architecture for sustainable human
            presence in orbit — a framework that will define the next century of
            space operations. The debris problem is civilizational. Our response is proportional.
          </p>
        </div>

        <div className="panel-card reveal reveal-delay-2" style={{
          padding: "48px 40px",
          background: "linear-gradient(135deg, rgba(201,168,76,0.05) 0%, rgba(8,12,26,1) 60%)",
          borderColor: "rgba(201,168,76,0.2)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "2px",
            background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
          }} />
          <div className="corner-bracket tl" style={{ borderColor: "var(--gold)" }} />
          <div className="corner-bracket br" style={{ borderColor: "var(--gold)" }} />

          <div style={{
            fontFamily: "var(--font-display)",
            fontSize: "2rem",
            fontWeight: 700,
            color: "var(--gold)",
            letterSpacing: "0.15em",
            marginBottom: "8px",
          }}>AASHRAYAM</div>

          <div className="mono-data" style={{ fontSize: "10px", color: "rgba(201,168,76,0.6)", letterSpacing: "0.2em", marginBottom: "24px" }}>
            HUMANITARIAN INITIATIVE — 10% PROFIT ALLOCATION
          </div>

          <p style={{
            fontFamily: "var(--font-light)", fontWeight: 300,
            fontSize: "1.05rem",
            color: "rgba(240,244,255,0.7)",
            lineHeight: 1.9,
          }}>
            Ten percent of all HSI profits are permanently allocated to the Aashrayam
            humanitarian fund — a founding commitment that our commercial success in orbit
            translates directly to benefit on the ground.
          </p>

          <div style={{
            marginTop: "32px",
            padding: "20px",
            background: "rgba(201,168,76,0.06)",
            border: "1px solid rgba(201,168,76,0.15)",
            fontFamily: "var(--font-light)", fontWeight: 300,
            fontSize: "1rem",
            fontStyle: "italic",
            color: "rgba(201,168,76,0.8)",
            lineHeight: 1.7,
          }}>
            "The stars are for everyone. The responsibility is ours."
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── CONTACT SECTION ──────────────────────────────────────────────────────────
const Contact = () => {
  const [form, setForm] = useState({ name: "", org: "", email: "", type: "investor", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" style={{ padding: "120px 40px", background: "var(--black)", position: "relative" }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, var(--cyan), transparent)",
        opacity: 0.4,
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal">
          <div className="section-label">CONTACT</div>
          <h2 className="display-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "16px" }}>
            BUILD THE FUTURE<br />
            <span className="cyan-text">OF ORBIT WITH US</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-light)", fontWeight: 300,
            fontSize: "1.05rem",
            color: "rgba(240,244,255,0.55)",
            maxWidth: "560px",
            lineHeight: 1.8,
            marginBottom: "80px",
          }}>
            We are currently engaging qualified investors and sovereign partners for
            Phase I operations. If you are serious about the orbital economy, we want
            to hear from you.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
          {/* Two tracks */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {[
              {
                tag: "INVESTOR INQUIRIES",
                title: "Phase I Capital",
                body: "We are raising seed capital for Phase I operations. Qualified investors interested in the orbital stewardship economy are invited to begin a conversation.",
                color: "var(--cyan)",
              },
              {
                tag: "GOVERNMENT & OPERATOR PARTNERSHIPS",
                title: "Sovereign Authorization",
                body: "If you represent a space agency, satellite operator, or national authority with debris removal requirements, contact our partnerships team directly.",
                color: "var(--gold)",
              },
            ].map((t, i) => (
              <div key={i} className="panel-card reveal" style={{ padding: "36px", flex: 1 }}>
                <div className="corner-bracket tl" style={{ borderColor: t.color }} />
                <div className="mono-data" style={{ fontSize: "10px", color: t.color, letterSpacing: "0.2em", marginBottom: "12px" }}>
                  {t.tag}
                </div>
                <h3 style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", fontWeight: 600, color: "var(--white)", marginBottom: "12px" }}>
                  {t.title}
                </h3>
                <p style={{ fontFamily: "var(--font-light)", fontWeight: 300, fontSize: "0.95rem", color: "rgba(240,244,255,0.6)", lineHeight: 1.7 }}>
                  {t.body}
                </p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="panel-card reveal reveal-delay-2" style={{ padding: "48px 40px" }}>
            <div className="corner-bracket tr" />
            <div className="corner-bracket bl" />

            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: "16px" }}>✓</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--success)", letterSpacing: "0.1em", marginBottom: "12px" }}>
                  TRANSMISSION RECEIVED
                </div>
                <p style={{ fontFamily: "var(--font-light)", fontWeight: 300, color: "rgba(240,244,255,0.6)" }}>
                  Our team will be in contact within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mono-data" style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.2em", marginBottom: "32px" }}>
                  SECURE INQUIRY FORM
                </div>

                {[
                  { key: "name", label: "FULL NAME", type: "text", placeholder: "Your name" },
                  { key: "org", label: "ORGANIZATION", type: "text", placeholder: "Company / Agency / Institution" },
                  { key: "email", label: "EMAIL ADDRESS", type: "email", placeholder: "your@email.com" },
                ].map((f) => (
                  <div key={f.key} style={{ marginBottom: "20px" }}>
                    <label style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--muted)",
                      letterSpacing: "0.2em",
                      display: "block",
                      marginBottom: "8px",
                    }}>{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.key]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      required
                      style={{
                        width: "100%",
                        background: "var(--black)",
                        border: "1px solid var(--border)",
                        padding: "12px 16px",
                        color: "var(--white)",
                        fontFamily: "var(--font-mono)",
                        fontSize: "13px",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => e.target.style.borderColor = "var(--cyan)"}
                      onBlur={(e) => e.target.style.borderColor = "var(--border)"}
                    />
                  </div>
                ))}

                <div style={{ marginBottom: "20px" }}>
                  <label style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--muted)",
                    letterSpacing: "0.2em",
                    display: "block",
                    marginBottom: "8px",
                  }}>INQUIRY TYPE</label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    style={{
                      width: "100%",
                      background: "var(--black)",
                      border: "1px solid var(--border)",
                      padding: "12px 16px",
                      color: "var(--white)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "13px",
                      outline: "none",
                    }}
                  >
                    <option value="investor">Investor Inquiry</option>
                    <option value="government">Government Partnership</option>
                    <option value="operator">Satellite Operator</option>
                    <option value="press">Press & Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: "28px" }}>
                  <label style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--muted)",
                    letterSpacing: "0.2em",
                    display: "block",
                    marginBottom: "8px",
                  }}>MESSAGE</label>
                  <textarea
                    placeholder="Tell us about your interest or requirements..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    style={{
                      width: "100%",
                      background: "var(--black)",
                      border: "1px solid var(--border)",
                      padding: "12px 16px",
                      color: "var(--white)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "13px",
                      outline: "none",
                      resize: "vertical",
                      fontFamily: "var(--font-light)",
                      fontSize: "14px",
                    }}
                    onFocus={(e) => e.target.style.borderColor = "var(--cyan)"}
                    onBlur={(e) => e.target.style.borderColor = "var(--border)"}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: "100%" }}>
                  TRANSMIT INQUIRY →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── FOOTER ───────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer style={{
    padding: "40px",
    background: "var(--deep)",
    borderTop: "1px solid var(--border)",
  }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ width: "24px", height: "24px", border: "1.5px solid var(--cyan)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "8px", height: "8px", background: "var(--cyan)" }} />
        </div>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.25em" }}>HSI</span>
        <span className="mono-data" style={{ fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em" }}>
          HARVER SPACE INDUSTRIES — DEBRIS REMOVAL PHASE III
        </span>
      </div>

      <div className="mono-data" style={{ fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em" }}>
        ORBITAL STEWARDSHIP INITIATIVE — T25 — ALL RIGHTS RESERVED
      </div>

      <div className="mono-data" style={{ fontSize: "10px", color: "var(--cyan)", letterSpacing: "0.1em", animation: "blink 3s ease-in-out infinite" }}>
        ● SYSTEM NOMINAL
      </div>
    </div>
  </footer>
);

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  useReveal();

  return (
    <>
      <FontLoader />
      <div className="scanline-overlay" />
      <div className="noise-overlay" />
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Technology />
      <Legal />
      <Roadmap />
      <Market />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
