import React from 'react'
import { Link } from 'gatsby'
import Logo from "../assets/images/logo.png"

const BannerPriser = (props) => (
    <section id="banner" className="">
        <div className="inner">
            <header className="major">
                <h1 style={{opacity: "0"}}>Zaxxen, frisör i Osby</h1>
                <Link to="/">
                    <img src={Logo} alt="Vår logga" width="100%" height="auto" style={{filter: "invert()", position: "absolute", top: "-20px", maxWidth: "500px"}} ></img>
                </Link>
            </header>
            <div className="content">
                <ul className="actions">
                    <li><a href="https://www.bokadirekt.se/places/h%C3%A5ratelj%C3%A9-zaxxen-16138" className="button scrolly" target="_blank" rel="noopener noreferrer">BOKA TID</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default BannerPriser
