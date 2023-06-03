import React from 'react'
import { useParams } from 'react-router-dom'
import works from '../assets/data'
import Navbar from '../assets/components/Navbar'
import PieceNotFound from '../assets/components/PieceNotFound'
import Footer from '../assets/components/Footer'

export default function Download() {
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
            <p>This is the downloads page for Op. {piece.title}</p>
            {piece.parts && Object.entries(piece.parts).map(([partKey, partValue]) => (
                <a key={partKey} href={partValue.partUrl} download>
                    <button>{partValue.partTitle}</button>
                </a>
            ))}
            {piece.scores && Object.entries(piece.scores).map(([scoreKey, scoreValue]) => (
                <a key={scoreKey} href={scoreValue.scoreUrl} download>
                    <button>{scoreValue.scoreTitle}</button>
                </a>
            ))}
            {piece.altParts && Object.entries(piece.altParts).map(([altPartKey, altPartValue]) => (
                <a key={altPartKey} href={altPartValue.partUrl} download>
                    <button>{altPartValue.partTitle}</button>
                </a>
            ))}
            {piece.altScores && Object.entries(piece.altScores).map(([altScoreKey, altScoreValue]) => (
                <a key={altScoreKey} href={altScoreValue.scoreUrl} download>
                    <button>{altScoreValue.scoreTitle}</button>
                </a>
            ))}
            <Footer />
        </div>
    )
}