import LeftSideContainer from 'components/bookings/LeftSideContainer'
import RightSideContainer from 'components/bookings/RightSideContainer'
import LandingLayout from 'components/elements/layouts/LandingLayout'
import Spinner from 'components/elements/Spinner'
import { useRouter } from 'next/router'
import { NextPageWithLayout } from 'pages/_app'
import { createContext, useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import tw from 'twin.macro'
import locations, { Booking as BookingType } from 'util/bookings'
import { FadeInLeftAnimation } from 'util/transitions'

const BookingContainer = styled.div`
    ${tw`flex flex-col md:grid md:place-items-center h-[100vh] relative`}

    &:before {
        content: '';
        animation-name: ${FadeInLeftAnimation};
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        animation-duration: 0.4s;
        ${tw`hidden md:block bg-accent-800 fixed z-0 right-0 top-0 w-1/2 h-full `}
    }
`

export const BookingContext = createContext<{
    booking: BookingType | null
}>({
    booking: null,
})

const Booking: NextPageWithLayout = () => {
    const router = useRouter()
    const { bookingId } = router.query
    const [booking, setBooking] = useState<BookingType | null>(null)

    useEffect(() => {
        if (bookingId !== undefined) {
            // find the booking from the id (ex: "stillwater-13463")
            const location = (bookingId as string).split('-')[0].toLowerCase()
            const price = parseInt((bookingId as string).split('-')[1].toLowerCase())
            const foundBooking = locations
                .flatMap(location => location.bookings)
                .find(booking => booking.price === price && booking.location.toLowerCase() === location)

            if (foundBooking) {
                setTimeout(() => setBooking(foundBooking), 1000)
            }
        }
    }, [bookingId])

    return (
        <BookingContainer>
            <BookingContext.Provider value={{booking}}>
                <div className='flex flex-col md:grid grid-cols-2 z-[1] md:gap-20 lg:gap-40 max-w-5xl w-full md:py-32'>
                    {!booking && (
                        <div className='h-screen grid place-items-center'>
                            <Spinner size='large' />
                        </div>
                    )}
                    {booking && <LeftSideContainer />}
                    {booking && <RightSideContainer />}
                </div>
            </BookingContext.Provider>
        </BookingContainer>
    )
}

Booking.getLayout = page => {
    return <LandingLayout showFooter={false}>{page}</LandingLayout>
}

export default Booking
