import styled from '@emotion/styled';

const Title = () => {
    return (
        <>
            <Topic>
                Core Web Vitals
            </Topic>
            <Desc>
                코어 웹 바이탈이란 무엇일까요?!

            </Desc>
        </>
    )
}

const Topic = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(111.81deg, #0bb7f6 1.28%, #9b84ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  font-size: 60px;
  font-weight: 700;
`;

const Desc = styled.p`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
`;
export default Title;
