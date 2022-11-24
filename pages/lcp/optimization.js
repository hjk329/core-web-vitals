import styled from '@emotion/styled';
import Optimization from "../../src/views/components/CoreWebVitals/LCP/Optimization";
import {ContentContainer} from "../../src/styles/Layout.Styled";

const LCPOptimization = () => {
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
export default LCPOptimization;
