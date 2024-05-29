import React, { useEffect } from 'react'
import TextSection from '../Utils/TextComponent'
import { AboutData } from '../../constants'
import './about.css'

const About = () => {
    const [aboutData, setAboutData] = React.useState('')
    useEffect(() => {
        setAboutData(AboutData)
    }, [])

    return (
        <section className='container'>
            <section className='row'>
                <div className="col-lg-2"></div>
                <div className="col-lg-8 col-xs-12 aboutPage">
                    <div className="row ">
                        <div className='heading col-12'>
                            <h1>Our Vision</h1>
                        </div>
                        <div className='moto col-12'>
                            <p>
                                <span>"Normalize and accept seeking mental help and counselling, <br />
                                    making it accessible and affordable for people"</span>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-12'>
                        <TextSection textdata={aboutData} isList={false} needStyle={false} customClass={"aboutSection"} />
                    </div>
                    </div>
                </div>
                <div className="col-lg-2"></div>
            </section>
            {/* <section className='teamSection'>
                
            </section> */}
        </section>
    )
}

export default About