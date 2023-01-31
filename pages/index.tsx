import ContentContainer from 'components/ContentContainer'
import Image from 'next/image'
import sheng from 'assets/images/sheng.jpg'
import earthFromSpace from 'assets/images/earth-from-space.jpg'
import styled, { keyframes } from 'styled-components'
import tw from 'twin.macro'
import { motion } from 'framer-motion'

const Heading = styled.h1`
    background: linear-gradient(180deg, #fff, #aaa), #fff;
    -webkit-background-clip: text;
    background-clip: text;
    ${tw`text-transparent font-bold text-4xl md:text-5xl lg:text-7xl leading-[3rem] lg:leading-[5rem] max-w-lg mt-6`}
`

const backgroundClipInAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(10%);
    }
    100% {
        opacity: 0.15;
        transform: translateY(0);
    }
`

const Header = styled.div`
    ${tw`py-20 sm:py-32 lg:pb-32 xl:pb-36 bg-foreground relative overflow-hidden`}

    @media (min-width: 1024px) {
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            background-image: url(${earthFromSpace.src});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            opacity: 0;
            animation-name: ${backgroundClipInAnimation};
            animation-timing-function: ease;
            animation-delay: 0.3s;
            animation-duration: 1s;
            animation-fill-mode: forwards;
        }
    }
`

const FadeInUpAnimation = keyframes`
    0% {
        opacity: 0;
        clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
        transform: translateY(100px);
    }
    100% {
        opacity: 1;
        clip-path: polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%);
        transform: translateY(0);
    }
`

const HeaderTextContainer = styled.div`
    ${tw`relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6`}

    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
    opacity: 0;
    transform: translateY(100px);

    animation-name: ${FadeInUpAnimation};
    animation-timing-function: ease;
    animation-delay: 0.5s;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
`

export default function Home() {
    return (
        <Header>
            <ContentContainer>
                <div className='lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20'>
                    <HeaderTextContainer>
                        <p className='tracking-widest text-sm uppercase text-accent-300 font-medium'>
                            STELLAR
                        </p>
                        <Heading className=''>Your next ride is here.</Heading>
                        {/*
                        <Heading className='block lg:hidden'>
                            Take your next trip to the moon. Literally. We mean it.
                        </Heading> */}
                        <p className='text-accent-300 text-lg mt-6'>
                            You can now embark on a thrilling vacation to the
                            moon. Enjoy beautiful scenery that billions have not
                            yet seen. You can check off your bucket lists and
                            make your wildest dreams come true. Book your next
                            trip with Stellar.
                        </p>
                    </HeaderTextContainer>
                </div>
            </ContentContainer>
        </Header>
    )
}
