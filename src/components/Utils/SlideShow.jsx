import React, {useEffect, useState} from 'react'
import childCouncelling from '../../assets/homeimages/img1.jpeg'
import careerCouncelling from '../../assets/homeimages/img2.jpeg'
import groupCouncelling from '../../assets/homeimages/img3.jpeg'
import individualCouncelling from '../../assets/homeimages/img4.jpeg'
import preMaritalCouncelling from '../../assets/homeimages/img7.jpeg'
import workshops from '../../assets/homeimages/img6.jpeg'

import './slides.css'

let slides = [
    {
        id: '1',
        image: individualCouncelling
    },
    {
        id: '2',
        image: childCouncelling
    },
    {
        id: '3',
        image: careerCouncelling
    },
    {
        id: '4',
        image: preMaritalCouncelling
    },
    {
        id: '5',
        image: groupCouncelling
    },
    {
        id: '6',
        image: workshops
    }
]

const SlideShow = () =>{

    const [index, setIndex] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setIndex(prevIndex => prevIndex === slides.length-1 ? 0: prevIndex + 1)
        }, 2500)

        return ()=>{}
    }, [index])
    return <section className="slideshow">
        <div className="slideshowSlider" style={{transform: `translate3d(${-index*100}%,0,0)`}}>
            {slides.map((item)=>{
                return <div className="slide" key={item.id}>
                    <img src={item.image} alt='imasges' className='image'/>
                </div>
            })}
        </div>
        <div className="slideshowDots">
            {
                slides.map((item, idx)=>{
                    return <div className={`slideshowDot ${index === idx ? "active": ''}`} key={item.id} ></div>
                })
            }
        </div>
    </section>
}

export default SlideShow