const Technology = () => {
  const phases = [
    {
      num: "01",
      name: "LiDAR Synchronization",
      detail: "AI-driven sub-millisecond thruster bursts match the SV-1 vessel's rotation to the debris tumbling frequency before any physical contact is made.",
      specs: [
        { label: "Targeting Precision", value: "±0.1°" },
        { label: "Response Time", value: "<2ms" },
        { label: "Range", value: "50m → 0m" },
      ],
      color: "var(--cyan)",
      icon: "◎",
    },
    {
      num: "02",
      name: "Magnetic Soft-Dock",
      detail: "Eddy-Current Braking System projects high-intensity magnetic flux — inducing electrical currents in the aluminum debris hull to dampen spin contactlessly.",
      specs: [
        { label: "Magnetic Flux", value: "2.4 T" },
        { label: "Spin Reduction", value: "98.3%" },
        { label: "Fragmentation Risk", value: "0.0%" },
      ],
      color: "var(--gold)",
      icon: "◈",
    },
    {
      num: "03",
      name: "Mechanical Embrace",
      detail: "Four articulated carbon-fiber arms with tactile haptic sensors lock onto structural hardpoints — typically the engine bell or adapter ring.",
      specs: [
        { label: "Arm Count", value: "4× Articulated" },
        { label: "Grip Force", value: "12 kN" },
        { label: "Sensor Array", value: "Tactile Haptic" },
      ],
      color: "var(--success)",
      icon: "⊕",
    },
  ];

  const specs = [
    ["Maximum Capture Mass", "12,000 kg"],
    ["Operating Temperature", "-150°C to +120°C"],
    ["Targeting System", "LiDAR + AI Attitude Match"],
    ["De-tumbling Method", "Eddy-Current Induction"],
    ["Capture Arms", "4 × Articulated Carbon-Fiber"],
    ["Arm Sensors", "Tactile Haptic Array"],
    ["Capture Sequence", "3-Phase Protocol"],
    ["Classification", "Uncooperative Debris Capable"],
    ["Power Consumption", "2.4 kW (capture mode)"],
    ["Communication", "Ka-Band + Laser Link"],
  ];

  return (
    <section id="technology" style={{ padding: "120px 40px", background: "var(--deep)", position: "relative" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal">
          <div className="section-label">CAPTURE TECHNOLOGY</div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "1.6px",
            textTransform: "uppercase",
            color: "var(--white)",
            marginBottom: "16px",
          }}>
            HARVER-CLAW<br />
            MARK III
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
            Capturing a dead satellite is a kinetic nightmare. Without an active Attitude
            Control System, debris often tumbles on multiple axes simultaneously. The
            Harver-Claw Mark III is engineered specifically for this problem.
          </p>
        </div>

        {/* Hero Image */}
        <div className="reveal reveal-delay-1" style={{
          marginBottom: "48px",
          position: "relative",
          overflow: "hidden",
          border: "1px solid var(--border)",
          background: "var(--panel)",
        }}>
          <img
            src="/images/satellite.jpg"
            alt="Harver-Claw capture system"
            loading="lazy"
            style={{
              width: "100%",
              height: "420px",
              objectFit: "cover",
              display: "block",
              filter: "brightness(0.7) contrast(1.1)",
            }}
          />
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
            background: "linear-gradient(to top, var(--panel), transparent)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute",
            bottom: "24px",
            left: "32px",
            right: "32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}>
            <div>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.25em",
                color: "var(--cyan)",
                marginBottom: "6px",
                textTransform: "uppercase",
              }}>
                ORBITAL DEBRIS CAPTURE PLATFORM
              </div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "var(--white)",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
              }}>
                HARVER-CLAW MK III
              </div>
            </div>
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--muted)",
              letterSpacing: "0.15em",
            }}>
              CAPTURE SUCCESS RATE: 99.7%
            </div>
          </div>
        </div>

        {/* Three-Phase Visual Flow */}
        <div className="reveal reveal-delay-1" style={{
          marginBottom: "48px",
          padding: "40px",
          background: "var(--panel)",
          border: "1px solid var(--border)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.25em",
            color: "var(--cyan)",
            marginBottom: "32px",
            textTransform: "uppercase",
          }}>
            // THREE-PHASE CAPTURE SEQUENCE — ANIMATED FLOW
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
            position: "relative",
          }}>
            {phases.map((ph, i) => (
              <div key={i} style={{
                padding: "32px 24px",
                background: "rgba(0,212,255,0.03)",
                position: "relative",
                textAlign: "center",
              }}>
                {/* Phase Icon */}
                <div style={{
                  width: "64px",
                  height: "64px",
                  margin: "0 auto 20px",
                  borderRadius: "50%",
                  border: `1px solid ${ph.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-mono)",
                  fontSize: "24px",
                  color: ph.color,
                }}>
                  {ph.icon}
                </div>

                {/* Phase Label */}
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  color: ph.color,
                  marginBottom: "8px",
                  textTransform: "uppercase",
                }}>
                  PHASE {ph.num}
                </div>

                {/* Phase Name */}
                <div style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "var(--white)",
                  marginBottom: "12px",
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                }}>
                  {ph.name}
                </div>

                {/* Phase Detail */}
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  fontSize: "0.85rem",
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  marginBottom: "20px",
                }}>
                  {ph.detail}
                </p>

                {/* Phase Specs */}
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0",
                }}>
                  {ph.specs.map((spec, j) => (
                    <div key={j} style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "8px 12px",
                      borderBottom: j < ph.specs.length - 1 ? "1px solid var(--border)" : "none",
                    }}>
                      <span style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
                        color: "var(--muted)",
                        letterSpacing: "0.1em",
                      }}>
                        {spec.label}
                      </span>
                      <span style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        color: ph.color,
                      }}>
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Connector Arrow */}
                {i < phases.length - 1 && (
                  <div style={{
                    position: "absolute",
                    right: "-16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "32px",
                    height: "1px",
                    background: "var(--border)",
                    zIndex: 2,
                  }}>
                    <div style={{
                      position: "absolute",
                      right: 0,
                      top: "-4px",
                      width: 0,
                      height: 0,
                      borderLeft: "8px solid var(--border)",
                      borderTop: "4px solid transparent",
                      borderBottom: "4px solid transparent",
                    }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications + Compliance */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
          {/* Specs Panel */}
          <div className="reveal reveal-delay-2" style={{
            padding: "48px 40px",
            background: "var(--panel)",
            border: "1px solid var(--border)",
          }}>
            <h3 style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.25em",
              color: "var(--cyan)",
              marginBottom: "32px",
              textTransform: "uppercase",
            }}>
              TECHNICAL SPECIFICATIONS — MK III
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {specs.map(([key, val], i) => (
                <div key={i} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 0",
                  borderBottom: "1px solid var(--border)",
                }}>
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--muted)",
                    letterSpacing: "0.1em",
                  }}>
                    {key}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--cyan)",
                    letterSpacing: "0.05em",
                  }}>
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance + Performance Panel */}
          <div className="reveal reveal-delay-3" style={{
            padding: "48px 40px",
            background: "var(--panel)",
            border: "1px solid var(--border)",
          }}>
            <h3 style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.25em",
              color: "var(--cyan)",
              marginBottom: "32px",
              textTransform: "uppercase",
            }}>
              COMPLIANCE & PERFORMANCE
            </h3>

            {/* Compliance Status */}
            <div style={{
              padding: "20px",
              background: "transparent",
              border: "1px solid rgba(0,255,136,0.15)",
              marginBottom: "24px",
            }}>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--success)",
                letterSpacing: "0.2em",
                marginBottom: "16px",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}>
                <span className="status-dot" />
                COMPLIANCE STATUS — LIVE
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  "UN OOSA Registration",
                  "Sovereign Consent Framework",
                  "FAA/AST Authorization",
                  "ESA Space Safety Compliance",
                  "JAXA Coordination Agreement",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ color: "var(--success)", fontSize: "12px" }}>✓</span>
                    <span style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 400,
                      fontSize: "0.85rem",
                      color: "var(--muted)",
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Metrics */}
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.2em",
              color: "var(--cyan)",
              marginBottom: "16px",
              textTransform: "uppercase",
            }}>
              // SIMULATED PERFORMANCE
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "Capture Success Rate", value: "99.7%", bar: "99.7%" },
                { label: "De-tumble Efficiency", value: "98.3%", bar: "98.3%" },
                { label: "Arm Precision", value: "±0.5mm", bar: "95%" },
              ].map((metric, i) => (
                <div key={i}>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "6px",
                  }}>
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--muted)",
                      letterSpacing: "0.1em",
                    }}>
                      {metric.label}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--cyan)",
                    }}>
                      {metric.value}
                    </span>
                  </div>
                  <div style={{
                    height: "4px",
                    background: "rgba(0,212,255,0.1)",
                    overflow: "hidden",
                  }}>
                    <div
                      className="infographic-bar"
                      style={{
                        width: metric.bar,
                        height: "100%",
                        background: "var(--cyan)",
                        "--bar-width": metric.bar,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
