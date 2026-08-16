# Pilgel — Creative AI Studio & E-commerce Frontend

A fully responsive, animated e-commerce frontend built with React, Tailwind CSS, and GSAP — recreating the design and interactions of a modern creative studio website, with a working cart, checkout flow, and dynamic product imagery.

**Live Demo:** [https://pilgel-ecommerce.vercel.app/]

---

## ✨ Features

- **Multi-page routing** with React Router — Home, About, Projects, individual Project pages, Blog, Contact, Checkout, and Order History
- **Shopping cart** with a slide-in drawer, quantity controls, and persistent storage via `localStorage` (cart survives page refresh)
- **Mock checkout flow** with an order summary and confirmation screen, plus a full order history page
- **Dynamic product imagery** fetched live from the Unsplash API based on category-relevant search terms
- **Scroll-driven animations** using GSAP + ScrollTrigger — staggered text reveals, animated counters, pop-in cards, and scroll-synced marquees
- **Smooth scrolling** powered by Lenis, synced with GSAP's ScrollTrigger
- **Fully responsive** across mobile, tablet, and desktop breakpoints
- **Error boundaries** and a custom 404 page for graceful failure handling
- **Accessible, validated forms** with proper labels and real-time error feedback
- **SEO-friendly** meta tags and Open Graph support

---

## 🛠️ Tech Stack

| Category         | Technology                 |
| ---------------- | -------------------------- |
| Framework        | React (Vite)               |
| Styling          | Tailwind CSS               |
| Animation        | GSAP, ScrollTrigger, Lenis |
| Routing          | React Router               |
| State Management | React Context API          |
| Carousel         | Swiper.js                  |
| Icons            | react-icons                |
| Data Persistence | localStorage               |
| External API     | Unsplash API               |

---

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components (Header, Hero, Marquee, Cart, etc.)
├── pages/            # Route-level pages (About, Projects, Checkout, etc.)
├── data/             # Product data and API fetch helpers
├── lib/              # Smooth scroll (Lenis) setup
├── App.jsx           # Route definitions
└── main.jsx          # App entry point + global providers
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- An Unsplash API key ([get one free here](https://unsplash.com/developers))

### Installation

```bash
git clone https://github.com/your-username/pilgel-clone.git
cd pilgel-clone
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```
VITE_UNSPLASH_KEY=your_unsplash_access_key_here
```

### Run locally

```bash
npm run dev
```

Visit `http://localhost:5173`

---

## 📚 What I Learned

Building this project involved hands-on work with:

- Managing global state (cart) across multiple routes using Context API
- Syncing a smooth-scroll library (Lenis) with scroll-triggered animations (GSAP ScrollTrigger)
- Building and debugging custom React error boundaries
- Persisting and retrieving structured data with `localStorage`
- Integrating a third-party REST API with environment-based key management
- Writing accessible, validated forms without relying on browser defaults

---

## 📄 License

This project is for educational/portfolio purposes.
