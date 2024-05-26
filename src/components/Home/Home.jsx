import React from "react";
import Image from "../Utils/ImageComponent";
import TextSection from "../Utils/TextComponent";
import home1Img from '../../assets/home1.png'
import provideImg from '../../assets/provide.png'

import {list1Data, provideData} from '../../constants'
// import ImageSlider from "../Utils/ImageSlider";
import './home.css'
import SlideShow from "../Utils/SlideShow";

const Home = () =>{
    return(
        <div className="homeSection">
            {/* <section className="slider"> */}
                {/* <ImageSlider /> */}
                <SlideShow />
            {/* </section> */}
            <section className="firstSection">
                <TextSection textdata={list1Data} isList={true}/>
                <Image imageSrc={home1Img} width={430} height={265} classes= "left-margin" />
            </section>
            <section className="midSection">
                <h1>What Do We Provide?</h1>
            </section>
            <section className="secondSection">
                <Image imageSrc={provideImg} width={300} height={190} classes= "right-margin align-right"/>
                <TextSection textdata={provideData} isList={true}/>
            </section>
        </div>
    )
}

export default Home