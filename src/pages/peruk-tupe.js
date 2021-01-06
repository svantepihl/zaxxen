import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerPriser from '../components/BannerPriser'

import products from '../assets/images/products.jpg'
import hair from '../assets/images/hair.jpg'


const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Zaxxen</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerPriser />

        <div id="main">
            <section className="spotlights">
                <section style={{paddingTop:'3rem',paddingBottom:'1.5rem'}}>
                    <div className="content" style={{display:'flex',justifyContent:'center',flexDirection:'column',marginLeft:'auto',marginRight:'auto', paddingBottom:'30px'}}>
                        <div className="inner" style={{display:'flex',justifyContent:'center',flexDirection:'column',margin:'0 auto 0 auto'}}>
                            <header className="major" style={{textAlign:'center', width:'100%'}}>
                                <h1>Peruker & Hårersättning</h1>
                            </header>
                            <p style={{textAlign:'center'}}>Nedanför kan du läsa mer peruker och tupéer och vad vi kan hjälpa till med.....</p>
                            <ul className="actions" style={{display:'flex',justifyContent:'center',flexDirection:'column',marginLeft:'auto',marginRight:'auto'}}>
                                <li><a href="https://www.bokadirekt.se/places/h%C3%A5ratelj%C3%A9-zaxxen-16138" className="button scrolly">BOKA TID</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
            <section id="two" className="spotlights">
            <section>
            <iframe width="560" height="415" style={{maxWidth:'100%'}} src="https://www.youtube-nocookie.com/embed/Og423-iUPSI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Peruker</h3>
                            </header>
                            <p> 
                            Är du i behov av peruk på grund utav cellgiftsbehandling eller annan orsak? Jag (Maggan) finns här och tar hand om dig. I en avskild och trygg miljö med fantastiska peruker får du ett vackert och naturligt resultat utfört av utbildad peruktekniker. Vi säljer alla tillbehör och skötselprodukter till peruker.
                            </p>
                            <p>
                                Jag tar rekvisitioner från alla regioner. 
                            </p>
                            <p>
                                Vi är återförsäljare av <a href="https://www.christineheadwear.com/christine-lookbook-en/">turbaner från Christine</a>
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                <iframe width="560" height="415" style={{maxWidth:'100%'}} src="https://www.youtube-nocookie.com/embed/rIKLXJ6vLH0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="content" style={{}}>
                        <div className="inner">
                            <header className="major">
                                <h3>Hårersättning</h3>
                            </header>
                            <p> 
                                Är du tunnhårig eller lider av kala fläckar? Med moderna metoder så hjälper vi dig med hårersättning. 
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <Link to="/tjanster/" className="image">
                        <img src={products} alt="Bild på hårprodukter" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Våra tjänster & Produkter</h3>
                            </header>
                            <p>Läs mer om de andra tjänster vi erbjuder och vilka produkter vi arbetar med.</p>
                            <ul className="actions">
                                <li><Link to="/tjanster/" className="button">Läs mer</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
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

export default Landing