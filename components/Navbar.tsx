'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="flex items-center gap-8 px-6 py-3 rounded-full glass border border-white/10">
        <div className="flex items-center gap-2 mr-8">
          <div className="w-8 h-8 rounded-full bg-neon-orange flex items-center justify-center">
            <span className="text-black font-bold text-sm">C</span>
          </div>
          <span className="font-bold text-xl tracking-tight">Cryptox</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <Link href="#" className="hover:text-white transition-colors">Home</Link>
          <Link href="#" className="hover:text-white transition-colors">Features</Link>
          <Link href="#" className="hover:text-white transition-colors">Why choose</Link>
          <Link href="#" className="hover:text-white transition-colors">Testimonials</Link>
          <Link href="#" className="hover:text-white transition-colors">FAQ</Link>
        </div>

        <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm font-medium ml-8">
          Buy Template
        </button>
      </div>
    </motion.nav>
  );
}
