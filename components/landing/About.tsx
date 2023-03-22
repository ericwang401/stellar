import ContentContainer from 'components/ContentContainer'
import Button from 'components/elements/Button'
import Image from 'next/image'
import NativeAmericanInFrontOfRocketShip from 'assets/images/native-american-in-front-of-rocket-ship.png'
import SectionDivider from 'components/elements/SectionDivider'

const About = () => {
    return (
        <div className='relative overflow-hidden'>
            <SectionDivider />
            <ContentContainer includeYPadding>
                <div className='flex flex-col lg:flex-row justify-between gap-16'>
                    <div>
                        <h2 className='tracking-widest text-sm uppercase text-accent-300 font-medium'>About Stellar</h2>
                        <p className='mt-4 gradient-text font-bold text-3xl sm:text-4xl tracking-tight max-w-2xl'>
                            From Humble Beginnings to a Revolution in Space Travel
                        </p>
                        <p className='mt-4 max-w-3xl text-accent-300'>
                            Stellar is a company with a proud Oklahoma heritage, rooted in a passion for space
                            exploration and a desire to make it accessible to all. From our humble beginnings in the
                            heartland of America, we have worked tirelessly to revolutionize space travel and bring our
                            vision to life. Today, we are proud to offer an incredible opportunity for people from all
                            walks of life to visit the moon and experience the thrill of space travel for themselves.
                            Our team is dedicated to making every trip an unforgettable experience, and we are honored
                            to call Oklahoma our home as we lead the charge in this exciting new era of space
                            exploration.
                        </p>
                    </div>
                    <div>
                        <Image
                            src={NativeAmericanInFrontOfRocketShip}
                            alt='Native American in front of rocket ship'
                            className='rounded-lg border border-accent-700 w-full max-w-md'
                        />
                    </div>
                </div>
            </ContentContainer>
        </div>
    )
}

export default About
