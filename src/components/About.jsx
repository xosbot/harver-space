import { Zap, Leaf, Shield, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Pushing the boundaries of orbital technology through 28+ patents in aerospace, RF energy, and AI-driven capture systems.",
      accent: "var(--aurora)",
      accentSoft: "rgba(125, 211, 252, 0.15)",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "Designing missions that restore orbital equilibrium — ensuring the space environment remains viable for generations to come.",
      accent: "var(--success)",
      accentSoft: "rgba(134, 239, 172, 0.15)",
    },
    {
      icon: Shield,
      title: "Sovereignty",
      description:
        "Establishing legal frameworks and operational protocols that protect national and commercial interests in the new space age.",
      accent: "var(--gold)",
      accentSoft: "rgba(212, 175, 55, 0.2)",
    },
    {
      icon: Globe,
      title: "Stewardship",
      description:
        "Treating orbit as shared heritage — with the Aashrayam commitment dedicating 10% of profits to humanitarian advancement.",
      accent: "var(--orbital-purple)",
      accentSoft: "rgba(192, 132, 252, 0.15)",
    },
  ];

  return (
    <section
      id="about"
      style={{
        background: "var(--deep-space)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Mission control photograph — cinematic background */}
      <img
        src="/images/mission-control.jpg"
        alt="NASA mission control room"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          opacity: 0.1,
          mixBlendMode: "screen",
          zIndex: 0,
        }}
      />

      {/* Subtle aurora backdrop + dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 70% 50% at 30% 30%, rgba(125, 211, 252, 0.04) 0%, transparent 70%),
            radial-gradient(ellipse 60% 50% at 70% 70%, rgba(192, 132, 252, 0.03) 0%, transparent 70%),
            linear-gradient(180deg, rgba(11, 20, 38, 0.8) 0%, rgba(11, 20, 38, 0.5) 50%, rgba(11, 20, 38, 0.85) 100%)
          `,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="section-padding"
        style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}
      >
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "80px" }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--aurora)",
              marginBottom: "16px",
            }}
          >
            ABOUT HSI
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--stellar)",
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            Building the Future
            <br />
            <span className="text-gradient">in Orbit</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.125rem",
              fontWeight: 400,
              color: "var(--silver)",
              maxWidth: "560px",
              lineHeight: 1.7,
            }}
          >
            Orbital stewardship. Human responsibility. Building the legal and
            technical architecture for sustainable human presence in orbit.
          </p>
        </div>

        {/* Founder Section */}
        <div
          className="reveal glass"
          style={{
            borderRadius: "16px",
            padding: "clamp(32px, 5vw, 64px)",
            marginBottom: "80px",
            position: "relative",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* Decorative accent line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background:
                "linear-gradient(90deg, var(--aurora), var(--orbital-purple), var(--gold))",
              opacity: 0.6,
            }}
          />

          {/* Founder Info */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--aurora)",
                marginBottom: "16px",
              }}
            >
              Founder & CEO
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 700,
                color: "var(--stellar)",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                marginBottom: "4px",
                lineHeight: 1.2,
              }}
            >
              Dr. Shaan Sherif
            </h3>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--silver-dim)",
                letterSpacing: "0.1em",
                marginBottom: "24px",
              }}
            >
              CEO & Co-Founder, Harver Space Corp
            </div>

            <blockquote
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                fontStyle: "italic",
                color: "var(--stellar-dim)",
                lineHeight: 1.7,
                borderLeft: "2px solid var(--glass-border)",
                paddingLeft: "20px",
                marginBottom: "24px",
              }}
            >
              &ldquo;We are not merely launching spacecraft — we are rewriting
              humanity&rsquo;s bond with orbit itself.&rdquo;
            </blockquote>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {[
                { label: "Patents", value: "28+" },
                { label: "Forbes 30U30", value: "2018" },
                { label: "SAR Pioneer", value: "First" },
              ].map((badge, i) => (
                <div
                  key={i}
                  style={{
                    padding: "10px 18px",
                    border: "1px solid var(--glass-border)",
                    borderRadius: "8px",
                    background: "rgba(17, 29, 50, 0.4)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "9px",
                      color: "var(--silver-dim)",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: "2px",
                    }}
                  >
                    {badge.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: "var(--stellar)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {badge.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "1rem",
                color: "var(--silver)",
                lineHeight: 1.8,
                letterSpacing: "0.01em",
                marginBottom: "20px",
              }}
            >
              A visionary technocrat, corporate consultant, and strategic catalyst
              with a singular focus on transforming humanity&rsquo;s relationship with
              space. Dr. Sherif combines deep technical expertise with an
              uncompromising commitment to orbital sustainability.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "1rem",
                color: "var(--silver)",
                lineHeight: 1.8,
                letterSpacing: "0.01em",
                marginBottom: "20px",
              }}
            >
              With 28+ granted patents spanning aerospace, RF energy, and AI
              systems, he led the world&rsquo;s first miniaturized Synthetic Aperture
              Radar satellite — a breakthrough that redefined remote sensing
              capabilities for the new space age.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "1rem",
                color: "var(--silver)",
                lineHeight: 1.8,
                letterSpacing: "0.01em",
              }}
            >
              Recognized in Forbes 30 Under 30 (Technology, 2018), Dr. Sherif
              architects HSI&rsquo;s phased roadmap from first operational missions in
              2026 to the full Orbital Dredger Constellation by 2029.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <div
                key={i}
                className="value-card glass"
                style={{
                  padding: "40px 32px",
                  borderRadius: "12px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  borderTop: `3px solid ${value.accent}`,
                  "--card-accent": value.accent,
                  "--card-accent-soft": value.accentSoft,
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: value.accentSoft,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                    border: `1px solid ${value.accentSoft}`,
                  }}
                >
                  <Icon
                    size={22}
                    color={value.accent}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "var(--stellar)",
                    marginBottom: "12px",
                    lineHeight: 1.3,
                  }}
                >
                  {value.title}
                </h4>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    fontWeight: 400,
                    color: "var(--silver)",
                    lineHeight: 1.7,
                  }}
                >
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .value-card:hover {
          transform: translateY(-6px);
          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.35),
            0 0 40px var(--card-accent-soft);
          border-color: rgba(125, 211, 252, 0.15) !important;
        }
        @media (max-width: 768px) {
          .value-card {
            padding: 32px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
