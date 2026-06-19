const Legal = () => (
  <section id="legal" style={{ padding: "120px 40px", background: "var(--black)", position: "relative" }}>
    <div style={{
      position: "absolute", top: 0, left: 0, right: 0, height: "1px",
      background: "var(--border)",
    }} />

    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div className="reveal">
        <div className="section-label">LEGAL ARCHITECTURE</div>
        <h2 className="display-title" style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          fontWeight: 700,
          textTransform: "uppercase",
          lineHeight: 1.1,
          letterSpacing: "0.08em",
          marginBottom: "16px",
        }}>
          THE BTL FRAMEWORK<br />
          <span className="gold-text">OTHERS CANNOT CROSS</span>
        </h2>
        <p style={{
          fontFamily: "var(--font-body)",
          fontWeight: 400,
          fontSize: "1.05rem",
          color: "var(--muted)",
          maxWidth: "560px",
          lineHeight: 1.7,
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
            delay: "reveal-delay-1",
          },
          {
            treaty: "OUTER SPACE TREATY 1967 — ARTICLE IX",
            title: "Neglect is a Treaty Violation",
            body: "Article IX mandates space activities with 'due regard to the corresponding interests of all other States Parties.' HSI's legal position: leaving high-risk debris in LEO is itself a violation of the due regard principle. Orbital neglect has legal consequences.",
            delay: "reveal-delay-2",
          },
          {
            treaty: "HSI INNOVATION — BTL FRAMEWORK",
            title: "Bilateral Transfer of Liability",
            body: "BTL agreements make HSI a licensed sovereign agent for partner nations. We provide first-ever Third-Party Salvage Insurance covering states against accidental fragmentation during capture. Every HSI mission carries the legal authorization no other commercial operator has obtained.",
            delay: "reveal-delay-3",
          },
        ].map((p, i) => (
          <div key={i} className={`panel-card reveal ${p.delay}`} style={{ padding: "48px 40px", border: "1px solid var(--border)", background: "transparent" }}>
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--muted)",
              letterSpacing: "0.12em",
              marginBottom: "20px",
              lineHeight: 1.5,
            }}>{p.treaty}</div>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "var(--white)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "20px",
            }}>{p.title.toUpperCase()}</h3>
            <p style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "1rem",
              color: "var(--muted)",
              lineHeight: 1.8,
            }}>{p.body}</p>
          </div>
        ))}
      </div>

      {/* BTL Transfer Diagram */}
      <div className="panel-card reveal" style={{ padding: "48px 40px", marginBottom: "2px", border: "1px solid var(--border)", background: "transparent" }}>
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--muted)",
          letterSpacing: "0.25em",
          marginBottom: "32px",
        }}>BILATERAL TRANSFER OF LIABILITY — VISUAL FRAMEWORK</div>

        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0",
          flexWrap: "wrap",
          marginBottom: "32px",
        }}>
          {/* Nation */}
          <div style={{
            padding: "24px 32px",
            border: "1px solid var(--border)",
            textAlign: "center",
            minWidth: "160px",
          }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.2em", marginBottom: "8px" }}>PARTNER NATION</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 700, color: "var(--white)" }}>Sovereign State</div>
          </div>

          {/* Arrow */}
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center", padding: "0 16px",
          }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "var(--muted)", letterSpacing: "0.15em", marginBottom: "4px" }}>BTL AGREEMENT</div>
            <div style={{ width: "80px", height: "1px", background: "var(--border)", position: "relative" }}>
              <div style={{ position: "absolute", right: "-4px", top: "-3px", width: 0, height: 0, borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: "8px solid var(--border)" }} />
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "var(--muted)", letterSpacing: "0.1em", marginTop: "4px" }}>LIABILITY TRANSFER</div>
          </div>

          {/* HSI */}
          <div style={{
            padding: "24px 32px",
            border: "1px solid var(--border)",
            textAlign: "center",
            minWidth: "160px",
          }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.2em", marginBottom: "8px" }}>HSI</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 700, color: "var(--white)" }}>Licensed Agent</div>
          </div>

          {/* Arrow */}
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center", padding: "0 16px",
          }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "var(--muted)", letterSpacing: "0.15em", marginBottom: "4px" }}>SALVAGE OPS</div>
            <div style={{ width: "80px", height: "1px", background: "var(--border)", position: "relative" }}>
              <div style={{ position: "absolute", right: "-4px", top: "-3px", width: 0, height: 0, borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: "8px solid var(--border)" }} />
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "var(--muted)", letterSpacing: "0.1em", marginTop: "4px" }}>THIRD-PARTY COVERED</div>
          </div>

          {/* Debris */}
          <div style={{
            padding: "24px 32px",
            border: "1px solid var(--border)",
            textAlign: "center",
            minWidth: "160px",
          }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.2em", marginBottom: "8px" }}>TARGET DEBRIS</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 700, color: "var(--white)" }}>Orbital Object</div>
          </div>
        </div>

        <div style={{
          padding: "16px 24px",
          borderLeft: "2px solid var(--border)",
          fontFamily: "var(--font-body)",
          fontWeight: 400,
          fontSize: "0.95rem",
          color: "var(--muted)",
          lineHeight: 1.7,
        }}>
          Every HSI mission carries First-Ever Third-Party Salvage Insurance — covering partner nations against accidental fragmentation during capture. This is the legal protection no other commercial operator has obtained.
        </div>
      </div>

      {/* Partner Nations */}
      <div className="panel-card reveal" style={{ padding: "40px", border: "1px solid var(--border)", background: "transparent" }}>
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--muted)",
          letterSpacing: "0.25em",
          marginBottom: "24px",
        }}>SOVEREIGN PARTNERS — BTL AUTHORIZATION ACTIVE</div>
        <div style={{ display: "flex", gap: "2px", flexWrap: "wrap" }}>
          {[
            { nation: "UNITED STATES", status: "FAA/AST COMPLIANT" },
            { nation: "EUROPEAN UNION", status: "ESA MEMBER STATE AGREEMENTS" },
            { nation: "JAPAN", status: "JAXA BILATERAL AUTHORIZATION" },
            { nation: "UAE", status: "SPACE AGENCY PARTNER STATUS" },
            { nation: "UNITED KINGDOM", status: "UKSA COOPERATION FRAMEWORK" },
          ].map((p, i) => (
            <div key={i} style={{
              flex: "1 1 180px",
              padding: "24px",
              border: "1px solid var(--border)",
              textAlign: "center",
            }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", fontWeight: 700, color: "var(--white)", marginBottom: "6px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {p.nation}
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.1em" }}>
                {p.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Treaty Compliance Checklist */}
      <div className="panel-card reveal" style={{ marginTop: "2px", padding: "40px", border: "1px solid var(--border)", background: "transparent" }}>
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--muted)",
          letterSpacing: "0.25em",
          marginBottom: "24px",
        }}>TREATY COMPLIANCE CHECKLIST</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
          {[
            { item: "Outer Space Treaty 1967 — Art. VIII Compliance", status: "VERIFIED" },
            { item: "Outer Space Treaty 1967 — Art. IX Due Regard", status: "VERIFIED" },
            { item: "Liability Convention 1972 — State Responsibility", status: "COVERED" },
            { item: "Registration Convention 1976 — Object Tracking", status: "ACTIVE" },
            { item: "UN Long-Term Sustainability Guidelines", status: "ALIGNED" },
            { item: "FCC 5-Year Deorbit Rule (US Operators)", status: "COMPLIANT" },
          ].map((c, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "16px 20px",
              border: "1px solid var(--border)",
            }}>
              <div style={{
                width: "20px", height: "20px",
                borderRadius: "50%",
                border: "1.5px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.5 }}>
                  {c.item}
                </div>
              </div>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                padding: "3px 8px",
                border: "1px solid var(--border)",
                color: "var(--muted)",
                letterSpacing: "0.15em",
                flexShrink: 0,
              }}>{c.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Legal;
