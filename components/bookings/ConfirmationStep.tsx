import { useViewportSize } from '@mantine/hooks'
import { BookingContext } from 'pages/bookings/[bookingId]'
import { useContext } from 'react'
import ReactConfetti from 'react-confetti'
import { createPortal } from 'react-dom'
import QRCode from 'react-qr-code'

const ConfirmationStep = () => {
    const { booking } = useContext(BookingContext)
    const { width, height } = useViewportSize()

    // subtract 1 month from the starting date and format it like this "January 1st"
    const trainingDateString = booking!.startingDate.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
    })

    return (
        <>
            <h2 className='text-2xl text-background font-semibold'>Transaction Complete</h2>
            <p className='text-accent-400 mt-4 text-sm'>
                Congratulations! You have successfully booked your journey to the moon. Please save your ticket below
                and bring it with you on training and launch day.
            </p>
            <div className='flex gap-4 border-accent-700 border rounded-lg py-4 px-5 mt-8'>
                <QRCode
                    style={{ height: 'auto', minWidth: '8rem', width: '100%' }}
                    className='grow-0'
                    value={`${booking!.location.toLowerCase()}-${booking!.price}`}
                />
                <div>
                    <p className='text-2xl text-background font-semibold'>Stellar Ticket</p>
                    <p className='text-sm text-accent-400 mt-4'>
                        Please keep this ticket safe. You will need this prior to attending your training sessions and
                        board.
                    </p>
                </div>
            </div>

            <div className='bg-accent-700 h-[1px] mt-16' />

            <p className='text-accent-400 text-sm mt-5'>
                You will need to attend training on the date specified below. Please make plans to attend, so you can be
                fit to travel.
            </p>

            <dl className='mt-8'>
                <dd className='font-medium text-background text-xl'>{booking!.location} Launch Center</dd>
                <dt className='text-accent-400 text-sm'>Location</dt>
                <dd className='font-medium text-background text-xl mt-4'>{trainingDateString}</dd>
                <dt className='text-accent-400 text-sm'>Date</dt>
            </dl>

            {createPortal(<ReactConfetti className='absolute inset-0 ' width={width} height={height} />, document.body)}
        </>
    )
}

export default ConfirmationStep
