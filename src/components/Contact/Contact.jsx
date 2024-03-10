import React from 'react'

import './contact.css'

const Contact = () => {
    return (
        <div className="contactContainer">
            <div className="contactFormContainer">
                <div className='formHeadings'>
                    <h1>Schedule a Free 15 minute Consultation</h1>
                    <p><span>Schedule a Free 15 minute Consultation with one of our skilled Therapists</span><br /><span> to discuss the best approach for yourself, receive answers to questions,</span><br /><span> and determine whether this setting is the right fit for you.</span>​</p>
                </div>
                <div className='contactForm'>
                    <form>
                        <div className='names'>
                            <div className='formFields'>
                                <label>
                                    First Name <sup>*</sup>
                                </label>
                                <input type='text' />
                            </div>
                            <div className='formFields'>
                                <label>
                                    Last Name <sup>*</sup>
                                </label>
                                <input type='text' />
                            </div>
                        </div>
                        <div className='contactDet'>
                            <div className='formFields'>
                                <label>
                                    Phone Number <sup>*</sup>
                                </label>
                                <input type='text' />
                            </div>
                            <div className='formFields'>
                                <label>
                                    Email <sup>*</sup>
                                </label>
                                <input type='text' />
                            </div>
                        </div>
                        <div className='message'>
                            <div className='formFields'>
                                <label>
                                    Write A Message <sup>*</sup>
                                </label>
                                <textarea />
                            </div>
                        </div>
                        <div className='submit'>
                            <button><span>Submit</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact