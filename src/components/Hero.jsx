import { useEffect, useState, useRef } from 'react'
import SpaceHero from './SpaceHero'
import Counter from './Counter'

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener("mousemove", handleMouse)
    return () => window.removeEventListener("mousemove", handleMouse)
  }, [])

  return (
    <section 
      ref={heroRef}
      id="hero" 
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "800px",
        overflow: "hidden",
        background: "linear-gradient(180deg, #050A14 0%, #0B1426 50%, #111D32 100%)",
      }}
    >
      {/* 3D Space Background */}
      <SpaceHero />

      {/* Aurora Gradient Overlays */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `
          radial-gradient(ellipse 80% 50% at 50% 0%, rgba(125, 211, 252, 0.08) 0%, transparent 70%),
          radial-gradient(ellipse 60% 40% at 20% 100%, rgba(192, 132, 252, 0.05) 0%, transparent 70%),
          radial-gradient(ellipse 50% 60% at 80% 100%, rgba(212, 175, 55, 0.03) 0%, transparent 70%)
        `,
        zIndex: 2,
        pointerEvents: "none",
      }} />

      {/* Grid Pattern */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(125, 211, 252, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(125, 211, 252, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: "100px 100px",
        zIndex: 2,
        pointerEvents: "none",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 80%)",
      }} />

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 10,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "120px 24px 80px",
        transform: `translate(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px)`,
        transition: "transform 0.3s ease-out",
      }}>
        {/* Status Badge */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          padding: "8px 20px",
          background: "rgba(125, 211, 252, 0.08)",
          border: "1px solid rgba(125, 211, 252, 0.15)",
          borderRadius: "100px",
          marginBottom: "40px",
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          letterSpacing: "0.1em",
          color: "var(--aurora)",
          backdropFilter: "blur(10px)",
        }}>
          <span style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "var(--success)",
            boxShadow: "0 0 8px var(--success)",
          }} />
          MISSION CONTROL — LIVE
        </div>

        {/* Main Headline */}
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: "var(--stellar)",
          marginBottom: "16px",
          maxWidth: "900px",
        }}>
          Building the Grid
          <br />
          <span style={{
            background: "linear-gradient(135deg, var(--aurora) 0%, var(--orbital-purple) 50%, var(--gold) 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Above the Grid
          </span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
          color: "var(--silver)",
          maxWidth: "600px",
          lineHeight: 1.7,
          marginBottom: "48px",
          fontWeight: 300,
        }}>
          Harver Space Industries operates at the intersection of sovereign law, 
          precision engineering, and orbital stewardship. We remove debris. 
          We beam power. We connect worlds.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          <button
            className="btn-primary"
            onClick={() => document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore the Mission
          </button>
          <button
            className="btn-outline"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Partner With Us
          </button>
        </div>

        {/* Live Stats */}
        <div style={{
          marginTop: "80px",
          display: "flex",
          gap: "64px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          {[
            { value: 36500, suffix: "+", label: "Tracked Objects", color: "var(--aurora)" },
            { value: 42, prefix: "$", suffix: "B", label: "Decade Risk", color: "var(--danger)" },
            { value: 0, suffix: "", label: "Cross-Border Removals", color: "var(--gold)" },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: stat.color,
                lineHeight: 1,
                marginBottom: "8px",
              }}>
                <Counter target={stat.value} prefix={stat.prefix || ""} suffix={stat.suffix} />
              </div>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--silver-dim)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "200px",
        background: "linear-gradient(to top, var(--void), transparent)",
        zIndex: 5,
        pointerEvents: "none",
      }} />
    </section>
  )
}

export default Hero
