import Header from 'components/landing/Header'
import Testimonial from 'components/landing/Testimonial'
import LandingLayout from 'components/elements/layouts/LandingLayout'
import { NextPageWithLayout } from 'pages/_app'
import Gallery from 'components/landing/Gallery'
import TheTrip from 'components/landing/TheTrip'
import BookCardCTA from 'components/landing/BookCardCTA'
import Safety from 'components/landing/Safety'
import Testimonials from 'components/landing/Testimonials'

const Landing: NextPageWithLayout = () => {
    return (
        <div>
            <Header />
            <TheTrip />
            <Safety />
            <Testimonial />
            <Gallery />
            <Testimonials />
            <BookCardCTA />
        </div>
    )
}

Landing.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default Landing
