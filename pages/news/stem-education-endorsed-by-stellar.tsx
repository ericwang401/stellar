import LandingLayout from 'components/elements/layouts/LandingLayout'
import { NextPageWithLayout } from 'pages/_app'
import NewsArticle from 'components/elements/NewsArticle'
import RocketLaunch from 'assets/images/rocket-launch.jpeg'

const HelpingTheWorldWithStellarShips: NextPageWithLayout = () => {
    return (
        <NewsArticle
            date={'February 23th, 2023'}
            title={'STEM Education endorsed by Stellar'}
            image={RocketLaunch}
            content={
                <>
                    Stellar has announced a new program aimed at promoting education and scientific literacy among young
                    people. The program, called "Pathfinders", will provide funding and resources for students to pursue
                    careers in space-related fields and support STEM education initiatives in schools.
                    <br />
                    <br />
                    Stellar Scholars will offer scholarships, internships, and mentorship opportunities to students who
                    are interested in pursuing careers in space exploration, space tourism, and related fields. The
                    program will also work with schools and educational organizations to develop innovative STEM
                    education programs that inspire and engage students.
                    <br />
                    <br />
                    Dr. Emily Liu, the CEO of Stellar, said, "We believe that education is the key to unlocking the
                    potential of space exploration and inspiring the next generation of space enthusiasts. That's why
                    we're thrilled to launch Stellar Scholars, which will provide young people with the support and
                    resources they need to pursue their dreams."
                    <br />
                    <br />
                    Stellar Scholars is expected to generate significant interest and support from the public, as more
                    and more people recognize the importance of promoting scientific literacy and education in the
                    fields of space exploration and tourism. The program is set to launch in the coming months, with
                    plans to expand and add new initiatives over time.
                </>
            }
        />
    )
}

HelpingTheWorldWithStellarShips.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default HelpingTheWorldWithStellarShips
