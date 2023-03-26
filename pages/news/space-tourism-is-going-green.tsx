import LandingLayout from 'components/elements/layouts/LandingLayout'
import { NextPageWithLayout } from 'pages/_app'
import NewsArticle from 'components/elements/NewsArticle'
import GoingGreen from 'assets/images/going-green.png'

const FirstSuccessfulRocketLaunch: NextPageWithLayout = () => {
    return (
        <NewsArticle
            date={'January 11th, 2019'}
            title={'Space Tourism is Going Green'}
            image={GoingGreen}
            content={
                <>
                    Stellar has announced a new initiative to promote sustainable tourism practices in space. The
                    initiative, called "Stellar EcoSpace", aims to reduce the environmental impact of space tourism and
                    preserve the natural beauty of space for future generations.
                    <br />
                    <br />
                    The EcoSpace initiative will focus on developing and implementing sustainable technologies and
                    practices for space tourism. This will include the use of renewable energy sources, recycling and
                    waste management systems, and responsible use of natural resources.
                    <br />
                    <br />
                    Dr. Liu, the CEO of Stellar, said, "We recognize that space tourism has the potential to impact the
                    fragile ecosystem of space. That's why we're committed to promoting sustainable practices that will
                    ensure that space remains a beautiful and pristine environment for generations to come."
                    <br />
                    <br />
                    The initiative is expected to generate significant interest and support from the public, as more and
                    more people become concerned about the impact of human activity on the environment. It is also
                    likely to inspire other space tourism companies to follow suit and adopt similar sustainable
                    practices.
                    <br />
                    <br />
                    Stellar is already taking steps to reduce its carbon footprint on Earth, and the EcoSpace initiative
                    represents a natural extension of its commitment to environmental stewardship. With the launch of
                    this new program, Stellar is poised to become a leader in sustainable space tourism and pave the way
                    for a more responsible and environmentally conscious future in space.
                </>
            }
        />
    )
}

FirstSuccessfulRocketLaunch.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default FirstSuccessfulRocketLaunch
