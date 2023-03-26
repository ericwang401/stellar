import LandingLayout from 'components/elements/layouts/LandingLayout'
import { NextPageWithLayout } from 'pages/_app'
import NewsArticle from 'components/elements/NewsArticle'
import AmusementPark from 'assets/images/amusement-park.png'

const HelpingTheWorldWithStellarShips: NextPageWithLayout = () => {
    return (
        <NewsArticle
            date={'May 8th, 2021'}
            title={'First-Ever Space-Themed Amusement Park'}
            image={AmusementPark}
            content={
                <>
                    Space tourism company Stellar has unveiled plans to create the first-ever space-themed amusement
                    park. The park, called "SpaceLand", will offer a range of thrilling rides and attractions inspired
                    by space exploration, science fiction, and futuristic technology.
                    <br />
                    <br />
                    Visitors to Stellar Adventures will be able to experience a variety of space-themed attractions,
                    including a simulated rocket launch, a zero-gravity roller coaster, and a spacewalk simulator. There
                    will also be interactive exhibits that showcase the latest advancements in space technology and
                    science.
                    <br />
                    <br />
                    Dr. Emily Liu, the CEO of Stellar, said, "We're thrilled to announce the launch of Stellar
                    Adventures, which will provide visitors with a unique and exciting way to experience the wonders of
                    space. We believe that this park will inspire the next generation of space enthusiasts and help to
                    promote the importance of space exploration."
                    <br />
                    <br />
                    Stellar Adventures is expected to generate significant interest and excitement among the public, as
                    more and more people become fascinated by space travel and exploration. The park is set to open in
                    the coming years, with plans to expand and add new attractions over time.
                </>
            }
        />
    )
}

HelpingTheWorldWithStellarShips.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default HelpingTheWorldWithStellarShips
