import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logoRick from '../assets/img/logo.png'

const Nav = () => {
    const [res, setRes] = useState(false)
    const responsive = (e)=>{
        let nav = document.querySelector('.ul')
        if(res === false && nav && window.screen.width <= 710 ){
            nav.style.transform="translateX(0%)"
            setRes(true)
        }
        if(res === true && nav && window.screen.width <= 710 ){
            nav.style.transform="translateX(120%)"
            setRes(false)
        }
    }
return (
    <div className = 'cont-nav'>
        <nav>
            <img src={logoRick} alt="logo"/>
            <button onClick={responsive} className="menu"><i className="fas fa-align-left"></i></button>
            <ul className="ul">
                <li><Link onClick={responsive} to="/">Inicio</Link></li>
                <li><Link onClick={responsive} to="/favoritos">Favoritos</Link></li>
                <li><Link onClick={responsive} to="/search">Search</Link></li>
            </ul>
        </nav>
    </div>
 )
}

export default Nav
