import ContentContainer from 'components/ContentContainer';
import LandingLayout from 'components/elements/layouts/LandingLayout';
import { NextPageWithLayout } from 'pages/_app';
import styled from 'styled-components';

const Banner = styled.div``

const example: NextPageWithLayout = () => {
    return <ContentContainer includeYPadding>

    </ContentContainer>
}


example.getLayout = page => {
    return <LandingLayout>{page}</LandingLayout>
}

export default example;