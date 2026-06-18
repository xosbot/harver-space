import { useEffect, useRef } from "react";

const OrbitalCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let W, H;

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const rings = [
      { radius: 0.18, speed: 0.0003, color: "rgba(0,212,255,0.12)", dots: 8 },
      { radius: 0.26, speed: 0.0002, color: "rgba(0,212,255,0.08)", dots: 14 },
      { radius: 0.35, speed: 0.00015, color: "rgba(0,168,204,0.06)", dots: 20 },
      { radius: 0.44, speed: 0.0001, color: "rgba(0,212,255,0.05)", dots: 28 },
      { radius: 0.52, speed: 0.00007, color: "rgba(201,168,76,0.08)", dots: 18 },
    ];

    const debris = Array.from({ length: 280 }, () => ({
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
      size: Math.random() * 1.5 + 0.3,
      speed: Math.random() * 0.00005 + 0.00001,
      angle: Math.random() * Math.PI * 2,
      alpha: Math.random() * 0.4 + 0.1,
      orbit: Math.random() * 0.55 + 0.05,
      color: Math.random() > 0.85 ? "201,168,76" : "0,212,255",
    }));

    let t = 0;
    const cx = () => W / 2;
    const cy = () => H / 2;
    const scale = () => Math.min(W, H);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      const earthGlow = ctx.createRadialGradient(cx(), cy(), 0, cx(), cy(), scale() * 0.14);
      earthGlow.addColorStop(0, "rgba(0,50,100,0.9)");
      earthGlow.addColorStop(0.6, "rgba(0,20,60,0.5)");
      earthGlow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = earthGlow;
      ctx.beginPath();
      ctx.arc(cx(), cy(), scale() * 0.14, 0, Math.PI * 2);
      ctx.fill();

      const earthCore = ctx.createRadialGradient(cx() - scale()*0.03, cy() - scale()*0.03, 0, cx(), cy(), scale() * 0.09);
      earthCore.addColorStop(0, "rgba(20,80,180,0.95)");
      earthCore.addColorStop(0.5, "rgba(10,50,120,0.9)");
      earthCore.addColorStop(1, "rgba(0,20,80,0.8)");
      ctx.fillStyle = earthCore;
      ctx.beginPath();
      ctx.arc(cx(), cy(), scale() * 0.09, 0, Math.PI * 2);
      ctx.fill();

      const atmo = ctx.createRadialGradient(cx(), cy(), scale()*0.09, cx(), cy(), scale()*0.11);
      atmo.addColorStop(0, "rgba(0,150,255,0.2)");
      atmo.addColorStop(1, "rgba(0,150,255,0)");
      ctx.fillStyle = atmo;
      ctx.beginPath();
      ctx.arc(cx(), cy(), scale() * 0.11, 0, Math.PI * 2);
      ctx.fill();

      rings.forEach((ring, ri) => {
        const r = ring.radius * scale();
        ctx.strokeStyle = ring.color;
        ctx.lineWidth = 0.5;
        ctx.setLineDash([4, 8]);
        ctx.beginPath();
        ctx.arc(cx(), cy(), r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        for (let i = 0; i < ring.dots; i++) {
          const angle = (i / ring.dots) * Math.PI * 2 + t * ring.speed * 1000 * (ri % 2 === 0 ? 1 : -0.7);
          const dx = cx() + Math.cos(angle) * r;
          const dy = cy() + Math.sin(angle) * r * 0.38;
          const alpha = 0.3 + Math.sin(t * 0.002 + i) * 0.2;
          ctx.fillStyle = ri === 4 ? `rgba(201,168,76,${alpha})` : `rgba(0,212,255,${alpha})`;
          ctx.beginPath();
          ctx.arc(dx, dy, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      debris.forEach((d) => {
        const r = d.orbit * scale();
        d.angle += d.speed * (d.orbit > 0.35 ? -0.6 : 1);
        const dx = cx() + Math.cos(d.angle) * r;
        const dy = cy() + Math.sin(d.angle) * r * 0.4;
        const alpha = d.alpha * (0.6 + Math.sin(t * 0.001 + d.angle) * 0.4);
        ctx.fillStyle = `rgba(${d.color},${alpha})`;
        ctx.beginPath();
        ctx.arc(dx, dy, d.size, 0, Math.PI * 2);
        ctx.fill();
      });

      if (Math.random() < 0.001) {
        const flashR = (0.2 + Math.random() * 0.3) * scale();
        const flashAngle = Math.random() * Math.PI * 2;
        const fx = cx() + Math.cos(flashAngle) * flashR;
        const fy = cy() + Math.sin(flashAngle) * flashR * 0.4;
        const flash = ctx.createRadialGradient(fx, fy, 0, fx, fy, 20);
        flash.addColorStop(0, "rgba(255,200,0,0.9)");
        flash.addColorStop(1, "rgba(255,100,0,0)");
        ctx.fillStyle = flash;
        ctx.beginPath();
        ctx.arc(fx, fy, 20, 0, Math.PI * 2);
        ctx.fill();
      }

      t++;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
      }}
    />
  );
};

export default OrbitalCanvas;
