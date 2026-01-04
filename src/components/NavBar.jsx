import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const NavBar = () => {

    useGSAP(() => {
        gsap.fromTo('.logo span',
            {
                opacity: 0
            },
            {
                opacity: 1,
                stagger: 0.1,
                duration: 0.5,
                ease: 'power2.inOut'
            }
        );
    })

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <a href="#hero" className="logo">
                    <span>K</span>
                    <span>h</span>
                    <span>u</span>
                    <span>r</span>
                    <span>r</span>
                    <span>a</span>
                    <span>m</span>
                    <span> | </span>
                    <span>D</span>
                    <span>E</span>
                    <span>V</span>
                    <span>S</span>
                </a>
                <nav className='desktop'>
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className='group'>
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className='underline' />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href="#contact" className='contact-btn group'>
                    <div className='inner'>
                        <span>Contact me</span>
                    </div>
                </a>
            </div>
        </header>
    )
}

export default NavBar