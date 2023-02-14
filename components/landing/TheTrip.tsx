import ContentContainer from 'components/ContentContainer'
import TimelineBlock from 'components/landing/TimelineBlock'
import Image from 'next/image'
import Sheng from 'assets/images/sheng.jpg'
import CursorArrowRays from '@heroicons/react/20/solid/CursorArrowRaysIcon'
import { ReactNode } from 'react'
import { classNames } from 'util/helpers'
import styled, { keyframes } from 'styled-components'
import tw from 'twin.macro'
import Button from 'components/elements/Button'

interface RightBlockProps {
    number?: number
    title?: ReactNode
    description?: ReactNode
    className?: string
}
const RightBlock = ({ number, title, description, className }: RightBlockProps) => {
    return (
        <div className={classNames('flex flex-col items-center lg:items-start mt-8 lg:mt-0', className)}>
            <div className='grid place-items-center h-10 w-10 rounded bg-accent-800 mb-4'>
                <h3 className='text-xl text-accent-300'>{number}</h3>
            </div>
            <p className='text-background font-semibold text-2xl'>{title}</p>
            <p className='text-accent-300 leading-relaxed mt-2 max-w-xl text-center lg:text-start'>{description}</p>
        </div>
    )
}

interface LeftBlockProps {
    className?: string
    children: ReactNode
}

const LeftBlock = ({ className, children }: LeftBlockProps) => {
    return (
        <div className={classNames('flex w-full justify-center lg:justify-end mt-8 lg:mt-0', className)}>
            {children}
        </div>
    )
}

const GradientH3 = styled.h3`
    background: -webkit-linear-gradient(90deg, #0ea5e9, #a855f7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ${tw`font-bold text-2xl`}
`

const TheTrip = () => {
    return (
        <ContentContainer includeYPadding>
            <h2 className='text-center tracking-widest text-sm uppercase text-accent-300 font-medium'>The Trip</h2>
            <p className='text-center mx-auto mt-4 gradient-text font-bold text-3xl sm:text-4xl tracking-tight max-w-2xl mb-8'>
                How We Will Take You to the Moon
            </p>

            <div className='flex justify-center h-28 w-full'>
                <div className='h-full w-[1px] bg-gradient-to-b from-transparent to-accent-600' />
            </div>

            <div className='flex flex-col space-y-12 lg:space-y-0'>
                <TimelineBlock
                    className='lg:min-h-[20rem]'
                    noGradientLineOnMobile
                    left={
                        <LeftBlock className='lg:-translate-y-16'>
                            <div className='grid place-items-center h-36 w-full max-w-[20rem] border border-accent-600 rounded-lg'>
                                <div className='relative px-5 py-3 text-base text-background bg-accent-700 rounded-lg max-w-min'>
                                    <span>Purchase</span>

                                    <CursorArrowRays className='absolute w-8 h-8 text-background -right-2 -bottom-2' />
                                </div>
                            </div>
                        </LeftBlock>
                    }
                    right={
                        <RightBlock
                            className='lg:-translate-y-16'
                            number={1}
                            title='Book a Trip'
                            description='Book your trip to the moon with Stellar. We offer a variety of packages to suit your
                            needs, and our friendly staff is always available to answer any questions you may have.'
                        />
                    }
                />

                <TimelineBlock
                    className='lg:min-h-[30rem]'
                    left={
                        <LeftBlock className='lg:-translate-y-40'>
                            <Image
                                src={Sheng}
                                alt='Albert sheng'
                                className='rounded-xl border border-accent-700 w-full max-w-md'
                            />
                        </LeftBlock>
                    }
                    right={
                        <RightBlock
                            className='lg:-translate-y-16'
                            number={2}
                            title='Get Trained'
                            description='albert sheng loves men.'
                        />
                    }
                />

                <TimelineBlock
                    className='lg:min-h-[30rem]'
                    left={
                        <LeftBlock className='lg:-translate-y-36'>
                            <Image
                                src={Sheng}
                                alt='Albert sheng'
                                className='rounded-xl border border-accent-700 w-full max-w-md'
                            />
                        </LeftBlock>
                    }
                    right={
                        <RightBlock
                            className='lg:-translate-y-16'
                            number={3}
                            title='Get Trained'
                            description='albert sheng loves men.'
                        />
                    }
                />

                <TimelineBlock
                    line={
                        <div className='hidden lg:block h-full w-[1px] bg-gradient-to-b from-accent-600 to-purple-500' />
                    }
                    left={
                        <LeftBlock className='lg:-translate-y-36'>
                            <Image
                                src={Sheng}
                                alt='Albert sheng'
                                className='rounded-xl border border-accent-700 w-full max-w-md'
                            />
                        </LeftBlock>
                    }
                    right={
                        <RightBlock
                            className='lg:-translate-y-16'
                            number={4}
                            title='Get Trained'
                            description='albert sheng loves men.'
                        />
                    }
                />
            </div>

            <div className='flex justify-center lg:hidden mt-6 h-28 w-full'>
                <div className='h-full w-[1px] bg-gradient-to-b from-transparent to-purple-500' />
            </div>
            <div className='grid place-items-center mx-auto w-10 h-10 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full'>
                <h3 className='text-foreground font-bold'>5</h3>
            </div>
            <div className='text-center mt-4'>
                <h3 className='font-bold text-2xl text-fuchsia-500'>Lift off</h3>
                <h2 className='mx-auto gradient-text font-bold text-3xl sm:text-4xl tracking-tight max-w-2xl mt-2'>
                    Enjoy Your Ride
                </h2>
            </div>


        </ContentContainer>
    )
}

export default TheTrip
