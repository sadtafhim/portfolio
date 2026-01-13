import React from 'react';
import Hero from '../../Hero/Hero';
import AboutMe from '../../AboutMe/AboutMe';
import Skills from '../../Skills/Skills';
import Education from '../../Education/Education';
import Experience from '../../Experience/Experience';
import Projects from '../../Projects/Projects';
import Contact from '../../Contact/Contact';

const HomePage = () => {
    return (
        <div>
            <div>
                <Hero></Hero>
            </div>
            <div>
                <AboutMe></AboutMe>
            </div>
            <div>
                <Skills></Skills>
            </div>
            <div>
                <Education></Education>
            </div>
            <div>
                <Experience></Experience>
            </div>
            <div>
                <Projects></Projects>
            </div>
            <div>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default HomePage;