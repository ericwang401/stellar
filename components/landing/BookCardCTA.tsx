import Button from 'components/elements/Button'
import Image from 'next/image'
import Sheng from 'assets/images/sheng.jpg'
import ContentContainer from 'components/ContentContainer'


const BookCardCTA = () => {
    return (

        <ContentContainer includeYPadding>
            <div className='flex rounded-3xl border border-accent-700 bg-accent-800 p-14 w-full relative isolate overflow-hidden'>
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
                    fill-opacity='0.7'
                />
                <defs>
                    <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
                        <stop stop-color='#7775D6' />
                        <stop offset='1' stop-color='#E935C1' />
                    </radialGradient>
                </defs>
            </svg>
            <div className='shrink-0'>
                <h2 className='font-bold text-3xl sm:text-4xl gradient-text tracking-tight'>Ready to Book a Ticket?</h2>
                <p className='text-accent-300 text-lg mt-6 max-w-2xl'>
                    Albert loves cody. However cody couldn't reciprocate his feelings. Albert is a very nice person and
                    doesn't raise any further confrontation.
                </p>
                <div className='mt-10'>
                    <Button variant='solid' size='lg'>
                        Book now
                    </Button>
                </div>
            </div>
            <div>
                <Image src={Sheng} alt='Sheng' className='rounded w-[110rem]' />
            </div>
        </div>
        </ContentContainer>
    )
}

export default BookCardCTA
