import ContentContainer from 'components/ContentContainer'
import Image from 'next/image'
import earthFromSpace from 'assets/images/earth-from-space.jpg'
import styled, { keyframes } from 'styled-components'
import tw from 'twin.macro'
import RocketShip from 'assets/images/rocket-ship.png'
import Button from 'components/elements/Button'

const Heading = styled.h1`
    background: linear-gradient(180deg, #fff, #aaa), #fff;
    -webkit-background-clip: text;
    background-clip: text;
    ${tw`text-transparent font-bold text-4xl md:text-5xl lg:text-7xl tracking-tight leading-[3rem] lg:leading-[5rem] max-w-lg mt-6`}
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

const StyledHeader = styled.div`
    ${tw`py-20 sm:py-32 lg:pb-32 xl:pb-36 bg-foreground relative overflow-hidden`}

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
`

const TextFadeInUpAnimation = keyframes`
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
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
    opacity: 0;
    transform: translateY(100px);

    animation-name: ${TextFadeInUpAnimation};
    animation-timing-function: ease;
    animation-delay: 0.5s;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
`

const RocketFadeInUpAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

const RocketContainer = styled.div`
    ${tw`-mx-4 h-[500px] opacity-0 lg:-mt-16 px-9 md:[mask-image:linear-gradient(to_bottom,white_70%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32`}

    animation-name: ${RocketFadeInUpAnimation};
    animation-timing-function: ease;
    animation-delay: 0.8s;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
`

const CTAFadeInUpAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(30px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

const CTAContainer = styled.div`
${tw`flex space-x-3 mt-8 opacity-0`}

animation-name: ${CTAFadeInUpAnimation};
animation-timing-function: ease;
animation-delay: 1s;
animation-duration: 0.6s;
animation-fill-mode: forwards;
`

const Header = () => (
    <>
        <StyledHeader className='z-[1]'>
            <ContentContainer>
                <div className='lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20'>
                    <div className='relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6'>
                        <HeaderTextContainer>
                            <p className='tracking-widest text-sm uppercase text-accent-300 font-medium'>STELLAR</p>
                            <Heading>Your next ride is here.</Heading>
                            <p className='text-accent-300 text-lg mt-6'>
                                Stellar is leading the charge in space tourism, offering an incredible opportunity to
                                visit the moon. Come witness breathtaking views and make memories that will last a
                                lifetime. Whether it&apos;s for adventure or just to check off your bucket list, Stellar
                                will make your wildest dreams a reality. Book your trip now and join the new era of
                                space exploration!
                            </p>
                        </HeaderTextContainer>
                        <CTAContainer>
                            <Button variant='solid' color='accent'>
                                Book now
                            </Button>
                            <Button variant='flat' color='accent'>
                                Learn More
                            </Button>
                        </CTAContainer>
                    </div>

                    <div className='relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6'>
                        <RocketContainer>
                            <div className='relative aspect-[366/729] mx-auto max-w-[366px]'>
                                <Image src={RocketShip} alt='rocket ship' />
                            </div>
                        </RocketContainer>
                    </div>
                </div>
            </ContentContainer>

            <svg
                className='absolute bottom-0 w-full h-12 text-foreground'
                viewBox='0 0 60 6'
                xmlns='http://www.w3.org/2000/svg'
                preserveAspectRatio='none'
                fill='currentColor'
            >
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M0 0.594177V6H60V0.594177C50.9074 2.13683 40.736 3 30 3C19.264 3 9.09256 2.13683 0 0.594177Z'
                />
            </svg>
        </StyledHeader>
    </>
)

export default Header
