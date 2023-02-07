import ContentContainer from 'components/ContentContainer'
import Link from 'next/link'
import styled, { css, keyframes } from 'styled-components'
import tw from 'twin.macro'
import Logo from 'assets/images/logo.svg'
import Image from 'next/image'
import Bars2Icon from '@heroicons/react/20/solid/Bars2Icon'
import { useViewportSize } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'

const StyledContainer = styled.div`
    ${tw`w-full`}
    backdrop-filter: blur(15px);
`

const Divider = styled.div`
    ${tw`bottom-0 inset-x-0 h-[1px]`}
    background: rgba(255, 255, 255, 0.08);
`

const FlatNavLink = styled(Link)`
    ${tw`flex items-center h-12 text-sm text-background active:text-accent-300 sm:hover:text-accent-300 transition-colors font-medium text-center`}

    @media not all and (min-width: 640px) {
        ${tw`text-base`}
        border-bottom-width: 1px;
        border-color: rgba(255, 255, 255, 0.08);
    }
`

const NavBar = () => {
    const { width } = useViewportSize()
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        if (width >= 640) {
            setMenuOpen(false)
        }
    }, [width])

    useEffect(() => {
        if (menuOpen) {
          document.body.classList.add('overflow-y-hidden')
          document.documentElement.classList.add('overflow-y-hidden')
        } else {
          document.body.classList.remove('overflow-y-hidden')
          document.documentElement.classList.remove('overflow-y-hidden')
        }
      }, [menuOpen])

    return (
        <nav className='w-full'>
            <StyledContainer>
                <ContentContainer className='relative w-full'>
                    <div className='flex justify-between'>
                        <div className='flex space-x-6'>
                            <Link className='flex space-x-2 items-center h-12' href='/'>
                                <Image height='18' src={Logo} alt='Logo' className='invert' />
                                <span className='text-white font-mediu'>Stellar</span>
                            </Link>
                            <div className='hidden sm:flex space-x-6'>
                                <FlatNavLink href='/test'>Bookings</FlatNavLink>
                                <FlatNavLink href='/test'>Gallery</FlatNavLink>
                                <FlatNavLink href='/test'>News</FlatNavLink>
                                <FlatNavLink href='/test'>Our Team</FlatNavLink>
                            </div>
                        </div>
                        <div className='flex space-x-6'>
                            <button className='grid sm:hidden place-items-center h-12 px-3 -mr-3'>
                                <Bars2Icon onClick={() => setMenuOpen(!menuOpen)} className='h-6 text-white' />
                            </button>
                        </div>
                    </div>
                    <Divider />
                </ContentContainer>
            </StyledContainer>
            <Transition
                show={menuOpen}
                className='mobile-menu'
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-[5vh]'
                enterTo='opacity-100 translate-y-0'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0'
                leaveTo='opacity-0 translate-y-[5vh]'
            >
                <ContentContainer>
                    <FlatNavLink href='/test'>Bookings</FlatNavLink>
                    <FlatNavLink href='/test'>Gallery</FlatNavLink>
                    <FlatNavLink href='/test'>News</FlatNavLink>
                    <FlatNavLink href='/test'>Our Team</FlatNavLink>
                </ContentContainer>
            </Transition>
        </nav>
    )
}

export default NavBar
