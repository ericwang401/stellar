import styled from 'styled-components';
import tw from 'twin.macro';

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
`;

export default FrostedCard