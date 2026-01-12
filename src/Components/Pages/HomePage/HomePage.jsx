import React from 'react';
import Hero from '../../Hero/Hero';
import AboutMe from '../../AboutMe/AboutMe';
import Skills from '../../Skills/Skills';
import Education from '../../Education/Education';
import Experience from '../../Experience/Experience';

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
        </div>
    );
};

export default HomePage;