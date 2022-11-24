import styled from '@emotion/styled';
import Definition from "../../src/views/components/CoreWebVitals/LCP/Definition";
import {ContentContainer} from "../../src/styles/Layout.Styled";

const LCP = () => {
    return (
        <Container>
            <ContentContainer>
                <Definition/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`

`;
export default LCP;
