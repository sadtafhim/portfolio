import React from 'react';
import { BookOpen, Award, Heart, Coffee } from 'lucide-react';

const AboutMe = () => {
    return (
        <section id="about" className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
                    <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Personality & Journey */}
                    <div className="space-y-6 text-slate-300 leading-relaxed">
                        <p>
                            Hello! I'm <span className="text-white font-semibold">Sad Md. Tafhim</span>. My journey into the world of technology began with a deep curiosity for how digital systems solve real-world problems. This led me to pursue a B.Sc. in Computer Science at <span className="text-indigo-400">BRAC University</span>, where I maintained a CGPA of 3.65 and discovered my passion for frontend development and AI.
                        </p>
                        <p>
                            I truly enjoy the "building" process—turning a blank screen into a functional, user-centric interface. Whether it's troubleshooting ERP systems during my time at <span className="text-white">United Hospitals Limited</span> or designing engaging STEM resources for <span className="text-white">The Tech Lab</span>, I find fulfillment in making technology accessible and efficient for everyone.
                        </p>
                        <p>
                            Beyond the code, I am a researcher at heart. I've co-authored a publication on <span className="italic text-slate-400 text-sm">"Lung Cancer Detection Using Machine Learning Methods"</span> and served as the Lead of Research for BRACU Ognibir. I believe that understanding the "why" is just as important as the "how."
                        </p>
                        <p>
                            When I'm not staring at a terminal, you'll likely find me involved in community work or exploring creative outlets. I am passionate about raising awareness for societal issues and fostering empathy—a drive that guided my work as a Content Co-ordinator and STEM teacher.
                        </p>
                    </div>

                    {/* Quick Facts Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-indigo-500 transition-colors">
                            <BookOpen className="text-indigo-500 mb-3" size={28} />
                            <h4 className="text-white font-bold mb-1">Education</h4>
                            <p className="text-sm text-slate-400">B.Sc. Computer Science<br />BRAC University</p>
                        </div>

                        <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-indigo-500 transition-colors">
                            <Award className="text-indigo-500 mb-3" size={28} />
                            <h4 className="text-white font-bold mb-1">Research</h4>
                            <p className="text-sm text-slate-400">IEEE Publication<br />Lung Cancer Detection</p>
                        </div>

                        <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-indigo-500 transition-colors">
                            <Heart className="text-indigo-500 mb-3" size={28} />
                            <h4 className="text-white font-bold mb-1">Interests</h4>
                            <p className="text-sm text-slate-400">Robotics, STEM Education, & Social Issues</p>
                        </div>

                        <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-indigo-500 transition-colors">
                            <Coffee className="text-indigo-500 mb-3" size={28} />
                            <h4 className="text-white font-bold mb-1">Hobbies</h4>
                            <p className="text-sm text-slate-400">Content Creation & Community Involvement</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;