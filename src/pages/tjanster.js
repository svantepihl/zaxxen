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
                                <h1>Tjänster & Produkter</h1>
                            </header>
                            <p style={{textAlign:'center'}}>Nedanför kan du läsa om alla tjänster vi erbjuder och produkter vi använder. Boka tid gör man enklast på länken nedanför!</p>
                            <ul className="actions" style={{display:'flex',justifyContent:'center',flexDirection:'column',marginLeft:'auto',marginRight:'auto'}}>
                                <li><a href="https://www.bokadirekt.se/places/h%C3%A5ratelj%C3%A9-zaxxen-16138" className="button scrolly">BOKA TID</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>

            <div className="inner">
                <div className="grid-wrapper">
                    <div className="col-4">
                        <header className="major">
                            <h3>Allt inom hår</h3>
                        </header>
                        <p>Vi gör alla behandlingar, klipper, färgar, slingar, balayage, ombre, osv.</p>
                    </div>
                    <div className="col-4">
                    <header className="major">
                            <h3>Lashlift</h3>
                        </header>
                        <p>Lashlift - få naturligt böjda fransar i upp till 3 månader! Rekommenderas att göras om var 6e vecka för bästa resultat. Fransarna böjs och färgas för ett naturligt resultat. Detta gör att de ser längre och fylligare ut. Inkluderar även keratinbehandling.</p>
                    </div>
                    <div className="col-4">
                    <header className="major">
                            <h3>Hårförlängning/Hårförtjockning</h3>
                        </header>
                        <p>Skapa volym och ge dig själv en naturlig look med hårförlängning/hårförtjockning. Vi arbetar med märken så som: Hairtalk, Simply natural, Mago.</p>
                    </div>
                    <div className="col-4">
                        <header className="major">
                            <h3>Peruker</h3>
                        </header>
                        <p>Är du i behov av peruk på grund utav cellgiftsbehandling eller annan orsak? I en avskild och trygg miljö med fantastiska peruker får du ett vackert och naturligt resultat utfört av utbildad peruktekniker. Vi säljer alla tillbehör och skötselprodukter till peruker.
                        </p>
                    </div>
                    <div className="col-4">
                    <header className="major">
                            <h3>Hårersättning</h3>
                        </header>
                        <p>Är du tunnhårig eller lider av kala fläckar? Med moderna metoder så hjälper vi dig med hårersättning.</p>
                    </div>
                    <div className="col-4">
                    <header className="major">
                            <h3>Hårbottenanalys</h3>
                        </header>
                        <p>Gör en analys av hårbottens och hårsäckarnas skick med hjälp av en hårbottenanalys med mikrokamera. Med hjälp av vår analys kan vi förebygga och behandla håravfall och klåda.</p>
                    </div>
                </div>
                
            </div>

            <section id="two" className="spotlights">

                <section>
                    <img src={products} className="image" style={{borderRadius:'0px',objectFit:'cover', backgroundColor:'#F4AA7C'}}  alt="Bild på hårprodukter"/>
                    <div className="content" style={{}}>
                        <div className="inner">
                            <header className="major">
                                <h3>Produkter</h3>
                            </header>
                            <p> 
                                Här ska vi skriva något om produkterna <br/>
                                Maria Nila, Keune, Goldwell, Grazette, ICON, Hjärtligt, Moroccan, Lanza, Olaplex
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing