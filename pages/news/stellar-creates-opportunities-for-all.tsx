import LandingLayout from 'components/elements/layouts/LandingLayout'
import { NextPageWithLayout } from 'pages/_app'
import NewsArticle from 'components/elements/NewsArticle'
import RocketLaunch from 'assets/images/rocket-launch.jpeg'

const HelpingTheWorldWithStellarShips: NextPageWithLayout = () => {
    return (
        <NewsArticle
            date={'October 28th, 2018'}
            title={'Stellar Creates Opportunities For All'}
            image={RocketLaunch}
            content={
                <>
                    Stellar has announced the launch of a new program to train aspiring astronauts for future missions
                    to space. The program, called "Stellar Academy", will provide participants with the skills and
                    knowledge needed to become successful space explorers.
                    <br />
                    <br />
                    The academy will offer a range of courses, including basic astronaut training, space science, and
                    engineering. Participants will also have the opportunity to train in simulated zero-gravity
                    environments, learn about the challenges of long-duration spaceflight, and take part in mission
                    simulations.
                    <br />
                    <br />
                    Dr. Liu, the CEO of Stellar, said, "We believe that the future of space exploration depends on
                    training a new generation of talented and skilled astronauts. Our new program will provide
                    participants with the tools and knowledge they need to succeed in this exciting field."
                    <br />
                    <br />
                    The program is open to individuals from a range of backgrounds, including students, professionals,
                    and space enthusiasts. Applicants will need to undergo a rigorous selection process to ensure they
                    are physically and mentally capable of handling the challenges of spaceflight.
                    <br />
                    <br />
                    Successful graduates of the program will have the opportunity to apply for future missions with
                    Stellar and other space tourism companies, making this a truly unique and exciting opportunity for
                    those looking to explore the final frontier.
                </>
            }
        />
    )
}

HelpingTheWorldWithStellarShips.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default HelpingTheWorldWithStellarShips
