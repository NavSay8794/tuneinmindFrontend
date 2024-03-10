import React from 'react'
import { FaUserCircle } from "react-icons/fa";

const Login = () => {
    return (
        <div className='login'>
            <button onClick={()=>alert('this is clicked')}>
                <p>Log In</p>
                <div>
                    <FaUserCircle width={"20px"} color='rgba(162, 163, 233, 0.34)'/>
                </div>
            </button>
        </div>
    )
}

export default Login