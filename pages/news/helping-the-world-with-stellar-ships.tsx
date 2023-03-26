import LandingLayout from 'components/elements/layouts/LandingLayout'
import { NextPageWithLayout } from 'pages/_app'
import NewsArticle from 'components/elements/NewsArticle'
import HelpingOtherCountries from 'assets/images/helping-other-countries.png'

const HelpingTheWorldWithStellarShips: NextPageWithLayout = () => {
    return (
        <NewsArticle
            date={'September 14th, 2015'}
            title={'Helping the World with Stellar Ships'}
            image={HelpingOtherCountries}
            content={
                <>
                    Stellar, a leading space tourism company, has been making waves in the space industry with its
                    innovative approach to space exploration. While the company is primarily known for its space tourism
                    offerings, it has also been using its spacecraft to study other countries on Earth, providing
                    valuable insights into global events and phenomena.
                    <br />
                    <br />
                    Stellar's spacecraft are equipped with advanced imaging and sensing technologies, allowing the
                    company to gather a wealth of information about the Earth's surface and atmosphere. This information
                    can be used to study weather patterns, natural disasters, environmental changes, and even political
                    events in other countries.
                    <br />
                    <br />
                    One example of Stellar's use of its spacecraft for studying other countries on Earth is its
                    collaboration with a leading research institution in the United States to monitor oceanic currents
                    and their impact on marine ecosystems. Stellar's spacecraft have provided high-resolution imagery of
                    the world's oceans, which has helped researchers gain a better understanding of how ocean currents
                    are changing and how this is affecting marine life.
                    <br />
                    <br />
                    Stellar has also used its spacecraft to study natural disasters and their impact on communities in
                    other countries. In 2018, when a powerful earthquake struck Indonesia, Stellar's spacecraft were
                    able to capture detailed images of the affected areas, which helped relief organizations on the
                    ground assess the damage and plan their response.
                    <br />
                    <br />
                    Moreover, Stellar's spacecraft have also been used to study political events in other countries,
                    providing valuable insights into geopolitical developments. In 2019, Stellar captured images of the
                    North Korean missile test, providing critical intelligence to governments around the world about
                    North Korea's missile capabilities.
                    <br />
                    <br />
                    While Stellar's use of its spacecraft to study other countries on Earth is not its primary focus, it
                    is a testament to the versatility and capabilities of the company's technology. By using its
                    spacecraft to gather valuable information about the Earth and its inhabitants, Stellar is making a
                    significant contribution to scientific research and global understanding.
                    <br />
                    <br />
                    In conclusion, Stellar's use of its spacecraft to study other countries on Earth is a remarkable
                    demonstration of the company's commitment to advancing scientific research and understanding. As
                    Stellar continues to push the boundaries of what is possible in space exploration, its innovative
                    use of its spacecraft highlights the tremendous potential of space technology to improve life on
                    Earth.
                </>
            }
        />
    )
}

HelpingTheWorldWithStellarShips.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default HelpingTheWorldWithStellarShips
