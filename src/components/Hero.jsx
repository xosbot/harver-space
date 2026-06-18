import OrbitalCanvas from "./OrbitalCanvas";
import DataTicker from "./DataTicker";

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

    <div style={{
      position: "absolute", inset: 0,
      background: "linear-gradient(135deg, rgba(4,6,15,0.85) 0%, rgba(4,6,15,0.4) 50%, rgba(4,6,15,0.7) 100%)",
    }} />

    <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />

    <div style={{
      position: "relative", zIndex: 10,
      maxWidth: "900px",
      padding: "0 40px",
      marginLeft: "calc(50% - 450px)",
      animation: "fadeUp 1s ease 0.3s both",
    }}>
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

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <button className="btn-primary" onClick={() => document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" })}>
          Explore the Mission
        </button>
        <button className="btn-outline" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
          Partner With Us
        </button>
      </div>

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

export default Hero;
