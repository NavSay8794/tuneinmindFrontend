import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home';
import About from './About/About';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import Resources from './Resources/Resources';
import TestimonialsAndAssessment from './Testimonials/TAndA';

import './content.css'
const Content = () => {
    return (
        <main className="main">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about/' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/resources' element={<Resources />} />
                <Route path='/more' element={<TestimonialsAndAssessment />} />
            </Routes>
        </main>
    )
}

export default Content