import React, { useState } from 'react';
import { X, Calendar, Users, CheckCircle2, ShieldCheck, Plane, CreditCard, Sparkles, AlertCircle, Copy, Printer } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CURRENCIES } from '../data/travelData';

export default function BookingModal({ item, onClose, currency, showToast }) {
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [travelDate, setTravelDate] = useState('');
  
  // Add-ons state
  const [addons, setAddons] = useState({
    airportTransfer: true,
    insurance: false,
    privateGuide: false,
    gourmetMeals: true
  });

  // User details
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    specialRequest: ''
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [formError, setFormError] = useState('');

  const currSymbol = CURRENCIES[currency]?.symbol || '$';
  const currRate = CURRENCIES[currency]?.rate || 1;

  // Base price per person
  const basePricePerPerson = item ? item.price : 1490;
  
  // Addon prices
  const addonPrices = {
    airportTransfer: 90,
    insurance: 60,
    privateGuide: 150,
    gourmetMeals: 120
  };

  const calculateTotal = () => {
    let subtotal = (adults * basePricePerPerson) + (childrenCount * basePricePerPerson * 0.7);
    if (addons.airportTransfer) subtotal += addonPrices.airportTransfer;
    if (addons.insurance) subtotal += addonPrices.insurance * (adults + childrenCount);
    if (addons.privateGuide) subtotal += addonPrices.privateGuide;
    if (addons.gourmetMeals) subtotal += addonPrices.gourmetMeals * (adults + childrenCount);
    return Math.round(subtotal * currRate);
  };

  const handleAddonToggle = (key) => {
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !travelDate) {
      setFormError('Please fill in your name, email, and travel date.');
      return;
    }

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti effect triggered');
    }

    const randomRef = 'ZYDER-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setBookingConfirmed(true);
    showToast(`🎉 Booking Reserved! Ref: ${randomRef}`, 'success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="glass-panel w-full max-w-2xl max-h-[90vh] rounded-3xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col animate-in zoom-in-95 duration-200 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Instant Reservation
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              {item ? item.title : 'Custom Bespoke Journey Reservation'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!bookingConfirmed ? (
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6 flex-1">
            
            {formError && (
              <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-400" />
                <span>{formError}</span>
              </div>
            )}

            {/* Travel Date & Guest Count */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" /> Departure Date
                </label>
                <input
                  type="date"
                  required
                  value={travelDate}
                  onChange={(e) => {
                    setTravelDate(e.target.value);
                    setFormError('');
                  }}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-amber-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-amber-400" /> Adults (12+ yrs)
                </label>
                <div className="flex items-center bg-slate-900 border border-slate-700 rounded-xl px-2 py-1 justify-between">
                  <button
                    type="button"
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-7 h-7 bg-slate-800 text-white rounded font-bold text-sm"
                  >-</button>
                  <span className="text-xs font-bold text-white">{adults}</span>
                  <button
                    type="button"
                    onClick={() => setAdults(adults + 1)}
                    className="w-7 h-7 bg-slate-800 text-white rounded font-bold text-sm"
                  >+</button>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-amber-400" /> Children (2-11 yrs)
                </label>
                <div className="flex items-center bg-slate-900 border border-slate-700 rounded-xl px-2 py-1 justify-between">
                  <button
                    type="button"
                    onClick={() => setChildrenCount(Math.max(0, childrenCount - 1))}
                    className="w-7 h-7 bg-slate-800 text-white rounded font-bold text-sm"
                  >-</button>
                  <span className="text-xs font-bold text-white">{childrenCount}</span>
                  <button
                    type="button"
                    onClick={() => setChildrenCount(childrenCount + 1)}
                    className="w-7 h-7 bg-slate-800 text-white rounded font-bold text-sm"
                  >+</button>
                </div>
              </div>
            </div>

            {/* Custom Upgrades & Add-ons */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                Enhance Your Trip (Optional Add-ons)
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                
                <label className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  addons.airportTransfer ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'
                }`}>
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      checked={addons.airportTransfer} 
                      onChange={() => handleAddonToggle('airportTransfer')}
                      className="accent-amber-500" 
                    />
                    <span className="text-xs font-semibold">VIP Airport Transfer</span>
                  </div>
                  <span className="text-xs font-bold text-amber-400">+{currSymbol}{Math.round(addonPrices.airportTransfer * currRate)}</span>
                </label>

                <label className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  addons.insurance ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'
                }`}>
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      checked={addons.insurance} 
                      onChange={() => handleAddonToggle('insurance')}
                      className="accent-amber-500" 
                    />
                    <span className="text-xs font-semibold">Travel Health Insurance</span>
                  </div>
                  <span className="text-xs font-bold text-amber-400">+{currSymbol}{Math.round(addonPrices.insurance * currRate)}/p</span>
                </label>

                <label className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  addons.privateGuide ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'
                }`}>
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      checked={addons.privateGuide} 
                      onChange={() => handleAddonToggle('privateGuide')}
                      className="accent-amber-500" 
                    />
                    <span className="text-xs font-semibold">Dedicated Private Guide</span>
                  </div>
                  <span className="text-xs font-bold text-amber-400">+{currSymbol}{Math.round(addonPrices.privateGuide * currRate)}</span>
                </label>

                <label className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  addons.gourmetMeals ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'
                }`}>
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      checked={addons.gourmetMeals} 
                      onChange={() => handleAddonToggle('gourmetMeals')}
                      className="accent-amber-500" 
                    />
                    <span className="text-xs font-semibold">All Gourmet Meals</span>
                  </div>
                  <span className="text-xs font-bold text-amber-400">+{currSymbol}{Math.round(addonPrices.gourmetMeals * currRate)}/p</span>
                </label>

              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                Primary Traveler Details
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-amber-500"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-amber-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-amber-500"
                />
                <input
                  type="text"
                  placeholder="Dietary or Special Requests"
                  value={formData.specialRequest}
                  onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Price Total Bar & Action */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Calculated Total</span>
                <span className="text-2xl font-black text-amber-400">
                  {currSymbol}{calculateTotal().toLocaleString()}
                </span>
              </div>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-slate-950 font-extrabold text-sm flex items-center gap-2 shadow-xl shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all"
              >
                <CreditCard className="w-4 h-4" />
                <span>Confirm Reservation</span>
              </button>
            </div>

          </form>
        ) : (
          /* Confirmation Ticket Card */
          <div className="p-8 text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-white mb-1">Reservation Confirmed!</h3>
              <p className="text-xs text-slate-400">Your travel confirmation pass has been issued and sent to <span className="text-amber-300">{formData.email}</span>.</p>
            </div>

            {/* Ticket Card */}
            <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 text-left space-y-3 relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Booking Code</span>
                  <span className="text-lg font-black text-amber-400 font-mono">{bookingRef}</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
                  Status: Reserved & Confirmed
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-500 block">Primary Traveler:</span>
                  <span className="font-bold text-white">{formData.fullName}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Departure Date:</span>
                  <span className="font-bold text-white">{travelDate}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Guests:</span>
                  <span className="font-bold text-white">{adults} Adults, {childrenCount} Children</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Total Paid / Due:</span>
                  <span className="font-bold text-amber-400">{currSymbol}{calculateTotal().toLocaleString()}</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-800/80">
                <span>📍 Package: {item ? item.title : 'Custom Journey'}</span>
              </div>
            </div>

            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(bookingRef);
                  showToast('Booking code copied to clipboard!', 'success');
                }}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 flex items-center gap-1.5"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Reference</span>
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-extrabold shadow-lg"
              >
                Close & Return
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
