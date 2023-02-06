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
            <main>{children}</main>
        </>
    )
}

export default LandingLayout
