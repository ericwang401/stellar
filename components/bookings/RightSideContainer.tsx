import HealthCheckStep from 'components/bookings/HealthCheckStep';
import { Container } from 'components/bookings/LeftSideContainer';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FadeInLeftAnimation, FadeInUpAnimation } from 'util/transitions';

const RightContainer = styled(Container)`
${tw`bg-accent-800 px-4 sm:px-6 lg:pr-8 min-h-[40rem]`}

animation-name: ${FadeInUpAnimation};

@media (min-width: 768px) {
    animation-name: ${FadeInLeftAnimation};
}
`

const RightSideContainer = () => {
    return <RightContainer>
        <HealthCheckStep />


    </RightContainer>
}

export default RightSideContainer;