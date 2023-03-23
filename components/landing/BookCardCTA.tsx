import Button from 'components/elements/Button'
import Image from 'next/image'
import Sheng from 'assets/images/sheng.jpg'
import ContentContainer from 'components/ContentContainer'
import Link from 'next/link'
import Ticket from 'assets/images/ticket.png'

const BookCardCTA = () => {
    return (
        <ContentContainer includeYPadding>
            <div className='flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-start rounded-lg border border-accent-700 bg-accent-800  lg:gap-x-20 pb-0 lg:pb-14 pt-14 px-14 w-full relative isolate overflow-hidden'>
                <svg
                    viewBox='0 0 1024 1024'
                    className='absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-y-24 lg:-translate-x-1/3'
                    aria-hidden='true'
                >
                    <circle
                        cx='512'
                        cy='512'
                        r='512'
                        fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
                        fillOpacity='0.7'
                    />
                    <defs>
                        <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
                            <stop stopColor='#7775D6' />
                            <stop offset='1' stopColor='#E935C1' />
                        </radialGradient>
                    </defs>
                </svg>
                <div>
                    <h2 className='font-bold text-3xl sm:text-4xl gradient-text tracking-tight max-lg:mx-auto '>
                        Ready to Book a Ticket?
                    </h2>
                    <p className='text-accent-300 text-lg mt-6 max-w-lg '>
                        Are you ready for the ultimate adventure? Whether you're a seasoned space enthusiast or a
                        first-time adventurer, we have something for everyone. So, why wait? Book your space travel ticket today
                        and join us on an unforgettable journey to the final frontier. It's time to reach for the stars
                        and explore the vast unknown. We can't wait to have you on board!
                    </p>
                    <div className='mt-10'>
                        <Link href='/bookings'>
                            <Button as='span' variant='solid' size='lg'>
                                Book now
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className='h-80 mt-16 self-start lg:self-auto relative'>
                    <Image
                        src={Ticket}
                        alt='Sheng'
                        className='absolute rounded-l-3xl max-w-2xl md:max-w-4xl lg:max-w-xl '
                    />
                </div>
            </div>
        </ContentContainer>
    )
}

export default BookCardCTA
