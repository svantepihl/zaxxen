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
                    <p>
                        <label>Your Name: <input type="text" name="name" /></label>   
                    </p>
                    <p>
                        <label>Your Email: <input type="email" name="email" /></label>
                    </p>
                    <p>
                        <label>Your Role: <select name="role[]" multiple>
                        <option value="leader">Leader</option>
                        <option value="follower">Follower</option>
                        </select></label>
                    </p>
                    <p>
                        <label>Message: <textarea name="message"></textarea></label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
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
