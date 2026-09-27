import React, { useState } from 'react';
import { Sparkles, Compass, CheckCircle2, ArrowRight, RefreshCw, Plane, DollarSign, Calendar, Users } from 'lucide-react';
import { DESTINATIONS, CURRENCIES } from '../data/travelData';

export default function TripPlanner({ currency, onOpenBookingModal, onSelectDestination }) {
  const [step, setStep] = useState(1);
  const [vibe, setVibe] = useState('Beach');
  const [duration, setDuration] = useState('7 Days');
  const [budgetTier, setBudgetTier] = useState(2500);
  const [groupSize, setGroupSize] = useState('Couple');
  const [recommendation, setRecommendation] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const currSymbol = CURRENCIES[currency]?.symbol || '$';
  const currRate = CURRENCIES[currency]?.rate || 1;

  const vibes = [
    { id: 'Beach', name: 'Tropical Beach', desc: 'Turquoise ocean & palm trees' },
    { id: 'Mountain', name: 'Alpine Peaks', desc: 'Snowy mountains & fresh air' },
    { id: 'Culture', name: 'Heritage & History', desc: 'Ancient temples & ancient cities' },
    { id: 'Safari', name: 'Wildlife Safari', desc: 'Big Five game drives & savanna' },
    { id: 'Luxury', name: 'Ultra Luxury Stay', desc: '5-star resorts & private villas' }
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setRecommendation(null);
    setTimeout(() => {
      // Pick best matching destination or default to Bali / Swiss
      const match = DESTINATIONS.find(d => d.category === vibe) || DESTINATIONS[0];
      setRecommendation(match);
      setIsGenerating(false);
      setStep(5); // Recommendation view
    }, 900);
  };

  const handleReset = () => {
    setStep(1);
    setRecommendation(null);
  };

  return (
    <section id="planner" className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/10 via-orange-500/5 to-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive AI Itinerary Planner</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Build Your Bespoke <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500">Dream Journey</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Answer 4 quick preferences and let our AI concierge curate your ideal travel experience in seconds.
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
          
          {/* Progress Bar */}
          {step < 5 && (
            <div className="mb-8">
              <div className="flex justify-between text-xs font-bold text-slate-400 mb-2">
                <span>Step {step} of 4</span>
                <span>{step === 1 ? 'Select Vibe' : step === 2 ? 'Choose Duration' : step === 3 ? 'Set Budget' : 'Travelers'}</span>
              </div>
              <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 rounded-full"
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* STEP 1: Select Vibe */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h3 className="text-xl font-bold text-white text-center">What is your dream travel vibe?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {vibes.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setVibe(v.id)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      vibe === v.id
                        ? 'bg-amber-500/15 border-amber-500 text-white shadow-lg shadow-amber-500/10 scale-105'
                        : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold text-base text-amber-400 mb-1">{v.name}</div>
                    <div className="text-xs text-slate-400">{v.desc}</div>
                  </button>
                ))}
              </div>
              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Pick Duration */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h3 className="text-xl font-bold text-white text-center">How long do you plan to travel?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {['5 Days / Quick Escape', '7-9 Days / Classic Week', '12+ Days / Grand Expedition'].map((d) => (
                  <button
                    key={d}
                    onClick={() => setDuration(d)}
                    className={`p-5 rounded-2xl border text-center font-bold transition-all ${
                      duration === d
                        ? 'bg-amber-500/15 border-amber-500 text-amber-300 scale-105'
                        : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <Calendar className="w-6 h-6 mx-auto mb-2 text-amber-400" />
                    <span>{d}</span>
                  </button>
                ))}
              </div>
              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-sm font-semibold"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold text-sm flex items-center gap-2"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Set Budget */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h3 className="text-xl font-bold text-white text-center">What is your target budget per person?</h3>
              <div className="max-w-md mx-auto space-y-4">
                <div className="flex justify-between items-center text-lg font-bold text-amber-400 bg-slate-900 p-4 rounded-2xl border border-slate-800">
                  <span>Target Budget:</span>
                  <span>{currSymbol}{Math.round(budgetTier * currRate).toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="1200"
                  max="4500"
                  step="200"
                  value={budgetTier}
                  onChange={(e) => setBudgetTier(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-xs text-slate-400">
                  <span>{currSymbol}{Math.round(1200 * currRate)} (Standard)</span>
                  <span>{currSymbol}{Math.round(4500 * currRate)} (Ultra VIP)</span>
                </div>
              </div>
              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-sm font-semibold"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold text-sm flex items-center gap-2"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Travelers */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h3 className="text-xl font-bold text-white text-center">Who will be traveling with you?</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {['Solo Explorer', 'Couple / Romantic', 'Family Vacation', 'Friends Group'].map((g) => (
                  <button
                    key={g}
                    onClick={() => setGroupSize(g)}
                    className={`p-4 rounded-2xl border text-center font-bold text-xs sm:text-sm transition-all ${
                      groupSize === g
                        ? 'bg-amber-500/15 border-amber-500 text-amber-300 scale-105'
                        : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <Users className="w-5 h-5 mx-auto mb-2 text-amber-400" />
                    <span>{g}</span>
                  </button>
                ))}
              </div>
              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(3)}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-sm font-semibold"
                >
                  Back
                </button>
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="px-7 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-slate-950 font-extrabold text-sm flex items-center gap-2 shadow-xl shadow-amber-500/25 animate-pulse"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Curating Bespoke Itinerary...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Generate My Travel Itinerary</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: Tailored Recommendation Result */}
          {step === 5 && recommendation && (
            <div className="space-y-6 animate-in zoom-in-95 duration-300">
              <div className="text-center">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase border border-emerald-500/30">
                  ✨ Match Confidence: 99.4%
                </span>
                <h3 className="text-2xl font-black text-white mt-2">Your Perfect Match: {recommendation.title}</h3>
                <p className="text-slate-400 text-sm">Tailored specifically for {groupSize} seeking a {recommendation.category} experience.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
                <img
                  src={recommendation.image}
                  alt={recommendation.title}
                  className="w-full h-56 object-cover rounded-xl border border-slate-800"
                />
                <div className="flex flex-col justify-between space-y-3">
                  <div>
                    <h4 className="text-lg font-bold text-amber-300 mb-1">{recommendation.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">{recommendation.description}</p>
                    <div className="space-y-1">
                      {recommendation.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block">Est. Price ({groupSize})</span>
                      <span className="text-xl font-black text-amber-400">
                        {currSymbol}{Math.round(recommendation.price * currRate).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => onSelectDestination(recommendation)}
                        className="px-3 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => onOpenBookingModal(recommendation)}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold text-xs flex items-center gap-1 shadow-lg shadow-amber-500/20"
                      >
                        <Plane className="w-3.5 h-3.5 fill-slate-950" />
                        <span>Book This Trip</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleReset}
                  className="text-xs text-slate-400 hover:text-white underline flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Retake Questionnaire</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
