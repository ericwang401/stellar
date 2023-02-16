import LandingLayout from 'components/elements/layouts/LandingLayout'
import { NextPageWithLayout } from 'pages/_app'
import NewsArticle from 'components/elements/NewsArticle'
import RocketLaunch from 'assets/images/rocket-launch.jpeg'

const FirstSuccessfulRocketLaunch: NextPageWithLayout = () => {
    return (
        <NewsArticle
            date={'March 14th, 2018'}
            title={'First Successful Rocket Launch'}
            image={RocketLaunch}
            content={<>
                Test
            </>}
        />
    )
}

FirstSuccessfulRocketLaunch.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default FirstSuccessfulRocketLaunch
