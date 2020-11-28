import React from 'react'

/*
<form name="contact" method="POST" data-netlify="true">
    <div className="field half first">
        <>Namn</>
        <input type="text" name="name" id="name" />
    </div>
    <div className="field half">
        <label>E-post</label>
        <input type="text" name="email" id="email" />
    </div>
    <div className="field">
        <label htmlFor="message">Meddelande</label>
        <textarea name="message" id="message" rows="6"></textarea>
    </div>
    <ul className="actions">
        <li>
            <button type="submit" className="special" >
                SKICKA MEDDELANDE
            </button>
        </li>
    </ul>
</form>
*/

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
            <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <div className="field half first">
                    <>Namn</>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                    <label>E-post</label>
                    <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                    <label htmlFor="message">Meddelande</label>
                    <textarea name="message" id="message" rows="6"></textarea>
                </div>
                <ul className="actions">
                    <li>
                        <button type="submit" className="special" >
                            SKICKA MEDDELANDE
                        </button>
                    </li>
                </ul>
            </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>E-post</h3>
                        <a href="#">info@zaxxen.se</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Telefon</h3>
                        <span>0479-12222</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <a href="https://www.google.com/maps/place/Zaxxen/@56.3814227,13.9942388,15z/data=!4m5!3m4!1s0x0:0x385843ae6cc395ed!8m2!3d56.3814227!4d13.9942388">
                        <span>Klockaregatan 1C,<br />
                        283 31, Osby<br />
                        </span>
                        </a>
                        <p>
                        måndag-fredag 9-18
                        </p>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
