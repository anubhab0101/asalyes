import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Code, Cloud, Shield, ChevronRight, Phone, Mail, User, Cpu, Network } from 'lucide-react';
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-md-background"
    >
      <div className="w-full max-w-2xl h-64">
        <TextHoverEffect text="ASAYLES TECH" duration={3} />
      </div>
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
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="hover:bg-md-primary/10 active:scale-95 transition-all text-md-onBackground px-5 py-2.5 rounded-full text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </nav>
);

// MD3 Button
const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const base = "inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-full transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)] active:scale-95";
  const variants = {
    primary: "bg-md-primary text-md-onPrimary hover:bg-md-primary/90 hover:shadow-md",
    secondary: "bg-md-secondaryContainer text-md-onSecondaryContainer hover:bg-md-secondaryContainer/90 hover:shadow-md",
    outline: "border border-md-outline text-md-primary hover:bg-md-primary/5",
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
        <span className="px-5 py-2 rounded-full bg-md-secondaryContainer text-md-onSecondaryContainer text-sm font-medium">
          Friendly, Soft, & Powerful
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
        ASAYLES Technologies integrates next-generation IT architectures, forging robust digital ecosystems for enterprises ready to transcend limits.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <a href="#services">
          <Button variant="primary" className="group">
            Initialize Sequence <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
      </div>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 text-md-onSurfaceVariant text-lg">
          <p>
            Founded by <strong>Anubhab Mohapatra</strong> and led by Director <strong>Biswajit Biswal</strong>, ASAYLES Technologies operates at the intersection of innovation and execution. We construct resilient software infrastructures designed to scale seamlessly in a hyper-connected era.
          </p>
          <p>
            We prioritize absolute confidentiality, structural integrity, and fluid design patterns, transforming complex technological challenges into streamlined automated realities.
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

const ServicesSection = () => (
  <section id="services" className="py-24 relative z-10 bg-md-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-md-onBackground mb-4">Operational Modules</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CardSpotlight className="group hover:-translate-y-2 transition-all duration-300">
          <div className="w-16 h-16 bg-md-primary/10 rounded-2xl flex items-center justify-center mb-8">
            <Code className="w-8 h-8 text-md-primary" />
          </div>
          <h3 className="text-2xl font-bold text-md-onBackground mb-4">Cyber-Systems</h3>
          <p className="text-md-onSurfaceVariant leading-relaxed">
            Developing advanced, high-fidelity software applications with cutting-edge frameworks, optimizing user interaction and data flow.
          </p>
        </CardSpotlight>
        <CardSpotlight className="group hover:-translate-y-2 transition-all duration-300" color="#7D5260">
          <div className="w-16 h-16 bg-md-tertiary/10 rounded-2xl flex items-center justify-center mb-8">
            <Cloud className="w-8 h-8 text-md-tertiary" />
          </div>
          <h3 className="text-2xl font-bold text-md-onBackground mb-4">Cloud Matrix</h3>
          <p className="text-md-onSurfaceVariant leading-relaxed">
            Architecting and deploying decentralized, scalable cloud infrastructure tailored for zero-downtime environments.
          </p>
        </CardSpotlight>
        <CardSpotlight className="group hover:-translate-y-2 transition-all duration-300">
          <div className="w-16 h-16 bg-md-primary/10 rounded-2xl flex items-center justify-center mb-8">
            <Shield className="w-8 h-8 text-md-primary" />
          </div>
          <h3 className="text-2xl font-bold text-md-onBackground mb-4">Security Protocols</h3>
          <p className="text-md-onSurfaceVariant leading-relaxed">
            Integrating military-grade encryption and automated threat-detection mechanisms to secure your digital perimeter.
          </p>
        </CardSpotlight>
      </div>
    </div>
  </section>
);

// MD3 Filled Text Field implementation
const InputField = ({ label, type = "text", name, rows }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleBlur = (e) => {
    setIsFocused(false);
    setHasValue(e.target.value.trim().length > 0);
  };

  const active = isFocused || hasValue;

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
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          className="w-full px-4 pt-6 pb-2 bg-md-surfaceContainerLow rounded-t-xl rounded-b-none border-b-2 border-md-outline focus:border-md-primary focus:outline-none transition-colors text-md-onBackground resize-none"
        ></textarea>
      ) : (
        <input 
          type={type} 
          name={name} 
          required={name !== 'phone'}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          className="w-full px-4 pt-6 pb-2 h-14 bg-md-surfaceContainerLow rounded-t-xl rounded-b-none border-b-2 border-md-outline focus:border-md-primary focus:outline-none transition-colors text-md-onBackground"
        />
      )}
    </div>
  );
};

const ContactSection = () => {
  const [status, setStatus] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/anubhabmohapatra.01@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          phone: form.phone.value,
          message: form.message.value,
          _subject: "SYSTEM ALERT: New Inquiry from ASAYLES Technologies",
          _cc: "biswalbiswajitkumar@gmail.com"
        })
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        // Dispatch custom event to tell inputs they are clear
        const event = new Event('reset');
        form.dispatchEvent(event);
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
            Ready to upgrade your digital architecture? Connect with us today.
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
            <h3 className="text-2xl font-bold text-md-onBackground mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <InputField label="Full Name" name="name" />
              
              <div className="grid grid-cols-2 gap-4">
                <InputField label="Email Address" type="email" name="email" />
                <InputField label="Phone (Optional)" type="tel" name="phone" />
              </div>

              <InputField label="Your Message" name="message" rows={4} />
              
              <Button type="submit" disabled={status === 'sending'} className="w-full">
                {status === 'sending' ? 'Sending...' : 'Submit Inquiry'}
              </Button>

              {status === 'success' && (
                <div className="p-4 bg-green-100 rounded-2xl text-green-800 text-sm text-center">
                  Message Sent Successfully!
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
      &copy; {new Date().getFullYear()} ASAYLES TECH. Built with Material You.
    </p>
  </footer>
);

export default function App() {
  const [appReady, setAppReady] = useState(false);

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
              className="fixed inset-0 z-50 flex items-center justify-center bg-md-background"
            >
              <div className="w-full max-w-2xl h-64">
                <TextHoverEffect text="ASAYLES TECH" duration={3} />
              </div>
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
            <ServicesSection />
            <ContactSection />
            <Footer />
          </motion.div>
        )}
      </div>
    </ReactLenis>
  );
}
