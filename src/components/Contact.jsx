import { useState } from "react";

const socials = [
  { name: "X", url: "https://x.com/HarverSpace", icon: "𝕏" },
  { name: "LinkedIn", url: "https://linkedin.com/company/harver-space", icon: "in" },
  { name: "YouTube", url: "https://youtube.com/@HarverSpace", icon: "▶" },
  { name: "Medium", url: "https://medium.com/hsi-dispatch", icon: "M" },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const update = (key, val) => setForm({ ...form, [key]: val });

  const glassInputStyle = {
    width: "100%",
    background: "var(--glass-bg)",
    backdropFilter: "blur(20px) saturate(1.2)",
    WebkitBackdropFilter: "blur(20px) saturate(1.2)",
    border: "1px solid var(--glass-border)",
    borderRadius: "8px",
    padding: "14px 18px",
    color: "var(--stellar)",
    fontFamily: "var(--font-body)",
    fontSize: "15px",
    fontWeight: 400,
    letterSpacing: "0.02em",
    lineHeight: 1.5,
    outline: "none",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  };

  const labelStyle = {
    fontFamily: "var(--font-mono)",
    fontSize: "11px",
    fontWeight: 400,
    color: "var(--silver)",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "10px",
    lineHeight: 1.6,
  };

  const fieldWrap = { marginBottom: "24px" };

  return (
    <section
      id="contact"
      style={{
        padding: "120px 40px",
        background: "var(--void)",
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
              color: "var(--silver)",
              letterSpacing: "0.2em",
              lineHeight: 1.6,
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            GET IN TOUCH
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "var(--stellar)",
              margin: "0 0 16px 0",
            }}
          >
            Start the Conversation
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "1rem",
              color: "var(--silver)",
              maxWidth: "560px",
              lineHeight: 1.7,
              letterSpacing: "0.02em",
              margin: "0 0 80px 0",
            }}
          >
            We engage investors, satellite operators, space agencies, and sovereign
            partners for Phase I operations. Begin a conversation below.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
          }}
        >
          {/* Left: Contact Form */}
          <div className="reveal">
            {sent ? (
              <div
                className="glass"
                style={{
                  textAlign: "center",
                  padding: "60px 40px",
                  borderRadius: "16px",
                }}
              >
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
                    fontWeight: 700,
                    color: "var(--stellar)",
                    letterSpacing: "0.08em",
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
                    fontSize: "15px",
                    color: "var(--silver)",
                    letterSpacing: "0.02em",
                    margin: 0,
                  }}
                >
                  Our team will be in contact within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  <div style={fieldWrap}>
                    <label style={labelStyle}>Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      required
                      style={glassInputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--aurora)";
                        e.target.style.boxShadow = "0 0 20px var(--aurora-soft)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--glass-border)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                  <div style={fieldWrap}>
                    <label style={labelStyle}>Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      required
                      style={glassInputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--aurora)";
                        e.target.style.boxShadow = "0 0 20px var(--aurora-soft)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--glass-border)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                <div style={fieldWrap}>
                  <label style={labelStyle}>Company</label>
                  <input
                    type="text"
                    placeholder="Company / Agency"
                    value={form.company}
                    onChange={(e) => update("company", e.target.value)}
                    required
                    style={glassInputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--aurora)";
                      e.target.style.boxShadow = "0 0 20px var(--aurora-soft)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--glass-border)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                <div style={{ marginBottom: "32px" }}>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    placeholder="Tell us about your interest or requirements..."
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    rows={5}
                    required
                    style={{
                      ...glassInputStyle,
                      resize: "vertical",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--aurora)";
                      e.target.style.boxShadow = "0 0 20px var(--aurora-soft)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--glass-border)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: "100%" }}>
                  TRANSMIT INQUIRY
                </button>
              </form>
            )}
          </div>

          {/* Right: Contact Info */}
          <div className="reveal reveal-delay-2">
            <div
              className="glass"
              style={{
                padding: "48px 40px",
                borderRadius: "16px",
                height: "fit-content",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  fontWeight: 400,
                  color: "var(--silver)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "32px",
                  lineHeight: 1.6,
                }}
              >
                CONTACT INFORMATION
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--silver-dim)",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    Address
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "15px",
                      fontWeight: 400,
                      color: "var(--stellar)",
                      lineHeight: 1.6,
                      letterSpacing: "0.02em",
                    }}
                  >
                    Sector 62, Noida, UP 201301, India
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--silver-dim)",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    Email
                  </div>
                  <a
                    href="mailto:contact@harverspace.com"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "15px",
                      fontWeight: 400,
                      color: "var(--aurora)",
                      lineHeight: 1.6,
                      letterSpacing: "0.02em",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "var(--stellar)")}
                    onMouseLeave={(e) => (e.target.style.color = "var(--aurora)")}
                  >
                    contact@harverspace.com
                  </a>
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--silver-dim)",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    Phone
                  </div>
                  <a
                    href="tel:+911204567890"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "15px",
                      fontWeight: 400,
                      color: "var(--stellar)",
                      lineHeight: 1.6,
                      letterSpacing: "0.02em",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "var(--aurora)")}
                    onMouseLeave={(e) => (e.target.style.color = "var(--stellar)")}
                  >
                    +91 120 456 7890
                  </a>
                </div>
              </div>

              <div
                style={{
                  marginTop: "40px",
                  paddingTop: "32px",
                  borderTop: "1px solid var(--glass-border)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--silver-dim)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                  }}
                >
                  Follow Us
                </div>
                <div style={{ display: "flex", gap: "12px" }}>
                  {socials.map((s, i) => (
                    <a
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "8px",
                        border: "1px solid var(--glass-border)",
                        background: "var(--glass-bg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                        fontWeight: 700,
                        color: "var(--silver)",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--aurora)";
                        e.currentTarget.style.color = "var(--stellar)";
                        e.currentTarget.style.boxShadow = "0 0 20px var(--aurora-soft)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--glass-border)";
                        e.currentTarget.style.color = "var(--silver)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
