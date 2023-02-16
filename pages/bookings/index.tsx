import ContentContainer from 'components/ContentContainer'
import LandingLayout from 'components/elements/layouts/LandingLayout'
import MessageBox from 'components/elements/MessageBox'
import { NextPageWithLayout } from 'pages/_app'

const Bookings: NextPageWithLayout = () => {
    return (
        <>
            <div className='relative w-full h-[20rem] opacity-50 bg-gradient-to-b from-sky-800 to-accent-800 z-0' />
            <ContentContainer className='relative !pt-4 -mt-48 z-[1]' includeYPadding>
                <h1 className='font-semibold text-3xl pb-4 tracking-tight'>Book Your Next Trip</h1>
                <h2 className='text-xl pb-8'>Available Bookings</h2>
                <MessageBox type='warning' title='Limited Bookings' className='mb-4'>
                    Due to recent foreign objects in U.S. airspace. Travel has been limited. We are trying our best to
                    scale up our operations.
                </MessageBox>
                <div className='flex flex-col gap-3'>
                    <div className='rounded-lg border border-accent-700 bg-foreground px-6 py-4'>
                        <span className='font-medium text-base'>March 18th, 2023</span>
                        <p className='text-sm text-accent-300'>Stillwater Facility</p>
                    </div>
                    <div className='rounded-lg border border-accent-700 bg-foreground px-6 py-4'>
                        <span className='font-medium text-base'>July 4th, 2023</span>
                        <p className='text-sm text-accent-300'>Oklahoma City Facility </p>
                    </div>
                </div>
            </ContentContainer>
        </>
    )
}

Bookings.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default Bookings
