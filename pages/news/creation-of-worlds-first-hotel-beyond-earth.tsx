import LandingLayout from 'components/elements/layouts/LandingLayout'
import { NextPageWithLayout } from 'pages/_app'
import NewsArticle from 'components/elements/NewsArticle'
import RocketLaunch from 'assets/images/rocket-launch.jpeg'

const HelpingTheWorldWithStellarShips: NextPageWithLayout = () => {
    return (
        <NewsArticle
            date={'June 4th, 2017'}
            title={"Creation of World's First Hotel Beyond Earth"}
            image={RocketLaunch}
            content={
                <>
                    Space tourism company Stellar has announced its plans to launch an ambitious project to build a
                    luxury space hotel that will orbit the Earth. The project, which is expected to take several years
                    to complete, will feature a state-of-the-art hotel that will offer guests breathtaking views of the
                    planet and the stars beyond.
                    <br />
                    <br />
                    The hotel will be designed to accommodate up to 100 guests at a time and will feature all of the
                    amenities and luxuries that one would expect from a high-end hotel on Earth, including gourmet
                    dining, spa services, and entertainment options. Guests will also be able to take part in a range of
                    activities, such as spacewalks and astronaut training, making for a truly unforgettable experience.
                    <br />
                    <br />
                    Stellar CEO, Dr. Emily Liu, said, "We are thrilled to announce our plans for the first-ever space
                    hotel, which will offer an unparalleled experience for guests looking to explore the final frontier.
                    This is a major milestone for the space tourism industry and a testament to the incredible advances
                    we have made in space technology in recent years."
                    <br />
                    <br />
                    Construction on the space hotel is set to begin in the coming years, with the goal of opening to the
                    public by 2030. The project is expected to generate significant interest and excitement among the
                    public, as space tourism continues to emerge as a viable industry with limitless possibilities.
                </>
            }
        />
    )
}

HelpingTheWorldWithStellarShips.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default HelpingTheWorldWithStellarShips
