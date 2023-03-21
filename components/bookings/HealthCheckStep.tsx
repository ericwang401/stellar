import Image from 'next/image'
import NeuralinkImage from 'assets/images/neuralink.svg'
import Button from 'components/elements/Button'
import Spinner from 'components/elements/Spinner'
import { useEffect, useState } from 'react'
import EKG from 'components/elements/EKG'
import { classNames } from 'util/helpers'

const HealthCheckStep = () => {
    const [connecting, setConnecting] = useState(false)
    const [connected, setConnected] = useState(false)
    const [done, setDone] = useState(false)
    const [tasks, setTasks] = useState<{ label: string }[]>([])

    useEffect(() => {
        if (connecting) {
            setTimeout(() => {
                setConnecting(false)
                setConnected(true)

                const tasksToAdd = ['Weight', 'Height', 'Vision Check', 'Hearing Check', 'Medical History']

                // add tasks one by one with a delay to simulate a real connection and setDone after all tasks are added
                tasksToAdd.forEach((task, index) => {
                    setTimeout(() => {
                        setTasks(prevTasks => [...prevTasks, { label: task }])
                        if (index === tasksToAdd.length - 1) {
                            setTimeout(() => {
                                setDone(true)
                            }, 2000)
                        }
                    }, 1700 * (index + 1))
                })
            }, 3000)
        }
    }, [connecting])

    return (
        <>
            <h2 className='text-2xl text-background font-semibold'>Verify Your Health</h2>
            <p className='text-accent-400 mt-4 text-sm'>
                We'll perform preflight health checks to verify the integrity of your health to see if you're fit for
                this journey. Please connect your Neuralink device.
            </p>

            {!connected && (
                <>
                    <Image src={NeuralinkImage} alt='Neuralink' width={150} className='invert mt-8' />
                    <Button
                        size='xl'
                        variant='solid'
                        color='accent'
                        className='mt-16'
                        disabled={connecting || connected}
                        onClick={() => setConnecting(true)}
                    >
                        Connect Your Brain via Neuralink
                    </Button>
                </>
            )}
            {connecting && (
                <div className='flex items-center gap-2 mt-4'>
                    <Spinner size='small' />
                    <p className='text-sm text-accent-400'>Contacting Neuralink receiver in your brain</p>
                </div>
            )}
            {connected && (
                <div className='flex flex-col gap-8 mt-8'>
                    <div className='flex items-end justify-between'>
                        <h3 className='text-xl text-background font-medium'>
                            {done ? 'Examination Passed' : 'Receiving Data'}
                        </h3>
                        {!done && <EKG className='w-1/3 mt-8' />}
                    </div>
                    <div className='flex flex-col gap-4'>
                        {tasks.map(task => (
                            <StatusRow key={task.label} label={task.label} />
                        ))}
                    </div>
                </div>
            )}

            {done && (
                <div className='flex flex-col gap-8 mt-8'>
                    <p className='text-accent-400 text-sm'>🎉 Congratulations! You passed the health check.</p>
                    <Button size='xl' variant='solid' color='accent'>
                        Continue to Payment
                    </Button>
                </div>
            )}
        </>
    )
}

const StatusRow = ({ label }: { label: string }) => {
    const [showOk, setShowOk] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowOk(true)
        }, 1000)
    }, [])

    return (
        <div className='flex items-center gap-4'>
            <p className='text-sm text-accent-400'>{label}</p>
            <div className='border-b border-accent-600 border-dotted grow' />
            <p className={classNames('text-sm text-background', showOk ? '' : 'invisible')}>OK</p>
        </div>
    )
}

export default HealthCheckStep
