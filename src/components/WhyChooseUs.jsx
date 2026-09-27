import React from 'react';
import { ShieldCheck, Headphones, CalendarCheck, Sparkles, UserCheck, Award, Check } from 'lucide-react';
import { FEATURES } from '../data/travelData';

export default function WhyChooseUs() {
  const iconMap = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-400" />,
    Headphones: <Headphones className="w-6 h-6 text-emerald-400" />,
    CalendarCheck: <CalendarCheck className="w-6 h-6 text-sky-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-orange-400" />,
    UserCheck: <UserCheck className="w-6 h-6 text-purple-400" />,
    Award: <Award className="w-6 h-6 text-rose-400" />
  };

  return (
    <section id="why-us" className="py-24 bg-slate-950 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>The Zyder Standard</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why Discerning Travelers <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500">Choose Zyder</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We don't just book trips—we design seamless, worry-free journeys backed by 24/7 dedicated personal concierges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feat, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-3xl border border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5 shadow-md">
                  {iconMap[feat.icon] || <Check className="w-6 h-6 text-amber-400" />}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{feat.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-1 text-[11px] text-amber-400 font-semibold">
                <span>Verified Guarantee</span>
                <Check className="w-3 h-3 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
