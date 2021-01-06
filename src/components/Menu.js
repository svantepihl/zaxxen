import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Hem</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/priser">Priser</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/tjanster">Tjänster</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/peruk-harersattning">Peruker & Hårersättning</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/om-oss">Om oss</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="https://www.bokadirekt.se/places/h%C3%A5ratelj%C3%A9-zaxxen-16138" className="button special fit">BOKA</a></li>
            </ul>
            <ul className="icons">
                <li><a href="https://www.facebook.com/HarateljeZaxxen/" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/zaxxen.osby/" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
