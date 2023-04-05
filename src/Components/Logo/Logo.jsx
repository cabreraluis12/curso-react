import React from 'react'
import { Link } from 'react-router-dom'



const Logo = () => {
    return (
    <div>
        <Link to="/">
        <img className='logo' src="https://res.cloudinary.com/de578jksm/image/upload/v1677013154/logo_snbjnx.png" alt="logo" style={{width:"140px", height:"100px"}} />
        </Link>
    </div>
    )
}

export default Logo