const Legal = () => (
  <section id="legal" style={{ padding: "120px 40px", background: "var(--black)", position: "relative" }}>
    <div style={{
      position: "absolute", top: 0, left: 0, right: 0, height: "1px",
      background: "linear-gradient(90deg, transparent, var(--cyan), transparent)",
      opacity: 0.3,
    }} />

    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div className="reveal">
        <div className="section-label">LEGAL FRAMEWORK</div>
        <h2 className="display-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "16px" }}>
          THE LEGAL MOAT<br />
          <span className="gold-text">OTHERS CANNOT CROSS</span>
        </h2>
        <p style={{
          fontFamily: "var(--font-light)", fontWeight: 300,
          fontSize: "1.05rem",
          color: "rgba(240,244,255,0.55)",
          maxWidth: "560px",
          lineHeight: 1.8,
          marginBottom: "80px",
        }}>
          Space debris removal is not merely a technology problem. It is a sovereignty problem.
          HSI's legal architecture is the only commercial framework that solves it.
        </p>
      </div>

      {/* Legal Pillars */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2px", marginBottom: "2px" }}>
        {[
          {
            treaty: "OUTER SPACE TREATY 1967 — ARTICLE VIII",
            title: "Jurisdiction Never Expires",
            body: "Under international law, a satellite remains the legal property of its launching state indefinitely — even when defunct and tumbling. Unlike maritime law, there is no abandoned property doctrine in space. This is the legal deadlock that has prevented cleanup for 60 years.",
            color: "var(--cyan)",
            delay: "reveal-delay-1",
          },
          {
            treaty: "OUTER SPACE TREATY 1967 — ARTICLE IX",
            title: "Neglect is a Treaty Violation",
            body: "Article IX mandates space activities with 'due regard to the corresponding interests of all other States Parties.' HSI's legal position: leaving high-risk debris in LEO is itself a violation of the due regard principle. Orbital neglect has legal consequences.",
            color: "var(--gold)",
            delay: "reveal-delay-2",
          },
          {
            treaty: "HSI INNOVATION — BTL FRAMEWORK",
            title: "Bilateral Transfer of Liability",
            body: "BTL agreements make HSI a licensed sovereign agent for partner nations. We provide first-ever Third-Party Salvage Insurance covering states against accidental fragmentation during capture. Every HSI mission carries the legal authorization no other commercial operator has obtained.",
            color: "var(--success)",
            delay: "reveal-delay-3",
          },
        ].map((p, i) => (
          <div key={i} className={`panel-card reveal hover-glow ${p.delay}`} style={{ padding: "48px 40px" }}>
            <div className="corner-bracket tl" style={{ borderColor: p.color }} />
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: p.color,
              letterSpacing: "0.12em",
              marginBottom: "20px",
              lineHeight: 1.5,
            }}>{p.treaty}</div>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "var(--white)",
              letterSpacing: "0.08em",
              marginBottom: "20px",
            }}>{p.title.toUpperCase()}</h3>
            <p style={{
              fontFamily: "var(--font-light)", fontWeight: 300,
              fontSize: "1rem",
              color: "rgba(240,244,255,0.6)",
              lineHeight: 1.8,
            }}>{p.body}</p>
          </div>
        ))}
      </div>

      {/* Partner Nations */}
      <div className="panel-card reveal" style={{ padding: "40px" }}>
        <div className="corner-bracket tl" />
        <div className="corner-bracket tr" />
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--muted)",
          letterSpacing: "0.25em",
          marginBottom: "24px",
        }}>SOVEREIGN PARTNERS — BTL AUTHORIZATION ACTIVE</div>
        <div style={{ display: "flex", gap: "2px", flexWrap: "wrap" }}>
          {[
            ["USA", "FAA/AST COMPLIANT", "var(--cyan)"],
            ["ESA", "MEMBER STATE AGREEMENTS", "var(--cyan)"],
            ["JAPAN (JAXA)", "BILATERAL AUTHORIZATION", "var(--cyan)"],
            ["UAE SPACE AGENCY", "PARTNER STATUS", "var(--gold)"],
          ].map(([nation, status, color], i) => (
            <div key={i} style={{
              flex: "1 1 200px",
              padding: "20px 24px",
              background: "var(--black)",
              border: "1px solid var(--border)",
              position: "relative",
              transition: "border-color 0.3s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = color}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--border)"}
            >
              <div style={{
                position: "absolute",
                top: 0, left: 0, right: 0, height: "2px",
                background: color,
                opacity: 0.5,
              }} />
              <div style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 700, color: "var(--white)", marginBottom: "6px", letterSpacing: "0.1em" }}>
                {nation}
              </div>
              <div className="mono-data" style={{ fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em" }}>
                {status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Legal;
