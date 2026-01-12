import React from 'react';
import { Briefcase, Users, Laptop, GraduationCap, CheckCircle2 } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: "United Hospitals Limited",
            role: "Intern - Information Technology Department",
            duration: "August 2025 - November 2025",
            description: "Supported the launch and rollout of the Medifort ERP system.",
            tasks: [
                "Provided real-time bug resolution and issue troubleshooting during the ERP launch.",
                "Led staff training sessions to ensure a successful rollout of the Medifort ERP.",
                "Resolved hardware, software, and network issues for end-users to minimize downtime."
            ],
            icon: <Laptop className="text-blue-400" />
        },
        {
            company: "The Tech Lab",
            role: "STEM Teacher - Project Oporajita",
            duration: "December 2023 - Present",
            description: "Designing educational resources and raising societal awareness.",
            tasks: [
                "Delivered engaging educational resources on STEM, Robotics, and Safe Tech.",
                "Raised awareness of societal issues to foster community involvement.",
                "Constructed and executed strategies for impactful social media content production."
            ],
            icon: <Users className="text-emerald-400" />
        }
    ];

    return (
        <section id="experience" className="py-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Experience</h2>
                    <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-slate-900 border border-slate-800 rounded-3xl hover:border-indigo-500/50 transition-all duration-300"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-slate-800 rounded-2xl group-hover:bg-indigo-600 transition-colors">
                                        {exp.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white leading-tight">{exp.role}</h3>
                                        <p className="text-indigo-400 font-medium">{exp.company}</p>
                                    </div>
                                </div>
                                <span className="text-xs font-mono text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full whitespace-nowrap">
                                    {exp.duration}
                                </span>
                            </div>

                            <p className="text-slate-400 mb-6 text-sm italic border-l-2 border-slate-700 pl-4">
                                "{exp.description}"
                            </p>

                            <ul className="space-y-4">
                                {exp.tasks.map((task, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                                        <CheckCircle2 className="text-indigo-500 mt-1 flex-shrink-0" size={16} />
                                        <span>{task}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;