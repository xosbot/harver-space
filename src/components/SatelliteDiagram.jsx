const SatelliteDiagram = () => (
  <svg viewBox="0 0 600 400" style={{ width: "100%", height: "auto" }}>
    <defs>
      <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e3a5f" />
        <stop offset="100%" stopColor="#0d2137" />
      </linearGradient>
      <linearGradient id="panelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1a3a5c" />
        <stop offset="50%" stopColor="#0f2942" />
        <stop offset="100%" stopColor="#1a3a5c" />
      </linearGradient>
      <filter id="blueGlow">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Stars background */}
    {Array.from({ length: 40 }).map((_, i) => (
      <circle 
        key={i}
        cx={Math.random() * 600}
        cy={Math.random() * 400}
        r={0.5 + Math.random()}
        fill="white"
        opacity={0.2 + Math.random() * 0.5}
      />
    ))}
    
    {/* Main satellite body */}
    <rect x="260" y="160" width="80" height="60" rx="8" fill="url(#bodyGrad)" stroke="rgba(125,211,252,0.3)" strokeWidth="1" />
    
    {/* Solar panels - left */}
    <rect x="120" y="170" width="130" height="40" rx="2" fill="url(#panelGrad)" stroke="rgba(125,211,252,0.2)" strokeWidth="1" />
    <line x1="140" y1="170" x2="140" y2="210" stroke="rgba(125,211,252,0.1)" strokeWidth="0.5" />
    <line x1="160" y1="170" x2="160" y2="210" stroke="rgba(125,211,252,0.1)" strokeWidth="0.5" />
    <line x1="180" y1="170" x2="180" y2="210" stroke="rgba(125,211,252,0.1)" strokeWidth="0.5" />
    <line x1="200" y1="170" x2="200" y2="210" stroke="rgba(125,211,252,0.1)" strokeWidth="0.5" />
    <line x1="220" y1="170" x2="220" y2="210" stroke="rgba(125,211,252,0.1)" strokeWidth="0.5" />
    
    {/* Solar panels - right */}
    <rect x="350" y="170" width="130" height="40" rx="2" fill="url(#panelGrad)" stroke="rgba(125,211,252,0.2)" strokeWidth="1" />
    <line x1="370" y1="170" x2="370" y2="210" stroke="rgba(125,211,252,0.1)" strokeWidth="0.5" />
    <line x1="390" y1="170" x2="390" y2="210" stroke="rgba(125,211,252,0.1)" strokeWidth="0.5" />
    <line x1="410" y1="170" x2="410" y2="210" stroke="rgba(125,211,252,0.1)" strokeWidth="0.5" />
    <line x1="430" y1="170" x2="430" y2="210" stroke="rgba(125,211,252,0.1)" strokeWidth="0.5" />
    <line x1="450" y1="170" x2="450" y2="210" stroke="rgba(125,211,252,0.1)" strokeWidth="0.5" />
    
    {/* Antenna */}
    <line x1="300" y1="160" x2="300" y2="130" stroke="#64748b" strokeWidth="2" />
    <circle cx="300" cy="125" r="4" fill="var(--aurora)" opacity="0.8" filter="url(#blueGlow)" />
    
    {/* Dish */}
    <path d="M 280 140 Q 300 120 320 140" fill="none" stroke="#64748b" strokeWidth="1.5" />
    
    {/* Thrusters */}
    <circle cx="270" cy="225" r="3" fill="var(--gold)" opacity="0.6" />
    <circle cx="300" cy="225" r="3" fill="var(--gold)" opacity="0.6" />
    <circle cx="330" cy="225" r="3" fill="var(--gold)" opacity="0.6" />
    
    {/* Earth below */}
    <circle cx="300" cy="480" r="200" fill="url(#bodyGrad)" opacity="0.3" />
    
    {/* Labels */}
    <text x="185" y="155" fill="var(--aurora)" fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle" opacity="0.8">SOLAR ARRAY</text>
    <text x="415" y="155" fill="var(--aurora)" fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle" opacity="0.8">SOLAR ARRAY</text>
    <text x="300" y="115" fill="var(--gold)" fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle" opacity="0.8">COMMS</text>
    <text x="300" y="245" fill="var(--silver)" fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle" opacity="0.8">THRUSTERS</text>
    
    {/* Orbital path indicator */}
    <path d="M 100 320 Q 300 280 500 320" fill="none" stroke="rgba(125,211,252,0.1)" strokeWidth="1" strokeDasharray="8 4" />
    <text x="300" y="310" fill="var(--silver)" fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle" opacity="0.5">550km LEO ORBIT</text>
  </svg>
);

export default SatelliteDiagram;
