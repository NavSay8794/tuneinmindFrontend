import React from "react";
import { testimonials } from '../../constants'

import './tanda.css'
import TextSection from "../Utils/TextComponent";

const TestimonialsAndAssessment = () => {
    console.log(testimonials)
    return <section className="testimonialsPage">
        <div className="testHeading">
            <h1><span>{'Testimonial'.toUpperCase()}</span></h1>
        </div>
        <section className="testimonials">
            <TextSection textdata={testimonials[1]["dwiti"][0]} isList={false} needStyle={false} customClass={"testimonialsSection"} />
        </section>
        <div style={{ height: "8px" }}></div>
        <section className="LMAY">
            <section className="innerLmay">
                <div className="lmayheading">
                    <h1>
                        <span>Learn More About Yourself</span>
                    </h1>
                </div>
                <div className="links">
                    <div className='angerM'>
                        <a href="https://5lovelanguages.com/quizzes/anger-assessment" target="_blank" rel="noreferrer noopener"><span>Anger Management</span></a>
                    </div>
                    <div className='apologyL'>
                        <a href="https://5lovelanguages.com/quizzes/apology-language" target="_blank" rel="noreferrer noopener"><span>Apology Language</span></a>
                    </div>
                    <div className='loveL'>
                        <a href="https://5lovelanguages.com/quizzes/love-language" target="_blank" rel="noreferrer noopener"><span>Love Language</span></a>
                    </div>
                </div>
            </section>
        </section>
    </section>
}

export default TestimonialsAndAssessment