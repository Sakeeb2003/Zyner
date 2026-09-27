import React from 'react';
import { Compass, Mail, Phone, MapPin, Globe, Share2, Camera, Send, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm relative pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-emerald-400 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Compass className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <span className="text-xl font-black text-white tracking-wider uppercase">
                ZYDER<span className="text-amber-400">JOURNEYS</span>
              </span>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Zyder Journeys is a premier global travel agency specializing in handpicked luxury stays, thrilling adventures, and bespoke private itineraries worldwide.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:text-amber-400 transition-colors" title="Global Network">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:text-amber-400 transition-colors" title="Social Channels">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:text-amber-400 transition-colors" title="Travel Photos">
                <Camera className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:text-amber-400 transition-colors" title="Contact Us">
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#destinations" className="hover:text-amber-400 transition-colors">Featured Destinations</a></li>
              <li><a href="#packages" className="hover:text-amber-400 transition-colors">Tour Packages</a></li>
              <li><a href="#planner" className="hover:text-amber-400 transition-colors">AI Trip Planner</a></li>
              <li><a href="#why-us" className="hover:text-amber-400 transition-colors">Why Choose Zyder</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Traveler Gallery</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Top Spots</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#destinations" className="hover:text-amber-400 transition-colors">Bali, Indonesia</a></li>
              <li><a href="#destinations" className="hover:text-amber-400 transition-colors">Swiss Alps, Switzerland</a></li>
              <li><a href="#destinations" className="hover:text-amber-400 transition-colors">Kyoto, Japan</a></li>
              <li><a href="#destinations" className="hover:text-amber-400 transition-colors">Serengeti, Tanzania</a></li>
              <li><a href="#destinations" className="hover:text-amber-400 transition-colors">Santorini, Greece</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Concierge Desk</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>+1 (800) 555-ZYDER</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>concierge@zyderjourneys.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>777 Grand Avenue, New York, NY 10001</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} Zyder Journeys. Created for Zyder Web Design Assessment. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
