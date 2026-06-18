import { useState, useEffect } from "react";

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

export default Nav;
