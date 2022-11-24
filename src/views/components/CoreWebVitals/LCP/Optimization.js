import styled from '@emotion/styled';
import Image from 'next/image';
import PrevButton from "../../Buttons/PrevButton";
import HomeButton from "../../Buttons/HomeButton";

const Optimization = () => {
    return (
        <Container>
            <Quiz>
                우리 프로덕트의 메인 페이지를 처음 진입했을떄 LCP는 무엇일까요? 예측해보세요! <br/> 정답자에게 상품으로 진심을 담은 박수를 드립니다! <br/> 껄껄
            </Quiz>
            <Answer>
                <Image src={'/images/lcp-in-product.png'} width={1000} height={500} alt={'lcp'}/>
            </Answer>
            <DescBox>
                <p>
                    짱피츠의 개선 방안:
                </p>
                <p><strong>이미지를 압축</strong>해서 최적화된 이미지를 제공하자</p>
                <p><strong>CDN을 이용해서</strong> 사용자에게 물리적으로 더 가깝게 캐시하자</p>
            </DescBox>
            <DescFlexBox>
                <Desc>
                    <p>개선 전 LCP: <strong>6.3초</strong></p>
                    <div>
                        <Image src={'/images/lcp-bad.png'} width={500} height={700} alt={'lcp'}/>
                    </div>
                </Desc>
                <Desc>
                    <p>개선 후 LCP: <strong>1.8초</strong></p>
                    <div>
                        <Image src={'/images/lcp-improved.png'} width={500} height={700} alt={'lcp'}/>
                    </div>
                </Desc>
            </DescFlexBox>

            <br/>
            <br/>
            <br/>
            <DescBox>
                <p><strong>LCP 시간을 단축하기 위한 포인트</strong></p>
                <p>1. <strong>LCP 리소스가 최대한 빠르게 로딩을 시작해야 한다.</strong></p>
                <span>빠른 로딩을 위해서는 HTML에서부터 해당 요소가 LCP 요소임을 알 수 있어야 하고, 로딩 우선 순위가 높아야 한다.</span>
                <p>2. <strong>LCP 요소가 로딩을 마친 후 최대한 빠르게 렌더링되어야 한다.</strong></p>
                <span>스타일 시트는 이후의 모든 콘텐츠의 렌더링을 막기 때문에 스타일 시트를 최소화해본다.</span>
                <p>3. <strong>LCP 리소스의 로드 타임을 줄인다.</strong></p>
                <span>리소스의 크기를 줄이거나 이동해야 하는 거리를 줄인다.</span>
            </DescBox>
            <br/>
            <br/>
            <br/>
            <DescBox>
                <p>앞으로 시도해볼 방법</p>
                <p>LCP 요소가 최대한 빠르게 로딩을 시작할 수 있도록 fetchpriority 어트리뷰트를 사용하는 것을 고려해본다.</p>
                <span>
                    fetchpriority 속성은 다른 이미지와 비교하여 이미지 가져오기의 우선 순위를 나타낸다. <br/>
                    따라서, 사용자에게 초기에 제공되어야할 중요한 이미지라면 fetchpriority 어트리뷰트의 값을 high로 설정해줄 수 있겠다. <br/>
                    fetchpriority 어트리뷰트를 남용하는 경우에는 로딩 성능에 전혀 이점이 없기 때문에 중요한 LCP 요소에만 사용해보면 좋겠다.
                </span>
                <br/>
                <br/>
                <p>이미지나 비디오 요소는 모던한 포맷을 제공한다.</p>
                <span>
                    <strong>webp, webm, avif</strong>등 압축 면에서 굉장히 우수한 형식들이 있다. 물론 브라우저 호환성도 고려해서 이러한 모던한 포맷을 제공하여 더 빠르게 로딩되도록 하자.</span>
            </DescBox>
            <ButtonBox>
                <PrevButton path={'/lcp'}/>
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
export default Optimization;
