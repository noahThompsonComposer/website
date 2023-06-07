import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../assets/components/Navbar'
import Footer from '../assets/components/Footer'
import AnimateOnScroll from '../assets/components/AnimateOnScroll'
import bio from '../assets/json/bio.json'
import works from '../assets/json//works.json'
import info from '../assets/json/info.json'
import '../assets/css/About.css'

export default function About() {
    return (
        <div>
            <Navbar />
            <div className="about">
                <h1 className="about-main-title">About</h1>
                <hr className="about-hr-style about-hr"/>
                <nav>
                    <ul>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#commissions">Commissions</a></li>
                        <li><a href="#copyright">Copyright</a></li>
                        <li><a href="#bio">Biography</a></li>
                    </ul>
                </nav>
                <section id="contact" className="contact-section">
                    <h2>Contact</h2>
                    <p>For all purposes: <a href="mailto:noahjkthompsonmusic@gmail.com">noahjkthompsonmusic@gmail.com</a></p>
                    <p>If you perform one of my pieces, please let me know, I would love to come see the performance if possible!</p>
                </section>
                <hr className="about-hr"/>
                <section className="commissions" id="commissions">
                    <h2>Commissions</h2>
                    <p>{info.commissions.content}</p>
                    <ul>
                        {Object.entries(info.commissions.listItems).map(([itemKey, itemValue]) => (
                            <li>{itemValue}</li>
                        ))}
                    </ul>
                    <p>List of commissioned works:</p>
                    <ul>
                        {Object.entries(works).map(([workKey, workValue]) => 
                            workValue.isCommission ? <li key={workKey}><Link to={`/works/${workValue.routingOpus}`}>{workValue.title}, Op. {workValue.opus} ({workValue.year})</Link></li> : null
                        )}
                    </ul>
                </section>
                <hr className="about-hr"/>
                <section id="copyright">
                    <AnimateOnScroll className="bio-title-animation">
                        <h2>Copyright</h2>
                        <p>{info.copyright.content} <a href="https://creativecommons.org/licenses/by-sa/4.0/." target="_blank">the Creative Commons website.</a></p>
                    </AnimateOnScroll>
                </section>
                <hr className="about-hr"/>
                <section id="bio" className="bio">
                    <AnimateOnScroll animationClass="bio-title-animation">
                        <h2 className="bio-title">Biography</h2>
                        <AnimateOnScroll animationClass="about-hr-animation">
                            <hr className="about-hr-style about-hr"/>
                        </AnimateOnScroll>
                    </AnimateOnScroll>
                    {Object.entries(bio).map(([bioKey, bioValue]) => (
                        <AnimateOnScroll animationClass="bio-section-animation">
                            <div className="bio-section">
                                <h2>{bioValue.id}</h2>
                                <p>{bioValue.content}</p>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </section>
            </div>
            <Footer />
        </div>
    )
}