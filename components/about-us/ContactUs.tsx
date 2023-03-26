import ContentContainer from 'components/ContentContainer'
import Button from 'components/elements/Button'
import SectionDivider from 'components/elements/SectionDivider'
import Textarea from 'components/elements/Textarea'
import TextInput from 'components/elements/TextInput'
import Image from 'next/image'
import Sheng from 'assets/images/sheng.jpg'
import GroupOfPeople from 'assets/images/group-of-people.png'

const ContactUs = () => {
    return (
        <div className='relative overflow-hidden'>
            <SectionDivider />
            <ContentContainer includeYPadding>
                <h2 className='gradient-text font-bold text-3xl sm:text-4xl tracking-tight max-w-2xl'>Contact Us</h2>
                <p className='mt-4 max-w-2xl text-accent-300'>
                    We'd love to hear from you! Whether you have a question about our space tourism services, want to
                    learn more about our company, or just want to say hello, we're here to help.
                    <br />
                    <br />
                    You can reach us by phone at 1 800 STELLAR, or by email at "support@stellar.com". Alternatively, you
                    can fill out the form below and we'll get back to you as soon as possible.
                </p>

                <div className='flex flex-col gap-20 lg:flex-row lg:justify-between mt-16'>
                    <div className='flex flex-col max-w-2xl w-full shrink-0'>
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
                            src={GroupOfPeople}
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
