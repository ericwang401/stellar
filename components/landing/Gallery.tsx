import ContentContainer from 'components/ContentContainer';
import Nebula from 'assets/images/nebula.jpg';
import Image from 'next/image';
import Earth from 'assets/images/earth.jpg';
import Astronaut from 'assets/images/astronaut.jpg';

const Gallery = () => {
    return <ContentContainer>
        <div className='grid grid-rows-4 grid-cols-7 gap-4 md:gap-12'>
            <Image src={Nebula} alt='A nebula' className='col-span-2 row-span-1 rounded' />
            <Image src={Earth} alt='Earth' className='col-span-3 row-span-2 rounded' />
            <Image src={Astronaut} alt='Astronaut' className='col-span-2 row-span-4 rounded' />
        </div>
    </ContentContainer>
}

export default Gallery;