const DebrisVisualization = () => (
  <svg viewBox="0 0 800 500" style={{ width: "100%", height: "auto" }}>
    <defs>
      <radialGradient id="earthGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#1a3a5c" />
        <stop offset="60%" stopColor="#0d2137" />
        <stop offset="100%" stopColor="#050a14" />
      </radialGradient>
      <radialGradient id="atmosphere" cx="50%" cy="50%" r="50%">
        <stop offset="80%" stopColor="transparent" />
        <stop offset="100%" stopColor="rgba(125,211,252,0.3)" />
      </radialGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Earth */}
    <circle cx="400" cy="250" r="80" fill="url(#earthGrad)" />
    <circle cx="400" cy="250" r="82" fill="none" stroke="rgba(125,211,252,0.2)" strokeWidth="1" />
    
    {/* Orbit rings */}
    <ellipse cx="400" cy="250" rx="140" ry="140" fill="none" stroke="rgba(125,211,252,0.08)" strokeWidth="1" strokeDasharray="4 4" />
    <ellipse cx="400" cy="250" rx="190" ry="190" fill="none" stroke="rgba(212,175,55,0.08)" strokeWidth="1" strokeDasharray="4 4" />
    <ellipse cx="400" cy="250" rx="240" ry="240" fill="none" stroke="rgba(192,132,252,0.06)" strokeWidth="1" strokeDasharray="4 4" />
    
    {/* LEO debris - dense */}
    {Array.from({ length: 30 }).map((_, i) => {
      const angle = (i / 30) * Math.PI * 2;
      const r = 120 + Math.random() * 40;
      return (
        <g key={`leo-${i}`}>
          <circle 
            cx={400 + Math.cos(angle) * r} 
            cy={250 + Math.sin(angle) * r * 0.3} 
            r={1 + Math.random() * 2}
            fill={i % 3 === 0 ? "var(--danger)" : "var(--aurora)"}
            opacity={0.6 + Math.random() * 0.4}
          />
        </g>
      );
    })}
    
    {/* MEO debris - medium */}
    {Array.from({ length: 15 }).map((_, i) => {
      const angle = (i / 15) * Math.PI * 2 + 1;
      const r = 180 + Math.random() * 20;
      return (
        <circle 
          key={`meo-${i}`}
          cx={400 + Math.cos(angle) * r} 
          cy={250 + Math.sin(angle) * r * 0.3} 
          r={1.5 + Math.random() * 1.5}
          fill="var(--gold)"
          opacity={0.5}
        />
      );
    })}
    
    {/* GEO satellites - sparse */}
    {Array.from({ length: 8 }).map((_, i) => {
      const angle = (i / 8) * Math.PI * 2 + 0.5;
      const r = 230;
      return (
        <g key={`geo-${i}`}>
          <circle 
            cx={400 + Math.cos(angle) * r} 
            cy={250 + Math.sin(angle) * r * 0.3} 
            r="3"
            fill="var(--orbital-purple)"
            opacity="0.8"
            filter="url(#glow)"
          />
          <circle 
            cx={400 + Math.cos(angle) * r} 
            cy={250 + Math.sin(angle) * r * 0.3} 
            r="6"
            fill="none"
            stroke="var(--orbital-purple)"
            strokeWidth="0.5"
            opacity="0.3"
          />
        </g>
      );
    })}
    
    {/* Labels */}
    <text x="260" y="140" fill="var(--aurora)" fontSize="11" fontFamily="var(--font-mono)" opacity="0.8">LEO</text>
    <text x="520" y="180" fill="var(--gold)" fontSize="11" fontFamily="var(--font-mono)" opacity="0.8">MEO</text>
    <text x="580" y="280" fill="var(--orbital-purple)" fontSize="11" fontFamily="var(--font-mono)" opacity="0.8">GEO</text>
    
    {/* Satellites with solar panels */}
    <g transform="translate(520, 200)">
      <rect x="-8" y="-3" width="16" height="6" fill="#64748b" rx="1" />
      <rect x="-20" y="-8" width="10" height="16" fill="#1e3a5f" rx="1" />
      <rect x="10" y="-8" width="10" height="16" fill="#1e3a5f" rx="1" />
    </g>
    
    <g transform="translate(300, 350)">
      <rect x="-6" y="-2" width="12" height="4" fill="#64748b" rx="1" />
      <rect x="-16" y="-6" width="8" height="12" fill="#1e3a5f" rx="1" />
      <rect x="8" y="-6" width="8" height="12" fill="#1e3a5f" rx="1" />
    </g>
  </svg>
);

export default DebrisVisualization;
