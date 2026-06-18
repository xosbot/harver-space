import Counter from "./Counter";

const Problem = () => (
  <section id="mission" style={{
    padding: "120px 40px",
    background: "var(--deep)",
    position: "relative",
    overflow: "hidden",
  }}>
    <div style={{
      position: "absolute",
      top: "-200px", right: "-200px",
      width: "600px", height: "600px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)",
      pointerEvents: "none",
    }} />

    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div className="reveal">
        <div className="section-label">THE PROBLEM</div>
        <h2 className="display-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "16px" }}>
          ORBIT IS FILLING UP.<br />
          <span style={{ color: "var(--cyan)" }}>NO ONE IS CLEANING IT.</span>
        </h2>
        <p style={{
          fontFamily: "var(--font-light)",
          fontSize: "1.1rem",
          color: "rgba(240,244,255,0.6)",
          maxWidth: "600px",
          lineHeight: 1.8,
          marginBottom: "80px",
          fontWeight: 300,
        }}>
          Every defunct satellite and rocket stage remains the sovereign property of its
          launching nation — permanently. No maritime salvage doctrine applies in space.
          The result: a global commons becoming a debris minefield with no legal path to cleanup.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2px" }}>
        {[
          {
            number: 54000,
            suffix: "+",
            label: "Objects ≥10cm in Earth orbit",
            sub: "ESA Space Environment Report 2024",
            color: "var(--cyan)",
            delay: "reveal-delay-1",
          },
          {
            number: 42,
            prefix: "$",
            suffix: "B",
            label: "Industry cost over next decade",
            sub: "If debris crisis goes unaddressed",
            color: "var(--danger)",
            delay: "reveal-delay-2",
          },
          {
            number: 0,
            suffix: "",
            label: "Commercial cross-border removals",
            sub: "No operator has legally done this. Yet.",
            color: "var(--gold)",
            delay: "reveal-delay-3",
          },
        ].map((stat, i) => (
          <div key={i} className={`panel-card reveal ${stat.delay}`} style={{ padding: "48px 40px" }}>
            <div className="corner-bracket tl" />
            <div className="corner-bracket br" />
            <div className="stat-number" style={{ color: stat.color, marginBottom: "16px" }}>
              <Counter target={stat.number} prefix={stat.prefix || ""} suffix={stat.suffix} />
            </div>
            <div style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "var(--white)",
              marginBottom: "8px",
              letterSpacing: "0.05em",
            }}>
              {stat.label}
            </div>
            <div className="mono-data" style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.1em" }}>
              {stat.sub}
            </div>
          </div>
        ))}
      </div>

      <div className="panel-card reveal" style={{ marginTop: "2px", padding: "48px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 600, letterSpacing: "0.15em", color: "var(--cyan)", marginBottom: "20px", textTransform: "uppercase" }}>
              The Sovereignty Paradox
            </h3>
            <p style={{ fontFamily: "var(--font-light)", fontSize: "1rem", color: "rgba(240,244,255,0.65)", lineHeight: 1.8, fontWeight: 300 }}>
              Under Article VIII of the Outer Space Treaty of 1967, jurisdiction and control
              over a space object remain with the State of Registry — indefinitely. Unlike
              maritime law, a satellite cannot be declared abandoned. It remains property even
              when defunct, tumbling, or shattered into fragments.
            </p>
          </div>
          <div>
            <h3 style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 600, letterSpacing: "0.15em", color: "var(--gold)", marginBottom: "20px", textTransform: "uppercase" }}>
              The Economic Reality
            </h3>
            <p style={{ fontFamily: "var(--font-light)", fontSize: "1rem", color: "rgba(240,244,255,0.65)", lineHeight: 1.8, fontWeight: 300 }}>
              Debris-related costs already exceed $100M annually in collision avoidance,
              shielding, and insurance. ESA and OECD estimate 5–10% of total mission cost
              is debris-driven. As constellations scale to tens of thousands of satellites,
              this becomes a multi-billion dollar structural tax on the entire space economy.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Problem;
