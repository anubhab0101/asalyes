import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Monitor, Code, Cloud, Shield, ChevronRight, Phone, Mail, User, Cpu, Network,
  Utensils, ChefHat, Pill, Receipt, Calendar, MessageSquare, WifiOff, Boxes,
  Store, CheckCircle2, ArrowRight, Sparkles, Layers, ShieldCheck, Activity, Users, FileText
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
        ASAYLES Technologies empowers modern enterprises with industry-leading business ecosystems—from high-performance restaurant POS systems to precision pharmacy software and resilient cloud architectures.
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

// Services and Products Section
const ServicesSection = ({ onSelectProduct }) => (
  <section id="services" className="py-24 relative z-10 bg-md-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-20">
        <span className="px-5 py-2 rounded-full bg-md-secondaryContainer text-md-onSecondaryContainer text-sm font-semibold tracking-wide uppercase inline-block mb-4">
          Core Software & Solutions
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-md-onBackground mb-4">
          Our Products & Services
        </h2>
        <p className="text-xl text-md-onSurfaceVariant max-w-3xl mx-auto">
          Custom-engineered, high-impact platforms designed to streamline daily business operations with offline resilience and ongoing support.
        </p>
      </div>

      {/* PRODUCT NO. 1: OrioSlice Restaurant */}
      <div className="mb-24 bg-md-surfaceContainer rounded-[40px] p-8 md:p-14 shadow-sm border border-md-outline/10 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-md-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-md-primary text-md-onPrimary text-xs font-bold uppercase tracking-wider">
              <Utensils className="w-3.5 h-3.5" />
              Service No. 1 • Restaurant POS & Operations
            </div>
            <span className="text-sm font-medium text-md-onSurfaceVariant bg-md-background px-4 py-1.5 rounded-full border border-md-outline/20">
              Offline-Ready Architecture
            </span>
          </div>

          <div className="max-w-3xl mb-8">
            <h3 className="text-3xl md:text-5xl font-bold text-md-onBackground mb-3 tracking-tight">
              OrioSlice Restaurant
            </h3>
            <p className="text-xl md:text-2xl font-semibold text-md-primary mb-4">
              Restaurant ke roz ke operations, ek system mein.
            </p>
            <p className="text-lg text-md-onSurfaceVariant leading-relaxed">
              OrioSlice Restaurant dine-in, takeaway aur delivery operations ko manage karne mein madad karta hai. Orders aur billing se lekar kitchen tickets, menu, tables, inventory, staff aur reports tak—restaurant team apne roz ke kaam ek jagah se sambhal sakti hai.
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
                  Flexible Deployment & Local Server Architecture
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
                ASAYLES TECH restaurants ke liye deployment, setup, staff onboarding aur ongoing support ke paid service plans offer karta hai. Plan aur pricing outlet count aur support needs ke hisaab se quote ki jaati hai.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a 
                href="#contact" 
                onClick={() => onSelectProduct?.("OrioSlice Restaurant: Book a Demo")}
              >
                <Button variant="primary" className="text-sm px-6 py-3">
                  Book a Demo <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a 
                href="#contact" 
                onClick={() => onSelectProduct?.("OrioSlice Restaurant: Get a Service Quote")}
              >
                <Button variant="outline" className="text-sm px-6 py-3">
                  Get a Service Quote
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT NO. 2: MediShop */}
      <div className="mb-24 bg-md-surfaceContainer rounded-[40px] p-8 md:p-14 shadow-sm border border-md-outline/10 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-md-tertiary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-md-tertiary text-white text-xs font-bold uppercase tracking-wider">
              <Pill className="w-3.5 h-3.5" />
              Service No. 2 • Healthcare & Pharmacy Management
            </div>
            <span className="text-sm font-medium text-md-onSurfaceVariant bg-md-background px-4 py-1.5 rounded-full border border-md-outline/20">
              Designed for Independent Pharmacies
            </span>
          </div>

          <div className="max-w-3xl mb-8">
            <h3 className="text-3xl md:text-5xl font-bold text-md-onBackground mb-3 tracking-tight">
              MediShop — Pharmacy Management Software
            </h3>
            <p className="text-xl md:text-2xl font-semibold text-md-tertiary mb-4">
              Run your pharmacy with greater clarity.
            </p>
            <p className="text-lg text-md-onSurfaceVariant leading-relaxed">
              MediShop is comprehensive pharmacy management software that brings medicine inventory, supplier purchases, counter billing, doctor appointments and customer communication into one workspace. It helps pharmacy owners and staff keep everyday shop records organised and find the information they need during routine work.
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
                  desc: "Maintain a searchable medicine catalogue, import records and track stock by batch, quantity, cost and expiry.",
                  icon: Boxes
                },
                {
                  title: "Supplier Purchases",
                  desc: "Record suppliers, purchases and incoming batches to keep stock movements organized.",
                  icon: Store
                },
                {
                  title: "Billing & Returns",
                  desc: "Create customer bills, split payments, credit handling, manage returns, and print GST receipts.",
                  icon: Receipt
                },
                {
                  title: "Doctor Appointments",
                  desc: "Set up doctor schedules, book customer slots, manage queue, and share public booking links.",
                  icon: Calendar
                },
                {
                  title: "Customer Notices",
                  desc: "Prepare doctor-visit notices or shop updates with customer consent and scheduled sending.",
                  icon: MessageSquare
                },
                {
                  title: "Prescription Review",
                  desc: "Upload prescription copies for authorized pharmacist verification with strict activity logs.",
                  icon: FileText
                },
                {
                  title: "Reports & Exports",
                  desc: "Review recorded shop activity, profit margins, sales history and export for accounting.",
                  icon: Layers
                },
                {
                  title: "Staff & Offline Flow",
                  desc: "Role-based access, practice mode for training, and limited offline cash sales from local stock.",
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

          {/* Communication Options & Design Highlights */}
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <div className="p-6 rounded-2xl bg-md-background border border-md-outline/15">
              <h5 className="text-base font-bold text-md-onBackground mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-md-tertiary" />
                Communication Options (SMS, WhatsApp, Email)
              </h5>
              <p className="text-sm text-md-onSurfaceVariant leading-relaxed">
                SMS, WhatsApp and email workflows depend on enabled providers. Queued processing available for announcements with customer consent and sending-hour rules.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-md-background border border-md-outline/15">
              <h5 className="text-base font-bold text-md-onBackground mb-2 flex items-center gap-2">
                <Store className="w-4 h-4 text-md-primary" />
                Designed for Independent Pharmacies
              </h5>
              <p className="text-sm text-md-onSurfaceVariant leading-relaxed">
                MediShop supports connected counter operations—from receiving stock and checking batches to billing and doctor appointments. ASAYLES TECH walks through your workflow and assists with full setup and onboarding.
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
                onClick={() => onSelectProduct?.("MediShop: Book a Guided Demo")}
              >
                <Button variant="tertiary" className="text-sm px-6 py-3">
                  Book a Guided Demo <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a 
                href="#contact" 
                onClick={() => onSelectProduct?.("MediShop: Discuss Setup & Pricing")}
              >
                <Button variant="outline" className="text-sm px-6 py-3">
                  Discuss Setup & Pricing
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Custom Engineering Services */}
      <div className="text-center mb-10">
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/anubhabmohapatra.01@gmail.com", {
        method: "POST",
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

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        if (onClearProduct) onClearProduct();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
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
                <p className="text-sm text-md-onSurfaceVariant font-medium mb-1">Phone</p>
                <p className="text-lg font-bold text-md-onBackground">+91 8260586748</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-5 group">
              <div className="w-14 h-14 bg-md-secondaryContainer rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-md-onSecondaryContainer" />
              </div>
              <div>
                <p className="text-sm text-md-onSurfaceVariant font-medium mb-1">Emails</p>
                <p className="text-[15px] font-bold text-md-onBackground">anubhabmohapatra.01@gmail.com</p>
                <p className="text-[15px] font-bold text-md-onBackground mt-1">biswalbiswajitkumar@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="bg-md-background p-8 rounded-3xl shadow-sm relative overflow-hidden">
            <h3 className="text-2xl font-bold text-md-onBackground mb-6">Send an Inquiry / Book Demo</h3>

            {/* Quick selector chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
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
                  className="text-xs px-3.5 py-1.5 rounded-full bg-md-surfaceContainer hover:bg-md-primary/10 active:scale-95 text-md-onBackground border border-md-outline/20 transition-all"
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
              
              <Button type="submit" disabled={status === 'sending'} className="w-full">
                {status === 'sending' ? 'Sending...' : 'Submit Inquiry'}
              </Button>

              {status === 'success' && (
                <div className="p-4 bg-green-100 rounded-2xl text-green-800 text-sm text-center">
                  Message Sent Successfully! We will reach out shortly.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-100 rounded-2xl text-red-800 text-sm text-center">
                  Error sending message. Please try again.
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
