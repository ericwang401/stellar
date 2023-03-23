import ContentContainer from 'components/ContentContainer'
import styled from 'styled-components'
import tw from 'twin.macro'

const FrostedCard = styled.div`
${tw`relative border border-accent-700 rounded-lg px-8 py-3`}

&:before {
    content: '';
    width: 150px;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1;
    background: linear-gradient(270deg,transparent,hsla(0,0%,6%,.9));
}

&:after {
    content: '';
    background: linear-gradient(90deg,transparent,hsla(0,0%,6%,.9));
    width: 150px;
    height: 100%;
    top: 0;
    right: 0;
    z-index: 1;
}
`

const SpotlessRecord = () => {
    return (
        <ContentContainer className='py-72'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='gradient-text font-bold text-3xl sm:text-4xl tracking-tight max-w-2xl'>
                        Stellar Safety Record
                    </h2>
                    <p className='mt-4 max-w-2xl text-accent-300'>
                        Stellar has the best safety record out of all forms of transportation and all attempts of space
                        travel in the past.
                    </p>
                </div>
                <FrostedCard className='w-96'>

                </FrostedCard>
            </div>
        </ContentContainer>
    )
}

export default SpotlessRecord
