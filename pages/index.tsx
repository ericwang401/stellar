import ContentContainer from 'components/ContentContainer'
import Image from 'next/image'
import sheng from 'assets/images/sheng.jpg'
import styled from 'styled-components'
import tw from 'twin.macro'

const Heading = styled.h1`
background: linear-gradient(180deg,#fff,#aaa),#fff;
-webkit-background-clip: text;
background-clip: text;
${tw`text-transparent font-bold text-7xl leading-[5rem]`}
`

export default function Home() {
  return (
    <ContentContainer className='bg-foreground'>
      <div className='mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40'>
        <Heading className='max-w-lg'>Explore  The  Universe</Heading>
      </div>
    </ContentContainer>
  )
}
