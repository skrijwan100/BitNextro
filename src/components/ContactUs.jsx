import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSectionLight = () => {
    return (
        <div className="w-full min-h-screen rounded-t-[100px] flex items-center justify-center bg-sky-200 py-20 px-4">
            <div className="max-w-5xl w-full mx-auto">

                <div className="grid lg:grid-cols-2 gap-0 lg:gap-12 bg-white rounded-4xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden" style={{ borderBottomRightRadius: "164px", borderTopLeftRadius: "100px" }}>



                    {/* Right Side: The Form */}
                    <div className="p-4 pl-7 md:p-12 bg-white" style={{ padding: "30px" }}>
                        <h2 className="text-3xl font-bold text-gray-800 mb-1">Get in Touch</h2>
                        <p className="text-gray-500 mb-2">We would love to hear from you!</p>

                        <div className="space-y-2">
                            <div>
                                <label className="text-sm font-medium text-gray-600 mb-1 block">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full px-5 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600 mb-1 block">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full px-5 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-600 mb-1 block">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-5 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200 resize-none"
                                ></textarea>
                            </div>

                            <button
                                onClick={() => alert('Message sent!')}
                                className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                Send Message
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                    {/* Left Side: Info & Decoration - Primary Blue Background */}
                    <div className="bg-linear-to-br from-blue-600 to-indigo-700 p-10 md:p-12 flex flex-col justify-between relative overflow-hidden">
                        {/* Background Shapes */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-white mb-4">Contact Information</h3>
                            <p className="text-blue-100 text-lg mb-8">Say something to start a live chat!</p>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4 text-blue-50">
                                    <Phone className="w-6 h-6" />
                                    <span>+91 9330855877</span>
                                </div>
                                <div className="flex items-center space-x-4 text-blue-50">
                                    <Mail className="w-6 h-6" />
                                    <span>bitnextrosolutions@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-4 text-blue-50">
                                    <MapPin className="w-6 h-6" />
                                    <span>123 Blue Avenue, New York, NY</span>
                                </div>
                            </div>
                        </div>

                        {/* Social/Decor icons could go here */}
                        <div className="relative z-10 mt-12 lg:mt-0">
                            <div className="flex space-x-4">
                                {/* Social circles */}
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-blue-500/50 hover:bg-white/20 transition-all cursor-pointer flex items-center justify-center text-white">
                                        <div className="w-4 h-4 bg-white/20 rounded-full"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSectionLight;