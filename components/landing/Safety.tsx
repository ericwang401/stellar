import ContentContainer from 'components/ContentContainer'
import Sheng from 'assets/images/sheng.jpg'
import Image from 'next/image'
import { classNames } from 'util/helpers'
import SectionDivider from 'components/elements/SectionDivider'
import { Parallax } from 'react-scroll-parallax'
import { useState } from 'react'

interface BarProps {
    special?: boolean
    width?: string
    label?: string
    caption?: string
}

const Bar = ({ special, width, label, caption }: BarProps) => {
    return (
        <div className='flex gap-2 md:gap-0 md:items-center flex-col md:flex-row'>
            <p className='font-medium w-36'>{label}</p>
            <div className='flex items-center w-full justify-between p-1 grow border border-accent-700 h-14 rounded-lg'>
                <div
                    style={special ? { boxShadow: '0 0 16px #f02662', width } : { width }}
                    className={classNames(
                        'bg-gradient-to-r h-full rounded',
                        special
                            ? 'from-fuchsia-500 to-pink-500'
                            : 'border border-accent-500 from-accent-800 to-accent-600'
                    )}
                ></div>
                <p className='text-background pr-3'>{caption}</p>
            </div>
        </div>
    )
}

const Safety = () => {
    const [progress, setProgress] = useState(0)

    return (
        <div className='relative overflow-hidden'>
            <SectionDivider />
            <ContentContainer includeYPadding>
                <div className='flex flex-col lg:flex-row gap-16'>
                    <div>
                        <h2 className='tracking-widest text-sm uppercase text-accent-300 font-medium'>
                            Safety & Recovery
                        </h2>
                        <p className='mt-4 gradient-text font-bold text-3xl sm:text-4xl tracking-tight max-w-2xl mb-8'>
                            Stellar Safety Record
                        </p>
                        <p className='mt-4 max-w-2xl text-accent-300'>
                            Safety is our #1 priority when it comes to Stellar. We want the journey to the moon to be
                            nothing but stunning for our guests. With a crew equipped for any situation, surplus tools
                            and supplies, and even our innovatively advanced escape pods for unlikely emergencies, our
                            expectations excel far past the guidelines of the U.S. Ministry of Transportation.
                        </p>
                    </div>

                    <figure className='md:flex bg-accent-800 rounded-lg border border-accent-700 p-8 md:p-0 overflow-hidden w-full lg:max-w-2xl'>
                        <Image
                            className='relative w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full max-md:mx-auto'
                            src={Sheng}
                            alt='Sheng'
                            width='384'
                            height='512'
                        />
                        <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
                            <blockquote>
                                <p className='max-md:mx-auto text-lg max-w-md font-medium'>
                                    “Grey Origin was my first experience going to the moon. There were many problems and
                                    poorly trained staff. But with
                                    Stellar, their exceptional staff and quality eased my worries and now I have gone
                                    six trips with no issues.”
                                </p>
                            </blockquote>
                            <figcaption className='font-medium'>
                                <div className='text-fuchsia-500 '>Albert Sheng</div>
                                <div className='text-accent-300'>U.S. Ministry of Transportation</div>
                            </figcaption>
                        </div>
                    </figure>
                </div>

                <Parallax onProgressChange={progress => progress < 0.4 ? setProgress((progress * 1.7) + 0.3) : setProgress((0.4 * 1.7) + 0.3)}>
                    <div className='flex flex-col gap-6 md:gap-10 mt-24'>
                        <Bar special label='Stellar' width={(5 * progress).toString() + '%'} caption='0 accidents' />
                        <Bar label='NALSA' width={(20 * progress).toString() + '%'} caption='21 accidents' />
                        <Bar label='SpaceZ' width={(40 * progress).toString() + '%'} caption='46 accidents' />
                        <Bar label='Grey Origin' width={(60 * progress).toString() + '%'} caption='87 accidents' />
                    </div>
                </Parallax>
            </ContentContainer>
        </div>
    )
}

export default Safety
