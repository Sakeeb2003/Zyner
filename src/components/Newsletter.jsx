import React, { useState } from 'react';
import { Send, Tag, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Newsletter({ showToast }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    showToast('🎉 Promo code ZYDER100OFF activated!', 'success');
  };

  return (
    <section className="py-16 bg-slate-950 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-amber-500/30 relative overflow-hidden text-center shadow-2xl">
          
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-2xl mx-auto relative z-10 space-y-4">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
              <Tag className="w-3.5 h-3.5" />
              <span>Exclusive Member Discount</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Get <span className="text-amber-400">$100 Off</span> Your First Journey
            </h2>

            <p className="text-slate-300 text-sm">
              Subscribe to our private travel dispatch for secret flight deals, luxury resort upgrades, and curated itineraries.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Claim $100 Off</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 max-w-md mx-auto space-y-2 animate-in zoom-in-95 duration-200">
                <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-base">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Promo Code Unlocked!</span>
                </div>
                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-amber-400 font-mono font-bold text-lg">
                  ZYDER100OFF
                </div>
                <p className="text-[11px] text-slate-400">Apply code at booking checkout to claim your \$100 credit.</p>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
