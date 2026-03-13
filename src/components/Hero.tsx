import { motion } from "framer-motion";
import { useRef, useCallback, useEffect } from "react";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (lastPos.current) {
      ctx.beginPath();
      ctx.moveTo(lastPos.current.x, lastPos.current.y);
      ctx.lineTo(x, y);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1.5;
      ctx.lineCap = "round";
      ctx.stroke();
    }
    lastPos.current = { x, y };
  }, []);

  const handleMouseLeave = useCallback(() => {
    lastPos.current = null;
  }, []);

  // Fade out canvas over time
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const fade = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.02)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    const interval = setInterval(fade, 80);
    return () => clearInterval(interval);
  }, []);

  // Resize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />
      <div className="swiss-container w-full relative z-10">
        <motion.div
          className="flex flex-col items-center text-center relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label mb-6">UIUXDESIGNER.NL</p>

          {/* CTA badge - above heading on mobile only */}
          <motion.a
            href="#contact"
            className="md:hidden mb-6 w-28 h-28 rounded-full bg-brand flex flex-col items-center justify-center text-brand-foreground shadow-[0_4px_30px_hsl(var(--brand)/0.3)] cursor-pointer no-underline"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <span className="font-body text-[9px] uppercase tracking-wider leading-tight text-center px-3">Vraag gratis</span>
            <span className="font-display font-bold text-sm leading-tight text-center">ontwerp</span>
            <span className="font-body text-[9px] uppercase tracking-wider leading-tight text-center">aan →</span>
          </motion.a>

          <div className="relative">
            <h1 className="heading-xl mb-8 max-w-4xl">
              Websites voor <span className="text-brand">groeiende</span> bedrijven.
            </h1>

            {/* CTA badge - original position on desktop */}
            <motion.a
              href="#contact"
              className="hidden md:flex absolute -top-4 -right-20 lg:-right-24 w-32 h-32 rounded-full bg-brand flex-col items-center justify-center text-brand-foreground shadow-[0_4px_30px_hsl(var(--brand)/0.3)] cursor-pointer no-underline"
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <span className="font-body text-[10px] uppercase tracking-wider leading-tight text-center px-3">Vraag gratis</span>
              <span className="font-display font-bold text-base leading-tight text-center">ontwerp</span>
              <span className="font-body text-[10px] uppercase tracking-wider leading-tight text-center">aan →</span>
            </motion.a>
          </div>

          <p className="body-lg mb-8 max-w-lg">
            Design, strategie en development.
            <br />
            Alles in één traject.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <a href="#portfolio" className="btn-primary">
              Bekijk projecten
            </a>
            <a href="#contact" className="btn-outline group">
              Start een project
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>

          <p className="text-xs text-muted-foreground tracking-wide">
            Agency kwaliteit, zonder agency prijs
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
