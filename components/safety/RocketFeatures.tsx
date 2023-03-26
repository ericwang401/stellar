import ContentContainer from 'components/ContentContainer'
import RocketShip from 'assets/images/rocket-ship.png'
import Image from 'next/image'
import Icon from '@mdi/react'
import { mdiShield, mdiTurbine, mdiRefreshAuto, mdiExitRun, mdiHammerWrench, mdiParachute } from '@mdi/js'
import tw, { theme } from 'twin.macro'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { ComponentPropsWithRef } from 'react'

const StyledFeatureBlock = styled.div<
    {
        inView: boolean
    } & ComponentPropsWithRef<'div'>
>`
    ${tw`flex flex-col transition duration-500 sm:min-h-[17rem]`}
    ${({ inView }) => (inView ? tw`opacity-100 translate-y-0` : tw`opacity-0 translate-y-10`)}
`

const FeatureBlock = ({ icon, title, description }: { icon: string; title: string; description: string }) => {
    const { ref, inView, entry } = useInView()

    return (
        <StyledFeatureBlock inView={inView} ref={ref}>
            <svg className='w-16 h-16'>
                <defs>
                    <linearGradient gradientTransform='rotate(45)' id='icon-gradient-dfsd'>
                        <stop offset='0%' stopColor={'#fff'} />
                        <stop offset='100%' stopColor={'#aaa'} />
                    </linearGradient>
                </defs>
                <Icon path={icon} className='w-full h-full' color='url(#icon-gradient-dfsd)' />
            </svg>
            <h3 className='font-semibold text-background text-xl mt-6'>{title}</h3>
            <p className='mt-2 text-accent-300 text-sm'>{description}</p>
        </StyledFeatureBlock>
    )
}

const RocketFeatures = () => {
    return (
        <ContentContainer includeYPadding>
            <div className='flex flex-col items-center'>
                <h2 className='gradient-text font-bold text-3xl sm:text-4xl tracking-tight max-w-2xl'>
                    Meet Stellar One
                </h2>
                <p className='mt-4 max-w-2xl text-center text-accent-300'>
                    Stellar One is our next generation rocket. It's powerful and includes state of the art safety
                    system.
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-0 lg:grid-cols-3 md:mt-24'>
                <div className='flex flex-col gap-12 md:gap-28 pt-24 md:pr-12'>
                    <FeatureBlock
                        icon={mdiTurbine}
                        title='Multi-Engine Redundancy'
                        description='The rocket would feature multiple engines, each with its own independent control system. This redundancy would provide a backup in case of any engine failures, ensuring the safety of the passengers.'
                    />
                    <FeatureBlock
                        icon={mdiRefreshAuto}
                        title='Automated Flight Controls'
                        description='The rocket would be equipped with advanced automated flight controls, which would be programmed to make rapid adjustments and corrections during the flight. This would ensure the rocket stays on course and within safe operating parameters.'
                    />
                    <FeatureBlock
                        icon={mdiExitRun}
                        title='Emergency Escape System'
                        description='The rocket would be equipped with an emergency escape system, which could be activated in case of an emergency, allowing the crew and passengers to safely eject from the rocket and land back on Earth.'
                    />
                </div>
                <Image src={RocketShip} alt='Rocket ship' className='hidden md:block brightness-75' />
                <div className='flex flex-col gap-12 md:gap-28 pt-24 md:pt-0 lg:pt-24 md:pr-12 lg:pr-0 lg:pl-12'>
                    <FeatureBlock
                        icon={mdiShield}
                        title='Robust Safety Testing'
                        description='The rocket would undergo extensive safety testing, including rigorous stress testing and simulations to ensure that it is capable of handling a variety of different scenarios that may arise during the flight.'
                    />
                    <FeatureBlock
                        icon={mdiHammerWrench}
                        title='Reliable Materials and Manufacturing'
                        description='The rocket would be constructed using only the highest-quality materials and manufactured to exacting standards. This would help ensure the rocket is reliable and safe for the passengers.'
                    />
                    <FeatureBlock
                        icon={mdiParachute}
                        title='Parachute Landing System'
                        description='The rocket would feature a parachute landing system, which would allow it to land safely in case of any unforeseen issues during the flight.'
                    />
                </div>
            </div>
        </ContentContainer>
    )
}

export default RocketFeatures
