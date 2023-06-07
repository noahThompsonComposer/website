import React, { useEffect, useState } from 'react'
import Navbar from '../assets/components/Navbar'
import Footer from '../assets/components/Footer'
import AnimateOnScroll from '../assets/components/AnimateOnScroll'
import news from '../assets/news.json'
import '../assets/css/Home.css'

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="home">
                <div className="home-title-container">
                    <h1>Noah Thompson</h1>
                    <hr className="home-hr"/>
                    <h3>Composer</h3>
                </div>
                <iframe
                className="home-iframe" 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/videoseries?list=UULFT1VPF9nZQkOwQfPbFHVCYA" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
                />
                <AnimateOnScroll animationClass="home-news-animation">
                    <h2 className="what-is-new">What's new?</h2>
                    <AnimateOnScroll animationClass="home-hr-animation">
                        <hr className="home-hr"/>
                    </AnimateOnScroll>
                </AnimateOnScroll>
                <div className="home-news">
                    {Object.entries(news).map(([newsKey, newsValue]) => (
                        <AnimateOnScroll animationClass="home-news-animation">
                            <div className="news-item">
                                <a href={newsValue.imgLink} target="_blank"><img src={newsValue.imgUrl} className="news-img"/></a>
                                <div><span><b>{newsValue.date}</b></span></div>
                                <p>{newsValue.content}</p>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
            <Footer />
        </div>
    )
}