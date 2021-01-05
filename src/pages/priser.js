import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import products from '../assets/images/products.jpg'
import Banner from '../components/BannerPriser'

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
                <div className="inner">
                    <div className="grid-wrapper">
                        <div className="col-4">
                            <div className="table-wrapper">  
                                <table>
                                    <thead>
                                        <h3>Klippning</h3>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            
                                            <td style={{width:'90%'}}>Klipp</td>
                                            <td></td>
                                            <td>490:-</td>
                                        </tr>
                                        <tr>
                                            <td style={{width:'90%'}}>Klipp pensionär</td>
                                            <td></td>
                                            <td>460:-</td>
                                        </tr>
                                        <tr>
                                            <td style={{width:'90%'}}>Klipp barn 0-6 år</td>
                                            <td></td>
                                            <td>360:-</td>
                                        </tr>
                                        <tr>
                                            <td style={{width:'90%'}}>Klipp barn 7-12 år</td>
                                            <td></td>
                                            <td>420:-</td>
                                        </tr>
                                        <tr>
                                            <td style={{width:'90%'}}>Klipp barn 13-15 år</td>
                                            <td></td>
                                            <td>460:-</td>
                                        </tr>
                                        <tr>
                                            <td style={{width:'90%'}}>Luggklipp</td>
                                            <td></td>
                                            <td>100:-</td>
                                        </tr>
                                        <tr>
                                            <td style={{width:'90%'}}>Maskinklipp över hela</td>
                                            <td></td>
                                            <td>300:-</td>
                                        </tr>
                                        <tr>
                                            <td style={{width:'90%'}}>Tvätta och locka</td>
                                            <td></td>
                                            <td>350:-</td>
                                        </tr>
                                        <tr>
                                            <td style={{width:'90%'}}>Tvätta och föna</td>
                                            <td></td>
                                            <td>290:-</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="table-wrapper" style={{marginTop:'22px'}}>  
                                <table>
                                    <thead>
                                        <tr>
                                            <h3><strong>Permanent inkl. klipp</strong></h3>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{width:'90%'}}>Pensionär</td>
                                            <td></td>
                                            <td>1390:-</td>
                                        </tr>
                                        <tr>
                                            <td style={{width:'90%'}}>Kort</td>
                                            <td></td>
                                            <td>1490:-</td>
                                        </tr>
                                        <tr>
                                            <td style={{width:'90%'}}>Mellan</td>
                                            <td></td>
                                            <td>1690:-</td>
                                        </tr>
                                        <tr>
                                            <td style={{width:'90%'}}>Långt</td>
                                            <td></td>
                                            <td>1890:-</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="table-wrapper">  
                                <table>
                                    <thead>
                                        <tr> 
                                            <h3>Slingor</h3>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{minWidth:'80%'}}>Kort fr.</td>
                                            <td></td>
                                            <td>950:-</td>
                                        </tr>
                                        <tr>
                                            <td style={{width:'90%'}}>Kort m. klipp fr. </td>
                                            <td></td>
                                            <td>1290:-</td>
                                        </tr>
                                        <tr>
                                            <td style={{width:'90%'}}> Mellan fr.</td>
                                            <td></td>
                                            <td>1250:-</td>
                                        </tr>
                                        <tr>
                                            <td style={{width:'90%'}}>Mellan m. klipp fr.</td>
                                            <td></td>
                                            <td>1600:-</td>
                                        </tr>
                                        <tr>
                                            <td style={{width:'90%'}}>Långt fr. </td>
                                            <td></td>
                                            <td>1450:-</td>
                                        </tr>
                                        <tr>
                                            <td style={{width:'90%'}}>Långt m. klipp fr. </td>
                                            <td></td>
                                            <td>1800:-</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="table-wrapper">  
                                <table>
                                    <thead>
                                        <tr>
                                            <h3>Avancerad färgning</h3>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{width:'90%'}}>Ombre fr.</td>
                                            <td></td>
                                            <td>1800:-</td>
                                        </tr>
                                        <tr>
                                            <td style={{width:'90%'}}> Balayage fr.</td>
                                            <td></td>
                                            <td>1800:-</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="table-wrapper">  
                                <table>
                                    <thead>
                                        <tr>
                                            <h3>Bryn & fransar</h3>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{width:'90%'}}>Plock</td>
                                            <td></td>
                                            <td>100:-</td>
                                        </tr>
                                        <tr>
                                            <td style={{width:'90%'}}>Färg</td>
                                            <td></td>
                                            <td>190:-</td>
                                        </tr>
                                        <tr>
                                            <td style={{width:'90%'}}>Färg fransar</td>
                                            <td></td>
                                            <td>200:-</td>
                                        </tr>
                                        <tr>
                                            <td style={{width:'90%'}}>Bryn och fransar</td>
                                            <td></td>
                                            <td>350:-</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="table-wrapper">  
                                <table>
                                    <thead>
                                        <h3>Färg</h3>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{width:'90%'}}>Kort fr. </td>
                                            <td></td>
                                            <td>800:-</td>
                                        </tr>
                                        <tr>
                                            <td style={{width:'90%'}}>Kort m. klipp fr. </td>
                                            <td></td>
                                            <td>1190:-</td>
                                        </tr>
                                        <tr>
                                            <td style={{width:'90%'}}>Mellan fr. </td>
                                            <td></td>
                                            <td>1050:-</td>
                                        </tr>
                                        <tr>
                                            <td style={{width:'90%'}}>Mellan m. klipp fr. </td>
                                            <td></td>
                                            <td>1400:-</td>
                                        </tr>
                                        <tr>
                                            <td style={{width:'90%'}}>Långt fr. </td>
                                            <td></td>
                                            <td>1250:-</td>
                                        </tr>
                                        <tr>
                                            <td style={{width:'90%'}}>Långt m. klipp fr. </td>
                                            <td></td>
                                            <td>1600:-</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="table-wrapper">  
                                <table>
                                    <thead>
                                        <tr>
                                            <h3>Uppsättning</h3>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{width:'90%'}}>Uppsättning fr.</td>
                                            <td></td>
                                            <td>1200:-</td>
                                        </tr>
                                        <tr>
                                            <td style={{width:'90%'}}> Lätt uppsättning fr.</td>
                                            <td></td>
                                            <td>990:-</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="table-wrapper">  
                                <table>
                                    <thead>
                                        <tr>
                                            <h3>Lashlift</h3>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{width:'90%'}}>Lashlift</td>
                                            <td></td>
                                            <td>600:-</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="table-wrapper" style={{marginTop:'-1px'}}>  
                                <table>
                                    <thead>
                                        <tr>
                                            <h3>Hårförlängning & Hårförtjockning</h3>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{width:'90%'}}>Kontakta oss för gratis konsultation</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
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
        </div>

    </Layout>
)

export default Landing