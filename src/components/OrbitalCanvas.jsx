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
      { radius: 0.15, speed: 0.0004, color: "rgba(0,212,255,0.15)", dots: 12, label: "LEO 400km" },
      { radius: 0.22, speed: 0.0003, color: "rgba(0,212,255,0.12)", dots: 18, label: "LEO 600km" },
      { radius: 0.30, speed: 0.0002, color: "rgba(0,212,255,0.10)", dots: 24, label: "LEO 800km" },
      { radius: 0.38, speed: 0.00015, color: "rgba(201,168,76,0.10)", dots: 16, label: "SSO 800km" },
      { radius: 0.46, speed: 0.0001, color: "rgba(0,168,204,0.08)", dots: 30, label: "MEO" },
      { radius: 0.55, speed: 0.00007, color: "rgba(201,168,76,0.06)", dots: 20, label: "GEO" },
    ];

    const debris = Array.from({ length: 420 }, () => ({
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
      size: Math.random() * 1.8 + 0.2,
      speed: Math.random() * 0.00006 + 0.00001,
      angle: Math.random() * Math.PI * 2,
      alpha: Math.random() * 0.5 + 0.1,
      orbit: Math.random() * 0.58 + 0.04,
      color: Math.random() > 0.82 ? "201,168,76" : "0,212,255",
      type: Math.random() > 0.9 ? "large" : Math.random() > 0.7 ? "medium" : "small",
    }));

    const satellites = Array.from({ length: 8 }, () => ({
      angle: Math.random() * Math.PI * 2,
      orbit: 0.2 + Math.random() * 0.25,
      speed: 0.0002 + Math.random() * 0.0003,
      size: 2 + Math.random() * 2,
      color: Math.random() > 0.5 ? "0,255,136" : "201,168,76",
    }));

    let t = 0;
    let mouse = { x: W / 2, y: H / 2 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.addEventListener("mousemove", handleMouseMove);

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

      const earthCore = ctx.createRadialGradient(
        cx() - scale() * 0.03, cy() - scale() * 0.03, 0,
        cx(), cy(), scale() * 0.09
      );
      earthCore.addColorStop(0, "rgba(20,80,180,0.95)");
      earthCore.addColorStop(0.5, "rgba(10,50,120,0.9)");
      earthCore.addColorStop(1, "rgba(0,20,80,0.8)");
      ctx.fillStyle = earthCore;
      ctx.beginPath();
      ctx.arc(cx(), cy(), scale() * 0.09, 0, Math.PI * 2);
      ctx.fill();

      const atmo = ctx.createRadialGradient(cx(), cy(), scale() * 0.09, cx(), cy(), scale() * 0.11);
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
          ctx.fillStyle = ri === 3 ? `rgba(201,168,76,${alpha})` : `rgba(0,212,255,${alpha})`;
          ctx.beginPath();
          ctx.arc(dx, dy, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }

        if (ring.label && ri % 2 === 0) {
          const labelAngle = -Math.PI / 4;
          const lx = cx() + Math.cos(labelAngle) * (r + 12);
          const ly = cy() + Math.sin(labelAngle) * (r + 12) * 0.38;
          ctx.font = `${9}px "Share Tech Mono"`;
          ctx.fillStyle = "rgba(0,212,255,0.25)";
          ctx.fillText(ring.label, lx, ly);
        }
      });

      debris.forEach((d) => {
        const r = d.orbit * scale();
        d.angle += d.speed * (d.orbit > 0.35 ? -0.6 : 1);
        const dx = cx() + Math.cos(d.angle) * r;
        const dy = cy() + Math.sin(d.angle) * r * 0.4;
        const alpha = d.alpha * (0.6 + Math.sin(t * 0.001 + d.angle) * 0.4);

        const mouseDist = Math.hypot(mouse.x - dx, mouse.y - dy);
        const glow = mouseDist < 80 ? (1 - mouseDist / 80) * 0.5 : 0;

        ctx.fillStyle = `rgba(${d.color},${alpha + glow})`;
        ctx.beginPath();
        if (d.type === "large") {
          ctx.rect(dx - 2, dy - 1, 4, 2);
        } else if (d.type === "medium") {
          ctx.arc(dx, dy, d.size * 0.8, 0, Math.PI * 2);
        } else {
          ctx.arc(dx, dy, d.size, 0, Math.PI * 2);
        }
        ctx.fill();

        if (glow > 0.1) {
          ctx.strokeStyle = `rgba(${d.color},${glow * 0.5})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      satellites.forEach((sat) => {
        sat.angle += sat.speed;
        const sx = cx() + Math.cos(sat.angle) * sat.orbit * scale();
        const sy = cy() + Math.sin(sat.angle) * sat.orbit * scale() * 0.38;
        const alpha = 0.6 + Math.sin(t * 0.003 + sat.angle) * 0.3;

        ctx.fillStyle = `rgba(${sat.color},${alpha})`;
        ctx.beginPath();
        ctx.arc(sx, sy, sat.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = `rgba(${sat.color},${alpha * 0.3})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.arc(sx, sy, sat.size + 4, 0, Math.PI * 2);
        ctx.stroke();
      });

      if (Math.random() < 0.002) {
        const flashR = (0.2 + Math.random() * 0.35) * scale();
        const flashAngle = Math.random() * Math.PI * 2;
        const fx = cx() + Math.cos(flashAngle) * flashR;
        const fy = cy() + Math.sin(flashAngle) * flashR * 0.4;
        const flash = ctx.createRadialGradient(fx, fy, 0, fx, fy, 25);
        flash.addColorStop(0, "rgba(255,200,0,0.9)");
        flash.addColorStop(0.5, "rgba(255,100,0,0.4)");
        flash.addColorStop(1, "rgba(255,50,0,0)");
        ctx.fillStyle = flash;
        ctx.beginPath();
        ctx.arc(fx, fy, 25, 0, Math.PI * 2);
        ctx.fill();
      }

      t++;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
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
