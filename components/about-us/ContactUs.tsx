import ContentContainer from 'components/ContentContainer'
import Button from 'components/elements/Button'
import SectionDivider from 'components/elements/SectionDivider'
import Textarea from 'components/elements/Textarea'
import TextInput from 'components/elements/TextInput'
import Image from 'next/image'
import Sheng from 'assets/images/sheng.jpg'

const ContactUs = () => {
    return (
        <div className='relative overflow-hidden'>
            <SectionDivider />
            <ContentContainer includeYPadding>
                <h2 className='gradient-text font-bold text-3xl sm:text-4xl tracking-tight max-w-2xl'>Contact Us</h2>
                <p className='mt-4 max-w-2xl text-accent-300'>pls contact us we love to have big conversation</p>

                <div className='flex flex-col gap-20 lg:flex-row lg:justify-between'>
                    <div className='flex flex-col max-w-xl mt-16 shrink-0'>
                        <div className='grid gap-4 grid-cols-2'>
                            <TextInput label='Name' />
                            <TextInput label='Email' />
                            <Textarea label='Message' className='col-span-2' />
                        </div>

                        <div className='flex justify-end mt-8'>
                            <Button variant='solid'>Send</Button>
                        </div>
                    </div>

                    <div className='shrink max-w-md'>
                        <Image
                            src={Sheng}
                            alt='Albert sheng'
                            className='rounded-lg border border-accent-700 w-full'
                        />
                    </div>
                </div>
            </ContentContainer>
        </div>
    )
}

export default ContactUs
