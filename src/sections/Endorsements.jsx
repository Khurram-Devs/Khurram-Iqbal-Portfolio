import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { endorsements, endorsementsContent } from '../constants'
import GlowCard from '../components/GlowCard'

const Endorsements = () => {
    return (
        <section id='endorsements' className='flex-center section-padding'>
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title={endorsementsContent.titleHeader.title} sub={endorsementsContent.titleHeader.sub} />

                <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
                    {endorsements.map(({ imgPath, name, mentions, review, starCount }, index) => (
                        <GlowCard card={{ review, starCount }} key={index}>
                            <div className='flex items-center gap-3'>
                                <div>
                                    <img src={imgPath} alt={name} />
                                </div>
                                <div>
                                    <p className='font-bold'>{name}</p>
                                    <p className='text-white-50'>{mentions}</p>
                                </div>
                            </div>
                        </GlowCard>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Endorsements