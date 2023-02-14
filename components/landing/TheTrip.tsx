import ContentContainer from 'components/ContentContainer'
import TimelineBlock from 'components/landing/TimelineBlock'
import Image from 'next/image'
import NativeAmericanInFrontOfRocketShip from 'assets/images/native-american-in-front-of-rocket-ship.png'
import CursorArrowRays from '@heroicons/react/20/solid/CursorArrowRaysIcon'

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

            <TimelineBlock
                noGradientLineOnMobile
                left={
                    <div className='flex w-full justify-center lg:justify-end mt-8 lg:mt-0 lg:-translate-y-16'>
                        <div className='grid place-items-center h-36 w-full max-w-[20rem] border border-accent-600 rounded-lg'>
                            <div className='relative px-5 py-3 text-base text-background bg-accent-700 rounded-lg max-w-min'>
                                <span>Purchase</span>

                                <CursorArrowRays className='absolute w-8 h-8 text-background -right-2 -bottom-2' />
                            </div>
                        </div>
                    </div>
                }
                right={
                    <div className='flex flex-col items-center lg:items-start mt-8 lg:mt-0 lg:-translate-y-20'>
                        <div className='grid place-items-center h-10 w-10 rounded bg-accent-800 mb-4'>
                            <h3 className='text-2xl text-accent-300'>1</h3>
                        </div>
                        <p className='text-background font-semibold text-2xl'>Book a Trip</p>
                        <p className='text-accent-300 leading-relaxed mt-4 max-w-xl text-center lg:text-start'>
                            Book your trip to the moon with Stellar. We offer a variety of packages to suit your needs,
                            and our friendly staff is always available to answer any questions you may have.
                        </p>
                    </div>
                }
            />

            <TimelineBlock
                left={
                    <Image
                        src={NativeAmericanInFrontOfRocketShip}
                        alt='Native American in front of rocket ship'
                        className='rounded-xl border border-accent-700 w-full max-w-md'
                    />
                }
                right={
                    <div className='flex flex-col items-center lg:items-start mt-8 lg:mt-0'>
                        <div className='grid place-items-center h-10 w-10 rounded bg-accent-800 mb-4'>
                            <h3 className='text-2xl text-accent-300'>2</h3>
                        </div>
                        <p className='text-background font-semibold text-2xl'>Get Trained</p>
                        <p className='text-accent-300 leading-relaxed mt-4'>albert sheng loves men.</p>
                    </div>
                }
            />
        </ContentContainer>
    )
}

export default TheTrip
