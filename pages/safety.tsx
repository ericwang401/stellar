import LandingLayout from 'components/elements/layouts/LandingLayout';
import Hero from 'components/safety/Hero';
import RocketFeatures from 'components/safety/RocketFeatures';
import SpotlessRecord from 'components/safety/SpotlessRecord';
import { NextPageWithLayout } from 'pages/_app';

const Safety: NextPageWithLayout = () => {
    return <>
        <Hero />
        <RocketFeatures />
        <SpotlessRecord />
    </>
}

Safety.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default Safety;