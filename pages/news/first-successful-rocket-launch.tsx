import LandingLayout from 'components/elements/layouts/LandingLayout'
import { NextPageWithLayout } from 'pages/_app'
import NewsArticle from 'components/elements/NewsArticle'
import RocketLaunch from 'assets/images/rocket-launch.jpeg'

const FirstSuccessfulRocketLaunch: NextPageWithLayout = () => {
    return (
        <NewsArticle
            date={'March 14th, 1998'}
            title={'First Successful Rocket Launch'}
            image={RocketLaunch}
            content={
                <>
                    In a historic event, the private space company Stellar successfully launched their latest spaceship
                    into orbit. The launch marks a significant milestone for the company, as it demonstrates their
                    capability to compete with established space agencies in the field of astronautics.
                    <br />
                    <br />
                    Stellar has been in the space industry for several years and has made remarkable strides in the
                    field of astronautics. The company has been at the forefront of developing innovative technologies
                    and has continuously pushed the boundaries of what is possible. Their latest achievement, the
                    successful launch of their spaceship, is a testament to their hard work and dedication.
                    <br />
                    <br />
                    The spaceship, named Stellar One, is a cutting-edge spacecraft that uses advanced technologies to
                    travel through space. It is equipped with state-of-the-art engines, control systems, and scientific
                    instruments, making it one of the most advanced spaceships ever built. The design of the spaceship
                    is a result of years of research, development, and testing by a team of experts in the field of
                    astronautics.
                    <br />
                    <br />
                    The launch of Stellar 1 was not an easy feat. The spaceship had to overcome the gravitational pull
                    of the earth and reach a specific altitude to enter orbit successfully. The engineers and scientists
                    at Stellar meticulously planned every detail of the launch to ensure its success. They conducted
                    several tests and simulations before the launch to identify any potential issues and address them.
                    <br />
                    <br />
                    The launch itself was a spectacle to behold. On a clear day, the spaceship was transported to the
                    launchpad, where it was attached to the rocket that would propel it into space. The countdown began,
                    and the tension in the air was palpable. As the countdown reached zero, the engines roared to life,
                    and the spaceship blasted off into the sky, leaving a trail of smoke behind it.
                    <br />
                    <br />
                    The success of Stellar 1's launch is not just a technological achievement but also a significant
                    step forward for private space tourism. It proves that private companies can compete with
                    established space agencies in the field of spacecraft design and push the boundaries of what is
                    possible.
                    <br />
                    <br />
                    Stellar's achievement inspires people around the world to dream big and pursue their goals. It shows
                    that with hard work, dedication, and innovation, anything is possible. The launch of Stellar 1 is
                    just the beginning of a new era of space tourism.
                    <br />
                    <br />
                    In conclusion, the successful launch of Stellar's spaceship is a wonderful success story that
                    demonstrates the remarkable achievements of private space companies in the field of astronautics. It
                    is a testament to the power of human ingenuity and determination and a sign of the exciting future
                    that awaits us in space.
                </>
            }
        />
    )
}

FirstSuccessfulRocketLaunch.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default FirstSuccessfulRocketLaunch
