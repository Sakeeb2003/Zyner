import React from 'react';
import { ShieldCheck, Check, Star, Calendar, ArrowRight, Sparkles, MapPin, Users, Award } from 'lucide-react';
import { TOUR_PACKAGES, CURRENCIES } from '../data/travelData';

export default function Packages({ currency, onSelectPackage, onOpenBookingModal }) {
  const currSymbol = CURRENCIES[currency]?.symbol || '$';
  const currRate = CURRENCIES[currency]?.rate || 1;

  return (
    <section id="packages" className="py-24 bg-slate-900/60 relative border-t border-b border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>All-Inclusive Curated Journeys</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Bespoke <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500">Tour Packages</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Fully planned multi-day adventures featuring 5-star accommodations, private local guides, luxury transit, and exclusive experiences.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TOUR_PACKAGES.map((pkg) => {
            const convertedPrice = Math.round(pkg.price * currRate);
            const convertedOrigPrice = Math.round(pkg.originalPrice * currRate);

            return (
              <div
                key={pkg.id}
                className="group glass-card rounded-3xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col sm:flex-row"
              >
                {/* Image Side */}
                <div className="relative sm:w-2/5 h-64 sm:h-auto overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-950 via-transparent to-transparent opacity-70" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-[11px] font-extrabold tracking-wider uppercase shadow-md">
                    {pkg.badge}
                  </span>
                </div>

                {/* Content Side */}
                <div className="sm:w-3/5 p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-amber-400 font-semibold mb-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {pkg.destinations}
                      </span>
                      <span className="flex items-center gap-1 text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        {pkg.rating}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                      {pkg.title}
                    </h3>

                    <div className="flex items-center gap-2 text-slate-400 text-xs mb-4">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{pkg.duration}</span>
                      <span>•</span>
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <span>Small Group / Private</span>
                    </div>

                    {/* Inclusions list */}
                    <div className="space-y-1.5 mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Package Highlights:
                      </span>
                      {pkg.inclusions.slice(0, 3).map((inc, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block">Total Package from</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-black text-amber-400">
                          {currSymbol}{convertedPrice.toLocaleString()}
                        </span>
                        <span className="text-xs text-slate-500 line-through">
                          {currSymbol}{convertedOrigPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => onSelectPackage(pkg)}
                        className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-white transition-colors"
                      >
                        Itinerary
                      </button>
                      <button
                        onClick={() => onOpenBookingModal(pkg)}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-extrabold text-xs flex items-center gap-1 shadow-lg shadow-amber-500/20 transition-all"
                      >
                        <span>Book</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
