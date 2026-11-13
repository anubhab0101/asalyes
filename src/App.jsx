import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Monitor, Code, Cloud, Shield, ChevronRight, ChevronLeft, Phone, Mail, User, Cpu, Network,
  Utensils, ChefHat, Pill, Receipt, Calendar, MessageSquare, WifiOff, Boxes,
  Store, CheckCircle2, ArrowRight, Sparkles, Layers, ShieldCheck, Activity, Users, FileText,
  Car, Bike, Sun, Droplets, ZoomIn, Clock, CreditCard
} from 'lucide-react';
import { CardSpotlight, TextHoverEffect } from './components/ui/AceternityUI';
import { ReactLenis } from '@studio-freight/react-lenis';

// Preloader Component
const Preloader = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-md-background"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex items-center gap-4"
      >
        <div className="w-12 h-12 rounded-full overflow-hidden bg-md-surfaceContainer flex items-center justify-center shadow-lg">
          <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-md-onBackground tracking-tight">
          ASAYLES <span className="text-md-primary">TECH</span>
        </h1>
      </motion.div>
      
      <motion.div 
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "200px", opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        className="h-1 bg-md-primary mt-8 rounded-full"
      />
    </motion.div>
  );
};

// Navbar Component
const Navbar = () => (
  <nav className="fixed w-full z-40 top-0 bg-md-background/80 backdrop-blur-xl border-b border-md-outline/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <div className="flex-shrink-0 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-md-surfaceContainer flex items-center justify-center">
            <img src="/logo.jpg" alt="ASAYLES Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-xl text-md-onBackground hidden sm:block">
            ASAYLES <span className="text-md-primary">TECH</span>
          </span>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-2">
            {[
              { name: 'Home', href: '#home' },
              { name: 'About', href: '#about' },
              { name: 'Products & Services', href: '#services' },
              { name: 'Contact', href: '#contact' },
            ].map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="hover:bg-md-primary/10 active:scale-95 transition-all text-md-onBackground px-5 py-2.5 rounded-full text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="#contact">
            <Button variant="secondary" className="px-5 py-2 text-sm hidden sm:inline-flex">
              Book a Demo
            </Button>
          </a>
        </div>
      </div>
    </div>
  </nav>
);

// MD3 Button
const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const base = "inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-full transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)] active:scale-95 cursor-pointer";
  const variants = {
    primary: "bg-md-primary text-md-onPrimary hover:bg-md-primary/90 hover:shadow-md",
    secondary: "bg-md-secondaryContainer text-md-onSecondaryContainer hover:bg-md-secondaryContainer/90 hover:shadow-md",
    outline: "border border-md-outline text-md-primary hover:bg-md-primary/5",
    tertiary: "bg-md-tertiary text-white hover:bg-md-tertiary/90 hover:shadow-md",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// Hero Section
const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center justify-center relative z-10 pt-20 overflow-hidden">
    {/* Atmospheric Blurs */}
    <div className="absolute top-20 left-10 w-96 h-96 bg-md-secondaryContainer/60 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
    <div className="absolute top-40 right-10 w-96 h-96 bg-md-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-md-tertiary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

    <div className="text-center px-4 max-w-5xl mx-auto relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
        className="mb-6 inline-block"
      >
        <span className="px-5 py-2 rounded-full bg-md-secondaryContainer text-md-onSecondaryContainer text-sm font-medium flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-md-primary" />
          Enterprise Grade Solutions & Software
        </span>
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0, 0, 1] }}
        className="text-5xl md:text-7xl font-bold text-md-onBackground mb-6 leading-tight"
      >
        Engineering for a <br/>
        <span className="text-md-primary">Brighter Tomorrow</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-xl text-md-onSurfaceVariant mb-10 max-w-2xl mx-auto"
      >
        ASAYLES Technologies empowers modern businesses with high-impact software platforms—from doorstep vehicle & solar care (QuickWashHub) to enterprise restaurant POS (OrioSlice) and pharmacy retail management (MediShop).
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <a href="#services">
          <Button variant="primary" className="group">
            Explore Our Products <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
        <a href="#contact">
          <Button variant="secondary">
            Get in Touch
          </Button>
        </a>
      </motion.div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-24 relative z-10 bg-md-surfaceContainer rounded-[48px] mx-2 md:mx-6 my-12 overflow-hidden shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-md-onBackground mb-4">System Overview</h2>
        <p className="text-lg text-md-onSurfaceVariant max-w-2xl mx-auto">
          Built on trust, speed, and real-world practical utility.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 text-md-onSurfaceVariant text-lg">
          <p>
            Founded by <strong>Anubhab Mohapatra</strong> and led by Director <strong>Biswajit Biswal</strong>, ASAYLES Technologies operates at the intersection of innovation and execution. We construct resilient software infrastructures and domain-specific enterprise solutions designed to scale effortlessly.
          </p>
          <p>
            We prioritize absolute reliability, offline readiness, fluid design patterns, and continuous client support—transforming complex day-to-day operations into intuitive, automated realities.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-8">
            <div className="group p-6 rounded-3xl bg-md-background shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <Cpu className="w-8 h-8 text-md-primary mb-4" />
              <h3 className="text-xl font-bold text-md-onBackground mb-1">Processing</h3>
              <p className="text-sm">High-performance stacks</p>
            </div>
            <div className="group p-6 rounded-3xl bg-md-background shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <Network className="w-8 h-8 text-md-tertiary mb-4" />
              <h3 className="text-xl font-bold text-md-onBackground mb-1">Architecture</h3>
              <p className="text-sm">Scalable topologies</p>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] rounded-[32px] overflow-hidden bg-md-secondaryContainer flex items-center justify-center group shadow-md hover:shadow-lg transition-all">
          <img src="/logo.jpg" alt="ASAYLES Large Logo" className="w-48 h-48 object-cover rounded-full group-hover:scale-105 transition-transform duration-700 shadow-xl" />
        </div>
      </div>
    </div>
  </section>
);

