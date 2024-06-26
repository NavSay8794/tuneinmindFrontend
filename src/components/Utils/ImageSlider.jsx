import React, { useState } from 'react';
import childCouncelling from '../../assets/homeimages/img1.jpeg'
import careerCouncelling from '../../assets/homeimages/img2.jpeg'
import groupCouncelling from '../../assets/homeimages/img3.jpeg'
import individualCouncelling from '../../assets/homeimages/img4.jpeg'
import preMaritalCouncelling from '../../assets/homeimages/img7.jpeg'
import workshops from '../../assets/homeimages/img6.jpeg'

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

let imageMapper = [
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

const ImageSlider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const length = imageMapper.length

    const nextSlide = () => {
        console.log('next')
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    }

    const prevSlide = () => {
        console.log('prev')
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
    }


    return (
        <>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {
                imageMapper.map((image, index) => {
                    return (
                        <div
                            className={index === currentSlide ? 'slide-active' : 'slide'}
                            key={index}
                        >
                            {index === currentSlide && <img src={image.image} alt='workshops' className='image' />}
                        </div>
                    )
                })
            }
        </>
    )
}

export default ImageSlider