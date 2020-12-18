import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import products from '../assets/images/products.jpg'
import hair from '../assets/images/hair.jpg'
import Banner from '../components/BannerPriser'
import mp4 from '../assets/video/om-oss.mp4'
import webm from '../assets/video/om-oss.webm'

// STAFF
import maggan from '../assets/images/staff/maggan.png'
import frida from '../assets/images/staff/frida.png'
import jenna from '../assets/images/staff/jenna.png'
import malin from '../assets/images/staff/malin.png'
import my from '../assets/images/staff/my.png'
import nea from '../assets/images/staff/nea.png'



const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Zaxxen - Priser</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <Banner />

        <div id="main">
        <section className="spotlights">
                <section>
                    <div className="content" style={{display:'flex',justifyContent:'center',flexDirection:'column',marginLeft:'auto',marginRight:'auto', paddingBottom:'30px', width:'100vw'}}>
                        <div className="inner" style={{display:'flex',justifyContent:'center',flexDirection:'column',margin:'0 auto 0 auto'}}>
                            <header className="major" style={{textAlign:'center', width:'70%',marginLeft:'auto',marginRight:'auto'}}>
                                <h1>Om oss</h1>
                            </header>
                            <div style={{textAlign:'center',marginRight:'auto',marginLeft:'auto'}}>
                                <h3>
                                Vi ser till att du får en upplevelse när du kommer till oss, vi vill ge kunden allt från en bra service till en härlig skön stund hos oss. Vi vill skapa något just för dig och vara kreativa när du gör ett besök hos oss. <br/>
                                Vi utvecklas och utbildar oss för att få bredare kunskap inom skönhet och vårt hantverk. Genom åren har vi möts av ett mode som förändras med stormsteg, då har vi tagit greppet om det och skapat det på vårt vis med vår erfarenhet. <br/>
                                Maggan startade Zaxxen för 20 år sedan och har många års erfarenhet inom yrket. Idag brinner vi för att hjälpa andra människor med sitt hår. Det gäller både peruker och människor som är i behov av till hårdelar och även tupeér för män. Idag är vi fler i vårt team och vi kompletterar varandra på alla möjliga plan. Vår ambition är att drivas framåt tillsammans med ambitionen om att varje dag är en ny utmaning där vi tillgodo ser kundens förväntningar och önskemål. Vi är nyfikna och lyhörda där vi tar ansvar och hittar lösningar. <br/>
                                Vi har träffat många kunder och vi är tacksamma för att vi får vara kreativa med er, låt oss skapa ditt JAG!
                                </h3>
                            </div>
                            <video controls width="414px" style={{margin:'1rem auto 1rem auto', maxWidth:'100%'}}>
                                <source src={mp4} type="video/mp4"/>
                                <source src={webm} type="video/webm"/>

                                <script>
                                    var video = document.currentScript.parentElement;
                                    video.volume = 0.1;
                                </script>
                            </video>
                            <ul className="actions" style={{display:'flex',justifyContent:'center',flexDirection:'column',marginLeft:'auto',marginRight:'auto'}}>
                                <li><a href="https://www.bokadirekt.se/places/h%C3%A5ratelj%C3%A9-zaxxen-16138" className="button scrolly">BOKA TID</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
            <section id="two" className="spotlights">
            <section style={{backgroundColor:'#F4AA7C'}}>
                    <img src={maggan} className="image" style={{borderRadius:'0px',objectFit:'cover', backgroundColor:'#F4AA7C',maxWidth:'414px',width:'100%'}}  alt="Bild på Maggan"/>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Maggan</h3>
                            </header>
                            <p> 
                                Här ska vi skriva något om Maggan
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <img src={frida} className="image" style={{borderRadius:'0px',objectFit:'cover', backgroundColor:'#F4AA7C',maxWidth:'414px',width:'100%'}}  alt="Bild på Frida"/>
                    <div className="content" style={{}}>
                        <div className="inner">
                            <header className="major">
                                <h3>Frida</h3>
                            </header>
                            <p> 
                                Här ska vi skriva något om Frida
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={jenna} className="image" style={{borderRadius:'0px',objectFit:'cover', backgroundColor:'#F4AA7C',width:'414px',maxWidth:'100%'}}  alt="Bild på Jenna"/>
                    <div className="content" style={{}}>
                        <div className="inner">
                            <header className="major">
                                <h3>Jenna</h3>
                            </header>
                            <p> 
                                Här ska vi skriva något om Jenna
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={malin} className="image" style={{borderRadius:'0px',objectFit:'cover', backgroundColor:'#F4AA7C',width:'414px',maxWidth:'100%'}}  alt="Bild på Malin"/>
                    <div className="content" style={{}}>
                        <div className="inner">
                            <header className="major">
                                <h3>Malin</h3>
                            </header>
                            <p> 
                                Här ska vi skriva något om Malin
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={nea} className="image" style={{borderRadius:'0px',objectFit:'cover', backgroundColor:'#F4AA7C',width:'414px',maxWidth:'100%'}}  alt="Bild på Nea"/>
                    <div className="content" style={{}}>
                        <div className="inner">
                            <header className="major">
                                <h3>Nea</h3>
                            </header>
                            <p> 
                                Här ska vi skriva något om Nea
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={my} className="image" style={{borderRadius:'0px',objectFit:'cover', backgroundColor:'#F4AA7C',width:'414px',maxWidth:'100%'}}  alt="Bild på Nea"/>
                    <div className="content" style={{}}>
                        <div className="inner">
                            <header className="major">
                                <h3>My</h3>
                            </header>
                            <p> 
                                Här ska vi skriva något om My
                            </p>
                        </div>
                    </div>
                </section>
            </section>
            <section id="two" className="spotlights">
                <section style={{backgroundColor:'#F4AA7C'}}>
                    <Link to="/tjanster/" className="image">
                        <img src={products} alt="Bild på hårprodukter" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Våra tjänster & Produkter</h3>
                            </header>
                            <p>Läs mer om vilka tjänster vi erbjuder och vilka produkter vi arbetar med.</p>
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