import { useState, useEffect, useCallback } from 'react';
import AnimatedBackground from './AnimatedBackground';
import Counter from './Counter';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '800px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Earth photograph background */}
      <img
        src="/images/hero-earth.jpg"
        alt="Earth from space"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 0,
        }}
      />

      {/* Cinematic dark overlay for readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(180deg, rgba(5,10,20,0.35) 0%, rgba(5,10,20,0.15) 40%, rgba(5,10,20,0.55) 100%),
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(5,10,20,0.2) 0%, rgba(5,10,20,0.6) 100%)
          `,
          zIndex: 1,
        }}
      />

      {/* Keep canvas animation as overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, opacity: 0.5, mixBlendMode: 'screen' }}>
        <AnimatedBackground />
      </div>

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(125, 211, 252, 0.05) 0%, transparent 70%),
            radial-gradient(ellipse 60% 40% at 20% 100%, rgba(192, 132, 252, 0.03) 0%, transparent 70%),
            linear-gradient(180deg, transparent 0%, rgba(10, 10, 15, 0.5) 100%)
          `,
          zIndex: 3,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '120px 24px 80px',
          maxWidth: '900px',
          transform: `translate(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        {/* Status Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '8px 20px',
            background: 'rgba(5, 10, 20, 0.45)',
            border: '1px solid rgba(125, 211, 252, 0.2)',
            borderRadius: '100px',
            marginBottom: '40px',
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            letterSpacing: '0.1em',
            color: 'var(--aurora)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--success)',
              boxShadow: '0 0 8px var(--success)',
            }}
          />
          MISSION CONTROL — LIVE
        </div>

        {/* Main Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--stellar)',
            marginBottom: '16px',
            textShadow: '0 4px 30px rgba(0,0,0,0.5)',
          }}
        >
          Building the Grid
          <br />
          <span className="text-gradient">Above the Grid</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
            color: 'var(--silver)',
            maxWidth: '600px',
            lineHeight: 1.7,
            margin: '0 auto 48px',
            fontWeight: 300,
            textShadow: '0 2px 20px rgba(0,0,0,0.6)',
          }}
        >
          Harver Space Industries operates at the intersection of sovereign law,
          precision engineering, and orbital stewardship. We remove debris. We beam
          power. We connect worlds.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button className="btn-primary" onClick={() => scrollTo('mission')}>
            Explore the Mission
          </button>
          <button className="btn-outline" onClick={() => scrollTo('contact')}>
            Partner With Us
          </button>
        </div>

        {/* Live Stats */}
        <div
          style={{
            marginTop: '80px',
            display: 'flex',
            gap: '64px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {[
            { value: 36500, suffix: '+', label: 'Tracked Objects', color: 'var(--aurora)' },
            { value: 42, prefix: '$', suffix: 'B', label: 'Decade Risk', color: 'var(--danger)' },
            { value: 0, suffix: '', label: 'Cross-Border Removals', color: 'var(--gold)' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: 700,
                  color: stat.color,
                  lineHeight: 1,
                  marginBottom: '8px',
                  textShadow: '0 2px 20px rgba(0,0,0,0.6)',
                }}
              >
                <Counter target={stat.value} prefix={stat.prefix || ''} suffix={stat.suffix} />
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--silver-dim)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textShadow: '0 1px 10px rgba(0,0,0,0.6)',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
