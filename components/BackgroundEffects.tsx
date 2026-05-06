'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function BackgroundEffects() {
  const { scrollYProgress } = useScroll();

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Vortex Light Effect - Refined and deeper */}
      <motion.div
        style={{ rotate, scale }}
        className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#FF6600_0%,_transparent_60%)] opacity-[0.25] blur-[100px]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_center,_transparent,_#FF6600_20%,_transparent)] opacity-[0.15] blur-[80px]" />
      </motion.div>
      
      {/* Lateral Glow - Right Middle (Elegantly subtle) */}
      <div className="absolute top-[50%] -right-[10%] w-[40%] h-[60%] bg-[#FF6600] opacity-[0.12] blur-[150px] rounded-full" />
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
    </div>
  );
}
