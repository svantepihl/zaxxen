import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href="https://www.facebook.com/HarateljeZaxxen/" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/zaxxen.osby/" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li style={{float:'right'}}>
                    <p style={{textAlign:'right',marginTop:'-1em'}}>
                        Betalning: <br/>
                        Kontant,
                        Kort,
                        Swish &
                        Klarna 
                    </p>
                </li>
            </ul>
        </div>
    </footer>
)

export default Footer
