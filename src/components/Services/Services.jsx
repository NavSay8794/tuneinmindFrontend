import React, { useEffect, useState } from "react";
import { servicesData } from "../../constants";
import './services.css'
import ServiceLayout from "./ServiceLayout";
import childCouncelling from '../../assets/childcounseling.png'
import careerCouncelling from '../../assets/career.png'
import groupCouncelling from '../../assets/groupC.png'
import individualCouncelling from '../../assets/individualC.png'
import preMaritalCouncelling from '../../assets/premaritalC.png'
import workshops from '../../assets/trainings.png'

const Services = () => {
    const [services, setServices] = useState([])
    const [serviceIndex, setServiceIndex] = useState(0)

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

    useEffect(() => {
        setServices(servicesData)
    }, [])


    const layoutChangeHandler = (index) => {
        setServiceIndex(index)
        // setShowLayout(!showlayout)
    }

    return <section className="servicePage">
        <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between" , marginBottom: '20px'}}>
            {services.map((item, index) => {
                return <div className='serviceButton'>
                    <button onClick={()=>layoutChangeHandler(index)}><span>{item.name}</span></button>
                </div>
            })
            }
        </div>

       <ServiceLayout data={servicesData[serviceIndex]} showLayoutHandler={layoutChangeHandler} image={imageMapper[serviceIndex]} />
    </section>
}

export default Services