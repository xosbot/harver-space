import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section style={{
      padding: "80px 40px",
      background: "var(--black)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <div className="section-label" style={{ marginBottom: "16px" }}>NEWSLETTER</div>
        <h2 className="display-title" style={{
          fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
          lineHeight: 0.95,
          letterSpacing: "0.08em",
          marginBottom: "12px",
          textTransform: "uppercase",
        }}>
          STAY IN THE ORBIT
        </h2>
        <p style={{
          fontFamily: "var(--font-body)",
          fontWeight: 400,
          fontSize: "0.95rem",
          color: "var(--muted)",
          marginBottom: "32px",
          lineHeight: 1.7,
        }}>
          Mission updates, regulatory milestones, and market intelligence.
          Delivered monthly. No spam.
        </p>

        {subscribed ? (
          <div style={{
            padding: "16px 24px",
            border: "1px solid var(--border)",
            color: "var(--muted)",
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            letterSpacing: "0.1em",
            background: "transparent",
          }}>
            ✓ SUBSCRIBED — WELCOME TO THE ORBIT
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{
            display: "flex",
            gap: "2px",
            maxWidth: "480px",
            margin: "0 auto",
          }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              style={{
                flex: 1,
                padding: "14px 20px",
                background: "var(--black)",
                border: "1px solid var(--border)",
                color: "var(--white)",
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                outline: "none",
              }}
              onFocus={(e) => e.target.style.borderColor = "var(--white)"}
              onBlur={(e) => e.target.style.borderColor = "var(--border)"}
            />
            <button type="submit" className="btn-primary" style={{
              padding: "14px 28px",
              fontSize: "11px",
              letterSpacing: "0.15em",
              whiteSpace: "nowrap",
              border: "1px solid var(--white)",
              background: "transparent",
              borderRadius: "32px",
              color: "var(--white)",
              fontFamily: "var(--font-mono)",
              cursor: "pointer",
            }}>
              SUBSCRIBE
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
