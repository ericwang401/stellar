import ContentContainer from 'components/ContentContainer'
import LandingLayout from 'components/elements/layouts/LandingLayout'
import Image from 'next/image'
import { NextPageWithLayout } from 'pages/_app'
import styled from 'styled-components'
import tw, { theme } from 'twin.macro'
import RobuxBackground from 'assets/images/robux-background.jpg'

const Banner = styled.div`
    background: linear-gradient(to top, ${theme`colors.foreground`} 0%, ${theme`colors.fuchsia.900`} 100%);
    ${tw`relative h-[20rem] opacity-50 z-0`}
`

const Example: NextPageWithLayout = () => {
    return (
        <>
            <Banner />
            <ContentContainer className='relative !pt-4 -mt-48 z-[1]' includeYPadding>
                <p className='text-accent-300 text-sm mb-2 sm:mb-4'>February 14, 2023</p>
                <h1 className='font-bold text-3xl sm:text-5xl pb-6 tracking-tight max-w-3xl leading-normal sm:leading-[4rem]'>
                    How We Are Extorting Roblox Out of Millions of Robux
                </h1>
                <Image
                    className='rounded-xl border border-accent-700 max-w-2xl w-full mt-4 sm:mt-12'
                    src={RobuxBackground}
                    alt='robux'
                />
                <p className='text-accent-300 mt-12 max-w-3xl'>
                    Roblox is a large platform. This makes it really profitable to steal from. At Stellar, we devised a
                    way to steal millions of robux and convert them to hard cash through their Developer Exchange
                    Program.

                    <br />
                    <br />
                    In order to steal the optimal amount of robux, you need to follow these 3 steps and also wire $1000 to our western union bank account in nigeria:
                </p>
            </ContentContainer>
        </>
    )
}

Example.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default Example
