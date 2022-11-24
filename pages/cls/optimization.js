import styled from '@emotion/styled';
import {ContentContainer} from "../../src/styles/Layout.Styled";
import Optimization from "../../src/views/components/CoreWebVitals/CLS/Optimization";

const CLSOptimization = () => {
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
export default CLSOptimization;
