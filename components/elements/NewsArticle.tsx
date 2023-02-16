import { ReactNode } from 'react'
import ContentContainer from 'components/ContentContainer'
import LandingLayout from 'components/elements/layouts/LandingLayout'
import Image, { StaticImageData } from 'next/image'
import { NextPageWithLayout } from 'pages/_app'
import styled from 'styled-components'
import tw, { theme } from 'twin.macro'
import RobuxBackground from 'assets/images/robux-background.jpg'

const Banner = styled.div`
    background: linear-gradient(to top, ${theme`colors.foreground`} 0%, ${theme`colors.fuchsia.900`} 100%);
    ${tw`relative h-[20rem] opacity-50 z-0`}
`

interface Props {
    date: string
    title: string
    image: string | StaticImageData
    content: ReactNode
}

const NewsArticle = ({ date, title, image, content}: Props) => {
    return (
        <>
            <Banner />
            <ContentContainer className='relative !pt-4 -mt-48 z-[1]' includeYPadding>
                <p className='text-accent-300 text-sm mb-2 sm:mb-4'>{ date }</p>
                <h1 className='font-bold text-3xl sm:text-5xl pb-6 tracking-tight max-w-3xl leading-normal sm:leading-[4rem]'>
                    { title }
                </h1>
                <Image
                    className='rounded-lg border border-accent-700 max-w-2xl w-full mt-4 sm:mt-12'
                    src={image}
                    alt='Article Image'
                />
                <p className='text-accent-300 mt-12 max-w-3xl'>
                    { content }
                </p>
            </ContentContainer>
        </>
    )
}

export default NewsArticle;