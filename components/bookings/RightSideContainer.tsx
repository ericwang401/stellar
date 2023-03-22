import ConfirmationStep from 'components/bookings/ConfirmationStep';
import HealthCheckStep from 'components/bookings/HealthCheckStep';
import { Container } from 'components/bookings/LeftSideContainer';
import PaymentStep from 'components/bookings/PaymentStep';
import { BookingContext } from 'pages/bookings/[bookingId]';
import { useContext } from 'react';
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
    const { step } = useContext(BookingContext)

    return <RightContainer>
        { step === 'health_check' && <HealthCheckStep />}
        { step === 'payment' && <PaymentStep />}
        { step === 'confirmation' && <ConfirmationStep />}
    </RightContainer>
}

export default RightSideContainer;