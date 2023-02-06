import ContentContainer from 'components/ContentContainer'
import Link from 'next/link'
import styled, { keyframes } from 'styled-components'
import tw from 'twin.macro'
import Logo from 'assets/images/logo.svg'
import Image from 'next/image'

const StyledNav = styled.nav`
    ${tw`w-full`}
    backdrop-filter: blur(15px);
`

const Divider = styled.div`
    ${tw`bottom-0 inset-x-0 h-[1px]`}
    background: rgba(255, 255, 255, 0.08);
`

const FlatNavLink = styled(Link)`
    ${tw`flex items-center h-12 text-sm text-background hover:text-accent-300 transition-colors font-medium text-center`}
`

const NavBar = () => {
    return (
        <StyledNav>
            <ContentContainer className=' relative w-full'>
                <div className='flex space-x-6'>
                    <Link className='flex space-x-2 items-center h-12' href='/'>
                        <Image height='18' src={Logo} alt='Logo' className='invert' />
                        <span className='text-white font-mediu'>Stellar</span>
                    </Link>
                    <FlatNavLink href='/test'>Bookings</FlatNavLink>
                    <FlatNavLink href='/test'>Gallery</FlatNavLink>
                    <FlatNavLink href='/test'>News</FlatNavLink>
                    <FlatNavLink href='/test'>Our Team</FlatNavLink>
                </div>
                <Divider />
            </ContentContainer>
        </StyledNav>
    )
}

export default NavBar
