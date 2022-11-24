import styled from "@emotion/styled";
import CoreWebVitals from "../src/views/components/CoreWebVitals";
import {ContentContainer} from "../src/styles/Layout.Styled";

export default function Home() {
    return (
        <Container>
            <ContentContainer>
                <CoreWebVitals/>
            </ContentContainer>
        </Container>

    )
}

const Container = styled.div`
`;
