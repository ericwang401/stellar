import Header from 'components/landing/Header'
import Testimonial from 'components/landing/Testimonial'
import LandingLayout from 'components/elements/layouts/LandingLayout'
import { NextPageWithLayout } from 'pages/_app'
import Gallery from 'components/landing/Gallery'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import About from 'components/landing/About'
import Head from 'next/head'
import TheTrip from 'components/landing/TheTrip'

const Landing: NextPageWithLayout = () => {
    return (
        <div>
            <Header />
            <TheTrip />
            <Testimonial />
            <Gallery />
            <About />
        </div>
    )
}

Landing.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default Landing
