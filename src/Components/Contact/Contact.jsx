import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);

    const contactInfo = {
        email: "tafhim.sad@gmail.com",
        phone: "01882143108",
        whatsapp: "+8801882143108",
        location: "Dhaka, Bangladesh"
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setLoading(false);
                // Success SweetAlert
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: 'Thank you for reaching out. I will get back to you shortly.',
                    background: '#0f172a', // Matches your slate-950
                    color: '#f1f5f9',
                    confirmButtonColor: '#4f46e5',
                    iconColor: '#10b981',
                    customClass: {
                        popup: 'rounded-[2rem] border border-slate-800'
                    }
                });
                e.target.reset();
            })
            .catch((error) => {
                setLoading(false);
                console.error(error);
                // Error SweetAlert
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! Please try again later.',
                    background: '#0f172a',
                    color: '#f1f5f9',
                    confirmButtonColor: '#ef4444',
                    customClass: {
                        popup: 'rounded-[2rem] border border-slate-800'
                    }
                });
            });
    };

    return (
        <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left: Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-2">Let's connect</h3>
                            <p className="text-slate-400 max-w-md">
                                Have a project in mind or just want to say hi? I typically respond within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <a href={`mailto:${contactInfo.email}`} className="group flex items-center gap-6 p-6 bg-slate-900/50 border border-slate-800 rounded-3xl hover:border-indigo-500/50 transition-all">
                                <div className="p-3 bg-indigo-500/10 rounded-2xl group-hover:bg-indigo-500/20 transition-colors">
                                    <Mail className="text-indigo-400" size={28} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Email me</p>
                                    <p className="text-lg text-slate-200 font-medium">{contactInfo.email}</p>
                                </div>
                            </a>
                            <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer" className="group flex items-center gap-6 p-6 bg-slate-900/50 border border-slate-800 rounded-3xl hover:border-emerald-500/50 transition-all">
                                <div className="p-3 bg-emerald-500/10 rounded-2xl group-hover:bg-emerald-500/20 transition-colors">
                                    <MessageCircle className="text-emerald-400" size={28} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">WhatsApp</p>
                                    <p className="text-lg text-slate-200 font-medium">Chat Now</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right: The Form */}
                    <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] shadow-2xl">
                        <p className="text-white font-bold text-xl pb-5">
                            Contact Me Directly
                        </p>
                        <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">Name</label>
                                    <input
                                        name="user_name"
                                        type="text"
                                        placeholder="Your Name"
                                        required
                                        className="w-full p-4 bg-slate-950 border border-slate-800 rounded-2xl text-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email</label>
                                    <input
                                        name="user_email"
                                        type="email"
                                        placeholder="email@example.com"
                                        required
                                        className="w-full p-4 bg-slate-950 border border-slate-800 rounded-2xl text-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Your Message"
                                    required
                                    minLength={10}
                                    className="w-full p-4 bg-slate-950 border border-slate-800 rounded-2xl text-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] disabled:opacity-50"
                            >
                                {loading ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;