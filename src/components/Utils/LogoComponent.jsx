import React from "react";
import logo from '../../assets/logo.png'

const Logo = ({ width = 130, height = 68 }) => {
    return (
        <div className="logoContainer">
            <div className="logo">
                <img src={logo} alt="Tune In Mind" width={width} height={height} />
            </div>
            <div className="tagline">
                <h2>
                    <span style={{ letterSpacing: "0.05rem" }}>Mental Health Care</span>
                </h2>
            </div>
        </div>
    )
}

export default Logo