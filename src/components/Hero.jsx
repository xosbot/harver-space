import OrbitalCanvas from "./OrbitalCanvas";
import DataTicker from "./DataTicker";
import Counter from "./Counter";

const VIDEO_BG = "";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
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
      background: "var(--black)",
      display: "flex",
      alignItems: "center",
    }}>
      {VIDEO_BG ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src={VIDEO_BG} type="video/mp4" />
        </video>
      ) : (
        <OrbitalCanvas />
      )}

      <div className="hero-video-overlay" />
      <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.5, zIndex: 1 }} />

      {/* Floating particles */}
      <div className="particles-container" style={{ zIndex: 2 }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            bottom: `-10px`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            background: i % 3 === 0 ? "var(--gold)" : "var(--cyan)",
            borderRadius: "50%",
            animation: `particleFloat ${Math.random() * 10 + 8}s linear ${Math.random() * 5}s infinite`,
            opacity: 0.4,
          }} />
        ))}
      </div>

      <div style={{
        position: "relative", zIndex: 10,
        maxWidth: "1100px",
        padding: "0 40px",
        marginLeft: "calc(50% - 550px)",
        animation: "fadeUp 1s ease 0.3s both",
        transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
        transition: "transform 0.3s ease-out",
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
          maxWidth: "650px",
          lineHeight: 1.7,
          marginBottom: "48px",
          fontWeight: 300,
        }}>
          Harver Space Industries operates at the intersection of sovereign law,
          precision engineering, and orbital stewardship. We remove debris. We beam power.
          We build the grid above the grid.
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

        {/* Live Stats Row */}
        <div style={{
          marginTop: "64px",
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
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: 700,
                color: stat.color,
                lineHeight: 1,
                marginBottom: "4px",
              }}>
                <Counter target={stat.value} prefix={stat.prefix || ""} suffix={stat.suffix} />
              </div>
              <div className="mono-data" style={{
                fontSize: "10px",
                color: "var(--muted)",
                letterSpacing: "0.12em",
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Coordinates */}
        <div style={{
          marginTop: "40px",
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--muted)",
          letterSpacing: "0.15em",
          display: "flex",
          gap: "24px",
          flexWrap: "wrap",
        }}>
          <span>LEO OPERATIONS: 400–1000 KM</span>
          <span style={{ color: "var(--border)" }}>|</span>
          <span>FAA/AST · ESA · JAXA · UAE</span>
          <span style={{ color: "var(--border)" }}>|</span>
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
        zIndex: 10,
      }}>
        HARVER — DEBRIS — REMOVAL — T25
      </div>

      <DataTicker />
    </section>
  );
};

export default Hero;
