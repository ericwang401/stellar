import Header from 'components/landing/Header'
import Testimonial from 'components/landing/Testimonial'
import LandingLayout from 'components/elements/layouts/LandingLayout'
import { NextPageWithLayout } from 'pages/_app'
import Gallery from 'components/landing/Gallery'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const Landing: NextPageWithLayout = () => {
    return (
        <div>
            <Parallax pages={3}>
                <ParallaxLayer speed={0.9}>
                    <Header />
                </ParallaxLayer>

                <ParallaxLayer offset={0.8} speed={0.7}>
                    <Testimonial />
                    <Gallery />
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

Landing.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default Landing
