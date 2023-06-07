import React, { useState, useEffect } from 'react'

/**
 * Makes item animate on scroll. animationClass is the starting class, and the 'animate' class
 * is appended to that when the element is in view
 * @param {class} animationClass
 * @param {content} children
 */

export default function ScrollAnimation({ children, animationClass }) {
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector(`.${animationClass}`)
            const position = element.getBoundingClientRect().top

            if (position < window.innerHeight) {
                setAnimate(true)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [animationClass])

    return (
        <div
        className={`${animationClass} ${animate ? 'animate' : ''}`}>
            {children}
        </div>
    )
}