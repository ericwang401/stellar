import ContentContainer from 'components/ContentContainer'
import Image from 'next/image'
import earthFromSpace from 'assets/images/earth-from-space.jpg'
import styled, { keyframes } from 'styled-components'
import tw from 'twin.macro'
import RocketShip from 'assets/images/rocket-ship.png'

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

const StyledHeader = styled.div`
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
    ${tw`relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6`}

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

const ContentDivider = styled.div`
height: 600px;
margin: -20px auto;

&::after {
    content: '';
    position: absolute;
    width: 200%;
    aspect-ratio: 1 / 0.7;
    top: 55vh;
    left: -50%;
    background: rgb(0, 2, 18);
    border-radius: 50%;
    border-top: 1px solid rgba(120, 119, 198, 0.4);
}
`

const Header = () => (
    <>
        <StyledHeader>
            <ContentContainer>
                <div className='lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20'>
                    <HeaderTextContainer>
                        <p className='tracking-widest text-sm uppercase text-accent-300 font-medium'>STELLAR</p>
                        <Heading className=''>Your next ride is here.</Heading>
                        <p className='text-accent-300 text-lg mt-6'>
                            You can now embark on a thrilling vacation to the moon. Enjoy beautiful scenery that
                            billions have not yet seen. You can check off your bucket lists and make your wildest dreams
                            come true. Book your next trip with Stellar.
                        </p>
                    </HeaderTextContainer>

                    <div className='relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6'>
                        <RocketContainer>
                            <div className='relative aspect-[366/729] mx-auto max-w-[366px]'>
                                <Image src={RocketShip} alt='rocket ship' />
                            </div>
                        </RocketContainer>
                    </div>
                </div>
            </ContentContainer>
        </StyledHeader>
    </>
)

export default Header
