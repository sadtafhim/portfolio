import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Brand/About Section */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold text-xl tracking-tight">
                            Tafhim<span className="text-indigo-500">.dev</span>
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Frontend Web Developer and CS Graduate from BRAC University.
                            Passionate about building functional, user-centric web applications and AI research.
                        </p>
                    </div>

                    {/* Quick Navigation */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold uppercase tracking-widest text-xs">Navigation</h4>
                        <ul className="grid grid-cols-2 gap-2 text-sm">
                            <li><a href="#home" className="text-slate-500 hover:text-indigo-400 transition-colors">Home</a></li>
                            <li><a href="#about" className="text-slate-500 hover:text-indigo-400 transition-colors">About</a></li>
                            <li><a href="#skills" className="text-slate-500 hover:text-indigo-400 transition-colors">Skills</a></li>
                            <li><a href="#projects" className="text-slate-500 hover:text-indigo-400 transition-colors">Projects</a></li>
                            <li><a href="#education" className="text-slate-500 hover:text-indigo-400 transition-colors">Education</a></li>
                            <li><a href="#contact" className="text-slate-500 hover:text-indigo-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Connect Section */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold uppercase tracking-widest text-xs">Social Presence</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/sadtafhim"
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 bg-slate-900 text-slate-400 hover:text-white hover:bg-indigo-600 rounded-xl transition-all"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sad-md-tafhim-97a717161/"
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 bg-slate-900 text-slate-400 hover:text-white hover:bg-indigo-600 rounded-xl transition-all"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="mailto:tafhim.sad@gmail.com"
                                className="p-3 bg-slate-900 text-slate-400 hover:text-white hover:bg-indigo-600 rounded-xl transition-all"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© {currentYear} Sad Md. Tafhim. All rights reserved.</p>
                    <div className="flex items-center gap-1">
                        Built with <Heart size={12} className="text-red-500 fill-red-500" /> using React & Tailwind
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;