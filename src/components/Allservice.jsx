import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Smartphone, Zap, ArrowRight } from 'lucide-react';

// Mock Data (Replace with your actual props)
const services = [
  {
    icon: <Layout size={32} />,
    title: "UI/UX Design",
    desc: "Crafting intuitive and stunning user experiences that captivate your audience.",
    color: "from-blue-400 to-cyan-300"
  },
  {
    icon: <Code size={32} />,
    title: "Web Development",
    desc: "Robust and scalable web solutions built with modern technologies.",
    color: "from-purple-400 to-pink-300"
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile Apps",
    desc: "Native and cross-platform mobile applications for iOS and Android.",
    color: "from-orange-400 to-red-300"
  },
  {
    icon: <Zap size={32} />,
    title: "Digital Strategy",
    desc: "Data-driven strategies to accelerate your digital transformation.",
    color: "from-emerald-400 to-teal-300"
  }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50 }
  }
};

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10 }}
      className="group relative p-1 rounded-2xl bg-transparent transition-all duration-300"
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-gray-200 to-gray-100 opacity-50 group-hover:opacity-100 group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-500 blur-sm -z-10" />
      
      {/* Card Content */}
      <div className="h-full relative bg-white/80 backdrop-blur-xl p-8 rounded-xl shadow-sm group-hover:shadow-2xl transition-all duration-300 border border-white/20 overflow-hidden">
        
        {/* Decorative Background Blob inside card */}
        <div className={`absolute -top-10 -right-10 w-32 h-32 bg-linear-to-br ${service.color} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`} />

        {/* Icon Container */}
        <div className={`w-14 h-14 mb-6 rounded-lg bg-linear-to-br ${service.color} p-0.5 shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
          <div className="w-full h-full bg-white rounded-[7px] flex items-center justify-center text-gray-700 group-hover:text-black">
            {service.icon}
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {service.desc}
        </p>

        {/* 'Learn More' Link that appears on hover */}
        <div className="flex items-center text-sm font-semibold text-blue-600 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <span>Learn more</span>
          <ArrowRight className="ml-2 w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 px-4 overflow-hidden bg-gray-50">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-2"
        >
          <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide uppercase mb-1 inline-block">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-gray-900 via-blue-800 to-gray-900">
            Exceptional Services<br /> For Your Business
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We provide comprehensive digital solutions customized to specific needs, 
            ensuring your business stands out in the modern landscape.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;