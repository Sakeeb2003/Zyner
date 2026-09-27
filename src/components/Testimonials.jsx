import React from 'react';
import { Star, Quote, CheckCircle, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data/travelData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Verified Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Loved By <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500">Travelers Worldwide</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Read authentic stories from explorers who booked their dream vacations with Zyder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="glass-card p-8 rounded-3xl border border-slate-800 flex flex-col justify-between relative shadow-xl hover:border-amber-500/40 transition-all duration-300"
            >
              <div>
                <Quote className="w-8 h-8 text-amber-500/30 mb-4" />
                
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{test.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-11 h-11 rounded-full object-cover border border-amber-500/40"
                  />
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-white flex items-center gap-1">
                      {test.name}
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
                    </h4>
                    <p className="text-xs text-slate-400">{test.role}</p>
                  </div>
                </div>

                <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">
                  {test.destination}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
