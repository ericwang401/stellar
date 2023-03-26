import ContentContainer from 'components/ContentContainer'
import Link from 'next/link'
import Logo from 'assets/images/logo.svg'
import Image from 'next/image'
import styled, { css, keyframes } from 'styled-components'
import tw from 'twin.macro'

const FlatNavLink = styled(Link)`
    ${tw`flex items-center h-12 text-sm text-accent-300 active:text-background sm:hover:text-background transition-colors`}
`

const Footer = () => {
    return (
        <footer className='border-t border-accent-600'>
            <ContentContainer>
                <div className='flex flex-col gap-5 py-9'>
                    <div className='flex flex-col md:flex-row items-center md:items-end gap-3 max-md:order-3'>
                        <Link className='flex space-x-2 items-center' href='/'>
                            <Image height='20' src={Logo} alt='Logo' className='invert' />
                            <span className='text-white font-medium text-lg'>Stellar</span>
                        </Link>
                        <p className='text-sm text-accent-300 mb-0.5'>
                            Copyright &copy; Stellar LLC. All Rights Reserved.
                        </p>
                    </div>


                <div className='w-full h-[1px] bg-accent-600 block md:hidden order-2' />

                    <div className='grid md:flex grid-cols-2 sm:grid-cols-3 md:gap-10 max-md:order-1'>
                        <FlatNavLink href='/'>Home</FlatNavLink>
                        <FlatNavLink href='/bookings'>Bookings</FlatNavLink>
                        <FlatNavLink href='/safety'>Safety</FlatNavLink>
                        <FlatNavLink href='/news'>News</FlatNavLink>
                        <FlatNavLink href='/about-us'>About Us</FlatNavLink>
                        <FlatNavLink href='/documentation'>Documentation</FlatNavLink>
                    </div>
                </div>
            </ContentContainer>
        </footer>
    )
}

export default Footer
