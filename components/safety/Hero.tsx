import ContentContainer from 'components/ContentContainer'
import { Heading } from 'components/landing/Header'
import styled from 'styled-components'
import tw, { theme } from 'twin.macro'
import { FadeInAnimation, FadeInUpAnimation } from 'util/transitions'

const EKGContainer = styled.div`
    position: relative;
    overflow: hidden;
    ${tw`h-[16rem] -mt-[8rem] sm:h-[20rem] sm:-mt-[8rem] md:h-[30rem] md:-mt-[10rem] lg:-mt-[8rem]`}
    z-index: 0;
    animation: ${FadeInUpAnimation} 0.8s forwards ease;

    & .fade-out {
        position: absolute;
        width: 20%;
        height: 100%;
        top: 0;
        left: -15%;
        background: linear-gradient(to right, #000 0%, #000 80%, rgba(0, 0, 0, 0) 100%);
    }

    @keyframes fade-in-animation {
        0% {
            left: 0%;
        }
        100% {
            left: 80%;
        }
    }

    & .fade-in {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0%;
        background: linear-gradient(to left, #000 0%, #000 80%, rgba(0, 0, 0, 0) 100%);
        animation: fade-in-animation 0.8s linear forwards;
    }
`

const HeadingContainer = styled.div`
    ${tw`z-[1] pb-16 pt-8`}
    background: linear-gradient(to bottom, #000 0%, #000 50%, rgba(0, 0, 0, 0) 100%);
    opacity: 0;
    animation: ${FadeInUpAnimation} 0.6s forwards ease;
    animation-delay: 0.6s;
    --y-offset: 2rem;
`

const Hero = () => {
    return (
        <ContentContainer className='relative flex flex-col items-center pt-20 md:pt-36'>
            <HeadingContainer>
                <Heading className='text-center !max-w-none'>Your Safety is our Priority</Heading>
            </HeadingContainer>
            <EKGContainer className='right-0'>
                <svg
                    version='1.0'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    x='0px'
                    y='0px'
                    viewBox='0 0 150 73'
                    enable-background='new 0 0 150 73'
                    xmlSpace='preserve'
                    className='w-full h-full'
                >
                    <defs>
                        <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
                            <stop offset='0%' stop-color={theme('colors.purple.500')} />
                            <stop offset='50%' stop-color={theme('colors.fuchsia.500')} />
                            <stop offset='100%' stop-color={theme('colors.pink.500')} />
                        </linearGradient>
                    </defs>
                    <polyline
                        stroke='url(#gradient)'
                        stroke-width='3'
                        stroke-miterlimit='10'
                        points='0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486'
                    />
                </svg>
                <div className='fade-in'></div>
                <div className='fade-out'></div>
            </EKGContainer>
        </ContentContainer>
    )
}

export default Hero
