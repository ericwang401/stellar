import styled from 'styled-components'
import tw from 'twin.macro'

interface Props {
  includeYPadding?: boolean
}

const ContentContainer = styled.div<Props>`
  ${tw`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}

  ${({ includeYPadding }) => (includeYPadding ? tw`py-32` : '')}
` // py-16 md:py-24 lg:py-32

export default ContentContainer