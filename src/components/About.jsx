const About = () => (
  <section style={{ padding: "120px 40px", background: "var(--black)" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div className="reveal">
        <div className="section-label">ABOUT</div>
        <h2
          className="display-title"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          HARVER SPACE
          <br />
          <span style={{ color: "var(--muted)" }}>INDUSTRIES</span>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: "1rem",
            color: "var(--muted)",
            maxWidth: "560px",
            lineHeight: 1.7,
            letterSpacing: "0.02em",
            marginBottom: "80px",
          }}
        >
          Orbital stewardship. Human responsibility. Building the legal and technical
          architecture for sustainable human presence in orbit.
        </p>
      </div>

      {/* Mission Image */}
      <div
        className="reveal"
        style={{
          marginBottom: "2px",
          position: "relative",
          overflow: "hidden",
          border: "1px solid var(--border)",
        }}
      >
        <img
          src="/images/mission-control.jpg"
          alt="Mission control"
          loading="lazy"
          style={{
            width: "100%",
            height: "280px",
            objectFit: "cover",
            display: "block",
            filter: "brightness(0.6) saturate(1.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "24px 40px",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--muted)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            MISSION OPERATIONS CENTER
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
        {/* About Text + Founder */}
        <div
          className="panel-card reveal reveal-delay-1"
          style={{
            padding: "48px 40px",
            background: "transparent",
            border: "1px solid var(--border)",
          }}
        >
          <div
            className="mono-data"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--muted)",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            ABOUT HARVER SPACE INDUSTRIES
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "1rem",
              color: "var(--muted)",
              lineHeight: 1.7,
              letterSpacing: "0.02em",
              marginBottom: "24px",
            }}
          >
            Harver Space Industries was founded on the belief that the space economy's
            long-term survival depends on addressing the infrastructure crisis we have
            inherited. We are not simply a debris removal company.
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "1rem",
              color: "var(--muted)",
              lineHeight: 1.7,
              letterSpacing: "0.02em",
              marginBottom: "24px",
            }}
          >
            We are building the legal and technical architecture for sustainable human
            presence in orbit — a framework that will define the next century of
            space operations. The debris problem is civilizational. Our response is proportional.
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "1rem",
              color: "var(--muted)",
              lineHeight: 1.7,
              letterSpacing: "0.02em",
            }}
          >
            From our first operational mission in 2026 to the Orbital Dredger Constellation
            in 2029, HSI is executing a phased roadmap that transforms orbital cleanup from
            a theoretical necessity into a commercially viable, legally authorized service.
          </p>

          {/* Founder Profile */}
          <div
            style={{
              marginTop: "40px",
              padding: "28px",
              borderLeft: "1px solid var(--border)",
            }}
          >
            <div
              className="mono-data"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--muted)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              FOUNDER & CEO
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              DR. SHAAN SHERIF
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--muted)",
                letterSpacing: "0.1em",
                marginBottom: "16px",
              }}
            >
              CEO & Co-Founder, Harver Space Corp
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "0.95rem",
                color: "var(--muted)",
                lineHeight: 1.7,
                letterSpacing: "0.02em",
                marginBottom: "16px",
              }}
            >
              Corporate consultant, inventor, and strategic catalyst. Forbes 30 Under 30 (Technology, 2018).
              28+ granted patents across aerospace, RF energy, and AI systems. Led the world's first
              miniaturized Synthetic Aperture Radar satellite. Author of the HSI Dispatch newsletter on Medium.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              {[
                { label: "PATENTS", value: "28+" },
                { label: "FORBES 30U30", value: "2018" },
                { label: "SAR PIONEER", value: "FIRST" },
              ].map((b, i) => (
                <div
                  key={i}
                  style={{
                    padding: "8px 16px",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "8px",
                      color: "var(--muted)",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: "2px",
                    }}
                  >
                    {b.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "#ffffff",
                    }}
                  >
                    {b.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Aashrayam + Stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {/* Aashrayam */}
          <div
            className="panel-card reveal reveal-delay-2"
            style={{
              padding: "48px 40px",
              background: "transparent",
              border: "1px solid var(--border)",
              position: "relative",
              overflow: "hidden",
              flex: 1,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              AASHRAYAM
            </div>

            <div
              className="mono-data"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--muted)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              HUMANITARIAN INITIATIVE — 10% PROFIT ALLOCATION
            </div>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "1rem",
                color: "var(--muted)",
                lineHeight: 1.7,
                letterSpacing: "0.02em",
                marginBottom: "24px",
              }}
            >
              Ten percent of all HSI profits are permanently allocated to the Aashrayam
              humanitarian fund — a founding commitment that our commercial success in orbit
              translates directly to benefit on the ground.
            </p>

            <div
              style={{
                padding: "20px",
                border: "1px solid var(--border)",
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "1rem",
                fontStyle: "italic",
                color: "var(--muted)",
                lineHeight: 1.7,
              }}
            >
              "The stars are for everyone. The responsibility is ours."
            </div>
          </div>

          {/* Key Stats */}
          <div
            className="panel-card reveal reveal-delay-3"
            style={{
              padding: "36px 40px",
              background: "transparent",
              border: "1px solid var(--border)",
            }}
          >
            <div
              className="mono-data"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--muted)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              KEY COMPANY METRICS
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              {[
                { num: "28+", label: "Granted Patents" },
                { num: "14", label: "Countries Active" },
                { num: "2026", label: "First Mission" },
                { num: "2029", label: "Constellation Deploy" },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.8rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      lineHeight: 1,
                      marginBottom: "4px",
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    className="mono-data"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "9px",
                      color: "var(--muted)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
