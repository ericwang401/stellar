import ContentContainer from 'components/ContentContainer';
import Nebula from 'assets/images/nebula.jpg';
import Image from 'next/image';
import Earth from 'assets/images/earth.jpg';
import AstronautOnSurfaceOfMoon from 'assets/images/astronaut-on-surface-of-moon.jpg';
import Astronaut from 'assets/images/astronaut.jpg';
import styled, { keyframes } from 'styled-components'
import tw from 'twin.macro'


const GalleryGrid = styled.div`
${tw`grid`}
@media (min-width: 397px) {
    gap: 25px 25px;
    grid-template-columns: 253px 392px 201px;
    grid-template-rows: 70px 157px 97px 333px;
}

@media (min-width: 896px) and (max-height: 899px) {
    gap: 35px 35px;
    grid-template-columns: 323px 501px 256px;
    grid-template-rows: 86px 201px 126px 425px;
}

@media (min-width: 896px) and (min-height: 900px) {
    gap: 40px 40px;
    grid-template-columns: 380px 589px 301px;
    grid-template-rows: 101px 235px 148px 500px;
}

& img {
    ${tw`rounded-xl border border-accent-700`}
}

.top-left {
    grid-area: 2/2;
}
.top-center {
    grid-area: 3/2/3/4;
}
.top-right {
    grid-area: 1/3/2/5;
}
.bottom-left {
    grid-area: 2/1;
}
.bottom-right {
    grid-area: 4/1/4/4;
}

@media (min-width: 397px) {
    .top-left {
        grid-area: 2/1;
    }
    .top-center {
        grid-area: 2/2/span 2;
    }
    .top-right {
        grid-area: span 2/3;
    }
    .bottom-left {
        grid-area: 3/1;
    }
    .bottom-right {
        grid-area: 4/2/4/4;
    }
}
`

const Gallery = () => {
    return <ContentContainer>
        <GalleryGrid>
                <Image src={Nebula} alt='A nebula' className='top-left' />
            <Image src={Earth} alt='Earth' className='top-center' />
            <Image src={Astronaut} alt='Astronaut' className='top-right' />
            <Image src={AstronautOnSurfaceOfMoon} alt='Astronaut on surface of moon' className='bottom-left' />
        </GalleryGrid>
    </ContentContainer>
}

export default Gallery;