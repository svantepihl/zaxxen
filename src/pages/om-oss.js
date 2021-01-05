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
import maggan from '../assets/images/staff/Maggan.png'
import frida from '../assets/images/staff/Frida.png'
import jenna from '../assets/images/staff/Jenna.png'
import malin from '../assets/images/staff/Malin.png'
import my from '../assets/images/staff/My.png'
import nea from '../assets/images/staff/Nea.png'

import kartan from '../assets/images/kartan.png'
import location from '../assets/images/locations.png'



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
                        <div className="inner" style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
                            <header className="major" style={{textAlign:'center', width:'70%',marginLeft:'auto',marginRight:'auto'}}>
                                <h1>Om oss</h1>
                            </header>
                            <div style={{display:'flex',justifyContent:'center',flexDirection:'row',flexWrap:'none'}}>
                            <video controls width="414px" height="414px" style={{maxWidth:'50%',margin:'1rem auto 1rem auto'}}>
                                <source src={mp4} type="video/mp4"/>
                                <source src={webm} type="video/webm"/>

                                <script>
                                    var video = document.currentScript.parentElement;
                                    video.volume = 0.1;
                                </script>
                            </video>
                            <div style={{textAlign:'left',marginRight:'.5rem',marginLeft:'.5rem',width:'50%'}}>
                                <p style={{fontSize:'1rem'}}>
                                Vi ser till att du får en upplevelse när du kommer till oss, vi vill ge kunden allt från en bra service till en härlig skön stund hos oss. Vi vill skapa något just för dig och vara kreativa när du gör ett besök hos oss. <br/>
                                Vi utvecklas och utbildar oss för att få bredare kunskap inom skönhet och vårt hantverk. Genom åren har vi möts av ett mode som förändras med stormsteg, då har vi tagit greppet om det och skapat det på vårt vis med vår erfarenhet. <br/>
                                Maggan startade Zaxxen för 20 år sedan och har många års erfarenhet inom yrket. Idag brinner vi för att hjälpa andra människor med sitt hår. Det gäller både peruker och människor som är i behov av till hårdelar och även tupeér för män. Idag är vi fler i vårt team och vi kompletterar varandra på alla möjliga plan. Vår ambition är att drivas framåt tillsammans med ambitionen om att varje dag är en ny utmaning där vi tillgodo ser kundens förväntningar och önskemål. Vi är nyfikna och lyhörda där vi tar ansvar och hittar lösningar. <br/>
                                Vi har träffat många kunder och vi är tacksamma för att vi får vara kreativa med er, låt oss skapa ditt JAG!
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section id="two" className="spotlights">
            <div className="grid-wrapper" style={{width:'100%',gridGap:'0',backgroundColor:'#725D68'}}>
                <div className="col-2" style={{margin:'0x'}}>
                    <img src={maggan} className="image" style={{borderRadius:'0px',objectFit:'cover',maxWidth:'414px',width:'100%'}}  alt="Bild på Maggan"/>
                    <div style={{margin:'1rem',overflowWrap:'break-word'}}>
                        <header className="major">
                            <h3>Maggan</h3>
                        </header>
                        <p>Chef på Zaxxen & Annexxet med många år i yrket. Frisör & peruk/hårersättningstekniker.</p>
                    </div>
                </div>
                <div className="col-2" style={{backgroundColor:'#65535C'}}>
                    <img src={frida} className="image" style={{borderRadius:'0px',objectFit:'cover',maxWidth:'414px',width:'100%'}}  alt="Bild på Frida"/>
                    <div style={{margin:'1rem',overflowWrap:'break-word'}}>
                        <header className="major">
                            <h3>Frida</h3>
                        </header>
                        <p>
                            Frisör som även gör lash lift. Ni hittar mig och oftast en av mina hundar inne på Annexxet. Älskar variationen i yrket.
                        </p>
                    </div>
                </div>
                <div className="col-2">
                    <img src={jenna} className="image" style={{borderRadius:'0px',objectFit:'cover', backgroundColor:'#F4AA7C',width:'414px',maxWidth:'100%'}}  alt="Bild på Jenna"/>
                    <div style={{margin:'1rem',overflowWrap:'break-word'}}>
                        <header className="major">
                            <h3>Jenna</h3>
                        </header>
                        <p>
                            Frisör och make up artist. Målmedveten och brinner för skapandet och kreativiteten!
                        </p>
                    </div>
                </div>
                <div className="col-2" style={{backgroundColor:'#65535C'}}>
                    <img src={malin} className="image" style={{borderRadius:'0px',objectFit:'cover', backgroundColor:'#F4AA7C',width:'414px',maxWidth:'100%'}}  alt="Bild på Malin"/>
                    <div style={{margin:'1rem',overflowWrap:'break-word'}}>
                        <header className="major">
                            <h3>Malin</h3>
                        </header>
                        <p>
                            Frisör som brinner för det lilla extra! Älskar att ta ut svängarna och sätter volymen på kartan.
                        </p>
                    </div>
                </div>
                <div className="col-2">
                    <img src={my} className="image" style={{borderRadius:'0px',objectFit:'cover', backgroundColor:'#F4AA7C',width:'414px',maxWidth:'100%'}}  alt="Bild på Nea"/>
                    <div style={{margin:'1rem',overflowWrap:'break-word'}}>
                        <header className="major">
                            <h3>My</h3>
                        </header>
                        <p>
                            Frisör. Kreativ, med en förkärlek för extensions och färgningar.
                        </p>
                    </div>
                </div>
                <div className="col-2" style={{backgroundColor:'#65535C'}}>
                    <img src={nea} className="image" style={{borderRadius:'0px',objectFit:'cover', backgroundColor:'#F4AA7C',width:'414px',maxWidth:'100%'}}  alt="Bild på Nea"/>
                    <div style={{margin:'1rem',overflowWrap:'break-word'}}>
                        <header className="major">
                            <h3>Nea</h3>
                        </header>
                        <p>
                            Vår superduktiga elev. Går 3:e året på Milnerskolan. Finns hos oss på fredagar fram till sommaren, därefter på heltid.
                        </p>
                    </div>
                </div>
            </div>
            </section>
            <section id="three" style={{backgroundColor:'#65535C'}}>
                         <div className="inner" style={{backgroundColor:'#65535C'}}>
                             <header className="major" style={{backgroundColor:'#65535C'}}>
                                 <h2>Salonger</h2>
                             </header>
                             <div style={{display:'flex',justifyContent:'center',flexDirection:'row', paddingBottom:'30px', width:'100%'}}>
                                <img src={kartan} className="image" style={{borderRadius:'0px',objectFit:'cover', backgroundColor:'#F4AA7C',width:'20%',maxWidth:'100%'}}  alt="Karta"/>
                                <img src={location} className="image" style={{borderRadius:'0px',objectFit:'cover', backgroundColor:'#F4AA7C',width:'20%',maxWidth:'100%'}}  alt="Karta"/>
                             </div>
                             <ul className="actions">
                                 <li><Link to="https://www.bokadirekt.se/places/h%C3%A5ratelj%C3%A9-zaxxen-16138" className="button next">BOKA</Link></li>
                             </ul>
                         </div>
            </section>
        </div>

    </Layout>
)

export default Landing