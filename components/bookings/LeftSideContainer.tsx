import TotalContainer from 'components/bookings/TotalContainer'
import styled from 'styled-components'
import tw from 'twin.macro'
import { FadeInRightAnimation, FadeInUpAnimation } from 'util/transitions'

const Container = styled.div`
    ${tw`flex flex-col`}

    animation-name: ${FadeInRightAnimation};
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-duration: .6s;
`


const LeftSideContainer = () => {
    return (
        <Container>
            <div className='bg-accent-700 h-[1px]' />
            <TotalContainer />
        </Container>
    )
}

export default LeftSideContainer
