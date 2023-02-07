import ContentContainer from 'components/ContentContainer'
import Odelia from 'assets/images/odelia.png'
import Image from 'next/image'

const Testimonial = () => {
    return (
        <ContentContainer includeYPadding>
            <h2 className='gradient-text font-bold text-3xl sm:text-4xl text-center tracking-tight'>Life-Changing Experience with Moon Tour!</h2>
            <figure>
                <blockquote>
                    <p className='mt-6 max-w-3xl mx-auto text-lg text-center text-accent-300'>
                        I never thought I&apos;d get the opportunity to visit the moon, but with Stellar, I was able to make
                        that dream a reality. The trip was unlike anything I&apos;ve ever experienced - from the breathtaking
                        views of Earth to the weightlessness of walking on the lunar surface. I highly recommend this
                        company to anyone looking for an unforgettable journey. Thank you for making my dream come true!
                    </p>
                </blockquote>
                <figcaption className='mt-6 flex items-center justify-center space-x-4 text-left'>
                    <Image src={Odelia} alt='Odelia Fan' className='w-14 h-14 rounded-full' />
                    <div>
                        <div className='text-background font-semibold'>Odelia Fan</div>
                        <div className='text-accent-300 mt-0.5 text-sm'>Traveler</div>
                    </div>
                </figcaption>
            </figure>
        </ContentContainer>
    )
}

export default Testimonial
