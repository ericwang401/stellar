import LandingLayout from 'components/elements/layouts/LandingLayout'
import { NextPageWithLayout } from 'pages/_app'
import NewsArticle from 'components/elements/NewsArticle'
import RocketLaunch from 'assets/images/rocket-launch.jpeg'

const WeAreSupportingUkraine: NextPageWithLayout = () => {
    return (
        <NewsArticle
            date={'February 27th, 2022'}
            title={'We Are Supporting Ukraine'}
            image={RocketLaunch}
            content={
                <>
                    In recent years, space tourism has become an increasingly popular concept, with private companies
                    such as Stellar leading the way in making it a reality. But Stellar's commitment to making space
                    travel accessible to all goes beyond just providing an unforgettable experience. The company has
                    also shown a strong commitment to supporting communities and countries around the world, including
                    the country of Ukraine.
                    <br />
                    <br />
                    Ukraine is a country that has faced numerous challenges in recent years, including political unrest,
                    economic instability, and ongoing conflict in the eastern regions. In the face of these challenges,
                    the Ukrainian people have demonstrated resilience and a commitment to building a better future.
                    Stellar recognizes the importance of supporting these efforts and has taken steps to contribute to
                    the country's development.
                    <br />
                    <br />
                    Stellar has partnered with several Ukrainian organizations to support initiatives that promote
                    education, technology, and innovation. One such organization is the Ukrainian Space Industry
                    Association, which is dedicated to developing Ukraine's space industry and promoting international
                    cooperation in space tourism.
                    <br />
                    <br />
                    Stellar has also provided support to educational institutions in Ukraine, such as the Kyiv
                    Polytechnic Institute. The company has sponsored the development of a new laboratory at the
                    institute, which will provide students with hands-on experience in space-related technologies.
                    <br />
                    <br />
                    In addition to supporting educational initiatives, Stellar has also provided humanitarian aid to
                    Ukraine. In 2020, the company donated medical supplies to the country to help combat the COVID-19
                    pandemic. The donation included personal protective equipment, ventilators, and other critical
                    medical supplies.
                    <br />
                    <br />
                    Stellar's commitment to supporting Ukraine demonstrates the company's dedication to using space
                    tourism as a tool for positive change. By supporting education, technology, and innovation, Stellar
                    is helping to build a better future for the people of Ukraine and promoting international
                    cooperation in space tourism.
                    <br />
                    <br />
                    Moreover, Stellar's support for Ukraine reflects a broader trend in the space industry towards using
                    space tourism as a tool for positive change. As private space companies continue to push the
                    boundaries of what is possible in space travel, they are also recognizing the importance of using
                    their resources to support communities and countries around the world.
                    <br />
                    <br />
                    In conclusion, Stellar's commitment to supporting Ukraine is a wonderful example of the positive
                    impact that private space companies can have on communities and countries around the world. By
                    investing in education, technology, and innovation, and providing critical aid when needed, Stellar
                    is demonstrating that involvement in space tourism can be a force for good in the world.
                </>
            }
        />
    )
}

WeAreSupportingUkraine.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default WeAreSupportingUkraine
