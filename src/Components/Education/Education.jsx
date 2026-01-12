import React from 'react';
import { GraduationCap, BookOpen, Award, Calendar } from 'lucide-react';

const Education = () => {
    const educationData = [
        {
            institution: "BRAC University",
            degree: "Bachelor of Science in Computer Science",
            duration: "August 2020 - May 2025",
            result: "CGPA: 3.65",
            highlights: [
                "Focus on Frontend Development and Machine Learning",
                "Lead of Research at BRACU Ognibir",
                "Co-authored published research in Lung Cancer Detection (IEEE)"
            ],
            icon: <GraduationCap className="text-indigo-500" size={24} />
        }
    ];

    return (
        <section id="education" className="py-20 bg-slate-900 relative overflow-hidden">
            {/* Background Graphic */}
            <div
                className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)',
                    backgroundSize: '25px 25px'
                }}
            ></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Educational Qualification</h2>
                    <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-8">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className="relative pl-8 border-l-2 border-slate-700 hover:border-indigo-500 transition-colors py-4 group"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[13px] top-6 w-6 h-6 bg-slate-900 border-2 border-slate-700 rounded-full group-hover:border-indigo-500 transition-colors flex items-center justify-center">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                            </div>

                            <div className="bg-slate-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-slate-700 hover:shadow-xl hover:shadow-indigo-500/5 transition-all">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-slate-900 rounded-lg">
                                            {edu.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white">{edu.institution}</h3>
                                            <p className="text-indigo-400 font-medium">{edu.degree}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:items-end text-slate-400 text-sm">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={14} />
                                            <span>{edu.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2 font-bold text-emerald-400 mt-1">
                                            <Award size={14} />
                                            <span>{edu.result}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4 mt-4">
                                    <div className="space-y-3">
                                        <h4 className="text-slate-200 font-semibold flex items-center gap-2">
                                            <BookOpen size={16} className="text-indigo-400" /> Key Highlights
                                        </h4>
                                        <ul className="space-y-2">
                                            {edu.highlights.map((item, i) => (
                                                <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                                                    <span className="text-indigo-500 mt-1">•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Decorative element for research focus */}
                                    <div className="hidden md:flex items-center justify-center border-l border-slate-700/50 pl-4">
                                        <p className="text-xs text-slate-500 italic text-center leading-relaxed">
                                            "Utilized Machine Learning and Image Processing techniques to contribute to medical research during undergraduate studies."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;