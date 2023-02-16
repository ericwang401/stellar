import ContentContainer from 'components/ContentContainer';
import LandingLayout from 'components/elements/layouts/LandingLayout';
import { NextPageWithLayout } from 'pages/_app';

const Bookings: NextPageWithLayout = () => {
    return <>
    <div className='relative w-full h-[20rem] opacity-50 bg-gradient-to-b from-sky-800 to-accent-800 z-0' />
    <ContentContainer className='relative !pt-4 -mt-48 z-[1]' includeYPadding>
        <h1 className='font-semibold text-3xl pb-6'>Book Your Next Trip</h1>
    </ContentContainer>
</>
}

Bookings.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default Bookings;