import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        // <div className='login'>
        //     <button onClick={()=>alert('this is clicked')}>
        //         
        //     </button>
        // </div>
        <Link to='/home' className='nav-link'>
            <div className="row">
                <div className="col-lg-8">
                    <p id='login'>Log In</p>
                </div>
                <div className="col-lg-4">
                    <FaUserCircle width={"25px"} color='rgba(162, 163, 233, 0.9)' />
                </div>
            </div>
        </Link>
    )
}

export default Login