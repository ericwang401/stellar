import ContentContainer from 'components/ContentContainer'
import Odelia from 'assets/images/odelia.png'
import Image from 'next/image'

const Testimonial = () => {
    return (
        <ContentContainer includeYPadding>
            <h2 className='gradient-text font-bold text-4xl text-center'>The Best Breath-Taking Trip I Ever Had.</h2>
            <figure>
                <blockquote>
                    <p className='mt-6 max-w-3xl mx-auto text-lg text-center text-accent-300'>
                        I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS
                        is hard to maintain, but the truth is you’re never going to believe me until you actually try
                        it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll
                        wonder how you ever worked with CSS any other way.
                    </p>
                </blockquote>
                <figcaption className='mt-6 flex items-center justify-center space-x-4 text-left'>
                    <Image src={Odelia} alt='Odelia Fan' className='w-14 h-14 rounded-full' />
                    <div>
                        <div className='text-background font-semibold'>Odelia Fan</div>
                        <div className='text-accent-300 mt-0.5 text-sm'>Adventurist</div>
                    </div>
                </figcaption>
            </figure>
        </ContentContainer>
    )
}

export default Testimonial
