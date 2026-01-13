import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' }, // Added Education from your CV [cite: 6]
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-lg border-b border-slate-800 py-2' : 'bg-transparent py-4'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo / Name - Using your dev handle [cite: 1] */}
                    <a href="#home" className="shrink-0 flex items-center gap-2 group">
                        <div className="p-2 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
                            <Code2 className="text-indigo-500" size={24} />
                        </div>
                        <span className="text-white font-bold text-xl tracking-tight">
                            Tafhim<span className="text-indigo-500">.dev</span>
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-300 hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-all hover:scale-105"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="ml-4 bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/25 active:scale-95"
                            >
                                Hire Me
                            </a>
                        </div>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Content */}
            <div className={`md:hidden absolute w-full bg-slate-950 border-b border-slate-800 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}>
                <div className="px-4 pt-2 pb-6 space-y-1 bg-slate-950/50 backdrop-blur-xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-slate-300 hover:text-indigo-400 hover:bg-slate-900/50 block px-4 py-4 rounded-xl text-base font-medium transition-all"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="pt-4 px-4">
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center bg-indigo-600 text-white py-4 rounded-2xl font-bold"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;