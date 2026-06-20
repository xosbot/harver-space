const CaptureMechanism = () => (
  <svg viewBox="0 0 700 300" style={{ width: "100%", height: "auto" }}>
    <defs>
      <linearGradient id="armGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1a3a5c" />
        <stop offset="50%" stopColor="#2d5a87" />
        <stop offset="100%" stopColor="#1a3a5c" />
      </linearGradient>
      <filter id="mechGlow">
        <feGaussianBlur stdDeviation="2" result="blur"/>
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Phase 1: LiDAR */}
    <g transform="translate(80, 150)">
      {/* Target debris */}
      <rect x="-30" y="-20" width="40" height="30" rx="3" fill="#3a4a5c" stroke="var(--danger)" strokeWidth="1" opacity="0.8" transform="rotate(-15)" />
      
      {/* LiDAR beams */}
      <line x1="40" y1="-10" x2="0" y2="-15" stroke="var(--aurora)" strokeWidth="1" opacity="0.6" strokeDasharray="4 2" />
      <line x1="40" y1="0" x2="-5" y2="0" stroke="var(--aurora)" strokeWidth="1" opacity="0.6" strokeDasharray="4 2" />
      <line x1="40" y1="10" x2="0" y2="15" stroke="var(--aurora)" strokeWidth="1" opacity="0.6" strokeDasharray="4 2" />
      
      {/* Sensor */}
      <circle cx="50" cy="0" r="8" fill="#1a3a5c" stroke="var(--aurora)" strokeWidth="1.5" />
      <circle cx="50" cy="0" r="3" fill="var(--aurora)" filter="url(#mechGlow)" />
      
      <text x="50" y="35" fill="var(--aurora)" fontSize="11" fontFamily="var(--font-mono)" textAnchor="middle">LiDAR SYNC</text>
    </g>
    
    {/* Arrow 1 */}
    <path d="M 160 150 L 200 150" stroke="var(--silver)" strokeWidth="1" opacity="0.3" markerEnd="url(#arrowhead)" />
    
    {/* Phase 2: Magnetic */}
    <g transform="translate(280, 150)">
      {/* Debris */}
      <rect x="-25" y="-15" width="35" height="25" rx="3" fill="#3a4a5c" stroke="var(--gold)" strokeWidth="1" opacity="0.8" />
      
      {/* Magnetic field rings */}
      <ellipse cx="0" cy="0" rx="50" ry="50" fill="none" stroke="var(--gold)" strokeWidth="0.5" opacity="0.3" />
      <ellipse cx="0" cy="0" rx="40" ry="40" fill="none" stroke="var(--gold)" strokeWidth="0.5" opacity="0.4" />
      <ellipse cx="0" cy="0" rx="30" ry="30" fill="none" stroke="var(--gold)" strokeWidth="0.5" opacity="0.5" />
      
      {/* Magnet */}
      <rect x="45" y="-15" width="20" height="30" rx="2" fill="#1a3a5c" stroke="var(--gold)" strokeWidth="1" />
      <text x="55" y="3" fill="var(--gold)" fontSize="12" fontFamily="var(--font-mono)" textAnchor="middle">N</text>
      
      <text x="0" y="55" fill="var(--gold)" fontSize="11" fontFamily="var(--font-mono)" textAnchor="middle">MAGNETIC DOCK</text>
    </g>
    
    {/* Arrow 2 */}
    <path d="M 360 150 L 400 150" stroke="var(--silver)" strokeWidth="1" opacity="0.3" />
    
    {/* Phase 3: Mechanical */}
    <g transform="translate(500, 150)">
      {/* Central body */}
      <circle cx="0" cy="0" r="25" fill="#1a3a5c" stroke="var(--success)" strokeWidth="1.5" />
      
      {/* Arms */}
      <line x1="0" y1="0" x2="-40" y2="-30" stroke="url(#armGrad)" strokeWidth="4" strokeLinecap="round" />
      <line x1="0" y1="0" x2="40" y2="-30" stroke="url(#armGrad)" strokeWidth="4" strokeLinecap="round" />
      <line x1="0" y1="0" x2="-40" y2="30" stroke="url(#armGrad)" strokeWidth="4" strokeLinecap="round" />
      <line x1="0" y1="0" x2="40" y2="30" stroke="url(#armGrad)" strokeWidth="4" strokeLinecap="round" />
      
      {/* Grippers */}
      <circle cx="-42" cy="-32" r="5" fill="var(--success)" opacity="0.8" />
      <circle cx="42" cy="-32" r="5" fill="var(--success)" opacity="0.8" />
      <circle cx="-42" cy="32" r="5" fill="var(--success)" opacity="0.8" />
      <circle cx="42" cy="32" r="5" fill="var(--success)" opacity="0.8" />
      
      {/* Captured debris */}
      <rect x="-10" y="-8" width="20" height="16" rx="2" fill="#3a4a5c" stroke="var(--success)" strokeWidth="1" opacity="0.9" />
      
      <text x="0" y="55" fill="var(--success)" fontSize="11" fontFamily="var(--font-mono)" textAnchor="middle">MECHANICAL EMBRACE</text>
    </g>
    
    {/* Labels below */}
    <text x="80" y="240" fill="var(--silver)" fontSize="10" fontFamily="var(--font-body)" textAnchor="middle" opacity="0.7">±0.1° Precision</text>
    <text x="280" y="240" fill="var(--silver)" fontSize="10" fontFamily="var(--font-body)" textAnchor="middle" opacity="0.7">98.3% Spin Reduction</text>
    <text x="500" y="240" fill="var(--silver)" fontSize="10" fontFamily="var(--font-body)" textAnchor="middle" opacity="0.7">12kN Grip Force</text>
  </svg>
);

export default CaptureMechanism;
