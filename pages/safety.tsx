import LandingLayout from 'components/elements/layouts/LandingLayout';
import Hero from 'components/safety/Hero';
import { NextPageWithLayout } from 'pages/_app';

const Safety: NextPageWithLayout = () => {
    return <>
        <Hero />
    </>
}

Safety.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default Safety;