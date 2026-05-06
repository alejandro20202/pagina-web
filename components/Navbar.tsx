'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Why choose', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'FAQ', href: '#' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 md:p-6"
    >
      <div className="w-full max-w-4xl">
        <div className="flex items-center justify-between md:justify-center gap-4 md:gap-8 px-4 md:px-6 py-3 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-2 md:mr-8">
            <div className="w-8 h-8 rounded-full bg-neon-orange flex items-center justify-center">
              <span className="text-black font-bold text-sm">C</span>
            </div>
            <span className="font-bold text-lg md:text-xl tracking-tight">Cryptox</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-white transition-colors">{item.name}</Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm font-medium ml-8">
              Buy Template
            </button>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-4 right-4 mt-4 p-6 rounded-3xl bg-black/90 backdrop-blur-2xl border border-white/10 md:hidden flex flex-col gap-6 shadow-2xl"
            >
              {menuItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-white/70 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full py-4 rounded-2xl bg-neon-orange text-black font-bold text-sm mt-2">
                Buy Template
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
