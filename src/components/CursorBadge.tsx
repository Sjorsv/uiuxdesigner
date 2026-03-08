import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";

const CursorBadge = ({ text, active }: { text: string; active: boolean }) => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 48);
      cursorY.set(e.clientY - 48);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed top-0 left-0 z-[9999] pointer-events-none"
          style={{ x: springX, y: springY }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <div className="w-24 h-24 rounded-full bg-brand flex items-center justify-center shadow-[0_4px_30px_hsl(var(--brand)/0.3)]">
            <span className="font-body font-medium text-brand-foreground text-[11px] uppercase tracking-wider text-center leading-tight whitespace-pre-line">
              {text}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CursorBadge;
