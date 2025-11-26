import React, { useState } from 'react'
import logo1 from "../assets/logo.jpeg"
import logo2 from "../assets/logo2.png"
import logo from "../assets/logo1.png"
import { Menu, X } from 'lucide-react';
import Head from './Head';
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${'bg-[#f3f3f1] shadow-lg '}`}>
            <Head/>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold  from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            <img className="h-20" src={logo} alt="" />
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            {['Home', 'Services', 'About', 'Career','Contact Us'].map(item => (
                                <a key={item} href={`#${item.toLowerCase()}`} className={`text-gray-700 text-xl font-[play]  hover:text-[#168acc] font-medium ${"border-[#f3f3f1] border-2"} hovereffect`}>
                                    {item}
                                </a>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden mt-4 pb-4 space-y-3">
                            {['Home', 'Services', 'About', 'Contact'].map(item => (
                                <a key={item} href={`#${item.toLowerCase()}`} className="block text-gray-700 hover:text-blue-600 transition-colors duration-300">
                                    {item}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </nav>
        </div>
    )
}
