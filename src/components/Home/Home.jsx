import React from "react";
import Image from "../Utils/ImageComponent";
import TextSection from "../Utils/TextComponent";
import home1Img from '../../assets/home1.png'
import provideImg from '../../assets/provide.png'

import { list1Data, provideData } from '../../constants'
// import ImageSlider from "../Utils/ImageSlider";
import './home.css'
import SlideShow from "../Utils/SlideShow";

const Home = () => {
    return (
        <div className="container">
            {/* <section className="slider"> */}
            {/* <ImageSlider /> */}
            {/* </section> */}

            <section className="row m-b">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 col-xs-12">
                    <SlideShow />
                </div>
                <div className="col-lg-3"></div>
            </section>
            <section className="row">
                <section className="col-lg-6 col-xs-12">
                    <section className="firstSection">
                        <TextSection textdata={list1Data} isList={true} />
                    </section>
                </section>
                <section className="col-lg-6 col-xs-12">
                    <Image imageSrc={home1Img} width={"100%"} height={"26%"}  />
                </section>

            </section>
            <section className="row">
                <h1 style={{textAlign: "center"}}>What Do We Provide?</h1>
            </section>
            <section className="row">
                <section className="col-lg-6 col-xs-12">
                    <Image imageSrc={provideImg} width={"80%"} height={"20%"} />
                </section>
                <section className="col-lg-6 col-xs-12">
                    <TextSection textdata={provideData} isList={true} />
                </section>
            </section>
        </div>
    )
}

export default Home