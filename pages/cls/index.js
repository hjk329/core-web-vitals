import styled from '@emotion/styled';
import {ContentContainer} from "../../src/styles/Layout.Styled";
import Definition from "../../src/views/components/CoreWebVitals/CLS/Definition";

const CLS = () => {
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
export default CLS;
