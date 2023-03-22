import ContentContainer from 'components/ContentContainer'
import Button from 'components/elements/Button'
import LandingLayout from 'components/elements/layouts/LandingLayout'
import MessageBox from 'components/elements/MessageBox'
import Spinner from 'components/elements/Spinner'
import Link from 'next/link'
import { NextPageWithLayout } from 'pages/_app'
import styled, { keyframes } from 'styled-components'
import tw from 'twin.macro'
import locations, { Booking } from 'util/bookings'
import { formatNumber } from 'util/helpers'
import { FadeInUpAnimation, HideAnimation } from 'util/transitions'

const LocationTitle = styled.h3`
    ${tw`font-medium text-3xl mb-4 tracking-tight`}
`

const BookingsContainer = styled.div`
    ${tw`flex flex-col gap-3 mb-12`}
`

interface BookingProps {
    booking: Booking
}

const BookingCard = ({ booking: { startingDate: startTime, endingDate: endTime, price, location } }: BookingProps) => {
    // convert the startTime and endTime to this format "4:00 AM - 1:00 PM", make sure to add extra 0's in minutes and use 12 hour period
    const timeString = `${startTime.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    })} — ${endTime.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    })}`

    // for the dayString format it like this "January 1st" but format it like "January 1st - January 2nd" only if the trip is more than 1 day
    // only add the dash if the trip is more than 1 day
    const dayString = `${startTime.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
    })}${
        endTime.getDate() !== startTime.getDate()
            ? ` — ${endTime.toLocaleString('en-US', {
                  month: 'long',
                  day: 'numeric',
              })}`
            : ''
    }`

    const duration = endTime.getTime() - startTime.getTime()
    const hours = Math.floor(duration / 1000 / 60 / 60)
    const minutes = Math.floor((duration / 1000 / 60 / 60 - hours) * 60)
    const durationString = `${hours} hr ${minutes} min`

    return (
        <div className='flex flex-col sm:flex-row space-y-8 sm:space-y-0 rounded-lg border border-accent-700 bg-foreground px-6 py-4'>
            <div className='flex grow justify-between sm:justify-start'>
                <div className='sm:w-1/2'>
                    <span className='font-medium text-base'>{timeString}</span>
                    <p className='text-sm text-accent-300'>{dayString}</p>
                </div>
                <div className='sm:grow'>
                    <span className='font-medium text-base'>{durationString}</span>
                    <p className='text-sm text-accent-300'>Duration</p>
                </div>
            </div>
            <div className='flex gap-8 justify-end grow'>
                <div className='text-right'>
                    <span className='font-medium text-base'>${formatNumber(price)}</span>
                    <p className='text-sm text-accent-300'>Round Trip</p>
                </div>
                <div className='grid place-items-center'>
                    <Link href={`/bookings/${location.toLowerCase()}-${price}`}>
                        <Button as='span' variant='solid' size='sm'>
                            Book
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const SpinnerContainer = styled.div`
    ${tw`grid place-items-center h-[20vh] absolute inset-x-0`}
    animation-name: ${HideAnimation};
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: 1s;
    animation-duration: 0.3s;
`

const Content = styled.div`
    ${tw`mt-16 opacity-0`}

    animation-name: ${FadeInUpAnimation};
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: 1.3s;
    animation-duration: 0.6s;
`

const Bookings: NextPageWithLayout = () => {
    return (
        <>
            <div className='relative w-full h-[20rem] opacity-50 bg-gradient-to-b from-sky-800 to-accent-800 z-0' />
            <ContentContainer className='relative !pt-4 -mt-48 z-[1]' includeYPadding>
                <h1 className='font-semibold text-3xl pb-4 tracking-tight'>Book Your Next Trip</h1>
                <h2 className='text-xl pb-8'>Available Bookings</h2>
                <MessageBox type='warning' title='Limited Bookings' className='mb-4'>
                    Due to recent debris in space, bookings have been limited. We are trying our best to scale up our operations.
                </MessageBox>
                <SpinnerContainer>
                    <Spinner size='large' />
                </SpinnerContainer>
                <Content>
                    {locations.map(location => (
                        <div key={location.name}>
                            <LocationTitle key={location.name}>{location.name}</LocationTitle>
                            <BookingsContainer>
                                {location.bookings.map(booking => (
                                    <BookingCard key={booking.price} booking={booking} />
                                ))}
                            </BookingsContainer>
                        </div>
                    ))}
                </Content>
            </ContentContainer>
        </>
    )
}

Bookings.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default Bookings
