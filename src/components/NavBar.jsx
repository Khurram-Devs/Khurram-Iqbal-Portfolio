import React, { useEffect, useState } from 'react'
import { navContent, navLinks } from '../constants'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const NavBar = () => {

    useGSAP(() => {
        gsap.to('.logo',
            {
                opacity: 1,
                duration: 0.6,
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
                <a href="#hero" className="logo">{navContent.logo}</a>
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
                        <span>{navContent.button}</span>
                    </div>
                </a>
            </div>
        </header>
    )
}

export default NavBar