import React from "react";
import logo from '../../assets/logo.png'

const Logo = ({ width = 110, height = 55 }) => {
    return (
        <div className="logoContainer">
            <div className="logo">
                <img src={logo} alt="Tune In Mind" width={width} height={height} />
            </div>
            <div className="tagline">
                <p>
                    <span style={{ letterSpacing: "0.05rem" }}>Mental Health Care</span>
                </p>
            </div>
        </div>
    )
}

export default Logo