'use client';

import { motion } from 'framer-motion';
import { Lock, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Powerful Features <br />
          For <span className="text-neon-orange">Smarter</span> Crypto Trading
        </h2>
        <p className="text-white/40 max-w-xl mx-auto">
          AI-optimized sales teams with human-grade decision-making for professional traders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Wide Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:col-span-2 glass-card rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-6 leading-tight">
              Tools For Better <br />
              Cryptocurrency Trading
            </h3>
            <p className="text-white/50 mb-8 max-w-sm">
              Smart platforms designed to help you analyze markets and make informed decisions.
            </p>
            <button className="flex items-center gap-2 bg-neon-orange text-black font-bold px-6 py-3 rounded-full text-sm">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 w-full h-[250px] relative">
            {/* Detailed Orange Area Chart Placeholder */}
            <svg viewBox="0 0 400 200" className="w-full h-full">
              <defs>
                <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF6600" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#FF6600" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,150 Q50,140 100,160 T200,80 T300,120 T400,60 V200 H0 Z"
                fill="url(#orangeGradient)"
              />
              <path
                d="M0,150 Q50,140 100,160 T200,80 T300,120 T400,60"
                fill="none"
                stroke="#FF6600"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* Data points */}
              <circle cx="200" cy="80" r="4" fill="#FF6600" />
              <circle cx="400" cy="60" r="4" fill="#FF6600" />
            </svg>
          </div>
        </motion.div>

        {/* Bottom Card 1: Advanced Charting */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card rounded-[2.5rem] p-8"
        >
          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
            <BarChart3 className="w-6 h-6 text-neon-orange" />
          </div>
          <h3 className="text-2xl font-bold mb-6">Advanced Charting & Analytics</h3>
          <div className="space-y-4">
            {[
              { user: 'Robert Brian', price: '$28,659.35', img: 'RB' },
              { user: 'Courtney Henry', price: '$1,856.20', img: 'CH' },
              { user: 'Cody Fisher', price: '$0.51', img: 'CF' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold">
                    {item.img}
                  </div>
                  <span className="text-sm font-medium">{item.user}</span>
                </div>
                <span className="text-sm font-bold">{item.price}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Card 2: Secure Management */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-card rounded-[2.5rem] p-8 flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
              <Lock className="w-6 h-6 text-neon-orange" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Secure Asset Management</h3>
            <p className="text-white/40 text-sm mb-8">
              Multi-layer encryption and cold storage solutions for your peace of mind.
            </p>
          </div>
          
          <div className="relative h-32 flex items-center justify-center">
            <div className="absolute inset-0 bg-neon-orange/10 blur-2xl rounded-full" />
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-16 h-16 rounded-full bg-neon-orange flex items-center justify-center relative z-10"
            >
              <CheckCircle2 className="w-8 h-8 text-black" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
