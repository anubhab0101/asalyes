import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Monitor, Code, Cloud, Shield, ChevronRight, Phone, Mail, User } from 'lucide-react';

// 3D Background Component
const Scene = () => {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.15;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={meshRef} position={[0, 0, -5]}>
          <torusKnotGeometry args={[9, 3, 764, 64, 2, 3]} />
          <meshStandardMaterial color="#0ea5e9" wireframe={true} transparent opacity={0.15} />
        </mesh>
      </Float>
    </>
  );
};

// Navbar Component
const Navbar = () => (
  <nav className="fixed w-full z-50 top-0 bg-secondary/80 backdrop-blur-md border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0 font-bold text-2xl tracking-tighter text-white">
          ASAYLES<span className="text-primary">Tech</span>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            <a href="#home" className="hover:text-primary transition-colors text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#about" className="hover:text-primary transition-colors text-gray-300 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#services" className="hover:text-primary transition-colors text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Services</a>
            <a href="#contact" className="hover:text-primary transition-colors text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

// Sections
const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center justify-center relative z-10 pt-16">
    <div className="text-center px-4 max-w-4xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
      >
        Crafting Meaningful <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Digital Solutions</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
      >
        ASAYLES Technologies focuses on reliable IT services, bringing clarity, efficiency, and modern capabilities to a dynamic digital landscape.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a href="#services" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-primary hover:bg-blue-600 transition-all shadow-lg shadow-primary/30">
          Explore Services <ChevronRight className="ml-2 h-5 w-5" />
        </a>
      </motion.div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-24 relative z-10 bg-secondary/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About ASAYLES</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-gray-300 text-lg"
        >
          <p>
            Founded by <strong>Anubhab Mohapatra</strong>, ASAYLES Technologies is built on a vision to simplify complex challenges through strategic technology application. We approach every project with discretion, ensuring meaningful and targeted outcomes.
          </p>
          <p>
            We believe in crafting solutions that are secure, adaptable, and forward-thinking. Rather than making exaggerated claims, we let our focused dedication to core engineering principles speak for itself. We partner with visionaries to accelerate ideas into reality quietly and efficiently.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="border border-white/10 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-1">Focused Quality</h3>
              <p className="text-sm text-gray-400">Prioritizing reliable output</p>
            </div>
            <div className="border border-white/10 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-1">Confidential</h3>
              <p className="text-sm text-gray-400">Discreet execution</p>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center"
        >
          <Monitor className="w-48 h-48 text-primary/50" />
        </motion.div>
      </div>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors backdrop-blur-sm group"
  >
    <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="w-7 h-7 text-primary" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
);

const ServicesSection = () => (
  <section id="services" className="py-24 relative z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Core Focus</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard 
          icon={Code} 
          title="Software Development" 
          description="Developing functional, modern web and application interfaces focusing on seamless user experiences and robust backends."
          delay={0.1}
        />
        <ServiceCard 
          icon={Cloud} 
          title="Architecture & Cloud" 
          description="Deploying stable, scalable digital infrastructure that grows sensibly alongside your business needs."
          delay={0.2}
        />
        <ServiceCard 
          icon={Shield} 
          title="Data Integrity & Security" 
          description="Implementing essential cybersecurity measures to protect digital assets and ensure operational confidentiality."
          delay={0.3}
        />
      </div>
    </div>
  </section>
);

const ContactSection = () => {
  const [status, setStatus] = React.useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    
    // Using FormSubmit API for email notifications
    // Note for User: The email will be sent to the email in the fetch URL.
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
          _subject: "New Inquiry from ASAYLES Technologies Website"
        })
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-secondary/80 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Interested in exploring a collaboration? Fill out our inquiry form or reach out directly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>
            
            <div className="flex items-center space-x-4 text-gray-300">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Founder</p>
                <p className="text-lg font-medium text-white">Anubhab Mohapatra</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-gray-300">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-lg font-medium text-white">+91 8260586748</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-gray-300">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-lg font-medium text-white">contact@asayles.com</p>
              </div>
            </div>
          </motion.div>

          {/* Custom Form UI with Email Notification */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input type="text" name="name" required className="w-full px-5 py-3 bg-secondary/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="John Doe" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input type="email" name="email" required className="w-full px-5 py-3 bg-secondary/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                  <input type="tel" name="phone" className="w-full px-5 py-3 bg-secondary/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Optional" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                <textarea name="message" required rows="4" className="w-full px-5 py-3 bg-secondary/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="How can we help?"></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-base font-bold text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending Message...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm text-center">
                  Thank you! Your message has been sent successfully. We will get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm text-center">
                  Oops! Something went wrong. Please try again later or contact us directly.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-secondary py-8 border-t border-white/10 relative z-10 text-center">
    <p className="text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} ASAYLES Technologies. Founded by Anubhab Mohapatra. All rights reserved.
    </p>
  </footer>
);

export default function App() {
  return (
    <div className="relative min-h-screen bg-secondary overflow-x-hidden selection:bg-primary/30">
      {/* 3D Background Canvas */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Scene />
        </Canvas>
      </div>

      {/* UI Overlay */}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
