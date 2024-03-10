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
        <section className='entireAbout'>
            <section className='aboutPage'>
                <div className='heading'>
                    <h1>Our Vision</h1>
                </div>
                <div className='moto'>
                    <p>
                        <span>"Normalize and accept seeking mental help and counselling, <br />
                            making it accessible and affordable for people"</span>
                    </p>
                </div>
                <div className='innerText'>
                    <TextSection textdata={aboutData} isList={false} needStyle={false} customClass={"aboutSection"} />
                </div>
            </section>
            {/* <section className='teamSection'>
                
            </section> */}
        </section>
    )
}

export default About