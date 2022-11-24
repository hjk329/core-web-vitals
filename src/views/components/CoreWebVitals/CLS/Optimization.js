import styled from '@emotion/styled';
import Image from "next/image";
import PrevButton from "../../Buttons/PrevButton";
import HomeButton from "../../Buttons/HomeButton";

const Optimization = () => {
    return (
        <Container>
            <figure>
                <Image src={'/images/cls-bad.png'} width={500} height={900} alt={'cls'}/>
            </figure>
            <DescBox>
                <DividedBox/>
                <p>불필요한 레이아웃 이동을 유발하는 요소 제거</p>
                <figure>
                    <Image src={'/images/improve-cls-1.png'} width={1000} height={300} alt={'cls'}/>
                </figure>
            </DescBox>
            <p>개선하기 전 네비게이션 메뉴의 화살표가 렌더링 후에 움직임 😨</p>
            <video src="/videos/cls-bad.mov" controls width={1000} height={500}/>
            <DividedBox/>
            <p>개선 후 아주 스무스 하죠오? 🥳</p>
            <video src="/videos/cls-good.mov" controls width={1000} height={500}/>
            <DividedBox/>
            <p><strong>웹 폰트를 프리로드로 불러오기</strong></p>
            <p>개선하기 전 웹 폰트를 다운받기 전까지는 기본 폰트를 보여주다가 웹 폰트를 다운로드 완료하는 순간 해당 웹 폰트로 교체되면서 반짝거려 보임</p>
            <video src="/videos/fout.mov" controls width={1000} height={500}/>
            <DividedBox/>
            <p>개선 후 편-안-😽</p>
            <video src="/videos/improve-fout.mov" controls width={1000} height={500}/>
            <DividedBox/>
            <p>예기치 않은 레이아웃 이동이 제거되면서 개발자 도구에서 빨간색 블록으로 보이던 Experience 섹션이 사라졌다!</p>
            <DescFlexBox>
                <Desc>
                    <p>개선 전</p>
                    <div>
                        <Image src={'/images/cls-bad.png'} width={500} height={900} alt={'cls'}/>
                    </div>
                </Desc>
                <Desc>
                    <p>개선 후</p>
                    <div>
                        <Image src={'/images/experience-disappeared.png'} width={500} height={900} alt={'cls'}/>
                    </div>
                </Desc>
            </DescFlexBox>
            <Quiz>
                <p>앞으로도 CLS 개선을 위해 시도해볼만한 방법</p>

            </Quiz>
            <Answer>
                <p><strong> 동적 콘텐츠를 추가할때는 스켈레톤 UI를 제공하자!</strong></p>
                <span>우리 프로덕트는 급하게 만드느라고 스켈레톤 UI를 따로 구성하지 않았는데, 제공되는 이미지나 비디오 리소스가 꽤 많기 때문에 스켈레톤 UI나 placeholder를 제공하면 좋을 것 같아용</span>

                <figure>
                    <Image src={'/images/dynamic-content.avif'} width={700} height={500} alt={'dynamic content'}/>
                </figure>

                <DividedBox/>
                <DividedBox/>
                <p><strong>레이아웃 변경을 트리거하는 CSS 속성보다는 transform 을 사용하자</strong></p>
                <span>transfrom 애니메이션은 리플로우를 트리거하지 않는다. </span>
                <br/>
                <span>width 나 height 속성을 변경하는 대신에 transform: scale() 을 사용할 수 있다.</span>
                <br/>
                <span>요소를 이동할때는 top, right, bottom, left 속성은 레이아웃 변경을 트리거하므로 transform: translate()을 사용할 수 있다.</span>
            </Answer>
            <DividedBox/>
            <DividedBox/>
            <ButtonBox>
                <PrevButton path={'/cls'}/>
                <HomeButton/>
            </ButtonBox>

        </Container>
    )
}

const Container = styled.div`
  figure {
    text-align: center;
  }
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
  //height: 100vh;
  p, span {
    line-height: 30px;
  }
`;

const DescBox = styled.div`
  height: 100vh;

  span {
    font-size: 14px;
    color: #3b3f4b;
  }

  font-size: 20px;
  line-height: 30px;
`;

const DescFlexBox = styled.div`
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
    padding: 100px 0;
`;
export default Optimization;
