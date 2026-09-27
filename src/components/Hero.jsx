import React, { useState } from 'react';
import { Search, Calendar, MapPin, DollarSign, Filter, Sparkles, Star, ShieldCheck, ArrowRight, Compass } from 'lucide-react';
import { CATEGORIES, CURRENCIES } from '../data/travelData';

export default function Hero({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory,
  maxBudget,
  setMaxBudget,
  currency,
  onSearchSubmit
}) {
  const [selectedDate, setSelectedDate] = useState('');

  const currSymbol = CURRENCIES[currency]?.symbol || '$';
  const currRate = CURRENCIES[currency]?.rate || 1;

  const convertedMaxBudget = Math.round(maxBudget * currRate);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit();
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* Background Image & Gradient Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Tropical Beach Travel"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-slate-950/90" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        {/* Top Glow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold mb-6 shadow-xl backdrop-blur-md animate-bounce">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Awarded #1 Bespoke Travel & Luxury Agency 2025</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
          Explore The World <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500">
            Beyond Boundaries
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-normal mb-10 leading-relaxed">
          Curated luxury escapes, alpine expeditions, tropical island sanctuaries, and personalized global itineraries created for discerning travelers.
        </p>

        {/* Interactive Search Widget */}
        <div className="max-w-5xl mx-auto glass-panel p-4 sm:p-5 rounded-3xl shadow-2xl border border-slate-700/60 text-left mb-12">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            
            {/* Search Location Input */}
            <div className="flex flex-col gap-1 px-3 py-2 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors">
              <label className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Where To?
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Bali, Swiss Alps, Kyoto..."
                className="bg-transparent text-sm text-white placeholder-slate-400 outline-none font-medium w-full"
              />
            </div>

            {/* Travel Category Selector */}
            <div className="flex flex-col gap-1 px-3 py-2 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors">
              <label className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5" />
                Travel Vibe
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-transparent text-sm text-white outline-none font-medium cursor-pointer w-full [&>option]:bg-slate-900 [&>option]:text-white"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Departure Date */}
            <div className="flex flex-col gap-1 px-3 py-2 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors">
              <label className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Travel Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-transparent text-sm text-white outline-none font-medium w-full cursor-pointer"
              />
            </div>

            {/* Budget Range Slider & Submit CTA */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5" /> Max Budget:
                </span>
                <span className="text-xs font-bold text-white bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                  {currSymbol}{convertedMaxBudget.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="800"
                max="5000"
                step="100"
                value={maxBudget}
                onChange={(e) => setMaxBudget(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
              <button
                type="submit"
                className="mt-1 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-95"
              >
                <Search className="w-4 h-4 stroke-[2.5]" />
                <span>Search Journeys</span>
              </button>
            </div>

          </form>
        </div>

        {/* Quick Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="glass-card p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Compass className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="text-xl sm:text-2xl font-black text-white">150+</div>
              <div className="text-xs text-slate-400 font-medium">Curated Destinations</div>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Star className="w-6 h-6 fill-emerald-400" />
            </div>
            <div className="text-left">
              <div className="text-xl sm:text-2xl font-black text-white">4.98 / 5</div>
              <div className="text-xs text-slate-400 font-medium">Traveler Satisfaction</div>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="text-xl sm:text-2xl font-black text-white">50,000+</div>
              <div className="text-xs text-slate-400 font-medium">Happy Explorers</div>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="text-xl sm:text-2xl font-black text-white">24 / 7</div>
              <div className="text-xs text-slate-400 font-medium">VIP Concierge</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
