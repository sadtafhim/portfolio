import React from 'react';
import { Layout, Server, Brain, Wrench } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Web Development",
            icon: <Layout className="text-blue-400" />,
            skills: ["React", "Node JS", "Express JS", "Firebase", "Tailwind", "Bootstrap", "DaisyUI"],
            // Data based on your frameworks and styling libraries [cite: 25, 26]
        },
        {
            title: "Programming Languages",
            icon: <Server className="text-emerald-400" />,
            skills: ["JavaScript", "Python", "C", "MongoDB (Database)"],
            // Data based on your coding and database platforms [cite: 26, 29]
        },
        {
            title: "AI & Machine Learning",
            icon: <Brain className="text-purple-400" />,
            skills: ["Supervised Learning", "Unsupervised Learning", "Explainable AI (LIME/GradCam)", "Image Processing"],
            // Data based on your research and ML competencies [cite: 27, 30, 31]
        },
        {
            title: "Tools & Office Suite",
            icon: <Wrench className="text-orange-400" />,
            skills: ["Microsoft Excel", "PowerPoint", "Google Sheets", "Google Slides", "Docs"],
            // Data based on your professional office suite skills [cite: 25, 28]
        }
    ];

    return (
        <section id="skills" className="relative py-20 bg-slate-950 overflow-hidden">
            {/* Background Graphic: The Dotted Line Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Competencies</h2>
                    <p className="text-slate-400">My specialized toolkit for building and researching</p>
                    <div className="h-1 w-20 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl hover:border-indigo-500 transition-all group"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-slate-800 rounded-lg group-hover:scale-110 transition-transform">
                                    {category.icon}
                                </div>
                                <h3 className="text-white font-bold text-lg">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700 hover:text-indigo-400 hover:border-indigo-400 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;