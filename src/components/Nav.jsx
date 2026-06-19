import { useState, useEffect } from "react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    ["mission", "Mission"],
    ["technology", "Technology"],
    ["market", "Market"],
    ["legal", "Legal"],
    ["roadmap", "Roadmap"],
    ["contact", "Contact"],
  ];

  return (
    <>
      <nav aria-label="Main navigation" style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: "0 40px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(0,0,0,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        transition: "all 0.4s ease",
      }}>
        {/* Logo */}
        <div
          style={{ display: "flex", alignItems: "baseline", gap: "0", cursor: "pointer" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span style={{
            fontFamily: "var(--font-display)",
            fontSize: "14px",
            fontWeight: 800,
            letterSpacing: "0.18em",
            color: "var(--white)",
            textTransform: "uppercase",
          }}>HARVER</span>
          <span style={{
            fontFamily: "var(--font-display)",
            fontSize: "14px",
            fontWeight: 800,
            letterSpacing: "0.18em",
            color: "var(--cyan)",
            marginLeft: "4px",
            textTransform: "uppercase",
          }}>SPACE</span>
        </div>

        {/* Desktop Nav — uppercase micro text */}
        <div className="hide-mobile" style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {navLinks.map(([id, label]) => (
            <span key={id} className="nav-link" onClick={() => scrollTo(id)}>{label}</span>
          ))}
          <button
            className="btn-primary"
            style={{ padding: "10px 24px", fontSize: "11px" }}
            onClick={() => scrollTo("contact")}
          >
            Partner With Us
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            display: "none",
            background: "none",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "var(--white)",
            fontSize: "16px",
            cursor: "pointer",
            fontFamily: "var(--font-display)",
            padding: "6px 10px",
            lineHeight: 1,
            borderRadius: "2px",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile slide-in panel */}
      <div style={{
        position: "fixed",
        top: 0,
        right: menuOpen ? 0 : "-100%",
        width: "75vw",
        maxWidth: "320px",
        height: "100vh",
        background: "rgba(0,0,0,0.98)",
        backdropFilter: "blur(30px)",
        WebkitBackdropFilter: "blur(30px)",
        borderLeft: "1px solid rgba(255,255,255,0.06)",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        paddingTop: "80px",
        paddingRight: "40px",
        paddingLeft: "40px",
        transition: "right 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
      }}>
        {navLinks.map(([id, label], i) => (
          <span
            key={id}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "var(--muted)",
              cursor: "pointer",
              textTransform: "uppercase",
              padding: "18px 0",
              borderBottom: "1px solid rgba(255,255,255,0.04)",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateX(0)" : "translateX(20px)",
              transition: `opacity 0.3s ease ${i * 0.05}s, transform 0.3s ease ${i * 0.05}s`,
            }}
            onClick={() => scrollTo(id)}
          >
            {label}
          </span>
        ))}
        <button
          className="btn-primary"
          style={{
            marginTop: "32px",
            padding: "14px 24px",
            fontSize: "11px",
            width: "100%",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateX(0)" : "translateX(20px)",
            transition: `opacity 0.3s ease 0.35s, transform 0.3s ease 0.35s`,
          }}
          onClick={() => scrollTo("contact")}
        >
          Partner With Us
        </button>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 998,
          }}
          onClick={() => setMenuOpen(false)}
        />
      )}

      <style>{`
        @media (max-width: 768px) {
          nav .hide-mobile { display: none !important; }
          nav .show-mobile { display: block !important; }
        }
      `}</style>
    </>
  );
};

export default Nav;
