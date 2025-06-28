import React from 'react';
import Navbar from '../../sheard/Navbar';
import HeroSection from '../Hero/HeroSection';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <Skills></Skills>
            <Education></Education>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Root;