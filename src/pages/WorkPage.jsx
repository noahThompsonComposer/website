import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../assets/components/Navbar'
import PieceNotFound from '../assets/components/PieceNotFound'
import Footer from '../assets/components/Footer'
import works from '../assets/data'
import '../assets/css/WorkPage.css'

export default function WorkPage() {
    const { opus } = useParams()
    const piece = works.find((work) => work.routingOpus === opus);

    if (!piece) {
        return (
            <div>
                <Navbar />
                <PieceNotFound />
                <Footer />
            </div>
        )
    }

    return (
        <div>
            <Navbar />
            <section className="workpage-header">
                <div className="workpage-header--title">
                    <h1 className="workpage-header--h1">{piece.title}</h1>
                    <p className="workpage-header--p">{piece.blurb}</p>
                    <p className="workpage-header--p">|  Op. {piece.opus}{piece.number !== null && `, No. ${piece.number}`}  |  {piece.length}  |  {piece.instrumentation}  |  {piece.year}  |</p>
                    <div className="workpage-buttons">
                        <Link to={`/works/${opus}/download`}><button className="workpage-button">Download Score and Parts</button></Link>
                        <Link to={piece.imslpUrl} target="_blank"><button className="workpage-button">Score and Parts on IMSLP</button></Link>
                    </div>
                </div>
                <iframe 
                width="560" 
                height="315" 
                src={`https://www.youtube.com/embed/${piece.youtubeId}`}
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
                />
            </section>
            <section className="workpage-programnotes">
                <div className="workpage-programnotes--description">
                    <p className="centered-text">— {piece.title} —</p>
                    <h1 className="centered-text">Program Notes</h1>
                    <p>{piece.programNote}</p>
                </div>
                <div className="workpage-programnotes--table">
                    <div className="workpage-programnotes--table-container">
                        <h3 className="workpage-programnotes--table-title">Composed</h3>
                        <p className="workpage-programnotes--table-content">{piece.year}</p>
                    </div>
                    <hr />
                    <div className="workpage-programnotes--table-container">
                        <h3 className="workpage-programnotes--table-title">Premiere</h3>
                        <p className="workpage-programnotes--table-content">{piece.premiere}</p>
                    </div>
                    <hr />
                    <div className="workpage-programnotes--table-container">
                        <h3 className="workpage-programnotes--table-title">Instrumentation</h3>
                        <ul className="workpage-programnotes--table-content">
                            {piece.instruments.map((instrument, index) => (
                                <li key={index}>{instrument}</li>
                            ))}
                        </ul>
                    </div>
                    {piece.altInstruments &&
                    <div>
                        <hr />
                        <div className="workpage-programnotes--table-container">
                            <div className="workpage-programnotes--table-title">
                                <h3 className="workpage-programnotes--table-title">Alternate Instrumentation</h3>
                                <p className="workpage-programnotes--table-title">{piece.altInfo}</p>
                            </div>
                            <ul className="workpage-programnotes--table-content">
                                {piece.altInstruments.map((altInstrument, index) => (
                                    <li key={index}>{altInstrument}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    }
                </div>
            </section>
            <Footer />
        </div>
    )
}