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
          }}>
            We are building the legal and technical architecture for sustainable human
            presence in orbit — a framework that will define the next century of
            space operations. The debris problem is civilizational. Our response is proportional.
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
              miniaturized Synthetic Aperture Radar satellite.
            </p>
          </div>
        </div>

        <div className="panel-card reveal reveal-delay-2" style={{
          padding: "48px 40px",
          background: "linear-gradient(135deg, rgba(201,168,76,0.05) 0%, rgba(8,12,26,1) 60%)",
          borderColor: "rgba(201,168,76,0.2)",
          position: "relative",
          overflow: "hidden",
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
          }}>
            Ten percent of all HSI profits are permanently allocated to the Aashrayam
            humanitarian fund — a founding commitment that our commercial success in orbit
            translates directly to benefit on the ground.
          </p>

          <div style={{
            marginTop: "32px",
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
      </div>
    </div>
  </section>
);

export default About;
