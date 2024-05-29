import React from 'react'

import './contact.css'

const Contact = () => {
    return (
        <div className="container contactContainer">
            <div className="row contactFormContainer">
                <div className='row formHeadings'>
                    <h1>Schedule a Free 15 minute Consultation</h1>
                    <p><span>Schedule a Free 15 minute Consultation with one of our skilled Therapists to discuss the best approach for yourself, receive answers to questions, and determine whether this setting is the right fit for you.</span>​</p>
                </div>
                <div className='row contactForm'>
                    <form>
                        <div className='row names'>
                            <div className='col-lg-6 col-xs-12 formFields'>
                                <label>
                                    First Name <sup>*</sup>
                                </label>
                                <input type='text' />
                            </div>
                            <div className='col-lg-6 col-xs-12 formFields'>
                                <label>
                                    Last Name <sup>*</sup>
                                </label>
                                <input type='text' />
                            </div>
                        </div>
                        <div className='row contactDet'>
                            <div className='col-lg-6 col-xs-12 formFields'>
                                <label>
                                    Phone Number <sup>*</sup>
                                </label>
                                <input type='text' />
                            </div>
                            <div className='col-lg-6 col-xs-12 formFields'>
                                <label>
                                    Email <sup>*</sup>
                                </label>
                                <input type='text' />
                            </div>
                        </div>
                        <div className='row message'>
                            <div className='col-lg-6 col-xs-12 formFields'>
                                <label>
                                    Write A Message <sup>*</sup>
                                </label>
                                <textarea />
                            </div>
                        </div>
                        <div className="row">
                            <div className='submit'>
                                <button><span>Submit</span></button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact