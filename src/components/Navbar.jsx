import React, { useState, useEffect } from 'react';
import { Plane, Compass, Heart, Menu, X, Sun, Moon, Globe, ChevronDown, Sparkles } from 'lucide-react';
import { CURRENCIES } from '../data/travelData';

export default function Navbar({ 
  currency, 
  setCurrency, 
  favoritesCount, 
  onOpenPlanner, 
  onOpenBookingModal,
  isDarkMode,
  setIsDarkMode,
  activeSection
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'Packages', href: '#packages' },
    { name: 'Trip Planner', href: '#planner' },
    { name: 'Why Zyder', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-2xl shadow-slate-950/50' 
        : 'bg-gradient-to-b from-slate-950/95 via-slate-950/50 to-transparent py-5'
    }`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-emerald-400 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Compass className="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-300 uppercase">
                ZYDER<span className="text-amber-400 font-extrabold text-xs ml-1.5 px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30">JOURNEYS</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase font-medium">Extraordinary Travel</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1.5 bg-slate-900/70 p-2 rounded-full border border-slate-800/80 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-xs xl:text-sm font-semibold text-slate-300 hover:text-white rounded-full transition-all duration-200 hover:bg-slate-800/80 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Tools */}
          <div className="hidden md:flex items-center gap-3 xl:gap-4 shrink-0">
            
            {/* Currency Selector */}
            <div className="relative">
              <button
                onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 rounded-xl border border-slate-800 transition-all whitespace-nowrap"
              >
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>{currency} ({CURRENCIES[currency].symbol})</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {isCurrencyDropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 max-h-80 overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150 custom-scrollbar">
                  <div className="px-3 py-1 text-[10px] font-bold text-amber-400 uppercase tracking-wider border-b border-slate-800 mb-1">
                    Select Currency
                  </div>
                  {Object.keys(CURRENCIES).map((currKey) => (
                    <button
                      key={currKey}
                      onClick={() => {
                        setCurrency(currKey);
                        setIsCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs font-semibold flex items-center justify-between hover:bg-slate-800/80 transition-colors ${
                        currency === currKey ? 'text-amber-400 bg-amber-500/15 font-bold border-l-2 border-amber-400' : 'text-slate-300'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span>{currKey}</span>
                        <span className="text-[10px] text-slate-400 font-normal">{CURRENCIES[currKey].name}</span>
                      </div>
                      <span className="text-xs font-bold text-amber-400/90 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">{CURRENCIES[currKey].symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Wishlist Counter */}
            <a 
              href="#destinations" 
              className="relative p-2.5 text-slate-300 hover:text-amber-400 bg-slate-900/80 hover:bg-slate-800 rounded-xl border border-slate-800 transition-all group"
              title="Saved Wishlist"
            >
              <Heart className="w-4 h-4 text-slate-300 group-hover:text-rose-500 group-hover:fill-rose-500 transition-colors" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center animate-bounce">
                  {favoritesCount}
                </span>
              )}
            </a>

            {/* Light / Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 text-slate-300 hover:text-amber-400 bg-slate-900/80 hover:bg-slate-800 rounded-xl border border-slate-800 transition-all"
              title="Toggle theme mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-300" />}
            </button>

            {/* Custom Trip Builder CTA */}
            <button
              onClick={onOpenPlanner}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-amber-500/30 hover:border-amber-500/60 rounded-xl transition-all shadow-md group whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span>AI Trip Builder</span>
            </button>

            {/* Book Now Main CTA */}
            <button
              onClick={() => onOpenBookingModal(null)}
              className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-400 hover:from-amber-300 hover:to-orange-300 rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap"
            >
              <Plane className="w-4 h-4 fill-slate-950" />
              <span>Book Journey</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-slate-300 hover:text-white bg-slate-900/80 rounded-xl border border-slate-800"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-slate-200 hover:bg-slate-900 hover:text-amber-400 font-medium text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-semibold text-slate-400">Select Currency</span>
              <div className="flex gap-1">
                {Object.keys(CURRENCIES).map((currKey) => (
                  <button
                    key={currKey}
                    onClick={() => setCurrency(currKey)}
                    className={`px-2 py-1 text-xs rounded font-medium ${
                      currency === currKey ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-900 text-slate-300'
                    }`}
                  >
                    {currKey}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenPlanner();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-amber-500/40 text-amber-400 font-semibold text-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>AI Trip Builder Quiz</span>
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBookingModal(null);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20"
            >
              <Plane className="w-4 h-4 fill-slate-950" />
              <span>Book Journey Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
