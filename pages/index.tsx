import Header from 'components/landing/Header'
import LandingLayout from 'components/layouts/LandingLayout'
import { NextPageWithLayout } from 'pages/_app'

const Landing: NextPageWithLayout = () => {
    return (
        <div>
            <Header />
        </div>
    )
}

Landing.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default Landing
