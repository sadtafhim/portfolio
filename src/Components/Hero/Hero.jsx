import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import img from "../../assets/Sad Md. Tafhim_chatgpt_portfolio.png"

const Hero = () => {
    const handleCopyEmail = () => {
        navigator.clipboard.writeText("tafhim.sad@gmail.com");
        alert("Email copied to clipboard!");
    };
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left order-2 md:order-1">
                        <h2 className="text-indigo-500 font-semibold tracking-wide uppercase mb-2">
                            Available for Opportunities
                        </h2>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">Sad Md. Tafhim</span>
                        </h1>
                        <h3 className="text-xl md:text-2xl text-slate-400 mb-6 font-medium">
                            Full-Stack Web Developer & Computer Science Graduate
                        </h3>
                        <p className="text-slate-400 max-w-2xl mb-8 leading-relaxed">
                            B.Sc. in Computer Science from <span className="text-indigo-400">BRAC University</span> with CGPA 3.65.
                            Skilled in building full-stack web applications using React, Node.js, Express.js, MongoDB, and Tailwind CSS.
                            Experienced in developing scalable backend services, creating responsive user interfaces, and providing IT support
                            alongside contributing to STEM education initiatives.
                        </p>


                        {/* Social Links & Resume */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
                            <a href="https://github.com/sadtafhim" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 text-white rounded-full hover:bg-indigo-600 transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/sad-md-tafhim-97a717161/" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 text-white rounded-full hover:bg-indigo-600 transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <button
                                onClick={handleCopyEmail}
                                className="p-3 bg-slate-800 text-white rounded-full hover:bg-indigo-600 transition-colors"
                                title="Copy email to clipboard"
                            >
                                <Mail size={20} />
                            </button>
                            <a
                                href="/src/assets/Sad_Md_Tafhim_CV.pdf"
                                download="Sad_Md_Tafhim_CV.pdf"
                            >
                                <button className="flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-950 font-bold rounded-lg hover:bg-indigo-500 hover:text-white transition-all">
                                    <FileText size={18} />
                                    Download CV
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Image Component */}
                    <div className="flex-1 flex justify-center order-1 md:order-2">
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <div className="absolute -inset-4 bg-linear-to-tr from-indigo-500 to-cyan-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>

                            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-slate-800 p-2 bg-slate-900">
                                <img
                                    src={img}
                                    alt="Sad Md. Tafhim"
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;