import React from "react";
import TextSection from "../Utils/TextComponent";
import { mapServiceText } from "./serviceDataMapper";



const ServiceLayout = ({ data, image }) => {
    return (
        <div className="singleService">
            {/* image */}
            <div className="serviceImage">
                <img src={image.image} alt={data.name} width={400} height={330} style={{ objectFit: 'cover' }} />
            </div>
            {/* heading */}
            <div className="serviceHeading">
                <h1><span>{data.name}</span></h1>
            </div>
            {/* textComponent */}
            <div className='innerText'>
                <TextSection textdata={mapServiceText(data)} isList={false} needStyle={false} customClass={"serviceSection"} isAdditonalData={data.sessionduration} />
            </div>
        </div>
    )
}

export default ServiceLayout