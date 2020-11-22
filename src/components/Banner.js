import React from 'react'
import Logo from "../assets/images/logo.png"

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1 style={{opacity: "0"}}>Zaxxen</h1>
                <img src={Logo} alt="Vår logga" width="500" height="auto" style={{filter: "invert()", position: "absolute", top: "-20px"}} ></img>
            </header>
            <div className="content">
                <ul className="actions">
                    <li><a href="https://www.bokadirekt.se/places/h%C3%A5ratelj%C3%A9-zaxxen-16138" className="button next scrolly">BOKA TID</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
