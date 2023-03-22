import { keyframes } from 'styled-components';

export const FadeInAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

export const FadeInUpAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

export const FadeInDownAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-100px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

export const FadeInLeftAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateX(100px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`

export const FadeInRightAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`

export const HideAnimation = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`