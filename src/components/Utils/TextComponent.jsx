import React from "react";
import ListComp from "./ListComponent";

const TextSection = ({textdata, isList, needStyle = true, customClass, isAdditonalData =null}) =>{
    return (
        <section className={`${needStyle ? "textSection": customClass}`}>
            {
                isList ?
                 <ListComp data={textdata} />
                 : 
                <p>{textdata}</p>
                
            }
            {
                isAdditonalData && isAdditonalData !=='' ? <p className="addData"><span>{isAdditonalData}</span></p>: ''
            }
        </section>
    )
}

export default TextSection