'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const tokens = [
  { name: 'Bitora', symbol: 'B', top: '20%', left: '15%', delay: 0 },
  { name: 'Chainly', symbol: 'C', top: '35%', left: '10%', delay: 1 },
  { name: 'Coinza', symbol: 'Z', top: '15%', right: '15%', delay: 0.5 },
  { name: 'Nexbit', symbol: 'N', top: '30%', right: '10%', delay: 1.5 },
];

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center min-h-[70vh] justify-center">
      {/* Floating Tokens */}
      {tokens.map((token, i) => (
        <motion.div
          key={token.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -20, 0] 
          }}
          transition={{ 
            duration: 0.8, 
            delay: token.delay,
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="absolute hidden lg:flex items-center gap-3 px-4 py-2 rounded-full glass border border-white/10 z-0"
          style={{ 
            top: token.top, 
            left: token.left, 
            right: token.right 
          }}
        >
          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold">
            {token.symbol}
          </div>
          <span className="text-sm font-medium text-white/80">{token.name}</span>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl z-10"
      >
        <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black tracking-tighter mb-8 leading-[0.9] text-white">
          Step Into The <br />
          Future Of <br />
          <span className="text-gradient-orange">Crypto Trading</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-white/50 mb-12 max-w-2xl mx-auto font-medium">
          AI-optimized sales teams with human-grade decision-making for the next generation of digital assets.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-2 bg-neon-orange text-black font-bold px-8 py-4 rounded-full transition-all hover:shadow-[0_0_30px_rgba(255,102,0,0.4)]"
        >
          Get Started
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </section>
  );
}
