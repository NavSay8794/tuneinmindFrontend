import React from "react";

const Image = ({ imageSrc, width, height, classes }) =>{
    return (
        <div className={`imageSection ${classes}`}>
            <img src={imageSrc} alt="This is home" width={width} height={height} />
        </div>
    )
}

export default Image