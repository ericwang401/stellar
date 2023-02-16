const SectionDivider = () => {
    return (
        <div>
            <div className='absolute w-[60vw] h-[260px] -mt-52 -left-48 rounded-full blur-[50px] bg-gradient-to-r from-sky-500 to-purple-500 opacity-[0.15] mix-blend-normal' />
            <div className='absolute w-[60vw] h-[260px] -mt-52 -right-48 rounded-full blur-[50px] bg-gradient-to-r from-fuchsia-500 to-pink-500 opacity-[0.15] mix-blend-normal' />
            <div className='w-full h-[1px] bg-gradient-to-r from-sky-500 to-pink-500 opacity-25' />
        </div>
    )
}

export default SectionDivider
