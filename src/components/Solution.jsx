const Solution = () => (
  <section style={{ padding: "120px 40px", background: "var(--black)" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div className="reveal">
        <div className="section-label">OUR SOLUTION</div>
        <h2 className="display-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "64px" }}>
          THREE SYSTEMS.<br />
          <span className="cyan-text">ONE MISSION.</span>
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2px" }}>
        {[
          {
            num: "01",
            title: "Legal Architecture",
            subtitle: "Bilateral Transfer of Liability",
            body: "HSI has pioneered the BTL agreement framework — making us a licensed sovereign agent for partner nations. This is the legal moat no competitor has built. We have pre-clearance with the US (FAA/AST), ESA member states, JAXA, and the UAE Space Agency.",
            tag: "LEGAL MOAT",
            color: "var(--gold)",
            delay: "reveal-delay-1",
          },
          {
            num: "02",
            title: "Capture Technology",
            subtitle: "Harver-Claw Mark III",
            body: "A three-phase uncooperative capture system: LiDAR synchronization, magnetic eddy-current de-tumbling, and four-arm mechanical embrace. Maximum capture mass: 12,000 kg. Operates at -150°C. Designed for the toughest orbital conditions.",
            tag: "PROPRIETARY R&D",
            color: "var(--cyan)",
            delay: "reveal-delay-2",
          },
          {
            num: "03",
            title: "Operations Platform",
            subtitle: "SV-1 Vessel + Constellation",
            body: "Our SV-1 servicing vessel executes debris capture and graveyard orbit transfer. By 2029, six autonomous SV-1 units will form the Orbital Dredger Constellation — dedicated to continuous 800km Sun-Synchronous orbit cleaning campaigns.",
            tag: "2029 DEPLOYMENT",
            color: "var(--success)",
            delay: "reveal-delay-3",
          },
        ].map((p, i) => (
          <div key={i} className={`panel-card reveal ${p.delay}`} style={{ padding: "48px 40px", position: "relative" }}>
            <div className="corner-bracket tl" style={{ borderColor: p.color }} />
            <div className="corner-bracket br" style={{ borderColor: p.color }} />

            <div style={{
              fontFamily: "var(--font-display)",
              fontSize: "4rem",
              fontWeight: 700,
              color: "rgba(240,244,255,0.05)",
              lineHeight: 1,
              marginBottom: "24px",
              letterSpacing: "0.05em",
            }}>{p.num}</div>

            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.25em",
              color: p.color,
              marginBottom: "12px",
              textTransform: "uppercase",
            }}>{p.tag}</div>

            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "var(--white)",
              marginBottom: "6px",
            }}>{p.title.toUpperCase()}</h3>

            <div style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              color: p.color,
              fontWeight: 500,
              marginBottom: "20px",
              letterSpacing: "0.05em",
            }}>{p.subtitle}</div>

            <p style={{
              fontFamily: "var(--font-light)",
              fontSize: "1rem",
              color: "rgba(240,244,255,0.6)",
              lineHeight: 1.8,
              fontWeight: 300,
            }}>{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Solution;
