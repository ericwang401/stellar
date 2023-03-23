import ContentContainer from 'components/ContentContainer'
import LandingLayout from 'components/elements/layouts/LandingLayout'
import Link from 'next/link'
import { NextPageWithLayout } from 'pages/_app'

interface CardProps {
    link: string
    title: string
    author: string
    date: string
}

const Card = ({ link, title, author, date }: CardProps) => {
    return (
        <Link href={link} className='rounded-lg border border-accent-700 bg-foreground p-8'>
            <h2 className='font-bold text-2xl sm:text-3xl tracking-tight max-w-2xl'>{title}</h2>
            <div className='flex flex-col sm:flex-row sm:gap-3 mt-16'>
                <p className='font-bold text-sm'>{author}</p>
                <p className='text-accent-300 text-sm'>{date}</p>
            </div>
        </Link>
    )
}

const News: NextPageWithLayout = () => {
    return (
        <>
            <div className='relative w-full h-[20rem] opacity-50 bg-gradient-to-b from-accent-500 to-accent-800 z-0' />
            <ContentContainer className='relative !pt-4 -mt-48 z-[1]' includeYPadding>
                <h1 className='font-semibold text-3xl pb-6'>Newsroom</h1>
                <div className='flex flex-col space-y-6 sm:space-y-8'>
                    <Card
                        link='/news/stem-education-endorsed-by-stellar'
                        title="STEM Education endorsed by Stellar"
                        author='Kevin Becker'
                        date='February 23th, 2023'
                    />
                    <Card
                        link='/news/we-are-supporting-ukraine'
                        title="We Are Supporting Ukraine"
                        author='Kevin Becker'
                        date='February 27th, 2022'
                    />
                    <Card
                        link='/news/stellar-reaches-new-heights-with-stellar-gateway'
                        title="Stellar Reaches New Heights with Stellar Gateway"
                        author='Kevin Becker'
                        date='November 27th, 2021'
                    />
                    <Card
                        link='/news/first-ever-space-themed-amusement-park'
                        title="First-Ever Space-Themed Amusement Park"
                        author='Kevin Becker'
                        date='May 8th, 2021'
                    />
                    <Card
                        link='/news/space-tourism-is-going-green'
                        title="Space Tourism is Going Green"
                        author='Kevin Becker'
                        date='January 11th, 2019'
                    />
                    <Card
                        link='/news/stellar-creates-opportunities-for-all'
                        title="Stellar Creates Opportunities For All"
                        author='Kevin Becker'
                        date='October 28th, 2018'
                    />
                    <Card
                        link='/news/creation-of-worlds-first-hotel-beyond-earth'
                        title="Creation of World's First Hotel Beyond Earth"
                        author='Kevin Becker'
                        date='June 4th, 2017'
                    />
                    <Card
                        link='/news/helping-the-world-with-stellar-ships'
                        title="Helping the World with Stellar Ships"
                        author='Kevin Becker'
                        date='September 14th, 2015'
                    />
                    <Card
                        link='/news/first-successful-rocket-launch'
                        title="First Successful Rocket Launch"
                        author='Kevin Becker'
                        date='March 14th, 1998'
                    />
                </div>
            </ContentContainer>
        </>
    )
}

News.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default News
