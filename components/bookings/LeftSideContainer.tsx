import TotalContainer from 'components/bookings/TotalContainer'
import styled from 'styled-components'
import tw from 'twin.macro'
import { FadeInDownAnimation, FadeInRightAnimation, FadeInUpAnimation } from 'util/transitions'

export const Container = styled.div`
    ${tw`flex flex-col py-12 md:py-0`}

    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-duration: .6s;
`

const LeftContainer = styled(Container)`
${tw`px-4 sm:px-6 lg:pl-8 md:min-h-[40rem]`}
animation-name: ${FadeInDownAnimation};

@media (min-width: 768px) {
    animation-name: ${FadeInRightAnimation};
}
`


const LeftSideContainer = () => {
    return (
        <LeftContainer>
            <div className='hidden md:block bg-accent-700 h-[1px]' />
            <TotalContainer />
        </LeftContainer>
    )
}

export default LeftSideContainer
