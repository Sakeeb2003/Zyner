import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Packages from './components/Packages';
import TripPlanner from './components/TripPlanner';
import PackageModal from './components/PackageModal';
import BookingModal from './components/BookingModal';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ToastNotification from './components/ToastNotification';

import { DESTINATIONS } from './data/travelData';

export default function App() {
  const [currency, setCurrency] = useState('USD');
  const [favorites, setFavorites] = useState(['dest-1', 'dest-2']);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxBudget, setMaxBudget] = useState(5000);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Modals state
  const [selectedItemForModal, setSelectedItemForModal] = useState(null);
  const [bookingModalItem, setBookingModalItem] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Toast notification state
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  // Toggle wishlist favorite
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
      showToast('Removed from your saved wishlist', 'info');
    } else {
      setFavorites([...favorites, id]);
      showToast('❤️ Saved to your wishlist!', 'success');
    }
  };

  // Filtered destinations logic
  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((dest) => {
      // Category filter
      const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory;
      
      // Search term filter
      const searchLower = searchQuery.toLowerCase().trim();
      const matchesSearch = !searchLower || 
        dest.title.toLowerCase().includes(searchLower) ||
        dest.country.toLowerCase().includes(searchLower) ||
        dest.region.toLowerCase().includes(searchLower) ||
        dest.category.toLowerCase().includes(searchLower);

      // Budget filter
      const matchesBudget = dest.price <= maxBudget;

      return matchesCategory && matchesSearch && matchesBudget;
    });
  }, [selectedCategory, searchQuery, maxBudget]);

  const handleHeroSearchSubmit = () => {
    const element = document.getElementById('destinations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} antialiased selection:bg-amber-500 selection:text-slate-950 font-sans`}>
      
      {/* Sticky Navigation Bar */}
      <Navbar
        currency={currency}
        setCurrency={setCurrency}
        favoritesCount={favorites.length}
        onOpenPlanner={() => {
          const el = document.getElementById('planner');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenBookingModal={(item) => {
          setBookingModalItem(item);
          setIsBookingModalOpen(true);
        }}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Hero Banner with Live Search */}
      <Hero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        maxBudget={maxBudget}
        setMaxBudget={setMaxBudget}
        currency={currency}
        onSearchSubmit={handleHeroSearchSubmit}
      />

      {/* Handpicked Global Destinations */}
      <Destinations
        destinations={filteredDestinations}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        currency={currency}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        onSelectDestination={(dest) => setSelectedItemForModal(dest)}
        onOpenBookingModal={(dest) => {
          setBookingModalItem(dest);
          setIsBookingModalOpen(true);
        }}
      />

      {/* Bespoke Tour Packages */}
      <Packages
        currency={currency}
        onSelectPackage={(pkg) => setSelectedItemForModal(pkg)}
        onOpenBookingModal={(pkg) => {
          setBookingModalItem(pkg);
          setIsBookingModalOpen(true);
        }}
      />

      {/* AI Interactive Trip Planner */}
      <TripPlanner
        currency={currency}
        onOpenBookingModal={(item) => {
          setBookingModalItem(item);
          setIsBookingModalOpen(true);
        }}
        onSelectDestination={(dest) => setSelectedItemForModal(dest)}
      />

      {/* Why Choose Zyder Feature Cards */}
      <WhyChooseUs />

      {/* Traveler Photo Gallery & Lightbox */}
      <Gallery />

      {/* Traveler Reviews & Testimonials */}
      <Testimonials />

      {/* Newsletter Promo Coupon Banner */}
      <Newsletter showToast={showToast} />

      {/* Footer */}
      <Footer />

      {/* Rich Package / Destination Detail Modal */}
      {selectedItemForModal && (
        <PackageModal
          item={selectedItemForModal}
          onClose={() => setSelectedItemForModal(null)}
          onBook={(item) => {
            setSelectedItemForModal(null);
            setBookingModalItem(item);
            setIsBookingModalOpen(true);
          }}
          currency={currency}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      )}

      {/* Interactive Reservation Modal */}
      {isBookingModalOpen && (
        <BookingModal
          item={bookingModalItem}
          onClose={() => {
            setIsBookingModalOpen(false);
            setBookingModalItem(null);
          }}
          currency={currency}
          showToast={showToast}
        />
      )}

      {/* Toast Notification Alert */}
      <ToastNotification
        toast={toast}
        onClose={() => setToast(null)}
      />

    </div>
  );
}
