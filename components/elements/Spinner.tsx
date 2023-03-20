import type { FC, ReactNode } from 'react';
import styled, { css, keyframes } from 'styled-components';
import tw from 'twin.macro';

import { classNames } from 'util/helpers';

export type SpinnerSize = 'small' | 'base' | 'large';

interface Props {
    children?: ReactNode;

    size?: SpinnerSize;
    centered?: boolean;
    isBlue?: boolean;
}

const spin = keyframes`
    to { transform: rotate(360deg); }
`;

const SpinnerComponent = styled.div<Props>`
    ${tw`w-8 h-8`};
    border-width: 3px;
    border-radius: 50%;
    animation: ${spin} 1s cubic-bezier(0.55, 0.25, 0.25, 0.7) infinite;

    ${props =>
        props.size === 'small'
            ? tw`w-4 h-4 border-2`
            : props.size === 'large'
            ? css`
                  ${tw`w-16 h-16`};
                  border-width: 6px;
              `
            : null};

    border-color: ${props => (!props.isBlue ? 'rgba(255, 255, 255, 0.2)' : 'hsla(212, 92%, 43%, 0.2)')};
    border-top-color: ${props => (!props.isBlue ? 'rgb(255, 255, 255)' : 'hsl(212, 92%, 43%)')};
`;

const Spinner = ({ centered, ...props }: Props) =>
    centered ? (
        <div className={classNames('flex justify-center items-center', props.size === 'large' ? 'm-20' : 'm-6')}>
            <SpinnerComponent {...props} />
        </div>
    ) : (
        <SpinnerComponent {...props} />
    );

export default Spinner;