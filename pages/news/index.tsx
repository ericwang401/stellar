import ContentContainer from 'components/ContentContainer'
import LandingLayout from 'components/elements/layouts/LandingLayout'
import Link from 'next/link'
import { NextPageWithLayout } from 'pages/_app'
import { ComponentProps, ComponentPropsWithoutRef } from 'react'
import styled, { CSSProperties } from 'styled-components'
import tw from 'twin.macro'
import { FadeInUpAnimation } from 'util/transitions'
import StemEducation from 'assets/images/stem-education.png'
import Ukraine from 'assets/images/ukraine.png'
import StellarGateway from 'assets/images/stellar-gateway.png'
import AmusementPark from 'assets/images/amusement-park.png'
import GoingGreen from 'assets/images/going-green.png'
import OpportunitiesForAll from 'assets/images/opportunities-for-all.png'
import SpaceHotel from 'assets/images/space-hotel.png'
import HelpingOtherCountries from 'assets/images/helping-other-countries.png'
import RocketLaunch from 'assets/images/rocket-launch.jpeg'
import Image, { StaticImageData } from 'next/image'

interface CardProps extends ComponentPropsWithoutRef<'a'> {
    link: string
    title: string
    author: string
    date: string
    image: StaticImageData
}

const StyledLink = styled(Link)`
    ${tw`rounded-lg flex flex-col md:flex-row border border-accent-700 bg-foreground`}

    opacity: 0;
    animation: ${FadeInUpAnimation} 0.6s forwards ease;
    animation-delay: var(--animation-delay);
`

const Card = ({ link, title, author, date, image, ...props }: CardProps) => {
    return (
        <StyledLink href={link} {...props}>
            <div className='grid place-items-center max-h-[18rem] md:max-w-xs overflow-hidden'>
                <Image src={image} alt={title} className='object-cover object-center' />
            </div>
            <div className='flex flex-col gap-8 justify-between relative p-8'>
                <h2 className='relative font-bold text-2xl sm:text-3xl tracking-tight max-w-2xl'>{title}</h2>
                <div className='relative flex flex-col sm:flex-row sm:gap-3 bottom-0'>
                    <p className='font-bold text-sm'>{author}</p>
                    <p className='text-accent-300 text-sm'>{date}</p>
                </div>
            </div>
        </StyledLink>
    )
}

const News: NextPageWithLayout = () => {
    const articles = [
        {
            link: '/news/stem-education-endorsed-by-stellar',
            title: 'STEM Education endorsed by Stellar',
            author: 'Kevin Becker',
            date: 'February 23th, 2023',
            image: StemEducation,
        },
        {
            link: '/news/we-are-supporting-ukraine',
            title: 'We Are Supporting Ukraine',
            author: 'Kevin Becker',
            date: 'February 27th, 2022',
            image: Ukraine,
        },
        {
            link: '/news/stellar-reaches-new-heights-with-stellar-gateway',
            title: 'Stellar Reaches New Heights with Stellar Gateway',
            author: 'Kevin Becker',
            date: 'November 27th, 2021',
            image: StellarGateway,
        },
        {
            link: '/news/first-ever-space-themed-amusement-park',
            title: 'First-Ever Space-Themed Amusement Park',
            author: 'Kevin Becker',
            date: 'May 8th, 2021',
            image: AmusementPark,
        },
        {
            link: '/news/space-tourism-is-going-green',
            title: 'Space Tourism is Going Green',
            author: 'Kevin Becker',
            date: 'January 11th, 2019',
            image: GoingGreen,
        },
        {
            link: '/news/stellar-creates-opportunities-for-all',
            title: 'Stellar Creates Opportunities For All',
            author: 'Kevin Becker',
            date: 'October 28th, 2018',
            image: OpportunitiesForAll,
        },
        {
            link: '/news/creation-of-worlds-first-hotel-beyond-earth',
            title: "Creation of World's First Hotel Beyond Earth",
            author: 'Kevin Becker',
            date: 'June 4th, 2017',
            image: SpaceHotel,
        },
        {
            link: '/news/helping-the-world-with-stellar-ships',
            title: 'Helping the World with Stellar Ships',
            author: 'Kevin Becker',
            date: 'September 14th, 2015',
            image: HelpingOtherCountries,
        },
        {
            link: '/news/first-successful-rocket-launch',
            title: 'First Successful Rocket Launch',
            author: 'Kevin Becker',
            date: 'March 14th, 1998',
            image: RocketLaunch,
        },
    ]

    return (
        <>
            <div className='relative w-full h-[20rem] opacity-50 bg-gradient-to-b from-accent-500 to-accent-800 z-0' />
            <ContentContainer className='relative !pt-4 -mt-48 z-[1]' includeYPadding>
                <h1 className='font-semibold text-3xl pb-6'>Newsroom</h1>
                <div className='flex flex-col space-y-6 sm:space-y-8'>
                    {articles.map((article, index) => (
                        <Card
                            {...article}
                            key={article.link}
                            style={{ '--animation-delay': `${index * 0.15}s` } as CSSProperties}
                        />
                    ))}
                </div>
            </ContentContainer>
        </>
    )
}

News.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default News
