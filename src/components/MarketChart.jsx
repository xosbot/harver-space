const MarketChart = () => (
  <svg viewBox="0 0 800 300" style={{ width: "100%", height: "auto" }}>
    <defs>
      <linearGradient id="adrGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(125,211,252,0.4)" />
        <stop offset="100%" stopColor="rgba(125,211,252,0.05)" />
      </linearGradient>
      <linearGradient id="wptGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(212,175,55,0.4)" />
        <stop offset="100%" stopColor="rgba(212,175,55,0.05)" />
      </linearGradient>
    </defs>
    
    {/* Grid lines */}
    {[0, 50, 100, 150, 200].map((y) => (
      <line key={y} x1="60" y1={y + 40} x2="760" y2={y + 40} stroke="rgba(125,211,252,0.05)" strokeWidth="1" />
    ))}
    
    {/* Y-axis labels */}
    <text x="45" y="50" fill="var(--silver-dim)" fontSize="10" fontFamily="var(--font-mono)" textAnchor="end">$100B</text>
    <text x="45" y="100" fill="var(--silver-dim)" fontSize="10" fontFamily="var(--font-mono)" textAnchor="end">$50B</text>
    <text x="45" y="150" fill="var(--silver-dim)" fontSize="10" fontFamily="var(--font-mono)" textAnchor="end">$10B</text>
    <text x="45" y="200" fill="var(--silver-dim)" fontSize="10" fontFamily="var(--font-mono)" textAnchor="end">$1B</text>
    <text x="45" y="245" fill="var(--silver-dim)" fontSize="10" fontFamily="var(--font-mono)" textAnchor="end">$0</text>
    
    {/* X-axis labels */}
    <text x="140" y="270" fill="var(--silver-dim)" fontSize="11" fontFamily="var(--font-mono)" textAnchor="middle">2024</text>
    <text x="310" y="270" fill="var(--silver-dim)" fontSize="11" fontFamily="var(--font-mono)" textAnchor="middle">2027</text>
    <text x="480" y="270" fill="var(--silver-dim)" fontSize="11" fontFamily="var(--font-mono)" textAnchor="middle">2030</text>
    <text x="650" y="270" fill="var(--silver-dim)" fontSize="11" fontFamily="var(--font-mono)" textAnchor="middle">2035</text>
    
    {/* WPT Area - Gold */}
    <path 
      d="M 140 240 Q 220 200 310 120 Q 400 60 480 50 Q 560 40 650 30 L 650 240 Z" 
      fill="url(#wptGrad)"
      opacity="0.6"
    />
    <path 
      d="M 140 240 Q 220 200 310 120 Q 400 60 480 50 Q 560 40 650 30" 
      fill="none"
      stroke="var(--gold)"
      strokeWidth="2"
    />
    
    {/* ADR Area - Aurora */}
    <path 
      d="M 140 240 Q 220 220 310 180 Q 400 140 480 120 Q 560 100 650 80 L 650 240 Z" 
      fill="url(#adrGrad)"
      opacity="0.6"
    />
    <path 
      d="M 140 240 Q 220 220 310 180 Q 400 140 480 120 Q 560 100 650 80" 
      fill="none"
      stroke="var(--aurora)"
      strokeWidth="2"
    />
    
    {/* Data points WPT */}
    <circle cx="140" cy="240" r="4" fill="var(--gold)" />
    <circle cx="310" cy="120" r="4" fill="var(--gold)" />
    <circle cx="480" cy="50" r="4" fill="var(--gold)" />
    <circle cx="650" cy="30" r="6" fill="var(--gold)" filter="url(#glow)" />
    
    {/* Data points ADR */}
    <circle cx="140" cy="240" r="4" fill="var(--aurora)" />
    <circle cx="310" cy="180" r="4" fill="var(--aurora)" />
    <circle cx="480" cy="120" r="4" fill="var(--aurora)" />
    <circle cx="650" cy="80" r="6" fill="var(--aurora)" filter="url(#glow)" />
    
    {/* Legend */}
    <g transform="translate(500, 15)">
      <line x1="0" y1="0" x2="20" y2="0" stroke="var(--gold)" strokeWidth="2" />
      <text x="28" y="4" fill="var(--gold)" fontSize="11" fontFamily="var(--font-mono)">WPT ($105B)</text>
    </g>
    <g transform="translate(620, 15)">
      <line x1="0" y1="0" x2="20" y2="0" stroke="var(--aurora)" strokeWidth="2" />
      <text x="28" y="4" fill="var(--aurora)" fontSize="11" fontFamily="var(--font-mono)">ADR ($3.5B)</text>
    </g>
  </svg>
);

export default MarketChart;
