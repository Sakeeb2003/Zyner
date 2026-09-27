import React from 'react';
import { X, Calendar, MapPin, Star, CheckCircle2, XCircle, Users, Clock, Plane, ShieldCheck, Heart } from 'lucide-react';
import { CURRENCIES } from '../data/travelData';

export default function PackageModal({ item, type, onClose, onBook, currency, favorites, toggleFavorite }) {
  if (!item) return null;

  const currSymbol = CURRENCIES[currency]?.symbol || '$';
  const currRate = CURRENCIES[currency]?.rate || 1;
  const convertedPrice = Math.round(item.price * currRate);
  const convertedOrigPrice = Math.round(item.originalPrice * currRate);
  const isFav = favorites?.includes(item.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="glass-panel w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden flex-shrink-0">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

          {/* Close & Wishlist Buttons */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <button
              onClick={() => toggleFavorite && toggleFavorite(item.id)}
              className={`p-2.5 rounded-full backdrop-blur-md transition-colors ${
                isFav ? 'bg-rose-500 text-white' : 'bg-slate-950/70 text-slate-300 hover:text-white'
              }`}
            >
              <Heart className={`w-5 h-5 ${isFav ? 'fill-white' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-slate-950/70 text-slate-300 hover:text-white backdrop-blur-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider">
                {item.tag || item.badge || item.category || 'Luxury Package'}
              </span>
              <span className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-slate-950/80 px-2.5 py-1 rounded-full border border-slate-800">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                {item.rating} ({item.reviewsCount} reviews)
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {item.title}
            </h2>
            <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm mt-1">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{item.destinations || `${item.country}, ${item.region}`}</span>
              <span>•</span>
              <Clock className="w-4 h-4 text-slate-400" />
              <span>{item.duration}</span>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-left">
          
          {/* Overview */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Experience Overview</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {item.description || "Embark on an unforgettable journey meticulously crafted with 5-star accommodations, private expert guides, seamless transfers, and handpicked local experiences."}
            </p>
          </div>

          {/* Inclusions / Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <div>
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> What's Included
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {(item.inclusions || item.highlights || []).map((inc, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{inc}</span>
                  </li>
                ))}
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>24/7 Personal Concierge Support</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-400" /> Guarantees & Perks
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>100% Flexible Cancellation policy</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>Instant e-Ticket & Voucher generation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>Verified local professional guides</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Itinerary Timeline (If available) */}
          {item.itinerary && item.itinerary.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Day-by-Day Detailed Itinerary</h3>
              <div className="space-y-4 border-l-2 border-amber-500/30 ml-2 pl-4">
                {item.itinerary.map((day) => (
                  <div key={day.day} className="relative">
                    <div className="absolute -left-[23px] top-1 w-3 h-3 rounded-full bg-amber-400 border-2 border-slate-950" />
                    <div className="text-xs font-bold text-amber-400">Day {day.day}: {day.title}</div>
                    <p className="text-xs text-slate-300 mt-0.5">{day.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Bar */}
        <div className="p-4 sm:p-6 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 block">Total per person</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-black text-amber-400">
                {currSymbol}{convertedPrice.toLocaleString()}
              </span>
              <span className="text-sm text-slate-500 line-through">
                {currSymbol}{convertedOrigPrice.toLocaleString()}
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onBook(item);
            }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-300 hover:to-orange-300 text-slate-950 font-extrabold text-sm flex items-center gap-2 shadow-xl shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all"
          >
            <Plane className="w-4 h-4 fill-slate-950" />
            <span>Book This Journey Now</span>
          </button>
        </div>

      </div>
    </div>
  );
}
