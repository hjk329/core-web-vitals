import styled from '@emotion/styled';
import {ContentContainer} from "../../src/styles/Layout.Styled";
import Optimization from "../../src/views/components/CoreWebVitals/FID/Optimization";

const FIDOptimization = () => {
    return (
        <Container>
            <ContentContainer>
                <Optimization/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`

`;
export default FIDOptimization;
