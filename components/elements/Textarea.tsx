import { baseInputStyles } from 'components/elements/TextInput'
import { ComponentProps, ComponentPropsWithoutRef } from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { classNames, generateId } from 'util/helpers'

interface Props extends ComponentPropsWithoutRef<'textarea'> {
    label: string
}

const StyledTextarea = styled.textarea<Props>`
    ${baseInputStyles}
`

const Textarea = ({className, ...props}: Props) => {
    const id = props.id ?? generateId()

    return (
        <div className={classNames('flex flex-col', className)}>
            <label htmlFor={id} className='text-accent-300 font-medium text-sm mb-[.375rem]'>
                {props.label}
            </label>
            <StyledTextarea id={id} {...props} />
        </div>
    )
}

export default Textarea
