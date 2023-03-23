import ContentContainer from 'components/ContentContainer'
import SectionDivider from 'components/elements/SectionDivider'
import { LeftBlock } from 'components/landing/TheTrip'
import TimelineBlock from 'components/landing/TimelineBlock'
import Image from 'next/image'
import { ReactNode } from 'react'
import { classNames } from 'util/helpers'
import Sheng from 'assets/images/sheng.jpg'
import KennedySpaceCenterLiftoff from 'assets/images/kennedy-space-center-liftoff.jpg'
import styled from 'styled-components'
import tw from 'twin.macro'
import FirstMoonLanding from 'assets/images/first-moon-landing.png'
import SpaceRaceBegins from 'assets/images/space-race-begins.jpg'

interface RightBlockProps {
    title?: ReactNode
    description?: ReactNode
    className?: string
}
const RightBlock = ({ title, description, className }: RightBlockProps) => {
    return (
        <div className={classNames('flex flex-col items-center lg:items-start mt-8 lg:mt-0', className)}>
            <p className='text-background font-semibold text-2xl'>{title}</p>
            <p className='text-accent-300 leading-relaxed mt-2 max-w-xl text-center lg:text-start'>{description}</p>
        </div>
    )
}

const BannerContainer = styled.div`
    ${tw`mt-16 z-0 h-[40rem] relative`}
    &:before {
        content: '';
        background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, transparent 100%);
        ${tw`absolute top-0 left-0 w-full h-[10rem] z-[1]`}
    }

    & > div {
        ${tw`h-full w-full`}
        background-image: url(${KennedySpaceCenterLiftoff.src});
        background-size: cover;
        background-position: top;
        filter: brightness(70%);
    }
`

const Timeline = () => {
    return (
        <div className='relative overflow-hidden'>
            <SectionDivider />
            <ContentContainer className='pt-32'>
                <div className='flex justify-center h-28 w-full'>
                    <div className='h-full w-[1px] bg-gradient-to-b from-transparent to-accent-600' />
                </div>
                <div className='flex flex-col space-y-12 lg:space-y-0'>
                    <TimelineBlock
                        className='lg:min-h-[30rem]'
                        noGradientLineOnMobile
                        left={
                            <LeftBlock className='lg:-translate-y-16'>
                                <Image
                                    src={SpaceRaceBegins}
                                    alt='Albert sheng'
                                    className='rounded-lg border border-accent-700 w-full max-w-md'
                                />
                            </LeftBlock>
                        }
                        right={
                            <RightBlock
                                className='lg:-translate-y-16'
                                title='1950s - Space Race Begins'
                                description="The 1950s space race was a competition between the United States and the Soviet Union to explore outer space. The Soviet Union's launch of the first satellite, Sputnik, in 1957 sparked fear and concern in the United States, which led to increased investment in space exploration and the formation of NASA in 1958."
                            />
                        }
                    />
                    <TimelineBlock
                        className='lg:min-h-[30rem]'
                        left={
                            <LeftBlock className='lg:-translate-y-16'>
                                <Image
                                    src={FirstMoonLanding}
                                    alt='Albert sheng'
                                    className='rounded-lg border border-accent-700 w-full max-w-md'
                                />
                            </LeftBlock>
                        }
                        right={
                            <RightBlock
                                className='lg:-translate-y-16'
                                title='1969 - First Moon Landing'
                                description={`In 1969, the United States launched the Apollo 11 mission to land astronauts on the moon. The mission was made possible by the successful launch of a Saturn V rocket from the Kennedy Space Center in Florida. The rocket was the largest and most powerful ever built at the time, standing over 363 feet tall. It paved the way for the historic lunar landing of astronauts Neil Armstrong and Edwin "Buzz" Aldrin, Jr. later that year, marking a major milestone in human spaceflight.`}
                            />
                        }
                    />
                    <TimelineBlock
                        className='lg:min-h-[30rem]'
                        left={
                            <LeftBlock className='lg:-translate-y-16'>
                                <Image
                                    src={Sheng}
                                    alt='Albert sheng'
                                    className='rounded-lg border border-accent-700 w-full max-w-md'
                                />
                            </LeftBlock>
                        }
                        right={
                            <RightBlock
                                className='lg:-translate-y-16'
                                title='1989 - U.S. Funds Stellar'
                                description={`In 1989, the United States government decided to provide funding to the space tourism company Stellar. The goal was to promote private enterprise in space exploration and to create new opportunities for tourism beyond the Earth's atmosphere. The funding allowed Stellar to develop advanced spacecraft capable of transporting tourists on brief excursions into space.`}
                            />
                        }
                    />
                    <TimelineBlock
                        className='lg:min-h-[30rem]'
                        line={
                            <div className='hidden lg:block h-full w-[1px] bg-gradient-to-b from-accent-600 to-orange-500' />
                        }
                        left={
                            <LeftBlock className='lg:-translate-y-16'>
                                <Image
                                    src={Sheng}
                                    alt='Albert sheng'
                                    className='rounded-lg border border-accent-700 w-full max-w-md'
                                />
                            </LeftBlock>
                        }
                        right={
                            <RightBlock
                                className='lg:-translate-y-16'
                                title='1998 - First Stellar Rocket'
                                description={`Stellar launched their first rocket in 1998, carrying a crew of trained astronauts and paying passengers into space. The rocket was specifically designed for space tourism and boasted state-of-the-art technology, ensuring a safe and comfortable journey for all on board. The launch marked a significant milestone in the development of space tourism as an industry, opening up new possibilities for travel and exploration beyond Earth's atmosphere.`}
                            />
                        }
                    />
                </div>

                <div className='flex justify-center lg:hidden mt-6 h-28 w-full'>
                    <div className='h-full w-[1px] bg-gradient-to-b from-transparent to-orange-500' />
                </div>
                <div className='grid place-items-center mx-auto w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full'>
                    <h3 className='text-foreground font-bold'>5</h3>
                </div>
                <div className='relative text-center mt-4 z-[1]'>
                    <h3 className='font-bold text-2xl text-orange-500'>2013</h3>
                    <h2 className='mx-auto gradient-text font-bold text-3xl sm:text-4xl tracking-tight max-w-2xl mt-2'>
                        Stellar Opens up to the Public
                    </h2>
                    <p className='text-accent-300 text-lg max-w-2xl mt-12 text-center mx-auto'>The space tourism company Stellar opens up to the public, offering a once-in-a-lifetime opportunity for people to travel to space and experience the wonders of the cosmos.</p>
                </div>
            </ContentContainer>
            <BannerContainer>
                <div />
            </BannerContainer>
        </div>
    )
}

export default Timeline
