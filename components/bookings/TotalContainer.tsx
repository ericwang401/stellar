import Logo from 'assets/images/logo.svg'
import Image from 'next/image'
import { BookingContext } from 'pages/bookings/[bookingId]'
import { useContext } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { formatNumber } from 'util/helpers'

const FlightInfoContainer = styled.dl`
    ${tw`mt-4`}

    & > dt {
        ${tw`text-accent-400 text-sm`}
    }

    & > dd {
        ${tw`font-medium text-background text-xl`}
    }

    & > dt:not(:last-child) {
        ${tw`mb-4`}
    }
`

const TotalContainer = () => {
    const { booking } = useContext(BookingContext)

    // convert the startTime and endTime to this format "4:00 AM - 1:00 PM", make sure to add extra 0's in minutes and use 12 hour period
    const timeString = `${booking!.startingDate.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    })} — ${booking!.endingDate.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    })}`

    // for the dayString format it like this "January 1st" but format it like "January 1st - January 2nd" only if the trip is more than 1 day
    // only add the dash if the trip is more than 1 day
    const dayString = `${booking!.startingDate.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
    })}${
        booking!.endingDate.getDate() !== booking!.startingDate.getDate()
            ? ` — ${booking!.endingDate.toLocaleString('en-US', {
                  month: 'long',
                  day: 'numeric',
              })}`
            : ''
    }`

    const duration = booking!.endingDate.getTime() - booking!.startingDate.getTime()
    const hours = Math.floor(duration / 1000 / 60 / 60)
    const minutes = Math.floor((duration / 1000 / 60 / 60 - hours) * 60)
    const durationString = `${hours} hr ${minutes} min`

    return (
            <div className='flex flex-col grow gap-6 py-6'>
                <div className='flex gap-5'>
                    <div>
                        <Image height='42' src={Logo} alt='Logo' className='invert' />
                    </div>
                    <div className='flex justify-between grow'>
                        <div className='flex flex-col gap-1'>
                            <p className='font-medium text-background text-sm'>Stellar Spaceflight</p>
                            <p className='text-accent-400 text-sm'>One Time Purchase</p>
                        </div>

                        <p className='font-medium text-background text-sm'>${formatNumber(booking!.price)}.00</p>
                    </div>
                </div>

                <div className='flex gap-5'>
                    <div className='hidden md:block w-[42px]' />
                    <div className='flex flex-col w-full'>
                        <div className='bg-accent-700 h-[1px] mb-6' />
                        <p className='text-accent-400 text-sm'>Flight Information</p>
                        <FlightInfoContainer>
                            <dd>{booking!.location} Launch Center</dd>
                            <dt>Location</dt>
                            <dd>
                                {timeString}, {dayString}
                            </dd>
                            <dt>Time</dt>
                            <dd>{durationString}</dd>
                            <dt>Duration</dt>
                        </FlightInfoContainer>
                    </div>
                </div>
            </div>
    )
}

export default TotalContainer
