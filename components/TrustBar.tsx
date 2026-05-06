'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Cpu, Layers } from 'lucide-react';

const logos = [
  { name: 'Logoipsum', icon: Shield },
  { name: 'Logoipsum', icon: Zap },
  { name: 'Logoipsum', icon: Globe },
  { name: 'Logoipsum', icon: Cpu },
  { name: 'Logoipsum', icon: Layers },
];

export default function TrustBar() {
  return (
    <section className="py-20 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-white/30 text-xs font-medium uppercase tracking-[0.2em] mb-12">
          Simplifying Blockchain Workflows For 2,500+ Organizations
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.3 }}
              transition={{ duration: 1, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
            >
              <logo.icon className="w-6 h-6" />
              <span className="font-bold text-lg tracking-tight">{logo.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
