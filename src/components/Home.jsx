import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Zap, Target, Users, CheckCircle, Star, Mail, Phone, MapPin, AlarmClock, ServerCog, Fingerprint, Telescope, Facebook, Linkedin, Twitter, Code, HardDrive, CloudUpload, Shield, Globe } from 'lucide-react';
import logo1 from "../assets/logo.jpeg"
import logo from "../assets/Powering.png"
// import vedioload from "../assets/Techrootvedio.mp4"
import img1 from "../assets/img1.jpeg"
import AnimatedRibbons from './Banner';
import TextSlider from './Textslider';
import ServicesSection from './Allservice';
import Slider from './Slider';
import ContactSection from './ContactUs';
const HomePage = () => {

  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [vedioshow, setvedioshow] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        setvedioshow(false)
      }, 5000);
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll('[data-animate]');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisibleSections(prev => new Set([...prev, section.id]));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleclick = (e) => {
    e.preventDefault(); // Prevent default anchor jump
    const target = document.querySelector('#services');
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  const handlelink = (link, e) => {
    e.preventDefault(); // Prevent default anchor jump
    const target = document.querySelector(link);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }


  const services = [
    { icon: <Zap className="w-8 h-8" />, title: 'IT Infrastructure', desc: 'Custom websites and web applications built with cutting-edge technologies.' },
    { icon: <Target className="w-8 h-8" />, title: 'Networking Solutions', desc: 'Strategic campaigns to boost your online presence and drive growth.' },
    { icon: <Users className="w-8 h-8" />, title: 'Cloud Services', desc: 'Expert guidance to transform your business and achieve your goals.' },
    { icon: <CheckCircle className="w-8 h-8" />, title: 'Data Protection & Backup', desc: 'Comprehensive branding solutions that make your business stand out.' },
    { icon: <Users className="w-8 h-8" />, title: 'Cybersecurity', desc: 'Expert guidance to transform your business and achieve your goals.' },
    { icon: <Users className="w-8 h-8" />, title: 'Server Management', desc: 'Expert guidance to transform your business and achieve your goals.' },
    { icon: <CheckCircle className="w-8 h-8" />, title: 'Managed IT Services', desc: 'Comprehensive branding solutions that make your business stand out.' },
    { icon: <CheckCircle className="w-8 h-8" />, title: 'System Integration', desc: 'Comprehensive branding solutions that make your business stand out.' },
    { icon: <CheckCircle className="w-8 h-8" />, title: 'Web Development', desc: 'Comprehensive branding solutions that make your business stand out.' },
  ];

  const testimonials = [
    { name: 'Sarah Johnson', role: 'CEO, TechStart', text: 'Outstanding service! They transformed our digital presence completely.', rating: 5 },
    { name: 'Michael Chen', role: 'Founder, GrowthLab', text: 'Professional, creative, and results-driven. Highly recommended!', rating: 5 },
    { name: 'Emily Rodriguez', role: 'Director, Innovate Co', text: 'Exceeded our expectations in every way. Truly exceptional work.', rating: 5 }
  ];

  const reasons = [
    '10+ Years of Industry Experience',
    'Results-Driven Approach',
    '500+ Satisfied Clients',
    '24/7 Customer Support'
  ];
  return (
    <div className="bg-white text-gray-900 font-sans overflow-x-hidden">

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-white">

        {/* Animated Gradient Waves */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient from-blue-100 via-purple-50 to-pink-100 animate-gradient-shift"></div>
        </div>

        {/* Floating Blobs */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-3000"></div>

        {/* Animated Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-particle"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-particle animation-delay-1000"></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-particle animation-delay-2000"></div>
        <div className="absolute bottom-40 right-1/4 w-3 h-3 bg-indigo-400 rounded-full animate-particle animation-delay-3000"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-300 rounded-full animate-particle animation-delay-4000"></div>

        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          <path className="animate-draw-line" d="M0,100 Q250,50 500,100 T1000,100" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
          <path className="animate-draw-line animation-delay-2000" d="M0,300 Q250,250 500,300 T1000,300" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
        </svg>
      </div>


      {/* Navbar */}


      {/* Hero Section */}
      <div className='mt-36 animate-fade-in-up'>

        <Slider />
      </div>
      <section id="home" data-animate className="min-h-screen flex items-center justify-center  ">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Empowering <br /> The next generation of IT <br /> With Zero compromise
            </h1>
            <p className="text-xl    md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional services that drive growth, innovation, and success for modern businesses
            </p>
            <button className="group  bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center">
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Floating Icons */}
          <div className="mt-16 relative h-64">
            <div className="absolute top-0 left-1/4 animate-float">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center shadow-lg">
                <Zap className="text-blue-600" />
              </div>
            </div>
            <div className="absolute top-10 right-1/4 animate-float animation-delay-2000">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center shadow-lg">
                <Target className="text-purple-600" />
              </div>
            </div>
            <div className="absolute bottom-0 left-1/3 animate-float animation-delay-4000">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="text-pink-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" data-animate className={`py-20 px-4 transition-all duration-1000 ${visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold lg:h-20 h-26 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Our Company
              </h2>
              <p className="text-gray-900 text-lg leading-relaxed mb-4">
                We're BitNextro Solutions, a next-gen IT startup that converts ideas into smart technology.
                From seamless software to reliable IT services, we build solutions that make business
                operations simpler, faster, and more transformative.
                Curiosity, creativity, and purpose drive us, and we don't just follow trends-we create them.
              </p>
              <p className="text-gray-900 text-lg leading-relaxed">
                Our mission is to deliver practical, end-to-end IT solutions from networking and infrastructure to
                tech support and cyber security solutions designed to make operations simpler, more
                productive, and ultimately help businesses succeed in a digital world.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-linear-to-br from-blue-400 via-purple-400 to-pink-400 rounded-3xl shadow-2xl animate-pulse-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-6xl font-bold">10+</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      {/* Why Choose Us */}
      <section id="why" data-animate className={`py-20 px-4 transition-all duration-1000 ${visibleSections.has('why') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="w-full flex items-center justify-center h-96 bg-linear-to-br rounded-3xl shadow-2xl animate-pulse-slow">
                <img src={img1} alt="" className='h-[350px]' />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Why Choose Us?
              </h2>
              <div className="space-y-4">
                {reasons.map((reason, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <CheckCircle className="text-green-500 shrink-0" />
                    <span className="text-lg font-medium">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section id="testimonials" data-animate className={`py-20 px-4 bg-gray-50 transition-all duration-1000 ${visibleSections.has('testimonials') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What Clients Say
            </h2>
            <p className="text-gray-600 text-lg">Trusted by businesses worldwide</p>
          </div>

          <div className="relative ">
            <div className="flex slide-track">
              {[...testimonials, ...testimonials].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 mx-4 min-w-[350px] shrink-0"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" data-animate className={`py-20 px-4 transition-all duration-1000 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1>Contact Us</h1>
        <ContactSection/>
        {/* <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-600 text-lg">Let's discuss how we can help your business grow</p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
              />
              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 resize-none"
              ></textarea>
              <button
                onClick={() => alert('Message sent! (This is a demo)')}
                className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-600" />
                <span className="text-gray-600">info@proservice.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-600" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-600" />
                <span className="text-gray-600">New York, USA</span>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-linear-to-br from-sky-900 via-sky-800 to-sky-900 text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div>
              <h3 className="text-3xl font-bold mb-4 bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                <img className="h-28 rounded-[10px] object-cover " src={logo} alt="" />
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Empowering
                The next generation of IT
                With Zero compromise
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <span className="text-xl"><Facebook /></span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <span className="text-xl"><Linkedin /></span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <span className="text-xl"><Twitter /></span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Service', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLocaleLowerCase()}`} onClick={(e) => { handlelink(link, e) }} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {[
                  { icon: <Code />, text: 'Software Development', color: 'text-blue-400' },
                  { icon: <HardDrive />, text: 'Hardware', color: 'text-orange-400 ' },
                  { icon: <CloudUpload />, text: 'Cloud Computing', color: 'text-red-400 ' },
                  { icon: <Shield />, text: 'Cybersecurity', color: 'text-green-400 ' },
                  { icon: <Globe />, text: 'Digital & Marketing ', color: 'text-blue-400 ' },

                ].map((service) => (
                  <a href="#services" onClick={handleclick}><li key={service.text} className=" cursor-pointer flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 mb-2">
                    <span className={`text-lg ${service.color} `}>{service.icon}</span>
                    {service.text}
                  </li>
                  </a>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-6">
                Subscribe to get special offers, free giveaways, and updates on new menu items!
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors duration-300"
                />
                <button className="w-full px-6 py-3 rounded-lg bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm flex items-center gap-2">
                Made with <span className="text-red-500">❤</span> by Rijwan
              </p>
              <p className="text-gray-400 text-sm">
                © 2025 BitNextro. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                {['Privacy Policy', 'Terms & Conditions', 'Refund Policy', 'Shipping Policy'].map((item) => (
                  <a key={item} href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default HomePage;
