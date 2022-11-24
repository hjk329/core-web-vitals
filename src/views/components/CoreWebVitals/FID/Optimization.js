import styled from '@emotion/styled';
import Image from 'next/image'
import PrevButton from "../../Buttons/PrevButton";
import HomeButton from "../../Buttons/HomeButton";

const Optimization = () => {
    return (
        <Container>
            <Quiz>
                사용자의 최초 입력에 브라우저가 빠르게 응답하기 위해서 어떻게 해야할까요?
            </Quiz>
            <Answer>
                TBT를 개선해서 메인 스레드가 입력 응답을 막는 시간을 단축시키자!
            </Answer>
            <DescBox>
                <span>사실 FID 최적화 도큐먼트에 소개된 JS 번들을 여러 청크로 코드 분할하거나, Polyfills를 최소화하는 방법 등은 너무 어렵게 느껴졌어요 🥲
                <br/> 그래서 위 방법들은 따로 공부를 하면서 천천히 시도해보기로 하고, 지금 바로 도전해볼 만한 TBT 최적화를 떠올리게 되었습니다!
                </span>
                <p>
                    TBT(Total Blocking Time, 총 차단 시간)은 코어 웹 바이탈에 포함되는 메트릭은 아니지만, 메인 스레드가 입력 응답을 막는 시간을 측정해주기 때문에 이를 개선하면
                    FID를 개선하는 데에 도움을 줄 수 있다.
                </p>
                <DividedBox/>
                <DividedBox/>
                <p><strong>TBT는 어떻게 측정할까?</strong></p>
                <p>크롬 개발자 도구의 Performance 패널의 하단에 제공된다.</p>

                <div>
                    <Image src={'/images/tbt-previously.png'} width={1000} height={700} alt={'tbt'}/>
                </div>
                <br/>
                <br/>
                <DividedBox/>
                <p><strong>좋은 TBT 점수는?</strong></p>
                <p><strong>300ms 미만</strong>이 되어야 한다.</p>
                <p>TBT를 개선으로 <strong>리소스의 크기를 작게 유지하는 방법</strong>이 소개되어서 따라해보았다.</p>
            </DescBox>
            <DividedBox/>
            <DividedBox/>
            <DescBox/>
            <DescBox>
                <p><strong>최적화된 이미지를 제공하자</strong></p>
                <span>엄밀히 말해서 이미지는 자바스크립트나 CSS 파일처럼 렌더링을 블로킹하는 요소는 아니다. <br/>
                하지만, 이미지가 로드되기 시작했지만 완료하는 데 시간이 걸려서 사용자에게 제대로된 이미지를 보여주지 못하는 것은 로드 성능에 굉장히 크게 관여한다고 생각했다.
                </span>
            </DescBox>
            <DescBox>
                <p>png 파일로 435KB이던 이미지는 webp로 변환하자 그 크기가 9.4KB밖에 되지 않았다. 두둥...!</p>
            </DescBox>
            <DividedBox/>
            <DividedBox/>
            <DividedBox/>
            <DividedBox/>
            <DividedBox/>
            <DescBox>
                <p><strong>최적화된 비디오를 제공하자</strong></p>
                <span>위와 같은 맥락으로 비디오 파일은 webm으로 변환해보기로 했다. 기존에는 25MB가 넘는 mp4 파일이 webm으로 변환하자 2.7MB밖에 되지 않았다.
                    <br/>
                    다른 비디오 파일들도 크기가 대부분 절반 이하로 줄었다.
                </span>
            </DescBox>
            <br/>
            <br/>
            <br/>
            <br/>
            <DescFlexBox>
                <Desc>
                    <p>mp4 콘텐츠 다운로드 소요 시간: <strong>18.31s</strong></p>
                    <div>
                        <Image src={'/images/mp4.png'} width={500} height={700} alt={'mp4'}/>
                    </div>
                </Desc>
                <Desc>
                    <p>webm 콘텐츠 다운로드 소요 시간: <strong>2.02ms</strong></p>
                    <div>
                        <Image src={'/images/webm.png'} width={500} height={700} alt={'webm'}/>
                    </div>
                </Desc>
            </DescFlexBox>
            <br/>
            <br/>
            <br/>
            <br/>
            <DescBox>
                <p>
                    혹시나 특정 브라우저에서 호환되지 않을 가능성을 고려해서 source 태그를 이용해서 webm 혹은 mp4 파일로 보여주도록 설정해주었다.
                </p>
            </DescBox>

            <DescBox>
                <Desc>
                    <p>개선 전 TBT: <strong>254.67ms</strong></p>
                    <div>
                        <Image src={'/images/tbt-previously.png'} width={1000} height={500} alt={'tbt'}/>
                    </div>
                </Desc>
                <Desc>
                    <p>개선 후 TBT: <strong>126.96ms</strong></p>
                    <div>
                        <Image src={'/images/tbt-improved.png'} width={1000} height={500} alt={'tbt'}/>
                    </div>
                </Desc>
            </DescBox>


            <ButtonBox>
                <PrevButton path={'/fid'}/>
                <HomeButton/>
            </ButtonBox>
        </Container>
    )
}

const Container = styled.div`

`;

const Quiz = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  line-height: 60px;
`;

const Answer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  line-height: 60px;
`;

const DescBox = styled.div`
  //height: 100vh;

  span {
    font-size: 14px;
    color: #3b3f4b;
  }

  font-size: 20px;
  line-height: 30px;
`;

const DescFlexBox = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;

  gap: 20px;
`;
const Desc = styled.div`
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
`;

const DividedBox = styled.div`
    padding-top: 100px;
`;
export default Optimization;
