const NotFound = () => (
  <section style={{
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    background: "var(--black)",
    textAlign: "center",
  }}>
    <div className="mono-data" style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.25em", marginBottom: "24px" }}>
      // SIGNAL LOST
    </div>
    <div style={{
      fontFamily: "var(--font-display)",
      fontSize: "clamp(4rem, 10vw, 8rem)",
      fontWeight: 700,
      color: "var(--cyan)",
      lineHeight: 1,
      marginBottom: "16px",
    }}>
      404
    </div>
    <h1 style={{
      fontFamily: "var(--font-display)",
      fontSize: "clamp(1.2rem, 3vw, 2rem)",
      fontWeight: 700,
      color: "var(--white)",
      letterSpacing: "0.1em",
      marginBottom: "24px",
    }}>
      ORBITAL SLOT NOT FOUND
    </h1>
    <p style={{
      fontFamily: "var(--font-light)",
      fontSize: "1.05rem",
      color: "rgba(240,244,255,0.55)",
      maxWidth: "460px",
      lineHeight: 1.8,
      marginBottom: "48px",
      fontWeight: 300,
    }}>
      The coordinates you requested do not correspond to any active HSI sector.
      This trajectory has been logged for review.
    </p>
    <a
      href="/"
      className="btn-primary"
      style={{
        display: "inline-block",
        textDecoration: "none",
      }}
    >
      RETURN TO BASE
    </a>
  </section>
);

export default NotFound;
