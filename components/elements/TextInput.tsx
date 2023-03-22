import { randomUUID } from 'crypto'
import { ComponentProps, ComponentPropsWithoutRef } from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { generateId } from 'util/helpers'

export const baseInputStyles = css`
    ${tw`px-3 py-2 rounded-lg border border-accent-700 focus:border-background focus:outline-0 placeholder-accent-400 bg-foreground transition-colors`}
`

interface Props extends ComponentPropsWithoutRef<'input'> {
    label: string
}

const StyledTextInput = styled.input<Props>`
    ${baseInputStyles}
`

const TextInput = (props: Props) => {
    const id = props.id ?? generateId()
    return (
        <div className='flex flex-col'>
            <label htmlFor={id} className='text-accent-300 font-medium text-sm mb-[.375rem]'>
                {props.label}
            </label>
            <StyledTextInput id={id} {...props} />
        </div>
    )
}

export default TextInput
