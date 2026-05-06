'use client';

import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight, ArrowDownRight, RefreshCw, LayoutGrid } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section className="relative py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
      >
        {/* Markets Widget */}
        <div className="glass-card rounded-[2.5rem] p-8 flex flex-col gap-8 h-full">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Markets</h3>
            <button className="text-neon-orange text-sm font-medium">See All</button>
          </div>
          
          <div className="space-y-4">
            {[
              { name: 'BTA', price: '$28,659.35', change: '+1.5%', icon: 'B', color: 'bg-blue-500' },
              { name: 'CHY', price: '$28,659.35', change: '+1.5%', icon: 'C', color: 'bg-orange-500' },
              { name: 'NXB', price: '$28,659.35', change: '+1.5%', icon: 'N', color: 'bg-purple-500' },
            ].map((coin) => (
              <motion.div 
                key={coin.name}
                whileHover={{ 
                  x: 5, 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  boxShadow: '0 0 20px rgba(255,102,0,0.1)',
                  borderColor: 'rgba(255,102,0,0.3)'
                }}
                className="flex items-center justify-between p-3 rounded-2xl transition-all cursor-pointer border border-transparent"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${coin.color} flex items-center justify-center font-bold text-xs`}>
                    {coin.icon}
                  </div>
                  <div>
                    <div className="font-bold">{coin.name}</div>
                    <div className="text-xs text-white/40">{coin.change}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{coin.price}</div>
                  <div className="w-16 h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-white/20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Total Balance / Main Chart */}
        <div className="lg:col-span-1 glass-card rounded-[2.5rem] p-8 flex flex-col items-center relative overflow-hidden min-h-[480px] scale-110 z-20">
          <div className="flex items-center justify-between w-full z-10 mb-8">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
              <div className="w-4 h-4 border-2 border-white/40 rounded-sm" />
            </div>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-neon-orange" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 w-full z-10">
            <div className="flex gap-2 mb-4">
              <span className="px-4 py-1.5 rounded-full glass border border-white/10 text-xs font-bold">Home</span>
              <span className="px-4 py-1.5 rounded-full text-xs font-bold text-white/40">Leverage</span>
              <span className="px-4 py-1.5 rounded-full text-xs font-bold text-white/40">Earn</span>
              <span className="px-4 py-1.5 rounded-full text-xs font-bold text-white/40">NFT</span>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-black mb-1 tracking-tighter flex items-baseline justify-center gap-2">
                $15,4.75 <span className="text-xl text-white/40 font-bold">USD</span>
              </div>
            </div>
          </div>

          {/* Chart Line - Adjusted height to be below text but not too low */}
          <div className="absolute inset-0 flex items-center justify-center px-2 pointer-events-none opacity-60 mix-blend-screen z-0">
            <svg viewBox="0 0 200 100" className="w-full h-56 translate-y-16">
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                d="M5,80 C25,85 45,35 70,65 C95,95 115,25 145,55 C175,85 195,45 215,35" 
                fill="none" 
                stroke="white" 
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <motion.circle 
                cx="145" cy="55" r="3" fill="white" 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2 }}
              />
            </svg>
          </div>
          
          <div className="mt-auto w-full flex justify-between items-end z-10">
            <div className="text-left">
              <div className="text-white/40 text-[10px] uppercase font-bold tracking-wider mb-1">Total Balance</div>
              <div className="text-neon-orange text-xs font-bold flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +$432.40 (+12%)
              </div>
            </div>
          </div>
        </div>

        {/* Exchange Module */}
        <div className="glass-card rounded-[2.5rem] p-8 flex flex-col gap-8 h-full">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Crypto Exchange</h3>
            <LayoutGrid className="w-5 h-5 text-white/40" />
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="flex justify-between text-xs text-white/40 mb-2">
                <span>USDETH</span>
                <span>Expires in 24 min</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold">B</div>
                  <span className="font-bold text-sm">BTA</span>
                </div>
                <div className="font-bold">40.670</div>
              </div>
            </div>

            <div className="flex justify-center -my-2 relative z-10">
              <div className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center rotate-90">
                <RefreshCw className="w-4 h-4 text-neon-orange" />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-neon-orange flex items-center justify-center text-[10px] font-bold">N</div>
                  <span className="font-bold text-sm">NBX</span>
                </div>
                <div className="font-bold">1230.365</div>
              </div>
            </div>

            <button className="w-full py-4 rounded-2xl bg-neon-orange text-black font-bold text-sm transition-transform active:scale-95">
              Exchange Now
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
