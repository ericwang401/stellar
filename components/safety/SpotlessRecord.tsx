import ContentContainer from 'components/ContentContainer'
import styled from 'styled-components'
import tw from 'twin.macro'
import Microsoft from 'assets/images/microsoft.svg'
import Image from 'next/image'
import Nasa from 'assets/images/nasa.svg'

const FrostedCard = styled.div`
    ${tw`relative border border-accent-700 rounded-lg px-8 py-6`}

    &:before {
        content: '';
        width: 150px;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        z-index: 1;
        background: linear-gradient(270deg, transparent, hsla(0, 0%, 6%, 0.9));
    }

    &:after {
        content: '';
        background: linear-gradient(90deg, transparent, hsla(0, 0%, 6%, 0.9));
        width: 150px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
    }
`

const SpotlessRecord = () => {
    return (
        <ContentContainer includeYPadding>
            <div className='flex flex-col lg:flex-row gap-24 justify-between'>
                <div>
                    <h2 className='gradient-text font-bold text-3xl sm:text-4xl tracking-tight max-w-2xl'>
                        Stellar Safety Record
                    </h2>
                    <p className='mt-4 max-w-2xl text-accent-300'>
                        Stellar has a flawless safety record, having operated for over 30 years without any incidents.
                        Our safety protocols are rigorous and we have a highly trained team dedicated to ensuring the
                        safety and security of our passengers. We take every precaution to mitigate potential risks, and
                        our commitment to safety is unwavering. You can rest assured that your journey with Stellar will
                        be a safe and enjoyable experience. If you don't believe us, we have many prominent companies who are partnered with us.
                    </p>
                </div>
                <FrostedCard className='flex flex-col items-center w-full lg:w-96'>
                    <p className='gradient-text text-7xl font-semibold'>Zero</p>
                    <p className='text-accent-300 text-center max-w-2xl mt-2'>
                        fatalities & accidents during our 30 year operation.
                    </p>
                </FrostedCard>
            </div>
            <div className='flex justify-between py-24'>
                <Image src={Microsoft} alt='Microsoft' className='grayscale w-36' />
                <Image src={Nasa} alt='NASA' className='grayscale w-16' />
            </div>
        </ContentContainer>
    )
}

export default SpotlessRecord
