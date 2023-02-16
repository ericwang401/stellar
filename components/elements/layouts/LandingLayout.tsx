import Footer from 'components/elements/Footer'
import NavBar from 'components/elements/NavBar'
import { ReactNode } from 'react'

interface Props {
    children?: ReactNode
}

const LandingLayout = ({ children }: Props) => {
    return (
        <>
            <header className='fixed z-[2000] w-full'>
                <NavBar />
            </header>
            <main className='min-h-screen'>{children}</main>
            <Footer />
        </>
    )
}

export default LandingLayout
