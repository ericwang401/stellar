import Footer from 'components/elements/Footer'
import NavBar from 'components/elements/NavBar'
import { ReactNode } from 'react'

interface Props {
    children?: ReactNode
    showFooter?: boolean
}

const LandingLayout = ({ children, showFooter = true }: Props) => {
    return (
        <>
            <header className='fixed z-[2000] w-full'>
                <NavBar />
            </header>
            <main className='min-h-screen'>{children}</main>
            {showFooter && <Footer />}
        </>
    )
}

export default LandingLayout
