import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  const navLinks = [
    ["mission", "Mission"],
    ["technology", "Technology"],
    ["market", "Market"],
    ["roadmap", "Roadmap"],
    ["contact", "Contact"],
  ]

  return (
    <>
      <nav style={{
        position: "fixed",
        top: 20,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        width: "calc(100% - 40px)",
        maxWidth: "1200px",
        padding: "0 24px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(11, 20, 38, 0.8)" : "rgba(11, 20, 38, 0.4)",
        backdropFilter: "blur(20px) saturate(1.2)",
        WebkitBackdropFilter: "blur(20px) saturate(1.2)",
        border: "1px solid rgba(125, 211, 252, 0.08)",
        borderRadius: "16px",
        transition: "all 0.4s ease",
      }}>
        {/* Logo */}
        <div 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "12px",
            cursor: "pointer" 
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div style={{
            width: "36px",
            height: "36px",
            borderRadius: "10px",
            background: "linear-gradient(135deg, var(--aurora), var(--orbital-purple))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <span style={{
              fontFamily: "var(--font-display)",
              fontSize: "16px",
              fontWeight: 700,
              color: "var(--void)",
            }}>H</span>
          </div>
          <span style={{
            fontFamily: "var(--font-display)",
            fontSize: "16px",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: "var(--stellar)",
          }}>
            Harver Space
          </span>
        </div>

        {/* Desktop Nav */}
        <div style={{ 
          display: "flex", 
          gap: "8px", 
          alignItems: "center",
        }} className="desktop-nav">
          {navLinks.map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: 500,
                color: "var(--silver)",
                background: "transparent",
                border: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "var(--stellar)"
                e.target.style.background = "rgba(125, 211, 252, 0.08)"
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "var(--silver)"
                e.target.style.background = "transparent"
              }}
            >
              {label}
            </button>
          ))}
          <button
            className="btn-primary"
            style={{ padding: "10px 24px", fontSize: "13px" }}
            onClick={() => scrollTo("contact")}
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            color: "var(--stellar)",
            cursor: "pointer",
            padding: "8px",
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: "fixed",
          top: 100,
          left: "50%",
          transform: "translateX(-50%)",
          width: "calc(100% - 40px)",
          maxWidth: "1200px",
          background: "rgba(11, 20, 38, 0.95)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(125, 211, 252, 0.08)",
          borderRadius: "16px",
          padding: "24px",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}>
          {navLinks.map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                fontWeight: 500,
                color: "var(--silver)",
                background: "transparent",
                border: "none",
                padding: "12px 16px",
                borderRadius: "8px",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s ease",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  )
}

export default Nav
