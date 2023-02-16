import { ReactNode } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

interface Props {
    left?: ReactNode
    right?: ReactNode
    capEnd?: boolean
    line?: ReactNode
    noGradientLineOnMobile?: boolean
    className?: string
}

const Dot = styled.div`
    ${tw`w-3 h-3 rounded-full bg-transparent border border-accent-600`}
`

const Line = styled.div`
    ${tw`grow border-l border-dashed border-accent-600 my-1`}
`

const TimelineBlock = ({ left, right, capEnd, line, noGradientLineOnMobile, className }: Props) => {
    return (
        <div className={`flex flex-col lg:flex-row basis-0 w-full ${className}`}>
            <div className='flex max-lg:order-2 basis-0 lg:justify-end grow shrink '>
                <div className='lg:pr-12 w-full relative'>{left}</div>
            </div>
            <div className='flex flex-col items-center'>
                { !noGradientLineOnMobile && <div className='h-28 w-[1px] bg-gradient-to-b from-transparent to-accent-600 lg:hidden' /> }
                <Dot />
                {line ? line : <Line />}
                {capEnd && <Dot />}
            </div>
            <div className='basis-0 grow shrink'>
                <div className='lg:pl-12 lg:pr-24'>{right}</div>
            </div>
        </div>
    )
}

export default TimelineBlock
