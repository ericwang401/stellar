import LandingLayout from 'components/elements/layouts/LandingLayout';
import Hero from 'components/safety/Hero';
import SpotlessRecord from 'components/safety/SpotlessRecord';
import { NextPageWithLayout } from 'pages/_app';

const Safety: NextPageWithLayout = () => {
    return <>
        <Hero />
        <SpotlessRecord />
    </>
}

Safety.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default Safety;