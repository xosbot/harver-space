import { useState, useEffect, useRef } from "react";
import OrbitalCanvas from "./OrbitalCanvas";
import DataTicker from "./DataTicker";
import Counter from "./Counter";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [imgLoaded, setImgLoaded] = useState(false);
  const [videoPaused, setVideoPaused] = useState(false);
  const videoRef = useRef(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setVideoPaused(false);
      } else {
        videoRef.current.pause();
        setVideoPaused(true);
      }
    }
  };

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section id="hero" style={{
      position: "relative",
      height: "100vh",
      minHeight: "700px",
      overflow: "hidden",
      background: "#000000",
      display: "flex",
      alignItems: "center",
    }}>
      {/* Orbital canvas fallback */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <OrbitalCanvas />
      </div>

      {/* Video background — full-bleed, no scrim */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
          opacity: imgLoaded ? 1 : 0,
          transition: "opacity 1.5s ease",
        }}
        onLoadedData={() => setImgLoaded(true)}
      >
        <source src="/images/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Earth image fallback */}
      <img
        src="/images/hero-earth.jpg"
        alt="Earth from space"
        onLoad={() => setImgLoaded(true)}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: imgLoaded ? 0 : 0.5,
        }}
      />

      {/* Minimal dark gradient — no heavy scrim, photography does the work */}
      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 2,
        background: "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.6) 100%)",
      }} />

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "900px",
        padding: "0 40px",
        marginLeft: "max(40px, calc(50% - 600px))",
        animation: "fadeUp 1s ease 0.3s both",
        transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`,
        transition: "transform 0.3s ease-out",
      }}>
        {/* Eyebrow — all-caps micro text */}
        <div style={{
          fontFamily: "var(--font-display)",
          fontSize: "12px",
          fontWeight: 500,
          letterSpacing: "0.12em",
          color: "var(--muted)",
          textTransform: "uppercase",
          marginBottom: "24px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}>
          <span className="status-dot" />
          PHASE III OPERATIONS — ACTIVE
        </div>

        {/* Display headline — uppercase, tight leading, wide tracking */}
        <h1 className="display-title" style={{
          fontSize: "clamp(3rem, 8vw, 7rem)",
          color: "var(--white)",
          marginBottom: "8px",
          lineHeight: 0.95,
          letterSpacing: "0.06em",
        }}>
          WE REMOVE WHAT
        </h1>
        <h1 className="display-title shimmer-text" style={{
          fontSize: "clamp(3rem, 8vw, 7rem)",
          marginBottom: "32px",
          lineHeight: 0.95,
          letterSpacing: "0.06em",
        }}>
          HUMANITY LEFT BEHIND
        </h1>

        {/* Body — clean, minimal */}
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
          color: "var(--muted)",
          maxWidth: "560px",
          lineHeight: 1.7,
          marginBottom: "48px",
          fontWeight: 300,
          letterSpacing: "0.32px",
        }}>
          Harver Space Industries operates at the intersection of sovereign law,
          precision engineering, and orbital stewardship. We remove debris. We beam power.
          We build the grid above the grid.
        </p>

        {/* Ghost pill CTAs — one primary, one secondary */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <button
            className="btn-primary"
            onClick={() => document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore the Mission
          </button>
          <button
            className="btn-ghost"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Partner With Us
          </button>
        </div>

        {/* Live Stats — minimal data row */}
        <div style={{
          marginTop: "80px",
          display: "flex",
          gap: "48px",
          flexWrap: "wrap",
        }}>
          {[
            { value: 36500, suffix: "+", label: "Tracked Objects", color: "var(--cyan)" },
            { value: 42, prefix: "$", suffix: "B", label: "Decade Risk (WEF)", color: "var(--danger)" },
            { value: 0, suffix: "", label: "Commercial Cross-Border Removals", color: "var(--gold)" },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "left" }}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                color: stat.color,
                lineHeight: 0.95,
                marginBottom: "6px",
                letterSpacing: "0.04em",
              }}>
                <Counter target={stat.value} prefix={stat.prefix || ""} suffix={stat.suffix} />
              </div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "11px",
                fontWeight: 500,
                color: "var(--muted-dim)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Coordinates — micro text */}
        <div style={{
          marginTop: "40px",
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--muted-dim)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          display: "flex",
          gap: "24px",
          flexWrap: "wrap",
        }}>
          <span>LEO OPERATIONS: 400–1000 KM</span>
          <span style={{ color: "var(--border)" }}>|</span>
          <span>FAA/AST · ESA · JAXA · UAE</span>
        </div>
      </div>

      {/* Vertical label — right edge */}
      <div style={{
        position: "absolute",
        right: "40px",
        top: "50%",
        transform: "translateY(-50%) rotate(90deg)",
        fontFamily: "var(--font-display)",
        fontSize: "10px",
        fontWeight: 500,
        color: "var(--muted-dim)",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        zIndex: 10,
      }}>
        HARVER — DEBRIS — REMOVAL — T25
      </div>

      {/* Video play/pause toggle — minimal */}
      <button
        onClick={toggleVideo}
        aria-label={videoPaused ? "Play video" : "Pause video"}
        style={{
          position: "absolute",
          bottom: "32px",
          right: "32px",
          zIndex: 20,
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.15)",
          background: "rgba(0,0,0,0.4)",
          color: "var(--white)",
          fontSize: "12px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "border-color 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
        }}
      >
        {videoPaused ? "▶" : "⏸"}
      </button>

      <DataTicker />
    </section>
  );
};

export default Hero;
