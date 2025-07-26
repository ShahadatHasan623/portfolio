import React from 'react';
import Navbar from '../../sheard/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';


const Root = () => {
    return (
        <div>
    
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-80px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;