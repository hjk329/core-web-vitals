import styled from '@emotion/styled';
import Image from "next/image";
import {ContentContainer} from "../../../styles/Layout.Styled";
import ShakingAnimation from "./ShakingAnimation";
import {useState} from "react";

const Intro = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    const onClick = () => {
        setShowAnimation(true)
    }
    return (
        <Container>
            <ContentContainer>
                <ImageBox>
                    <Image src={'https://cdn-icons-png.flaticon.com/128/4719/4719408.png'} width={100} height={100}
                           alt={'graph'}/>
                </ImageBox>
                <Content>
                    <span onClick={onClick}>코어 웹 바이탈</span>
                    {
                        showAnimation && <ShakingAnimation/>

                    }
                </Content>
            </ContentContainer>
        </Container>

    )
}

const Container = styled.div`
  background: #b5c7e3;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 0;
`;

const Content = styled.div`
  position: relative;

  padding: 60px 0;
  display: flex;
  justify-content: center;

  span {
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    cursor: pointer;
  }
  
`;
export default Intro;
