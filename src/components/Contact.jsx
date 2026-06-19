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
    background: "transparent",
    border: "1px solid #3a3a3f",
    padding: "12px 16px",
    color: "#ffffff",
    fontFamily: "var(--font-body)",
    fontSize: "16px",
    fontWeight: 400,
    letterSpacing: "0.32px",
    lineHeight: 1.5,
    outline: "none",
  };

  const labelStyle = {
    fontFamily: "var(--font-mono)",
    fontSize: "10px",
    color: "#5a5a5f",
    letterSpacing: "0.96px",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "8px",
    lineHeight: 2.0,
    fontWeight: 400,
  };

  const fieldWrap = { marginBottom: "20px" };

  return (
    <section
      id="contact"
      style={{
        padding: "120px 40px",
        background: "#000000",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal">
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              fontWeight: 400,
              color: "#5a5a5f",
              letterSpacing: "0.96px",
              lineHeight: 2.0,
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            CONTACT
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 4vw, 60px)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              color: "#ffffff",
              margin: "0 0 16px 0",
            }}
          >
            PARTNER WITH US
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "16px",
              color: "#5a5a5f",
              maxWidth: "560px",
              lineHeight: 1.7,
              letterSpacing: "0.32px",
              margin: "0 0 80px 0",
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
              },
              {
                tag: "PARTNERSHIP INQUIRIES",
                title: "Sovereign Authorization",
                body: "If you represent a space agency, satellite operator, or national authority with debris removal requirements, contact our partnerships team directly.",
              },
              {
                tag: "HEADQUARTERS",
                title: "Delhi NCR, India",
                body: "Harver Space Industries Pvt. Ltd.\nSector 62, Noida, Uttar Pradesh 201301\nIndia",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  padding: "36px",
                  flex: 1,
                  background: "#0a0a0a",
                  borderBottom: "1px solid #3a3a3f",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    fontWeight: 400,
                    color: "#5a5a5f",
                    letterSpacing: "0.96px",
                    textTransform: "uppercase",
                    lineHeight: 2.0,
                    marginBottom: "12px",
                  }}
                >
                  {t.tag}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "12px",
                    letterSpacing: "0.32px",
                    lineHeight: 1.5,
                  }}
                >
                  {t.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#5a5a5f",
                    lineHeight: 1.7,
                    letterSpacing: "0.32px",
                    whiteSpace: "pre-line",
                    margin: 0,
                  }}
                >
                  {t.body}
                </p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div
            className="reveal reveal-delay-2"
            style={{
              padding: "48px 40px",
              background: "#0a0a0a",
              borderLeft: "1px solid #3a3a3f",
            }}
          >
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "16px",
                    color: "#ffffff",
                  }}
                >
                  ✓
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "1.17px",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  TRANSMISSION RECEIVED
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#5a5a5f",
                    letterSpacing: "0.32px",
                    margin: 0,
                  }}
                >
                  Our team will be in contact within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#5a5a5f",
                    letterSpacing: "0.96px",
                    textTransform: "uppercase",
                    lineHeight: 2.0,
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
                      resize: "vertical",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "1px solid #ffffff",
                    borderRadius: "32px",
                    color: "#ffffff",
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "1.17px",
                    textTransform: "uppercase",
                    lineHeight: 0.94,
                    padding: "18px 24px",
                    cursor: "pointer",
                  }}
                >
                  TRANSMIT INQUIRY
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
