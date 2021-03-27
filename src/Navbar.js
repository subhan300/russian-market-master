import React, { useEffect, useState } from 'react'
import './Navbar.css'

import logo from './IMAGES/zhAG7DczoD.png'

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import FullscreenIcon from '@material-ui/icons/Fullscreen';


function Navbar() {

    const [show, handleShow] = useState(true);

    const transitionNavbar= () => {
        if (window.scrollY > 40) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll",transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar); 
    }, [])


    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="logo"><img src={logo} /></div>
            <div className="menu__links">
                <span className="links d-none"><MailOutlineIcon/></span>
                <span className="links d-none"><NotificationsNoneIcon/></span>
                <span className="links"><ShoppingCartIcon/></span>
                <span className="links"><LocalMallIcon/></span>
                <span className="links d-none"><ColorLensIcon/></span>
                <span className="links d-none"><FullscreenIcon/></span>
                <span className="price">$0</span>
            </div>
        </div>
    )
}

export default Navbar
