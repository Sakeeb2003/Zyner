import React from 'react';
import { Star, MapPin, Heart, Clock, ArrowRight, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { CATEGORIES, CURRENCIES } from '../data/travelData';

export default function Destinations({
  destinations,
  selectedCategory,
  setSelectedCategory,
  currency,
  favorites,
  toggleFavorite,
  onSelectDestination,
  onOpenBookingModal
}) {
  const currSymbol = CURRENCIES[currency]?.symbol || '$';
  const currRate = CURRENCIES[currency]?.rate || 1;

  return (
    <section id="destinations" className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Collection 2025</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Handpicked <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500">Global Destinations</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Discover extraordinary places chosen by our travel curators for unmatched luxury, culture, and adventure.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Destinations Grid */}
        {destinations.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/50 rounded-3xl border border-slate-800">
            <Filter className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No Destinations Found</h3>
            <p className="text-slate-400 text-sm mb-6">Try adjusting your budget or search filter terms.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm"
            >
              Reset Category Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest) => {
              const isFav = favorites.includes(dest.id);
              const convertedPrice = Math.round(dest.price * currRate);
              const convertedOrigPrice = Math.round(dest.originalPrice * currRate);

              return (
                <div
                  key={dest.id}
                  className="group glass-card rounded-3xl overflow-hidden border border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col shadow-xl"
                >
                  {/* Card Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-400 border border-amber-500/30 text-[11px] font-bold uppercase tracking-wider">
                        {dest.tag || dest.category}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(dest.id);
                        }}
                        className={`p-2 rounded-full backdrop-blur-md transition-all ${
                          isFav 
                            ? 'bg-rose-500/90 text-white scale-110' 
                            : 'bg-slate-950/60 text-slate-300 hover:text-white hover:bg-slate-900'
                        }`}
                        title={isFav ? "Remove from wishlist" : "Add to wishlist"}
                      >
                        <Heart className={`w-4 h-4 ${isFav ? 'fill-white' : ''}`} />
                      </button>
                    </div>

                    {/* Bottom overlay info */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-slate-300 text-xs font-medium">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" />
                        <span>{dest.country}, {dest.region}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-slate-950/80 px-2.5 py-1 rounded-lg border border-slate-800 text-xs font-bold text-amber-400">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span>{dest.rating}</span>
                        <span className="text-slate-400 text-[10px]">({dest.reviewsCount})</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                        {dest.title}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                        {dest.description}
                      </p>

                      {/* Highlights */}
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {dest.highlights.slice(0, 3).map((hl, i) => (
                          <span key={i} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 text-[11px] font-medium border border-slate-800">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            {hl}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Info & Pricing */}
                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{dest.duration}</span>
                        </div>
                        <div className="flex items-baseline gap-1.5 mt-0.5">
                          <span className="text-2xl font-black text-white">
                            {currSymbol}{convertedPrice.toLocaleString()}
                          </span>
                          <span className="text-xs text-slate-500 line-through">
                            {currSymbol}{convertedOrigPrice.toLocaleString()}
                          </span>
                          <span className="text-[10px] text-slate-400">/ person</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => onSelectDestination(dest)}
                          className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-white transition-colors"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => onOpenBookingModal(dest)}
                          className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-extrabold text-xs flex items-center gap-1 transition-all shadow-md"
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
        )}

      </div>
    </section>
  );
}
