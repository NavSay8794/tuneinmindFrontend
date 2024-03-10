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
            <div className='footerRight'>This is for maps</div>
        </div>
    )
}

export default Footer