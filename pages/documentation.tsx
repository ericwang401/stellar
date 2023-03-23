import ContentContainer from 'components/ContentContainer'
import LandingLayout from 'components/elements/layouts/LandingLayout'
import { Heading } from 'components/landing/Header'
import { NextPageWithLayout } from 'pages/_app'
import FileOutline from 'assets/images/file-outline.svg'
import Image from 'next/image'

interface FileCardProps {
    name: string
    url: string
}

const FileCard = ({ name, url }: FileCardProps) => {
    return (
        <a href={url} target='_blank' className='flex gap-4 items-center bg-accent-800 rounded-lg border border-accent-700 p-4'>
            <Image alt='File icon' className='invert' src={FileOutline} width={30} height={30} />
            <p className='text-accent-400'>{name}</p>
        </a>
    )
}

const Documentation: NextPageWithLayout = () => {
    return (
        <ContentContainer includeYPadding>
            <Heading className='!max-w-none'>Documentation</Heading>
            <p className='text-accent-300 text-lg mt-6 max-w-2xl'>
                Stellar releases the documentation of the company's assets, including any artwork, photographs, videos,
                and other digital assets.
            </p>
            <h2 className='gradient-text font-bold text-3xl sm:text-4xl tracking-tight max-w-2xl mt-16'>Documents</h2>

            <div className='flex flex-col mt-8'>
                <FileCard name='Copyright Checklist' url='https://drive.google.com/file/d/1oTTCzhhCIliEPvVeLbJMtZoZT43rTEQJ/view?usp=share_link' />
                <FileCard name='Webmaster Worklog' url='https://drive.google.com/file/d/1TPb1OLYMvZPhPJvVYqvlo9oUyy8DKDQn/view?usp=share_link' />
            </div>
        </ContentContainer>
    )
}

Documentation.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default Documentation
