import styled, { keyframes } from 'styled-components'
import tw from 'twin.macro'
import BlueStarrySky from 'assets/images/blue-starry-sky.jpg'
import { Heading } from 'components/landing/Header'
import Image from 'next/image'
import HappyAsianAstronaut from 'assets/images/happy-asian-astronaut.png'
import HappyAfricanAstronaut from 'assets/images/happy-african-astronaut.png'
import HappyWhiteAstronaut from 'assets/images/happy-white-astronaut.png'
import ExcitedWhiteAstronaut from 'assets/images/excited-white-astronaut.png'
import ContentContainer from 'components/ContentContainer'
import { FadeInAnimation, FadeInUpAnimation } from 'util/transitions'
import React from 'react'

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

const StyledHero = styled.div`
    ${tw`relative overflow-hidden flex flex-col pt-20 md:pt-36 items-center h-[78rem] md:h-[60rem]`}

    & > h1 {
        opacity: 0;
        animation: ${FadeInUpAnimation} 0.6s forwards ease;
    }

    & > p {
        opacity: 0;
        animation: ${FadeInUpAnimation} 0.6s forwards ease;
        animation-delay: 0.3s;
    }

    & img {
        opacity: 0;
        animation-name: ${FadeInAnimation};
        animation-fill-mode: forwards;
        animation-duration: 0.6s;
        animation-delay: var(--animation-delay, 0s);
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-image: url(${BlueStarrySky.src});
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
`

const Hero = () => {
    return (
        <StyledHero className='overflow-hidden'>
            <Heading>We Are Stellar</Heading>
            <p className='text-accent-300 text-lg max-w-2xl mt-6 text-center'>
                Stellar is a space tourism company dedicated to making space travel accessible to everyone. Our team of
                passionate professionals is committed to providing a safe and unforgettable experience. We offer a
                variety of packages that cater to different interests and budgets, including suborbital flights and
                extended stays on the Stellar Space Station. Our company is committed to sustainable and responsible
                space tourism.
            </p>
            <Image
                className='absolute rounded-lg hidden md:block md:-translate-x-[30rem] md:translate-y-[10rem] lg:-translate-x-[33rem]'
                src={HappyAsianAstronaut}
                width={300}
                height={300}
                alt='happy astronaut'
                style={{ '--animation-delay': '1s' } as React.CSSProperties}
            />
            <Image
                className='absolute rounded-lg hidden md:block md:-translate-x-[13rem] md:translate-y-[23rem] lg:-translate-x-[20rem] lg:translate-y-[23rem]'
                src={HappyAfricanAstronaut}
                width={300}
                height={300}
                alt='happy astronaut'
                style={{ '--animation-delay': '1.4s' } as React.CSSProperties}
            />
            <Image
                className='absolute rounded-lg hidden md:block md:translate-x-[10rem] md:translate-y-[20rem] lg:translate-x-[7rem] lg:translate-y-[21rem]'
                src={HappyWhiteAstronaut}
                width={300}
                height={300}
                alt='happy astronaut'
                style={{ '--animation-delay': '1.2s' } as React.CSSProperties}
            />
            <Image
                className='absolute rounded-lg hidden md:block md:translate-x-[30rem] md:translate-y-[12rem] lg:translate-x-[32rem] lg:translate-y-[5rem]'
                src={ExcitedWhiteAstronaut}
                width={300}
                height={300}
                alt='excited astronaut'
                style={{ '--animation-delay': '1.6s' } as React.CSSProperties}
            />
            <ContentContainer className='grid md:hidden grid-cols-2 gap-4 mt-16 z-[1]'>
                <Image
                    className='rounded-lg'
                    src={HappyAsianAstronaut}
                    width={300}
                    height={300}
                    alt='happy astronaut'
                    style={{ '--animation-delay': '1s' } as React.CSSProperties}
                />
                <Image
                    className='rounded-lg'
                    src={HappyAfricanAstronaut}
                    width={300}
                    height={300}
                    alt='happy astronaut'
                    style={{ '--animation-delay': '1.4s' } as React.CSSProperties}
                />
                <Image
                    className='rounded-lg'
                    src={HappyWhiteAstronaut}
                    width={300}
                    height={300}
                    alt='happy astronaut'
                    style={{ '--animation-delay': '1.2s' } as React.CSSProperties}
                />
                <Image
                    className='rounded-lg'
                    src={ExcitedWhiteAstronaut}
                    width={300}
                    height={300}
                    alt='excited astronaut'
                    style={{ '--animation-delay': '1.6s' } as React.CSSProperties}
                />
            </ContentContainer>
        </StyledHero>
    )
}

export default Hero
