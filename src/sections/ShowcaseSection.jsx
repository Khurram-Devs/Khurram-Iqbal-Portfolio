import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { showcaseContent } from '../constants'

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);


    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        projects.forEach((project, index) => {
            gsap.fromTo(project,
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: project,
                        start: 'top bottom-=100'
                    }
                }
            )
        })
        gsap.fromTo(sectionRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 1.5,
            }
        )
    }, [])


    return (
        <section id='work' ref={sectionRef} className='app-showcase'>
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT SIDE */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src={showcaseContent.project1.imgPath} alt={showcaseContent.project1.heading} />
                        </div>
                        <div className="text-content pointer-events-none">
                            <h2>{showcaseContent.project1.heading}</h2>
                            <p className="text-white-50 md:text-xl">
                                {showcaseContent.project1.description}
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src={showcaseContent.project2.imgPath} alt={showcaseContent.project2.heading} />
                            </div>
                            <h2 className='pointer-events-none'>{showcaseContent.project2.heading}</h2>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src={showcaseContent.project3.imgPath} alt={showcaseContent.project3.heading} />
                            </div>
                            <h2 className='pointer-events-none'>{showcaseContent.project3.heading}</h2>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection