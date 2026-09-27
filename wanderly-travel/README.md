# 🌍 Wanderly Travel Website

> **"Discover the world. Create unforgettable memories."**

A premium, modern travel platform built for a Web Design Internship Assessment. Wanderly helps users discover destinations, explore travel experiences, and find suitable travel packages.

---

## 📋 Project Overview

Wanderly is a fully responsive, production-quality travel startup website built with pure HTML5, CSS3, and Vanilla JavaScript. It demonstrates strong UI/UX principles, visual hierarchy, accessibility, and interactive JavaScript features — all without any external frameworks.

---

## ✨ Features

### Sections
- **Navigation** — Fixed/sticky navbar with logo, links, CTA button and mobile hamburger menu
- **Hero** — Full-screen cinematic hero with heading, stats, dual CTA buttons, and a floating destination card
- **Trip Planner** — Floating search panel with destination, date, and traveler fields
- **Popular Destinations** — 4 destination cards (Ella Sri Lanka, Maldives, Dubai, Bali) with filter system
- **Why Choose Us** — 4 feature cards on a premium dark background
- **Travel Experiences** — 4 full-bleed experience cards (Adventure, Beach, Nature, Culture)
- **Featured Package** — "7 Days in Paradise" Maldives luxury package with image + content split layout
- **How It Works** — 3-step process with visual step connectors
- **Testimonials** — 3 traveler reviews with star ratings and elegant avatars
- **CTA Section** — Full-screen background CTA with trust badges
- **Footer** — Multi-column footer with newsletter subscription, social links, legal links

### Interactive Features
- Mobile hamburger menu with smooth slide animation
- Smooth scroll navigation for all anchor links
- Sticky navbar that changes appearance on scroll
- Active nav link highlighting based on current section
- Destination filtering by category (All / Beach / Adventure / Nature / Culture / City)
- Trip search form with real-time validation and error messages
- Scroll reveal animations using IntersectionObserver
- Back-to-top button with animated appearance
- Toast notification system for user feedback
- Newsletter form with email validation
- Keyboard accessibility for destination cards

---

## 🛠 Technologies Used

| Technology   | Purpose                                |
|-------------|----------------------------------------|
| HTML5        | Semantic page structure                |
| CSS3         | Styling, animations, responsive design |
| Vanilla JS   | Interactivity, validation, filtering   |
| Google Fonts | Poppins (headings), Inter (body text)  |
| Font Awesome | Icons throughout the UI                |
| Unsplash CDN | High-quality travel photography        |

---

## 🎨 Design Concept

Wanderly follows a **premium travel startup aesthetic** with:

- **Color Palette:** Deep navy (`#0B1F33`) primary, teal accent (`#20B8A6`), warm sand (`#E9D8B4`), light background (`#F7F8F5`)
- **Typography:** Poppins for bold, impactful headings; Inter for clean, readable body text
- **Design Style:** Glassmorphism accents, card-based layout, soft shadows, rounded corners, micro-animations
- **Visual Hierarchy:** Clear typographic scale, strategic use of color and whitespace
- **Photography:** Cinematic travel imagery (AI-generated + Unsplash) for authentic feel

---

## 📱 Responsive Design

The website is optimised for the following breakpoints:

| Breakpoint    | Behavior                                        |
|--------------|-------------------------------------------------|
| 1920px        | Full desktop — two-column hero, 4-col grids     |
| 1440px        | Standard desktop — optimal reading width        |
| 1024px        | Tablet — hamburger menu, 2-col cards           |
| 768px         | Mobile — single-column, full-width buttons      |
| 480px         | Small mobile — reduced font sizes              |
| 375px         | Tiny mobile — compact spacing, no overflow      |

---

## ♿ Accessibility

- Semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Proper heading hierarchy (single `<h1>` per page)
- Descriptive `alt` attributes on all images
- ARIA labels, roles, and `aria-live` regions
- `aria-expanded` for hamburger button state
- Keyboard-navigable cards and links
- Visible focus states with `focus-visible` pseudo-class
- Screen reader text with `.sr-only` class
- Good color contrast ratios throughout
- `role="alert"` on form error messages

---

## ⚡ JavaScript Features

1. **Mobile Menu** — Full-screen overlay with smooth animation; closes on link click, Escape key, or outside click
2. **Smooth Scrolling** — Native-smooth scrolling with navbar offset compensation
3. **Sticky Navbar** — Style changes (background + blur) after 60px scroll
4. **Active Link Detection** — Uses section offsets to highlight the current nav link
5. **Destination Filtering** — Real-time category filtering with no-results state
6. **Form Validation** — Validates all three search fields with friendly error messages and real-time clearing
7. **Scroll Reveal** — IntersectionObserver API triggers staggered fade-up animations
8. **Back to Top** — Appears after 400px scroll; smooth scroll to top on click
9. **Toast Notifications** — Reusable notification system with success/error/info states
10. **Newsletter** — Email format validation with feedback toast

---

## 🚀 How to Run

No build tools or installation required. Simply:

```bash
# Option 1: Open directly in your browser
open index.html

# Option 2: Use a local dev server (recommended)
# With VS Code Live Server extension — right-click index.html → Open with Live Server

# Option 3: Using Python
python -m http.server 8000
# Then open http://localhost:8000

# Option 4: Using Node.js npx
npx serve .
# Then open http://localhost:3000
```

---

## 📁 Project Structure

```
wanderly-travel/
│
├── index.html          # Main HTML file with all sections
├── css/
│   └── style.css       # Complete stylesheet (design tokens, all components, responsive)
├── js/
│   └── script.js       # All JavaScript features
├── images/
│   ├── hero.png        # AI-generated hero landscape
│   ├── maldives.png    # AI-generated Maldives image
│   ├── srilanka.png    # AI-generated Ella Sri Lanka image
│   ├── dubai.png       # AI-generated Dubai skyline
│   ├── bali.png        # AI-generated Bali landscape
│   └── adventure.png   # AI-generated adventure image
└── README.md           # This file
```

---

## 🤖 AI Usage

AI tools were used for brainstorming, content refinement, image generation, and development assistance. The final design direction, implementation decisions, component structure, customisation, and quality review were completed as part of the project development process.

---

## 📄 License

This project is created for educational / assessment purposes.

---

*Built with passion for travel and design. ✈️*
