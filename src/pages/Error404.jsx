import React from 'react'
import Navbar from '../assets/components/Navbar'
import Footer from '../assets/components/Footer'

export default function Error404() {
    return (
        <div>
            <Navbar />
            <div className="not-found">
                <h2>Error 404</h2>
                <h3>Page not found.</h3>
            </div>
            <Footer />
        </div>
    )
}