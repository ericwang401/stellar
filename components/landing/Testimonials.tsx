import ContentContainer from 'components/ContentContainer'
import FrostedCard from 'components/elements/FrostedCard'
import AlexandraJohnson from 'assets/images/alexandra-johnson.jpg'
import BorisDiaw from 'assets/images/boris-diaw.jpg'
import EmilyWong from 'assets/images/emily-wong.jpg'
import RyanRockload from 'assets/images/ryan-rockload.jpg'
import Image from 'next/image'

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Alexandra Johnson',
            quote: 'My experience with Stellar was absolutely incredible! The team was professional, knowledgeable, and passionate about space travel. I felt safe and confident during the suborbital flight and the views were breathtaking. I would highly recommend Stellar to anyone interested in a unique and unforgettable space tourism experience.',
            image: AlexandraJohnson,
        },
        {
            name: 'Boris Diaw',
            quote: 'I recently returned from an extended stay on the Stellar Gateway with Stellar and it was an incredible experience. The team was professional and knowledgeable, and the training and accommodations were top-notch. I highly recommend Stellar to anyone who wants to experience the wonder of space travel!',
            image: BorisDiaw,
        },
        {
            name: 'Emily Wong',
            quote: 'My suborbital flight with Stellar was a dream come true! The team was incredibly knowledgeable and made me feel safe and comfortable throughout the entire experience. The views from space were absolutely stunning and something that I will remember for the rest of my life. Thank you, Stellar, for an unforgettable adventure!',
            image: EmilyWong,
        },
        // {
        //     name: 'Ryan Rockload',
        //     quote: 'My experience with Stellar was nothing short of amazing! From the moment I contacted them, the team was professional and accommodating. The suborbital flight was an unforgettable experience and the views of Earth from space were breathtaking. I highly recommend Stellar to anyone who wants to experience the wonder of space travel!',
        //     image: RyanRockload,
        // },
    ]

    return (
        <ContentContainer includeYPadding>
            <div>
                <h2 className='gradient-text font-bold text-3xl sm:text-4xl tracking-tight max-w-2xl'>
                    What Our Other Customers Are Saying
                </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
                {testimonials.map((testimonial, index) => (
                    <FrostedCard className='grow' as='figure' key={testimonial.name}>
                        <div className='flex flex-col justify-between gap-4 relative z-[2] h-full'>
                            <blockquote className='text-accent-300'>{testimonial.quote}</blockquote>
                            <div className='flex items-center gap-4 mt-auto'>
                                <Image
                                    className='rounded-full w-12 h-12'
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                />
                                <figcaption className='font-semibold'>{testimonial.name}</figcaption>
                            </div>
                        </div>
                    </FrostedCard>
                ))}
            </div>
        </ContentContainer>
    )
}

export default Testimonials
