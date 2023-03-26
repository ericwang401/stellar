import styled from 'styled-components'
import { theme } from 'twin.macro'

const EKGContainer = styled.div`
    aspect-ratio: 2/1;
    position: relative;
    overflow: hidden;

    & .fade-in {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: ${theme('colors.accent.800')};
        top: 0;
        right: 0;
        animation: heartRateIn 2.5s linear infinite;
    }

    & .fade-out {
        position: absolute;
        width: 120%;
        height: 100%;
        top: 0;
        left: -120%;
        animation: heartRateOut 2.5s linear infinite;
        background: ${theme('colors.accent.800')};
        background: linear-gradient(
            to right,
            ${theme('colors.accent.800')} 0%,
            ${theme('colors.accent.800')} 80%,
            rgba(0, 0, 0, 0) 100%
        );
    }

    @keyframes heartRateIn {
        0% {
            width: 100%;
        }
        50% {
            width: 0;
        }
        100% {
            width: 0;
        }
    }

    @keyframes heartRateOut {
        0% {
            left: -120%;
        }
        30% {
            left: -120%;
        }
        100% {
            left: 0;
        }
    }
`

interface Props {
    className?: string
}

const EKG = (props: Props) => {
    return (
        <EKGContainer {...props}>
            <svg
                version='1.0'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                x='0px'
                y='0px'
                width='150px'
                height='73px'
                viewBox='0 0 150 73'
                enableBackground='new 0 0 150 73'
                xmlSpace='preserve'
            >
                <defs>
                    <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
                        <stop offset='0%' stopColor={theme('colors.purple.500')} />
                        <stop offset='50%' stopColor={theme('colors.fuchsia.500')} />
                        <stop offset='100%' stopColor={theme('colors.pink.500')} />
                    </linearGradient>
                </defs>
                <polyline
                    stroke='url(#gradient)'
                    strokeWidth='3'
                    strokeMiterlimit='10'
                    points='0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486'
                />
            </svg>
            <div className='fade-in'></div>
            <div className='fade-out'></div>
        </EKGContainer>
    )
}

export default EKG