// Services and Products Carousel Section
const ServicesSection = ({ onSelectProduct }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const projects = [
    {
      id: "quickwashhub",
      badge: "Project 01 • Doorstep Mobility & Solar Care",
      badgeColor: "bg-emerald-600 text-white",
      tagline: "CAR, BIKE & SOLAR PANEL CARE, AT YOUR DOOR",
      title: "QuickWashHub",
      headline: "Car, bike aur solar panel ki safai — aapke darwaze par.",
      subheading: "QuickWashHub ke saath car ya bike wash book karein, ya residential aur commercial solar panels ke liye quote request bhejein. Apne area mein available service chunein, convenient time set karein, aur booking updates ek hi jagah paayein.",
      heroImage: "/images/quickwashhub-sales-hero.png",
      heroAlt: "QuickWashHub doorstep car and bike wash service",
      trustLine: "Simple booking · Convenient doorstep service · Secure online payments",
      cta1: "Book a wash",
      cta1Product: "QuickWashHub: Book a Wash",
      cta2: "Explore services / Solar Quote",
      cta2Product: "QuickWashHub: Solar / Doorstep Service Quote",
      type: "quickwashhub",
      accent: "#059669",
      accentLight: "rgba(5, 150, 105, 0.12)"
    },
    {
      id: "orioslice",
      badge: "Project 02 • Restaurant POS & Operations",
      badgeColor: "bg-md-primary text-white",
      tagline: "RESTAURANT ECOSYSTEM & SMART BILLING",
      title: "OrioSlice Restaurant",
      headline: "Restaurant ke roz ke operations, ek system mein.",
      subheading: "OrioSlice Restaurant dine-in, takeaway aur delivery operations ko manage karne mein madad karta hai. Orders aur billing se lekar kitchen tickets, menu, tables, inventory, staff aur reports tak—restaurant team apne roz ke kaam ek jagah se sambhal sakti hai.",
      heroImage: null,
      trustLine: "Local Server Architecture · Works During Internet Outages · Full Staff Onboarding",
      cta1: "Book a Demo",
      cta1Product: "OrioSlice Restaurant: Book a Demo",
      cta2: "Get a Service Quote",
      cta2Product: "OrioSlice Restaurant: Get a Service Quote",
      type: "orioslice",
      accent: "#6750A4",
      accentLight: "rgba(103, 80, 164, 0.12)"
    },
    {
      id: "medishop",
      badge: "Project 03 • Healthcare & Pharmacy Retail",
      badgeColor: "bg-md-tertiary text-white",
      tagline: "HEALTHCARE RETAIL & WORKSPACE",
      title: "MediShop — Pharmacy Management",
      headline: "Run your pharmacy with greater clarity.",
      subheading: "MediShop is pharmacy management software that brings medicine inventory, supplier purchases, counter billing, doctor appointments and customer communication into one workspace. It helps pharmacy owners and staff keep everyday shop records organised.",
      heroImage: null,
      trustLine: "Searchable Medicine Catalogue · Batch & Expiry Tracking · Doctor Appointments",
      cta1: "Book a Guided Demo",
      cta1Product: "MediShop: Book a Guided Demo",
      cta2: "Discuss Setup & Pricing",
      cta2Product: "MediShop: Discuss Setup & Pricing",
      type: "medishop",
      accent: "#7D5260",
      accentLight: "rgba(125, 82, 96, 0.12)"
    }
  ];

  // Auto-slide effect every 8 seconds, pausing on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % projects.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isPaused, projects.length]);

  const current = projects[activeSlide];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="services" className="py-24 relative z-10 bg-md-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="px-5 py-2 rounded-full bg-md-secondaryContainer text-md-onSecondaryContainer text-sm font-semibold tracking-wide uppercase inline-block mb-4">
            Interactive Project Showcase
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-md-onBackground mb-4 tracking-tight">
            Our Products & Platforms
          </h2>
          <p className="text-xl text-md-onSurfaceVariant max-w-3xl mx-auto">
            Explore our flagship platforms engineered by ASAYLES TECH—designed with offline resilience, modern UI, and comprehensive doorstep & enterprise support.
          </p>

          {/* Carousel Category Pill Selector */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {projects.map((proj, idx) => {
              const isActive = idx === activeSlide;
              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2.5 cursor-pointer active:scale-95 ${
                    isActive 
                      ? "bg-md-primary text-white shadow-md scale-105" 
                      : "bg-md-surfaceContainer hover:bg-md-surfaceContainer/80 text-md-onSurfaceVariant border border-md-outline/10"
                  }`}
                >
                  {proj.id === 'quickwashhub' && <Car className="w-4 h-4" />}
                  {proj.id === 'orioslice' && <Utensils className="w-4 h-4" />}
                  {proj.id === 'medishop' && <Pill className="w-4 h-4" />}
                  <span>{proj.title.split('—')[0].trim()}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-md-surfaceContainerLow text-md-onSurfaceVariant'}`}>
                    0{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CAROUSEL CONTAINER */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 z-30">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-md-background/90 hover:bg-md-background backdrop-blur-md shadow-lg border border-md-outline/20 flex items-center justify-center text-md-onBackground hover:scale-110 active:scale-90 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 z-30">
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-md-background/90 hover:bg-md-background backdrop-blur-md shadow-lg border border-md-outline/20 flex items-center justify-center text-md-onBackground hover:scale-110 active:scale-90 transition-all cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Slide Content with Zoom & Fade Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-md-surfaceContainer rounded-[40px] p-6 sm:p-10 md:p-14 shadow-md border border-md-outline/10 relative overflow-hidden"
            >
              {/* Dynamic Ambient Background Glow */}
              <div 
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-colors duration-700 opacity-30"
                style={{ backgroundColor: current.accent }}
              />

              {/* SLIDE 1: QUICKWASHHUB */}
              {current.type === 'quickwashhub' && (
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                      <Car className="w-3.5 h-3.5" />
                      {current.badge}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-emerald-800 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
                      Doorstep Service Available
                    </span>
                  </div>

                  {/* Hero Showcase with Zooming Effect */}
                  <div className="mb-10 rounded-[32px] overflow-hidden group relative shadow-xl border border-md-outline/15 bg-slate-900">
                    <div className="relative overflow-hidden w-full h-[280px] sm:h-[380px] md:h-[480px]">
                      <motion.img 
                        src="/images/quickwashhub-sales-hero.png" 
                        alt={current.heroAlt}
                        initial={{ scale: 1.12 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-10 text-white">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-md w-fit mb-3">
                          <Sparkles className="w-3.5 h-3.5" />
                          {current.tagline}
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-2">
                          QuickWashHub
                        </h3>
                        <p className="text-emerald-100 text-sm md:text-base max-w-2xl line-clamp-2 md:line-clamp-none">
                          {current.headline}
                        </p>
                      </div>

                      {/* Zoom Indicator Badge */}
                      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white/90 px-3 py-1.5 rounded-full text-xs flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Interactive Zoom</span>
                      </div>
                    </div>
                  </div>

                  {/* Headline & Overview */}
                  <div className="max-w-3xl mb-10">
                    <h3 className="text-2xl sm:text-4xl font-bold text-md-onBackground mb-3 tracking-tight">
                      {current.headline}
                    </h3>
                    <p className="text-base sm:text-lg text-md-onSurfaceVariant leading-relaxed">
                      {current.subheading}
                    </p>
                  </div>

                  {/* 3 Core Doorstep Services */}
                  <div className="mb-10">
                    <h4 className="text-lg font-bold text-md-onBackground mb-5 flex items-center gap-2">
                      <Droplets className="w-5 h-5 text-emerald-600" />
                      QuickWashHub Services
                    </h4>
                    <div className="grid md:grid-cols-3 gap-5">
                      <div className="p-6 rounded-2xl bg-md-background shadow-sm hover:shadow-md transition-all border border-md-outline/10 group">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Car className="w-6 h-6 text-emerald-600" />
                        </div>
                        <h5 className="font-bold text-md-onBackground text-lg mb-2">Car Wash</h5>
                        <p className="text-sm text-md-onSurfaceVariant leading-relaxed">
                          Apni car ke liye apne area mein available wash service aur price dekhein, phir apni pasand ka time book karein.
                        </p>
                      </div>

                      <div className="p-6 rounded-2xl bg-md-background shadow-sm hover:shadow-md transition-all border border-md-outline/10 group">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Bike className="w-6 h-6 text-emerald-600" />
                        </div>
                        <h5 className="font-bold text-md-onBackground text-lg mb-2">Bike Wash</h5>
                        <p className="text-sm text-md-onSurfaceVariant leading-relaxed">
                          Bike wash bhi ghar par book karein. Service options aur price aapke service area ke hisaab se dikhte hain.
                        </p>
                      </div>

                      <div className="p-6 rounded-2xl bg-md-background shadow-sm hover:shadow-md transition-all border border-md-outline/10 group">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Sun className="w-6 h-6 text-emerald-600" />
                        </div>
                        <h5 className="font-bold text-md-onBackground text-lg mb-2">Solar Panel Wash</h5>
                        <p className="text-sm text-md-onSurfaceVariant leading-relaxed">
                          Residential ya commercial solar panels ke liye quote request bhejein. Site inspection ke baad final quote share kiya jaata hai.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* How It Works (4-Step Flow) */}
                  <div className="p-6 md:p-8 rounded-3xl bg-md-background border border-md-outline/10 mb-8">
                    <h4 className="text-base font-bold text-md-onBackground mb-6 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-emerald-600" />
                      How It Works
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { step: "01", title: "Sign In", desc: "Apna account banayein ya sign in karein." },
                        { step: "02", title: "Select Service", desc: "Apne area mein available service chunein." },
                        { step: "03", title: "Set Schedule", desc: "Address aur convenient booking time dein." },
                        { step: "04", title: "Live Updates", desc: "Booking aur service updates online check karein." },
                      ].map((item, i) => (
                        <div key={i} className="p-4 rounded-xl bg-md-surfaceContainerLow/60 border border-md-outline/10">
                          <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full mb-2 inline-block">
                            Step {item.step}
                          </span>
                          <h6 className="font-bold text-md-onBackground text-sm mb-1">{item.title}</h6>
                          <p className="text-xs text-md-onSurfaceVariant">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Trust Line & Accuracy Note */}
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 mb-8">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-emerald-950">
                          {current.trustLine}
                        </p>
                        <p className="text-xs text-emerald-800 mt-0.5">
                          Note: Vehicle prices depend on service area. Solar wash requires inspection before final quote.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action CTAs */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-md-outline/15">
                    <div>
                      <h5 className="text-lg font-bold text-md-onBackground">
                        Gaadi wash karwana ab aur aasaan.
                      </h5>
                      <p className="text-sm text-md-onSurfaceVariant">
                        QuickWashHub par apni next car ya bike wash book karein.
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <a 
                        href="#contact" 
                        onClick={() => onSelectProduct?.(current.cta1Product)}
                      >
                        <button className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium rounded-full bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95 transition-all shadow-md cursor-pointer">
                          {current.cta1} <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </a>
                      <a 
                        href="#contact" 
                        onClick={() => onSelectProduct?.(current.cta2Product)}
                      >
                        <Button variant="outline" className="text-sm px-6 py-3">
                          {current.cta2}
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 2: ORIOSLICE RESTAURANT */}
              {current.type === 'orioslice' && (
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-md-primary text-md-onPrimary text-xs font-bold uppercase tracking-wider">
                      <Utensils className="w-3.5 h-3.5" />
                      {current.badge}
                    </div>
                    <span className="text-sm font-medium text-md-onSurfaceVariant bg-md-background px-4 py-1.5 rounded-full border border-md-outline/20">
                      Offline-Ready Local Server
                    </span>
                  </div>

                  <div className="max-w-3xl mb-8">
                    <h3 className="text-3xl md:text-5xl font-bold text-md-onBackground mb-3 tracking-tight">
                      {current.title}
                    </h3>
                    <p className="text-xl md:text-2xl font-semibold text-md-primary mb-4">
                      {current.headline}
                    </p>
                    <p className="text-lg text-md-onSurfaceVariant leading-relaxed">
                      {current.subheading}
                    </p>
                  </div>

                  {/* Key Features Grid */}
                  <div className="mb-10">
                    <h4 className="text-lg font-bold text-md-onBackground mb-6 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-md-primary" />
                      Key Features
                    </h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {[
                        {
                          title: "POS & Billing",
                          desc: "Orders, modifiers, combos, discounts, tax aur instant UPI QR checkout.",
                          icon: Receipt
                        },
                        {
                          title: "Tables & Reservations",
                          desc: "Interactive floor view, real-time table status, waitlist aur advance reservations.",
                          icon: Layers
                        },
                        {
                          title: "Kitchen Display (KDS)",
                          desc: "Kitchen order tickets (KOT), station routing, priority aur preparation tracking.",
                          icon: ChefHat
                        },
                        {
                          title: "Menu & Inventory",
                          desc: "Menu management, ingredient tracking, recipe costing, purchasing aur waste records.",
                          icon: Boxes
                        },
                        {
                          title: "Team Management",
                          desc: "Staff roles, biometric/attendance logging, shifts scheduling aur payroll tools.",
                          icon: Users
                        },
                        {
                          title: "Customers & Reports",
                          desc: "Customer profiles, loyalty tools, comprehensive sales reports aur owner dashboard.",
                          icon: FileText
                        },
                      ].map((feat, idx) => (
                        <div key={idx} className="p-5 rounded-2xl bg-md-background shadow-sm hover:shadow-md transition-all border border-md-outline/10">
                          <div className="w-10 h-10 rounded-xl bg-md-primary/10 flex items-center justify-center mb-3">
                            <feat.icon className="w-5 h-5 text-md-primary" />
                          </div>
                          <h5 className="font-bold text-md-onBackground text-base mb-1">{feat.title}</h5>
                          <p className="text-sm text-md-onSurfaceVariant leading-snug">{feat.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Flexible Deployment Callout */}
                  <div className="p-6 rounded-2xl bg-md-secondaryContainer/50 border border-md-outline/15 mb-10">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-md-primary text-white flex items-center justify-center flex-shrink-0 mt-1">
                        <WifiOff className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="text-base font-bold text-md-onSecondaryContainer mb-1">
                          Flexible Deployment & Local Restaurant Server
                        </h5>
                        <p className="text-sm text-md-onSurfaceVariant">
                          Local restaurant server par chal sakta hai; local network par core billing aur kitchen workflows <strong>internet outage ke dauran bhi uninterrupted kaam karte hain</strong>.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Setup & Support + CTA */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t border-md-outline/15">
                    <div className="max-w-xl">
                      <h5 className="text-base font-bold text-md-onBackground mb-1">
                        Setup aur Support ke Saath
                      </h5>
                      <p className="text-sm text-md-onSurfaceVariant">
                        ASAYLES TECH restaurants ke liye deployment, setup, staff onboarding aur ongoing support ke paid service plans offer karta hai.
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <a 
                        href="#contact" 
                        onClick={() => onSelectProduct?.(current.cta1Product)}
                      >
                        <Button variant="primary" className="text-sm px-6 py-3">
                          {current.cta1} <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </a>
                      <a 
                        href="#contact" 
                        onClick={() => onSelectProduct?.(current.cta2Product)}
                      >
                        <Button variant="outline" className="text-sm px-6 py-3">
                          {current.cta2}
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 3: MEDISHOP */}
              {current.type === 'medishop' && (
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-md-tertiary text-white text-xs font-bold uppercase tracking-wider">
                      <Pill className="w-3.5 h-3.5" />
                      {current.badge}
                    </div>
                    <span className="text-sm font-medium text-md-onSurfaceVariant bg-md-background px-4 py-1.5 rounded-full border border-md-outline/20">
                      Designed for Independent Pharmacies
                    </span>
                  </div>

                  <div className="max-w-3xl mb-8">
                    <h3 className="text-3xl md:text-5xl font-bold text-md-onBackground mb-3 tracking-tight">
                      {current.title}
                    </h3>
                    <p className="text-xl md:text-2xl font-semibold text-md-tertiary mb-4">
                      {current.headline}
                    </p>
                    <p className="text-lg text-md-onSurfaceVariant leading-relaxed">
                      {current.subheading}
                    </p>
                  </div>

                  {/* Core Features Grid */}
                  <div className="mb-10">
                    <h4 className="text-lg font-bold text-md-onBackground mb-6 flex items-center gap-2">
                      <Activity className="w-5 h-5 text-md-tertiary" />
                      Core Features
                    </h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        {
                          title: "Medicine Inventory",
                          desc: "Searchable medicine catalogue, batch, quantity, cost and expiry tracking.",
                          icon: Boxes
                        },
                        {
                          title: "Supplier Purchases",
                          desc: "Suppliers, incoming batches to keep stock movements organized.",
                          icon: Store
                        },
                        {
                          title: "Billing & Returns",
                          desc: "Customer bills, split payments, credit handling, returns & GST receipts.",
                          icon: Receipt
                        },
                        {
                          title: "Doctor Appointments",
                          desc: "Doctor schedules, customer appointment queue & public booking links.",
                          icon: Calendar
                        },
                        {
                          title: "Customer Notices",
                          desc: "Doctor-visit notices or shop updates with customer consent & scheduled sending.",
                          icon: MessageSquare
                        },
                        {
                          title: "Prescription Review",
                          desc: "Upload prescription copies for authorized pharmacist verification.",
                          icon: FileText
                        },
                        {
                          title: "Reports & Exports",
                          desc: "Shop activity, profit margins, sales history and CSV export.",
                          icon: Layers
                        },
                        {
                          title: "Staff & Offline Flow",
                          desc: "Role-based access, practice mode, and limited offline cash walk-in sales.",
                          icon: ShieldCheck
                        },
                      ].map((feat, idx) => (
                        <div key={idx} className="p-5 rounded-2xl bg-md-background shadow-sm hover:shadow-md transition-all border border-md-outline/10">
                          <div className="w-10 h-10 rounded-xl bg-md-tertiary/10 flex items-center justify-center mb-3">
                            <feat.icon className="w-5 h-5 text-md-tertiary" />
                          </div>
                          <h5 className="font-bold text-md-onBackground text-base mb-1">{feat.title}</h5>
                          <p className="text-xs text-md-onSurfaceVariant leading-snug">{feat.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Communication Options */}
                  <div className="grid md:grid-cols-2 gap-5 mb-10">
                    <div className="p-6 rounded-2xl bg-md-background border border-md-outline/15">
                      <h5 className="text-base font-bold text-md-onBackground mb-2 flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-md-tertiary" />
                        Communication Options (SMS, WhatsApp, Email)
                      </h5>
                      <p className="text-sm text-md-onSurfaceVariant leading-relaxed">
                        SMS, WhatsApp and email workflows depend on enabled providers. Queued processing available with customer consent.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-md-background border border-md-outline/15">
                      <h5 className="text-base font-bold text-md-onBackground mb-2 flex items-center gap-2">
                        <Store className="w-4 h-4 text-md-primary" />
                        Designed for Independent Pharmacies
                      </h5>
                      <p className="text-sm text-md-onSurfaceVariant leading-relaxed">
                        MediShop supports connected counter operations—from receiving stock to doctor appointments and billing.
                      </p>
                    </div>
                  </div>

                  {/* CTA Row */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t border-md-outline/15">
                    <div className="max-w-xl">
                      <p className="text-base font-semibold text-md-onBackground">
                        Book a guided demo to see how MediShop fits your pharmacy.
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <a 
                        href="#contact" 
                        onClick={() => onSelectProduct?.(current.cta1Product)}
                      >
                        <Button variant="tertiary" className="text-sm px-6 py-3">
                          {current.cta1} <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </a>
                      <a 
                        href="#contact" 
                        onClick={() => onSelectProduct?.(current.cta2Product)}
                      >
                        <Button variant="outline" className="text-sm px-6 py-3">
                          {current.cta2}
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeSlide ? "w-8 bg-md-primary" : "w-2.5 bg-md-outline/30 hover:bg-md-outline/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Custom Engineering Services */}
        <div className="text-center mt-24 mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-md-onBackground mb-2">
            Enterprise IT & Architecture Services
          </h3>
          <p className="text-md text-md-onSurfaceVariant max-w-xl mx-auto">
            Need bespoke software or cloud infrastructure? We also provide tailored engineering modules.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <CardSpotlight className="group hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-md-primary/10 rounded-2xl flex items-center justify-center mb-8">
              <Code className="w-8 h-8 text-md-primary" />
            </div>
            <h3 className="text-2xl font-bold text-md-onBackground mb-4">Custom Cyber-Systems</h3>
            <p className="text-md-onSurfaceVariant leading-relaxed">
              Developing high-fidelity custom web and mobile applications with cutting-edge frameworks, optimizing user interaction and enterprise workflows.
            </p>
          </CardSpotlight>

          <CardSpotlight className="group hover:-translate-y-2 transition-all duration-300" color="#7D5260">
            <div className="w-16 h-16 bg-md-tertiary/10 rounded-2xl flex items-center justify-center mb-8">
              <Cloud className="w-8 h-8 text-md-tertiary" />
            </div>
            <h3 className="text-2xl font-bold text-md-onBackground mb-4">Cloud Matrix & On-Prem</h3>
            <p className="text-md-onSurfaceVariant leading-relaxed">
              Architecting decentralized, hybrid-cloud and local server infrastructures tailored for zero-downtime reliability in challenging network environments.
            </p>
          </CardSpotlight>

          <CardSpotlight className="group hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-md-primary/10 rounded-2xl flex items-center justify-center mb-8">
              <Shield className="w-8 h-8 text-md-primary" />
            </div>
            <h3 className="text-2xl font-bold text-md-onBackground mb-4">Security & Integrity</h3>
            <p className="text-md-onSurfaceVariant leading-relaxed">
              Integrating military-grade data protection, role-based access management, and strict audit records to secure your business information.
            </p>
          </CardSpotlight>
        </div>
      </div>
    </section>
  );
};

// MD3 Filled Text Field implementation
const InputField = ({ label, type = "text", name, rows, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const active = isFocused || (value && value.trim().length > 0);

  return (
    <div className="relative">
      <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${active ? 'top-1.5 text-xs text-md-primary' : 'top-4 text-md-onSurfaceVariant'}`}>
        {label}
      </label>
      {rows ? (
        <textarea 
          name={name} 
          rows={rows} 
          required 
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full px-4 pt-6 pb-2 bg-md-surfaceContainerLow rounded-t-xl rounded-b-none border-b-2 border-md-outline focus:border-md-primary focus:outline-none transition-colors text-md-onBackground resize-none"
        ></textarea>
      ) : (
        <input 
          type={type} 
          name={name} 
          required={name !== 'phone'}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full px-4 pt-6 pb-2 h-14 bg-md-surfaceContainerLow rounded-t-xl rounded-b-none border-b-2 border-md-outline focus:border-md-primary focus:outline-none transition-colors text-md-onBackground"
        />
      )}
    </div>
  );
};

const ContactSection = ({ selectedProduct, onClearProduct }) => {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    if (selectedProduct) {
      setFormData(prev => ({
        ...prev,
        message: `Hello ASAYLES TECH,\n\nI am interested in ${selectedProduct}.\nPlease contact me to schedule a demo and provide further details.`
      }));
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSend = (e) => {
    e?.preventDefault();
    if (!formData.name && !formData.message) {
      alert('Please fill in your name and message first.');
      return;
    }
    const text = `*New Inquiry via ASAYLES TECH Website*\n\n` +
      `*Name:* ${formData.name || 'Not provided'}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Topic:* ${selectedProduct || 'General Business Inquiry'}\n\n` +
      `*Message:*\n${formData.message || 'I would like to inquire about your software solutions.'}`;
    
    const whatsappUrl = `https://wa.me/916372009049?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    let sentSuccessfully = false;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3500);

      const response = await fetch("https://formsubmit.co/ajax/asaylestech.ctc@gmail.com", {
        method: "POST",
        signal: controller.signal,
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: selectedProduct ? `INQUIRY: ${selectedProduct}` : "SYSTEM ALERT: New Inquiry from ASAYLES Technologies",
          _cc: "biswalbiswajitkumar@gmail.com"
        })
      });
      clearTimeout(timeoutId);

      if (response && response.ok) {
        sentSuccessfully = true;
      }
    } catch (err) {
      sentSuccessfully = false;
    }

    if (sentSuccessfully) {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      if (onClearProduct) onClearProduct();
    } else {
      // Fallback: If external free server is down, open user's mail client directly
      const mailtoUrl = `mailto:asaylestech.ctc@gmail.com?cc=biswalbiswajitkumar@gmail.com&subject=${encodeURIComponent(
        selectedProduct ? `INQUIRY: ${selectedProduct}` : "New Inquiry - ASAYLES Technologies"
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoUrl;
      setStatus('fallback_success');
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-md-surfaceContainer rounded-t-[48px] mt-12 overflow-hidden shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-md-onBackground mb-6">Get In Touch</h2>
          <p className="text-xl text-md-onSurfaceVariant max-w-2xl mx-auto">
            Ready to upgrade your digital architecture or schedule a product walkthrough? Connect with us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 bg-md-background p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-md-onBackground mb-8">Contact Details</h3>
            
            <div className="flex items-center space-x-5 group">
              <div className="w-14 h-14 bg-md-secondaryContainer rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <User className="w-6 h-6 text-md-onSecondaryContainer" />
              </div>
              <div>
                <p className="text-sm text-md-onSurfaceVariant font-medium mb-1">Founder</p>
                <p className="text-lg font-bold text-md-onBackground">Anubhab Mohapatra</p>
              </div>
            </div>

            <div className="flex items-center space-x-5 group">
              <div className="w-14 h-14 bg-md-secondaryContainer rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <User className="w-6 h-6 text-md-onSecondaryContainer" />
              </div>
              <div>
                <p className="text-sm text-md-onSurfaceVariant font-medium mb-1">Director</p>
                <p className="text-lg font-bold text-md-onBackground">Biswajit Biswal</p>
              </div>
            </div>

            <div className="flex items-center space-x-5 group">
              <div className="w-14 h-14 bg-md-secondaryContainer rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-md-onSecondaryContainer" />
              </div>
              <div>
                <p className="text-sm text-md-onSurfaceVariant font-medium mb-1">Company Contact / WhatsApp</p>
                <p className="text-lg font-bold text-md-onBackground">+91 6372009049</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-5 group">
              <div className="w-14 h-14 bg-md-secondaryContainer rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-md-onSecondaryContainer" />
              </div>
              <div>
                <p className="text-sm text-md-onSurfaceVariant font-medium mb-1">Company Email</p>
                <p className="text-[15px] font-bold text-md-onBackground">asaylestech.ctc@gmail.com</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20">
              <p className="text-sm font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                Instant Support on WhatsApp
              </p>
              <p className="text-xs text-emerald-700 mb-3">
                Need immediate response or demo scheduling? Chat directly with us on WhatsApp.
              </p>
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-medium hover:bg-[#20bd5a] active:scale-95 transition-all shadow-sm cursor-pointer"
              >
                Chat on WhatsApp (+91 6372009049)
              </button>
            </div>
          </div>

          <div className="bg-md-background p-8 rounded-3xl shadow-sm relative overflow-hidden">
            <h3 className="text-2xl font-bold text-md-onBackground mb-6">Send an Inquiry / Book Demo</h3>

            {/* Quick selector chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { label: 'QuickWashHub Doorstep Booking', val: 'QuickWashHub: Doorstep Car/Bike/Solar Wash' },
                { label: 'OrioSlice Restaurant Demo', val: 'OrioSlice Restaurant: Demo & Quote' },
                { label: 'MediShop Pharmacy Demo', val: 'MediShop Pharmacy: Guided Demo' },
                { label: 'General / Custom Software', val: 'Custom IT & Software Development' }
              ].map((chip) => (
                <button
                  key={chip.label}
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({
                      ...prev,
                      message: `Hello ASAYLES TECH,\n\nI am requesting details regarding ${chip.val}.\nPlease get in touch with me.`
                    }));
                  }}
                  className="text-xs px-3.5 py-1.5 rounded-full bg-md-surfaceContainer hover:bg-md-primary/10 active:scale-95 text-md-onBackground border border-md-outline/20 transition-all cursor-pointer"
                >
                  {chip.label}
                </button>
              ))}
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <InputField 
                label="Full Name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
              />
              
              <div className="grid grid-cols-2 gap-4">
                <InputField 
                  label="Email Address" 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                />
                <InputField 
                  label="Phone (Optional)" 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                />
              </div>

              <InputField 
                label="Your Message / Requirements" 
                name="message" 
                rows={4} 
                value={formData.message} 
                onChange={handleChange} 
              />
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button type="submit" disabled={status === 'sending'} className="flex-1">
                  {status === 'sending' ? 'Sending...' : 'Send via Email'}
                </Button>

                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] active:scale-95 transition-all shadow-sm cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5" />
                  Send on WhatsApp
                </button>
              </div>

              {status === 'success' && (
                <div className="p-4 bg-green-100 rounded-2xl text-green-800 text-sm text-center">
                  Message Sent Successfully! We will reach out shortly.
                </div>
              )}
              {status === 'fallback_success' && (
                <div className="p-4 bg-blue-50 rounded-2xl text-blue-800 text-sm text-center">
                  Opening your email client to send message... You can also click <strong>Send on WhatsApp</strong> for instant response!
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-amber-100 rounded-2xl text-amber-800 text-sm text-center">
                  Could not send automatically. Please click <strong>Send on WhatsApp</strong> or email us directly at asaylestech.ctc@gmail.com.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-md-surfaceContainer py-8 text-center border-t border-md-outline/10">
    <p className="text-md-onSurfaceVariant text-sm font-medium">
      &copy; {new Date().getFullYear()} ASAYLES TECH. Engineered with Material You (MD3).
    </p>
  </footer>
);

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  useEffect(() => {
    // Ensuring the app always loads after 3 seconds maximum, regardless of component unmounts.
    const timer = setTimeout(() => setAppReady(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <div className="relative min-h-screen bg-md-background overflow-x-hidden selection:bg-md-primary/30 font-sans text-md-onBackground">
        <AnimatePresence>
          {!appReady && (
            <motion.div 
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-md-background"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden bg-md-surfaceContainer flex items-center justify-center shadow-lg">
                  <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-md-onBackground tracking-tight">
                  ASAYLES <span className="text-md-primary">TECH</span>
                </h1>
              </motion.div>
              
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "200px", opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                className="h-1 bg-md-primary mt-8 rounded-full"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {appReady && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ServicesSection onSelectProduct={(prod) => setSelectedProduct(prod)} />
            <ContactSection 
              selectedProduct={selectedProduct} 
              onClearProduct={() => setSelectedProduct('')} 
            />
            <Footer />
          </motion.div>
        )}
      </div>
    </ReactLenis>
  );
}
