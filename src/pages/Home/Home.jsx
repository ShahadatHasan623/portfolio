import React from 'react';
import HeroSection from '../Hero/HeroSection';
import TotalCount from '../TotalCount/TotalCount';
import Skills from '../Skills/Skills';
import About from '../About/About';
import Education from '../Education/Education';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <TotalCount></TotalCount>
            <Skills></Skills>
            <About></About>
            <Education></Education>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;