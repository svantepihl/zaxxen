import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import tjanster from '../assets/images/tjanster.png'
import wigs from '../assets/images/wigs.png'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import alla from  '../assets/images/staff/alla-alt.png'


class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Zaxxen"
                    meta={[
                        { name: 'description', content: 'En charmig frisörssalong mitt i centrala Osby. Vi erbjuder allt inom hår & makeup.' },
                        { name: 'keywords', content: 'Osby,Skåne, Frisör, Hairdresser, Toupée ,Tupé, Wig, Peruk, Makeup, Hair, Bröllop, Styling, Norra Skåne' },
                    ]}
                >
                </Helmet>

                <Banner />
                
                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Priser</h3>
                                <p>Läs mer</p>
                            </header>
                            <Link to="/priser/" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${tjanster})`}}>
                            <header className="major">
                                <h3>Tjänster</h3>
                                <p>Läs mer</p>
                            </header>
                            <Link to="/tjanster/" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${wigs})`}}>
                            <header className="major">
                                <h3>Peruker & Tupeér</h3>
                                <p>Läs mer</p>
                            </header>
                            <Link to="/peruk-tupe/" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${alla})`}}>
                            <img src={alla} className="image" style={{visibility:'hidden'}}  alt="Bild på Malin"/>
                            <header className="major">
                                <h3>Om Oss</h3>
                                <p>Läs mer</p>
                            </header>
                            <Link to="/om-oss/" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="three">
                         <div className="inner">
                             <header className="major">
                                 <h2>Om oss</h2>
                             </header>
                             <p>Vi ser till att du får en upplevelse när du kommer till oss, vi vill ge kunden allt från en bra service till en härlig skön stund hos oss. Vi vill skapa något just för dig och vara kreativa när du gör ett besök hos oss.</p>
                             <p>Vi utvecklas och utbildar oss för att få bredare kunskap inom skönhet och vårt hantverk. Genom åren har vi möts av ett mode som förändras med stormsteg, då har vi tagit greppet om det och skapat det på vårt vis med vår erfarenhet.</p>
                             <p>Maggan startade Zaxxen för 20 år sedan och har många års erfarenhet inom yrket. Idag brinner hon för att hjälpa andra människor med sitt hår. Det gäller både peruker och människor som är i behov av till hårdelar och även tupeér för män. Idag är vi fler i vårt team och vi kompletterar varandra på alla möjliga plan. Vår ambition är att drivas framåt tillsammans med ambitionen om att varje dag är en ny utmaning där vi tillgodo ser kundens förväntningar och önskemål. Vi är nyfikna och lyhörda där vi tar ansvar och hittar lösningar. </p>
                             <p>Vi har träffat många kunder och vi är tacksamma för att vi får vara kreativa med er, låt oss skapa ditt JAG!</p>
                             <ul className="actions">
                                 <li><Link to="https://www.bokadirekt.se/places/h%C3%A5ratelj%C3%A9-zaxxen-16138" className="button next">BOKA</Link></li>
                             </ul>
                         </div>
                     </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex