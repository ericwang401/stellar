import LandingLayout from 'components/elements/layouts/LandingLayout'
import { Heading } from 'components/landing/Header'
import { NextPageWithLayout } from 'pages/_app'
import Hero from 'components/about-us/Hero'
import About from 'components/landing/About'
import Timeline from 'components/about-us/Timeline'
import ContactUs from 'components/about-us/ContactUs'


const AboutUs: NextPageWithLayout = () => {
    return (
        <div className='flex flex-col'>
            <Hero />

            <About />

            <Timeline />

            <ContactUs />
        </div>
    )
}

AboutUs.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default AboutUs
