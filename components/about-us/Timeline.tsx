import ContentContainer from 'components/ContentContainer'
import SectionDivider from 'components/elements/SectionDivider'
import { LeftBlock } from 'components/landing/TheTrip'
import TimelineBlock from 'components/landing/TimelineBlock'
import Image from 'next/image'
import { ReactNode } from 'react'
import { classNames } from 'util/helpers'
import Sheng from 'assets/images/sheng.jpg'

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

const Timeline = () => {
    return (
        <div className='relative overflow-hidden'>
            <SectionDivider />
            <ContentContainer includeYPadding>
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
                                    src={Sheng}
                                    alt='Albert sheng'
                                    className='rounded-lg border border-accent-700 w-full max-w-md'
                                />
                            </LeftBlock>
                        }
                        right={
                            <RightBlock
                                className='lg:-translate-y-16'
                                title='1950s - Space Race Begins'
                                description='Bruh, we are  '
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
                                title='1969 - First Rocket Launch'
                                description='Bruh, we are  '
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
                                description='Bruh, we are  '
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
                                description='Bruh, we are  '
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
                <div className='text-center mt-4'>
                    <h3 className='font-bold text-2xl text-orange-500'>2013</h3>
                    <h2 className='mx-auto gradient-text font-bold text-3xl sm:text-4xl tracking-tight max-w-2xl mt-2'>
                        Stellar Opens up to the Public
                    </h2>
                </div>
            </ContentContainer>
        </div>
    )
}

export default Timeline
