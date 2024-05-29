import React from "react";
import TextSection from "../Utils/TextComponent";
import { mapServiceText } from "./serviceDataMapper";



const ServiceLayout = ({ data, image }) => {
    return (
        <div className="row singleService">
            {/* image */}
            <div className="row">
                <div className="col-lg-3"></div>
                .<div className="col-lg-6 col-xs-12 serviceImage">
                    <img src={image.image} alt={data.name} width={"100%"} height={280} style={{ objectFit: 'cover' }} />
                </div>
                <div className="col-lg-3"></div>
            </div>
            {/* heading */}
            <div className="serviceHeading">
                <h1><span>{data.name}</span></h1>
            </div>
            {/* textComponent */}
            <div className="col-12">
                <div className='innerText'>
                    <TextSection textdata={mapServiceText(data)} isList={false} needStyle={false} customClass={"serviceSection"} isAdditonalData={data.sessionduration} />
                </div>
            </div>
        </div>
    )
}

export default ServiceLayout