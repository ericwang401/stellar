import styled, { css } from 'styled-components';
import tw from 'twin.macro';

export interface ButtonProps {
    variant?: 'flat' | 'outline' | 'solid'
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    color?: 'accent'
}

const getColorStyles = ({variant, color}: ButtonProps) => {
    if (variant === 'solid') {
        switch (color) {
            default:
                return tw`text-foreground bg-accent-200 sm:hover:bg-background ring-accent-400 ring-0 active:ring-[3px]  active:bg-accent-100 sm:active:bg-accent-100`
        }
    }
    switch (color) {
        default:
            return tw`text-background sm:hover:bg-accent-600 active:bg-accent-600 sm:active:bg-transparent`
    }
}

const getSizeStyles = ({size}: ButtonProps) => {
    switch (size) {
        case 'sm':
            return tw`px-3.5 py-2 text-sm`
        default: // md
            return tw`px-4 py-2.5 text-sm`
        case 'lg':
            return tw`px-[18px] py-2.5 text-base`
        case 'xl':
            return tw`px-5 py-3 text-base`
        case '2xl':
            return tw`px-7 py-4 text-lg`
    }
}

const Button = styled.button<ButtonProps>`
${tw`font-semibold rounded-lg`}

transition-property: color, background-color, border-color, box-shadow,
text-decoration-color, fill, stroke;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms;

${(props) => css`${getSizeStyles(props)}`}
${(props) => css`${getColorStyles(props)}`}
`

export default Button