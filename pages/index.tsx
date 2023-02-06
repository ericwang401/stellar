import Header from 'components/landing/Header'
import Testimonial from 'components/landing/Testimonial'
import LandingLayout from 'components/layouts/LandingLayout'
import { NextPageWithLayout } from 'pages/_app'

const Landing: NextPageWithLayout = () => {
    return (
        <div>
            <Header />
            <Testimonial />
        </div>
    )
}

Landing.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default Landing
