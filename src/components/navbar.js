import React from 'react'
import './navbar.css'

const Navbar = ({title, icon}) =>{

    return(
        <nav className='bg-primary'>
            <div className = 'nav-wrapper'>
                <p>
                    <i className={icon} ></i>
                    {title}

                    <ul className="right">
                        <li>About</li>
                        <li>Contact Us</li>
                    </ul>
                </p>
            </div>
        </nav>
    )
}



export default Navbar
