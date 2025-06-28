import React from 'react';
import About from '../pages/About/About';
import Skills from '../pages/Skills/Skills';
import Education from '../pages/Education/Education';
import Project from '../pages/Project/Project';
import Contact from '../pages/Contact/Contact';


const ScrollPage = () => {
    return (
        <div>
            <About className="page"></About>
            <Skills className="page"></Skills>
            <Education></Education>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default ScrollPage;