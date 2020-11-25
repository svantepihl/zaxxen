import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import Banner from '../components/Banner'

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
                    <div className="content" style={{display:'flex',justifyContent:'center',flexDirection:'column',marginLeft:'auto',marginRight:'auto', paddingBottom:'30px'}}>
                        <div className="inner" style={{display:'flex',justifyContent:'center',flexDirection:'column',margin:'0 auto 0 auto'}}>
                            <header className="major" style={{textAlign:'center', width:'100%'}}>
                                <h1>Priser</h1>
                            </header>
                            <p style={{textAlign:'center'}}>Nedanför kan du läsa om prisinformation för alla hår och skönhetsbehandlingar vi erbjuder. Boka tid för till exempel en klippning eller slingor gör man enklast på länken nedanför!</p>
                            <ul className="actions" style={{display:'flex',justifyContent:'center',flexDirection:'column',marginLeft:'auto',marginRight:'auto'}}>
                                <li><a href="https://www.bokadirekt.se/places/h%C3%A5ratelj%C3%A9-zaxxen-16138" className="button scrolly">BOKA TID</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
            <section id="one">
                <div className="inner" style={{width:'100%', minWidth:'100vw', height:'100%', minHeight:'100vh'}}>
                    <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',marginLeft:'0px',marginRight:'0px'}}>
                    <div style={{alignSelf:'start',minWidth:'392px'}}>
                            <header className="major">
                                <h2>Klippning</h2>
                            </header>
                            <p>Klipp: 490 :- </p>
                            <p>Klipp pensionär: 460:- </p>
                            <p>Klipp barn 0-6 år: 360:-</p>
                            <p>Klipp barn 7-12 år: 420:-</p>
                            <p>Klipp barn 13-15 år: 460:-</p>
                            <p>Luggklipp: 100:-</p>
                            <p>Maskinklipp över hela: 390:-</p>
                            <p>Tvätta och locka: 350:-</p>
                            <p>Tvätta och föna: 290:-</p>
                        </div>
                        <div style={{alignSelf:'start',minWidth:'392px'}}>
                            <header className="major">
                                <h2>Slingor</h2>
                            </header>
                            <p>Kort fr. 950:- m klipp fr. 1290:- </p>
                            <p>Mellan fr. 1250:- m klipp fr. 1600:- </p>
                            <p>Långt fr. 1450:- m klipp fr. 1800:-</p>

                            <header className="major">
                                <h2>Färg</h2>
                            </header>
                            <p>Kort fr. 800:- m klipp fr. 1190:- </p>
                            <p>Mellan fr. 1050:- m klipp fr. 1400:-</p>
                            <p>Långt fr. 1250:- m klipp fr. 1600:-</p>

                            <header className="major">
                                <h2>Avancerad färgning</h2>
                            </header>
                            <p> Ombre eller Balayage fr. 1800:- </p>
                        </div>
                        <div style={{alignSelf:'start',minWidth:'392px'}}>
                            <header className="major">
                                <h2>Permanent inkl. <br/>klipp</h2>
                            </header>
                            <p>Kort: 1490:- Pensionär: 1390:-</p>
                            <p>Mellan: 1690:-</p>
                            <p>Långt: 1890:-</p>
                            <header className="major">
                                <h2>Bryn & Fransar</h2>
                            </header>
                            <p>Plock: 100:- </p>
                            <p>Färg: 190:- </p>
                            <p>Färg fransar: 200:-</p>
                            <p>Bryn och fransar: 350:- </p>
                        </div>
                        <div style={{alignSelf:'start',minWidth:'392px'}}>
                            <header className="major">
                                <h2>Uppsättning</h2>
                            </header>
                            <p>Uppsättning: 1200:- </p>
                            <p>Lätt Uppsättning: 990:- </p>
                            <header className="major">
                                <h2>Hårförlängning</h2>
                            </header>
                            <p>Kontakta oss för gratis konsultation </p>
                            <header className="major">
                                <h2>Hårförtjockning</h2>
                            </header>
                            <p>Kontakta oss för gratis konsultation </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Orci maecenas</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Rhoncus magna</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sed nunc ligula</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
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