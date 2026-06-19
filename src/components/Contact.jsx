import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    type: "investor",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const update = (key, val) => setForm({ ...form, [key]: val });

  const inputStyle = {
    width: "100%",
    background: "var(--black)",
    border: "1px solid var(--border)",
    padding: "12px 16px",
    color: "var(--white)",
    fontFamily: "var(--font-mono)",
    fontSize: "13px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    fontFamily: "var(--font-mono)",
    fontSize: "10px",
    color: "var(--muted)",
    letterSpacing: "0.2em",
    display: "block",
    marginBottom: "8px",
  };

  const fieldWrap = { marginBottom: "20px" };

  return (
    <section
      id="contact"
      style={{
        padding: "120px 40px",
        background: "var(--black)",
        position: "relative",
        backgroundImage: "url('/images/earth-atmosphere.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(5,7,15,0.92)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--cyan), transparent)",
          opacity: 0.4,
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal">
          <div className="section-label">CONTACT</div>
          <h2
            className="display-title"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "16px" }}
          >
            PARTNER WITH US
          </h2>
          <p
            style={{
              fontFamily: "var(--font-light)",
              fontWeight: 300,
              fontSize: "1.05rem",
              color: "rgba(240,244,255,0.55)",
              maxWidth: "560px",
              lineHeight: 1.8,
              marginBottom: "80px",
            }}
          >
            We engage investors, satellite operators, space agencies, and sovereign
            partners for Phase I operations. Begin a conversation below.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "2px" }}>
          {/* Info Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {[
              {
                tag: "INVESTOR RELATIONS",
                title: "Phase I Capital",
                body: "We are raising seed capital for Phase I operations. Qualified investors interested in the orbital stewardship economy are invited to begin a conversation.",
                color: "var(--cyan)",
              },
              {
                tag: "PARTNERSHIP INQUIRIES",
                title: "Sovereign Authorization",
                body: "If you represent a space agency, satellite operator, or national authority with debris removal requirements, contact our partnerships team directly.",
                color: "var(--gold)",
              },
              {
                tag: "HEADQUARTERS",
                title: "Delhi NCR, India",
                body: "Harver Space Industries Pvt. Ltd.\nSector 62, Noida, Uttar Pradesh 201301\nIndia",
                color: "var(--cyan)",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="panel-card reveal hover-glow"
                style={{ padding: "36px", flex: 1 }}
              >
                <div className="corner-bracket tl" style={{ borderColor: t.color }} />
                <div
                  className="mono-data"
                  style={{
                    fontSize: "10px",
                    color: t.color,
                    letterSpacing: "0.2em",
                    marginBottom: "12px",
                  }}
                >
                  {t.tag}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "var(--white)",
                    marginBottom: "12px",
                    letterSpacing: "0.05em",
                  }}
                >
                  {t.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-light)",
                    fontWeight: 300,
                    fontSize: "0.95rem",
                    color: "rgba(240,244,255,0.6)",
                    lineHeight: 1.7,
                    whiteSpace: "pre-line",
                  }}
                >
                  {t.body}
                </p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div
            className="panel-card reveal reveal-delay-2"
            style={{ padding: "48px 40px" }}
          >
            <div className="corner-bracket tr" />
            <div className="corner-bracket bl" />

            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "16px",
                    color: "var(--success)",
                  }}
                >
                  ✓
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    color: "var(--success)",
                    letterSpacing: "0.1em",
                    marginBottom: "12px",
                  }}
                >
                  TRANSMISSION RECEIVED
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-light)",
                    fontWeight: 300,
                    color: "rgba(240,244,255,0.6)",
                  }}
                >
                  Our team will be in contact within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  className="mono-data"
                  style={{
                    fontSize: "11px",
                    color: "var(--muted)",
                    letterSpacing: "0.2em",
                    marginBottom: "32px",
                  }}
                >
                  SECURE INQUIRY FORM
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  {[
                    { key: "name", label: "FULL NAME", type: "text", placeholder: "Your name" },
                    { key: "email", label: "EMAIL", type: "email", placeholder: "your@email.com" },
                    { key: "company", label: "COMPANY", type: "text", placeholder: "Company / Agency" },
                    { key: "phone", label: "PHONE", type: "tel", placeholder: "+1 (555) 000-0000" },
                  ].map((f) => (
                    <div key={f.key} style={fieldWrap}>
                      <label style={labelStyle}>{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.key]}
                        onChange={(e) => update(f.key, e.target.value)}
                        required
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "var(--cyan)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                      />
                    </div>
                  ))}
                </div>

                <div style={fieldWrap}>
                  <label style={labelStyle}>INQUIRY TYPE</label>
                  <select
                    value={form.type}
                    onChange={(e) => update("type", e.target.value)}
                    style={{
                      ...inputStyle,
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

                <div style={fieldWrap}>
                  <label style={labelStyle}>SUBJECT</label>
                  <input
                    type="text"
                    placeholder="Subject of inquiry"
                    value={form.subject}
                    onChange={(e) => update("subject", e.target.value)}
                    required
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--cyan)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>

                <div style={{ marginBottom: "28px" }}>
                  <label style={labelStyle}>MESSAGE</label>
                  <textarea
                    placeholder="Tell us about your interest or requirements..."
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    rows={5}
                    required
                    style={{
                      ...inputStyle,
                      fontFamily: "var(--font-light)",
                      fontSize: "14px",
                      resize: "vertical",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--cyan)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
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
