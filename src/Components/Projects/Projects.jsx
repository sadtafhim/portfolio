import React, { useState } from 'react';
import { Github, ExternalLink, X, ChevronRight, CheckCircle2, Rocket } from 'lucide-react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    // Data extracted from github.com/sadtafhim and your CV
    const projectData = [
        {
            id: 1,
            name: "Habit-Tracker (Full Stack)",
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
            tech: ["React", "Node JS", "Express JS", "MongoDB", "Firebase"],
            description: "A personalized habit-building application designed to help users track daily streaks and manage routines effectively. It features secure authentication and real-time progress updates.",
            github: "https://github.com/sadtafhim/B12-A10-Habit-Tracker-Client",
            live: "https://habit-tracker-v2.vercel.app/",
            challenges: "Managing complex state for daily streaks and ensuring high-performance data synchronization between the client and MongoDB without lag.",
            future: "Integrating push notifications for daily reminders and adding a social dashboard to compete with friends on habit milestones."
        },
        {
            id: 2,
            name: "WarmPaws - Pet Care",
            image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=2070&auto=format&fit=crop",
            tech: ["React", "Tailwind CSS", "DaisyUI", "Firebase"],
            description: "A dedicated platform for animal welfare and pet adoption. It allows users to browse available pets and provides an administrative interface for managing shelter listings.",
            github: "https://github.com/sadtafhim/B12-A09-WarmPaws",
            live: "https://warmpaws-pet-care.web.app/",
            challenges: "Designing a compassionate and intuitive UI while handling complex image uploads for pet profiles across multiple categories.",
            future: "Adding a map-based shelter locator and an AI-driven matching system to suggest pets based on user lifestyle."
        },
        {
            id: 3,
            name: "Green Earth PlantShop",
            image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop",
            tech: ["JavaScript", "Tailwind CSS", "DaisyUI", "HTML5"],
            description: "An aesthetic e-commerce interface for indoor plants. It emphasizes interactive product filtering and a seamless shopping experience for plant enthusiasts.",
            github: "https://github.com/sadtafhim/Assignment6-Green-Earth",
            live: "https://green-earth-shop.netlify.app/",
            challenges: "Optimizing the high-resolution plant imagery for fast load times and implementing smooth CSS transitions for the product filtering logic.",
            future: "Transitioning the project to a full React application with a backend to handle real-time inventory management."
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full"></div>
                </div>

                {/* Project Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map((project) => (
                        <div key={project.id} className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all group flex flex-col h-full">
                            <div className="h-56 overflow-hidden relative">
                                <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <div className="p-8 flex flex-col grow">
                                <h3 className="text-xl font-bold text-white mb-4">{project.name}</h3>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.slice(0, 3).map(t => (
                                        <span key={t} className="text-[10px] uppercase font-bold tracking-wider bg-slate-950 text-indigo-400 px-3 py-1 rounded-full border border-slate-700">{t}</span>
                                    ))}
                                </div>
                                <div className="mt-auto">
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-500 flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/10"
                                    >
                                        View Details <ChevronRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Detailed Project Page (Modal) */}
            {selectedProject && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md">
                    <div className="bg-slate-900 border border-slate-700 w-full max-w-3xl rounded-4xl overflow-hidden max-h-[90vh] flex flex-col shadow-2xl">
                        <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
                            <h3 className="text-2xl font-bold text-white">{selectedProject.name}</h3>
                            <button onClick={() => setSelectedProject(null)} className="p-2 hover:bg-slate-800 rounded-full text-slate-400 transition-colors"><X size={24} /></button>
                        </div>

                        <div className="p-8 overflow-y-auto">
                            <img src={selectedProject.image} className="w-full h-72 object-cover rounded-2xl mb-8 shadow-xl" alt={selectedProject.name} />

                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-indigo-400 font-bold text-sm uppercase tracking-widest mb-3">Main Technology Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tech.map(t => <span key={t} className="bg-indigo-500/10 text-indigo-400 px-4 py-1.5 rounded-lg text-sm border border-indigo-500/20 font-medium">{t}</span>)}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-white font-bold mb-2">Brief Description</h4>
                                        <p className="text-slate-400 leading-relaxed text-sm">{selectedProject.description}</p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 border border-slate-700 transition-all font-semibold">
                                            <Github size={18} /> GitHub Repo
                                        </a>
                                        <a href={selectedProject.live} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 transition-all font-semibold shadow-lg shadow-indigo-500/20">
                                            <ExternalLink size={18} /> Live Link
                                        </a>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="p-5 bg-slate-800/50 rounded-2xl border border-slate-700">
                                        <h4 className="text-amber-400 font-bold flex items-center gap-2 mb-3">
                                            <CheckCircle2 size={18} /> Challenges Faced
                                        </h4>
                                        <p className="text-slate-400 text-sm italic leading-relaxed">"{selectedProject.challenges}"</p>
                                    </div>

                                    <div className="p-5 bg-slate-800/50 rounded-2xl border border-slate-700">
                                        <h4 className="text-emerald-400 font-bold flex items-center gap-2 mb-3">
                                            <Rocket size={18} /> Future Plans
                                        </h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">{selectedProject.future}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;