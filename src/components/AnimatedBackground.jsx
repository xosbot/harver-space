import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener('resize', resize);

    // Stars
    const stars = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.02 + 0.005,
        opacity: Math.random() * 0.8 + 0.2,
      });
    }

    // Orbital debris particles
    const debris = [];
    for (let i = 0; i < 50; i++) {
      debris.push({
        angle: Math.random() * Math.PI * 2,
        radius: 150 + Math.random() * 200,
        speed: (Math.random() - 0.5) * 0.002,
        size: Math.random() * 2 + 1,
        color: i % 3 === 0 ? '#D4AF37' : '#7DD3FC',
      });
    }

    const draw = () => {
      ctx.fillStyle = '#0A0A0F';
      ctx.fillRect(0, 0, width, height);

      // Draw nebula gradient
      const gradient = ctx.createRadialGradient(width * 0.3, height * 0.4, 0, width * 0.3, height * 0.4, 600);
      gradient.addColorStop(0, 'rgba(125, 211, 252, 0.03)');
      gradient.addColorStop(0.5, 'rgba(192, 132, 252, 0.02)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw stars
      stars.forEach((star) => {
        star.y -= star.speed;
        if (star.y < 0) star.y = height;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      // Draw Earth
      const earthX = width * 0.75;
      const earthY = height * 0.6;
      const earthRadius = Math.min(width, height) * 0.2;

      // Earth glow
      const earthGlow = ctx.createRadialGradient(earthX, earthY, earthRadius * 0.8, earthX, earthY, earthRadius * 1.3);
      earthGlow.addColorStop(0, 'rgba(125, 211, 252, 0.1)');
      earthGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = earthGlow;
      ctx.beginPath();
      ctx.arc(earthX, earthY, earthRadius * 1.3, 0, Math.PI * 2);
      ctx.fill();

      // Earth body
      const earthGrad = ctx.createRadialGradient(earthX - earthRadius * 0.3, earthY - earthRadius * 0.3, 0, earthX, earthY, earthRadius);
      earthGrad.addColorStop(0, '#1a3a5c');
      earthGrad.addColorStop(0.5, '#0d2137');
      earthGrad.addColorStop(1, '#050a14');
      ctx.fillStyle = earthGrad;
      ctx.beginPath();
      ctx.arc(earthX, earthY, earthRadius, 0, Math.PI * 2);
      ctx.fill();

      // Earth atmosphere
      ctx.strokeStyle = 'rgba(125, 211, 252, 0.15)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(earthX, earthY, earthRadius + 5, 0, Math.PI * 2);
      ctx.stroke();

      // Orbital rings
      [1.2, 1.5, 1.8].forEach((factor, i) => {
        ctx.strokeStyle = `rgba(125, 211, 252, ${0.05 - i * 0.01})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 10]);
        ctx.beginPath();
        ctx.ellipse(earthX, earthY, earthRadius * factor, earthRadius * factor * 0.3, Math.PI * 0.1, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Draw debris
      debris.forEach((d) => {
        d.angle += d.speed;
        const x = earthX + Math.cos(d.angle) * d.radius;
        const y = earthY + Math.sin(d.angle) * d.radius * 0.3;
        
        ctx.beginPath();
        ctx.arc(x, y, d.size, 0, Math.PI * 2);
        ctx.fillStyle = d.color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  );
};

export default AnimatedBackground;
