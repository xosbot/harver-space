const socials = [
  { name: "X", url: "https://x.com/HarverSpace", icon: "𝕏" },
  { name: "LinkedIn", url: "https://linkedin.com/company/harver-space", icon: "in" },
  { name: "YouTube", url: "https://youtube.com/@HarverSpace", icon: "▶" },
  { name: "Medium", url: "https://medium.com/hsi-dispatch", icon: "M" },
];

const SocialBar = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "24px",
      padding: "20px 40px",
      background: "rgba(0,212,255,0.03)",
      borderBottom: "1px solid var(--border)",
    }}
  >
    {socials.map((s, i) => (
      <a
        key={i}
        href={s.url}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--muted)",
          letterSpacing: "0.1em",
          textDecoration: "none",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
      >
        <span
          style={{
            width: "24px",
            height: "24px",
            border: "1px solid currentColor",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "10px",
            fontWeight: 700,
          }}
        >
          {s.icon}
        </span>
        {s.name}
      </a>
    ))}
  </div>
);

export default SocialBar;
