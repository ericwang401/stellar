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
                        link='/news/example'
                        title="Spying on Foreign Intelligence Using Stellar Ships"
                        author='John Cabot'
                        date='February 14th, 2023'
                    />
                    <Card
                        link='/news/example'
                        title="We Are Supporting Ukraine"
                        author='John Cabot'
                        date='February 14th, 2021'
                    />
                    <Card
                        link='/news/first-successful-rocket-launch'
                        title="First Successful Rocket Launch"
                        author='John Cabot'
                        date='March 14th, 2018'
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
