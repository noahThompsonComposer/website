import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../css/Navbar.css'

export default function Navbar() {
    const location = useLocation()
    const { pathname } = location

    return (
        <div className="nav">
            <div className="nav--title">
                <Link className="nav--title" to="/">
                    <h2 className="nav-h2">Noah Thompson</h2>
                </Link>
            </div>
            <div className="nav--links">
                <Link to='/works' className={pathname === '/works' ? 'nav--link active' : 'nav--link'}><h3 className="nav-h3">Works</h3></Link>
                <Link to="/about" className={pathname === '/about' ? 'nav--link active' : 'nav--link'}><h3 className="nav-h3">About</h3></Link>
            </div>
        </div>
    )
}