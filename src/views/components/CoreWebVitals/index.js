import styled from '@emotion/styled';
import Title from "./Title";
import Desc from "./Desc";
import Navigation from "../Navigation";

const CoreWebVitals = () => {
    return (
        <Container>
            <Title/>
            <Navigation/>
            <Desc/>
        </Container>
    )
}

const Container = styled.div`
  padding-top: 60px;

`;
export default CoreWebVitals;
