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
        {/* About Text */}
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
            marginBottom: "24px",
          }}>
            We are building the legal and technical architecture for sustainable human
            presence in orbit — a framework that will define the next century of
            space operations. The debris problem is civilizational. Our response is proportional.
          </p>
          <p style={{
            fontFamily: "var(--font-light)", fontWeight: 300,
            fontSize: "1.05rem",
            color: "rgba(240,244,255,0.7)",
            lineHeight: 1.9,
          }}>
            From our first operational mission in 2026 to the Orbital Dredger Constellation
            in 2029, HSI is executing a phased roadmap that transforms orbital cleanup from
            a theoretical necessity into a commercially viable, legally authorized service.
          </p>

          {/* Founder */}
          <div style={{
            marginTop: "40px",
            padding: "24px",
            borderLeft: "2px solid var(--cyan)",
            background: "rgba(0,212,255,0.04)",
          }}>
            <div className="mono-data" style={{ fontSize: "10px", color: "var(--cyan)", letterSpacing: "0.2em", marginBottom: "12px" }}>
              FOUNDER
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, color: "var(--white)", letterSpacing: "0.05em", marginBottom: "4px" }}>
              DR. SHAAN SHERIF
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--gold)", letterSpacing: "0.1em", marginBottom: "12px" }}>
              CEO & Co-Founder, Harver Space Corp
            </div>
            <p style={{ fontFamily: "var(--font-light)", fontWeight: 300, fontSize: "0.95rem", color: "rgba(240,244,255,0.6)", lineHeight: 1.8 }}>
              Corporate consultant, inventor, and strategic catalyst. Forbes 30 Under 30 (Technology, 2018).
              28+ granted patents across aerospace, RF energy, and AI systems. Led the world's first
              miniaturized Synthetic Aperture Radar satellite. Author of the HSI Dispatch newsletter on Medium.
            </p>
          </div>
        </div>

        {/* Aashrayam + Stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {/* Aashrayam */}
          <div className="panel-card reveal reveal-delay-2" style={{
            padding: "48px 40px",
            background: "linear-gradient(135deg, rgba(201,168,76,0.05) 0%, rgba(8,12,26,1) 60%)",
            borderColor: "rgba(201,168,76,0.2)",
            position: "relative",
            overflow: "hidden",
            flex: 1,
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
              marginBottom: "24px",
            }}>
              Ten percent of all HSI profits are permanently allocated to the Aashrayam
              humanitarian fund — a founding commitment that our commercial success in orbit
              translates directly to benefit on the ground.
            </p>

            <div style={{
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

          {/* Key Numbers */}
          <div className="panel-card reveal reveal-delay-3" style={{ padding: "36px 40px" }}>
            <div className="corner-bracket tl" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              {[
                { num: "28+", label: "Granted Patents", color: "var(--cyan)" },
                { num: "14", label: "Countries Active", color: "var(--gold)" },
                { num: "2026", label: "First Mission", color: "var(--success)" },
                { num: "2029", label: "Constellation Deploy", color: "var(--cyan2)" },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    color: s.color,
                    lineHeight: 1,
                    marginBottom: "4px",
                  }}>{s.num}</div>
                  <div className="mono-data" style={{ fontSize: "9px", color: "var(--muted)", letterSpacing: "0.12em" }}>
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
