import Image from 'next/image'
import NeuralinkImage from 'assets/images/neuralink.svg'
import { BookingContext } from 'pages/bookings/[bookingId]'
import { useContext, useEffect, useState } from 'react'
import { classNames, formatNumber } from 'util/helpers'
import Button from 'components/elements/Button'
import Spinner from 'components/elements/Spinner'
import Logo from 'assets/images/logo.svg'
import HeadSnowflakeOutline from 'assets/images/head-snowflake-outline.svg'
import BankOutline from 'assets/images/bank-outline.svg'
import styled from 'styled-components'
import tw from 'twin.macro'

const Line = styled.div`
    ${tw`absolute -mt-6 w-[0%] h-[1px] bg-white z-[0]`}

    @keyframes progress {
        0% {
          width: 0%;
          left: 0%;
        }
        50% {
            left: 0%;
          width: 90%;
        }
        100% {
            left: 90%;
            width: 0%;
        }
    }

    animation: progress 2s linear infinite;
`

const PaymentStep = () => {
    const { booking, setStep } = useContext(BookingContext)
    const [seconds, setSeconds] = useState(0)
    const [authorizing, setAuthorizing] = useState(false)

    // format seconds into minutes and seconds in format 00:00
    const formattedTime = new Date(seconds * 1000).toISOString().substr(14, 5)

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const startPayment = () => {
        setAuthorizing(true)

        setTimeout(() => {
            setStep('confirmation')
        }, 10000)
    }

    return (
        <>
            <h2 className='text-2xl text-background font-semibold'>Payment</h2>
            <p className='text-accent-400 mt-4 text-sm'>
                You're one step away from your journey. Please complete your payment with Neuralink. We'll contact your
                bank through your Neuralink device to complete the transaction.
            </p>

            <Image src={NeuralinkImage} alt='Neuralink' width={150} className='invert mt-8' />
            <div className='bg-accent-700 h-[1px] mt-8' />
            <h2 className='text-right text-2xl text-background font-semibold mt-8'>
                ${formatNumber(booking!.price)}.00
            </h2>

            <p className='text-right text-accent-400 mt-2 text-sm'>Total</p>

            <div className={classNames('flex items-center justify-between mt-24 transition-transform duration-500 overflow-hidden', authorizing ? 'scale-y-100' : 'scale-y-0')}>
                <Line></Line>
                <div className='flex flex-col gap-2 justify-center items-center bg-accent-800 z-[1]'>
                    <Image height='42' src={Logo} alt='Stellar Logo' className='invert' />
                    <p className='text-sm text-accent-400'>Stellar</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center bg-accent-800 z-[1]'>
                    <Image height='42' src={HeadSnowflakeOutline} alt='A person with a brain icon' className='invert' />
                    <p className='text-sm text-accent-400'>You (Your Brain)</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center bg-accent-800 z-[1]'>
                    <Image height='42' src={BankOutline} alt='Banking institution icon' className='invert' />
                    <p className='text-sm text-accent-400'>Your Bank</p>
                </div>
            </div>

            <div className='flex items-center mt-20'>
                <div
                    className={classNames(
                        'h-3 w-3 rounded-full transition-colors',
                        authorizing ? 'bg-green-400' : 'bg-yellow-400'
                    )}
                />
                <p className='text-accent-400 ml-2 text-sm'>
                    {authorizing
                        ? `Currently communicating with your brain ${formattedTime}`
                        : `On standby, connected to your brain for ${formattedTime}`}{' '}
                </p>
            </div>
            <Button size='xl' variant='solid' color='accent' className='mt-4' onClick={startPayment} disabled={authorizing}>
                Complete Payment via Neuralink
            </Button>
            {authorizing && (
                <div className='flex items-center gap-2 mt-4'>
                    <Spinner size='small' />
                    <p className='text-sm text-accent-400'>Authorizing payment via your Neuralink terminal</p>
                </div>
            )}
        </>
    )
}

export default PaymentStep
