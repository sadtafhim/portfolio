import React from 'react';
import { Mail, Phone, MessageCircle, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    // Your details from the provided records
    const contactInfo = {
        email: "tafhim.sad@gmail.com",
        phone: "01882143108",
        whatsapp: "+8801882143108",
        linkedin: "https://www.linkedin.com/in/sad-md-tafhim-97a717161/",
        github: "https://github.com/sadtafhim",
        location: "Dhaka, Bangladesh"
    };

    return (
        <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Subtle Background Graphic */}
            <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
                    <p className="text-slate-400 max-w-lg mx-auto">
                        Currently open to Web Development opportunities and research collaborations.
                    </p>
                    <div className="h-1 w-20 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Contact Methods Cards */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>

                        {/* Email */}
                        <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-5 p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-indigo-500 transition-all group">
                            <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email Me</p>
                                <p className="text-lg text-slate-200 font-medium">{contactInfo.email}</p>
                            </div>
                        </a>

                        {/* Phone */}
                        <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-5 p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-emerald-500 transition-all group">
                            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Call Me</p>
                                <p className="text-lg text-slate-200 font-medium">{contactInfo.phone}</p>
                            </div>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href={`https://wa.me/${contactInfo.whatsapp}`}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-5 p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-green-500 transition-all group"
                        >
                            <div className="p-3 bg-green-500/10 text-green-400 rounded-xl group-hover:bg-green-500 group-hover:text-white transition-colors">
                                <MessageCircle size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">WhatsApp</p>
                                <p className="text-lg text-slate-200 font-medium">Message on WhatsApp</p>
                            </div>
                        </a>
                    </div>

                    {/* Quick Contact Form */}
                    <div className="bg-slate-900 border border-slate-800 p-8 rounded-4xl shadow-2xl">
                        <form className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm text-slate-400 ml-1">Name</label>
                                    <input type="text" className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-white focus:border-indigo-500 outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-slate-400 ml-1">Email</label>
                                    <input type="email" className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-white focus:border-indigo-500 outline-none transition-all" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-slate-400 ml-1">Message</label>
                                <textarea rows="4" className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-white focus:border-indigo-500 outline-none transition-all" placeholder="Hi Tafhim, let's talk about..."></textarea>
                            </div>
                            <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20">
                                <Send size={18} /> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;