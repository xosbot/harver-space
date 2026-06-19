import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", org: "", email: "", type: "investor", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" style={{ padding: "120px 40px", background: "var(--black)", position: "relative" }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, var(--cyan), transparent)",
        opacity: 0.4,
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal">
          <div className="section-label">CONTACT</div>
          <h2 className="display-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "16px" }}>
            BUILD THE FUTURE<br />
            <span className="cyan-text">OF ORBIT WITH US</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-light)", fontWeight: 300,
            fontSize: "1.05rem",
            color: "rgba(240,244,255,0.55)",
            maxWidth: "560px",
            lineHeight: 1.8,
            marginBottom: "80px",
          }}>
            We are currently engaging qualified investors and sovereign partners for
            Phase I operations. If you are serious about the orbital economy, we want
            to hear from you.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
          {/* Info Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {[
              {
                tag: "INVESTOR INQUIRIES",
                title: "Phase I Capital",
                body: "We are raising seed capital for Phase I operations. Qualified investors interested in the orbital stewardship economy are invited to begin a conversation.",
                color: "var(--cyan)",
              },
              {
                tag: "GOVERNMENT & OPERATOR PARTNERSHIPS",
                title: "Sovereign Authorization",
                body: "If you represent a space agency, satellite operator, or national authority with debris removal requirements, contact our partnerships team directly.",
                color: "var(--gold)",
              },
            ].map((t, i) => (
              <div key={i} className="panel-card reveal hover-glow" style={{ padding: "36px", flex: 1 }}>
                <div className="corner-bracket tl" style={{ borderColor: t.color }} />
                <div className="mono-data" style={{ fontSize: "10px", color: t.color, letterSpacing: "0.2em", marginBottom: "12px" }}>
                  {t.tag}
                </div>
                <h3 style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", fontWeight: 600, color: "var(--white)", marginBottom: "12px", letterSpacing: "0.05em" }}>
                  {t.title}
                </h3>
                <p style={{ fontFamily: "var(--font-light)", fontWeight: 300, fontSize: "0.95rem", color: "rgba(240,244,255,0.6)", lineHeight: 1.7 }}>
                  {t.body}
                </p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="panel-card reveal reveal-delay-2" style={{ padding: "48px 40px" }}>
            <div className="corner-bracket tr" />
            <div className="corner-bracket bl" />

            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: "16px", color: "var(--success)" }}>✓</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--success)", letterSpacing: "0.1em", marginBottom: "12px" }}>
                  TRANSMISSION RECEIVED
                </div>
                <p style={{ fontFamily: "var(--font-light)", fontWeight: 300, color: "rgba(240,244,255,0.6)" }}>
                  Our team will be in contact within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mono-data" style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.2em", marginBottom: "32px" }}>
                  SECURE INQUIRY FORM
                </div>

                {[
                  { key: "name", label: "FULL NAME", type: "text", placeholder: "Your name" },
                  { key: "org", label: "ORGANIZATION", type: "text", placeholder: "Company / Agency / Institution" },
                  { key: "email", label: "EMAIL ADDRESS", type: "email", placeholder: "your@email.com" },
                ].map((f) => (
                  <div key={f.key} style={{ marginBottom: "20px" }}>
                    <label style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--muted)",
                      letterSpacing: "0.2em",
                      display: "block",
                      marginBottom: "8px",
                    }}>{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.key]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      required
                      style={{
                        width: "100%",
                        background: "var(--black)",
                        border: "1px solid var(--border)",
                        padding: "12px 16px",
                        color: "var(--white)",
                        fontFamily: "var(--font-mono)",
                        fontSize: "13px",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => e.target.style.borderColor = "var(--cyan)"}
                      onBlur={(e) => e.target.style.borderColor = "var(--border)"}
                    />
                  </div>
                ))}

                <div style={{ marginBottom: "20px" }}>
                  <label style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--muted)",
                    letterSpacing: "0.2em",
                    display: "block",
                    marginBottom: "8px",
                  }}>INQUIRY TYPE</label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    style={{
                      width: "100%",
                      background: "var(--black)",
                      border: "1px solid var(--border)",
                      padding: "12px 16px",
                      color: "var(--white)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "13px",
                      outline: "none",
                      cursor: "pointer",
                    }}
                  >
                    <option value="investor">Investor Inquiry</option>
                    <option value="government">Government Partnership</option>
                    <option value="operator">Satellite Operator</option>
                    <option value="press">Press & Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: "28px" }}>
                  <label style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--muted)",
                    letterSpacing: "0.2em",
                    display: "block",
                    marginBottom: "8px",
                  }}>MESSAGE</label>
                  <textarea
                    placeholder="Tell us about your interest or requirements..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    style={{
                      width: "100%",
                      background: "var(--black)",
                      border: "1px solid var(--border)",
                      padding: "12px 16px",
                      color: "var(--white)",
                      fontFamily: "var(--font-light)",
                      fontSize: "14px",
                      outline: "none",
                      resize: "vertical",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => e.target.style.borderColor = "var(--cyan)"}
                    onBlur={(e) => e.target.style.borderColor = "var(--border)"}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: "100%" }}>
                  TRANSMIT INQUIRY →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
