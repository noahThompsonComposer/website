import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../assets/components/Navbar'
import Footer from '../assets/components/Footer'
import works from '../assets/json/works.json'
import '../assets/css/Works.css'

export default function Works() {
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredWorks, setFilteredWorks] = useState(works)

    const handleSearchChange = (event) => {
        const query = event.target.value
        setSearchQuery(query)

        const filtered = Object.entries(works).filter(([workKey, workValue]) => {
            const title = workValue.title.toLowerCase()
            const instrumentation = workValue.instrumentation.toLowerCase()
            const year = workValue.year
            return title.includes(query.toLowerCase()) || instrumentation.includes(query.toLowerCase()) || year.includes(query)
        })

        setFilteredWorks(Object.fromEntries(filtered))
    }

    return (
        <div>
            <Navbar />
            <div className="content">
                <input 
                className="works-search"
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search works by Noah Thompson..."
                />
                {Object.entries(filteredWorks).map(([workKey, workValue]) => (
                    <div className="item">
                        <Link to={`/works/${workValue.routingOpus}`} className="link">
                            <h3>{workValue.title}</h3>
                            <p>{workValue.blurb}</p>
                            <p>Op. {workValue.opus}{workValue.number !== null && `, No. ${workValue.number}`}  |  {workValue.length}  |  {workValue.instrumentation}  |  {workValue.year}  |</p>
                        </Link>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}