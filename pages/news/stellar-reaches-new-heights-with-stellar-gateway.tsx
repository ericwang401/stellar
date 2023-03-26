import LandingLayout from 'components/elements/layouts/LandingLayout'
import { NextPageWithLayout } from 'pages/_app'
import NewsArticle from 'components/elements/NewsArticle'
import StellarGateway from 'assets/images/stellar-gateway.png'

const HelpingTheWorldWithStellarShips: NextPageWithLayout = () => {
    return (
        <NewsArticle
            date={'November 27th, 2021'}
            title={'Stellar Reaches New Heights with Stellar Gateway'}
            image={StellarGateway}
            content={
                <>
                    Stellar has built a new space station that will serve as a hub for space tourism and research. The
                    space station, named "Stellar Gateway", was designed to accommodate both tourists and researchers,
                    and offers a range of cutting-edge facilities and amenities. Stellar Gateway is also equipped with
                    state-of-the-art laboratories, research facilities, and living quarters for long-duration space
                    missions.
                    <br />
                    Dr. Emily Liu, the CEO of Stellar, said, "We're excited to announce Stellar Gateway, which serves as
                    a gateway to the stars for both researchers and tourists. We believe that this space station will
                    open up new opportunities for space recreation and inspire the next generation of space
                    enthusiasts."
                    <br />
                    <br />
                    Stellar Gateway is expected to generate significant interest and investment from both public and
                    private sectors, as more and more people recognize the potential of space tourism and research. The
                    project took several years to complete, and missions just recently started launching.
                    <br />
                    <br />
                    This new space station represents a major milestone for Stellar and a significant step forward in
                    the development of space tourism and exploration. With the launch of Stellar Gateway, Stellar is
                    poised to become a leader in the new era of space travel and innovation.
                </>
            }
        />
    )
}

HelpingTheWorldWithStellarShips.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default HelpingTheWorldWithStellarShips
