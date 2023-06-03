import React from 'react'
import '../css/Footer.css'
import youtube from '/img/youtube.png'
import instagram from '/img/instagram.png'
import imslp from '/img/imslp.png'

export default function Footer() {
    return (
        <footer className="footer">
            <a className="footer-link" href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">©Noah Thompson 2023, CC BY-SA 4.0</a>
            <div className="footer-images">
                <a className="footer--image-link" href="https://www.instagram.com/noah.thompson.composer/?utm_source=ig_embed&amp;utm_campaign=loading" target="_blank">
                    <img className="footer--image" src={ instagram } />
                </a>
                <a className="footer--image-link" href="https://www.youtube.com/@noahjkthompson" target="_blank">
                    <img className="footer--image" src={ youtube } />
                </a>
                <a className="footer--image-link" href="https://imslp.org/wiki/Category:Thompson,_Noah_JohnKarl" target="_blank">
                    <img className="footer--image" src={ imslp } />
                </a>
            </div>
        </footer>
    )
}