import React from 'react'
import Logo from './LogoComponent'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerLeft'>
                <h2 id='git'>Get In Touch</h2>
                <div>
                    <p id='contact'>tuneinnmind@gmail.com <br />+91 89766 92422</p>
                </div>
                <div>

                </div>
                <Logo width={60} height={32} />
            </div>
            <div className='footerRight'>
                <h3 style={{fontSize: "2rem" , fontFamily: "Times New Roman', Times, serif", padding: "0", marginBottom: '0'}}>Address</h3>
                <p style={{fontSize: "1.3rem" , fontFamily: "Times New Roman', Times, serif"}}>Kidz care clinic, Shop no. 43<br />
                Gokul nagari 2, Opposite Gokul concorde<br />
                Thakur village, Kandivali East<br />
                Mumbai 400101</p>
            </div>
        </div>
    )
}

export default Footer