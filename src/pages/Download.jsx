import React from 'react';
import { useParams } from 'react-router-dom';
import works from '../assets/json/works.json';
import Navbar from '../assets/components/Navbar';
import PieceNotFound from '../assets/components/PieceNotFound';
import Footer from '../assets/components/Footer';
import '../assets/css/Download.css';

export default function Download() {
    const { opus } = useParams();
    const piece = works.find((work) => work.routingOpus === opus);

    if (!piece) {
        return (
            <div>
                <Navbar />
                <PieceNotFound />
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <p className="download-p">— {piece.title} —</p>
            {piece.parts && (
                <React.Fragment>
                    <h2 className="download-h2">Scores and Parts</h2>
                    <p className="download-p">Parts</p>
                    <div className="parts">
                        {Object.entries(piece.parts).map(([partKey, partValue]) => (
                            <a key={partKey} href={partValue.partUrl} download>
                                <button className="download-button">{partValue.partTitle}</button>
                            </a>
                        ))}
                    </div>
                </React.Fragment>
            )}
            {piece.scores && (
                <React.Fragment>
                    <p className="download-p">Scores</p>
                    <div className="scores">
                        {Object.entries(piece.scores).map(([scoreKey, scoreValue]) => (
                            <a key={scoreKey} href={scoreValue.scoreUrl} download>
                                <button className="download-button">{scoreValue.scoreTitle}</button>
                            </a>
                        ))}
                    </div>
                </React.Fragment>
            )}
            {piece.altParts && (
                <React.Fragment>
                    <h2 className="download-h2">Alternate Edition</h2>
                    <p className="download-p">Parts</p>
                    <div className="alt-parts">
                        {Object.entries(piece.altParts).map(([altPartKey, altPartValue]) => (
                            <a key={altPartKey} href={altPartValue.partUrl} download>
                                <button className="download-button">{altPartValue.partTitle}</button>
                            </a>
                        ))}
                    </div>
                </React.Fragment>
            )}
            {piece.altScores && (
                <React.Fragment>
                    <p className="download-p">Scores</p>
                    <div className="alt-scores">
                        {Object.entries(piece.altScores).map(([altScoreKey, altScoreValue]) => (
                            <a key={altScoreKey} href={altScoreValue.scoreUrl} download>
                                <button className="download-button">{altScoreValue.scoreTitle}</button>
                            </a>
                        ))}
                    </div>
                </React.Fragment>
            )}
            <Footer />
        </div>
    );
}
