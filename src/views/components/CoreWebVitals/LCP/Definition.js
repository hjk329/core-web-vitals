import styled from '@emotion/styled';
import Image from 'next/image'
import NextButton from "../../Buttons/NextButton";

const Definition = () => {
    return (
        <Container>
            <figure>
                <Image src={'/images/lcp.svg'} width={500} height={500} alt={'lcp'}/>
                <figcaption>이미지 출처: https://web.dev/vitals/</figcaption>
            </figure>
            <p>
                LCP(Largest Contentful Paint, 최대 콘텐츠풀 페인트)는 페이지가 처음으로 로드를 시작한 시점을 기준으로 <strong>뷰포트 내에 있는</strong>
                가장 큰 이미지 또는 텍스트 블록의 렌더링 시간을 보고한다. 즉, 로딩 성능에 대한 메트릭이다.
            </p>
            <p>좋은 사용자 경험을 제공하기 위해서 LCP가 <strong>2.5초 이내에 </strong>발생하도록 권장한다.</p>

            <hr/>
            <DividedBox/>
            <DividedBox/>

            <p>브라우저의 로딩 과정은 아래와 같다.</p>

            <p>1. <strong>HTML 파싱</strong></p>
            <p>브라우저는 웹 페이지를 로드하면서 가장 먼저 HTML 파일을 다운로드한다. 다운로드한 HTML을 해석하여 DOM 트리를 구성한다. (파싱한다)</p>
            <p>파싱하는 중에 script, link, img 태그를 발견하면 각 리소스를 요청하고 다운로드한다. HTML에 CSS가 포함된 경우에는 CSSOM 트리 구성 작업도 함께 진행한다.</p>


            <p>2. <strong>스타일</strong></p>
            <p>
                스타일 단계에서는 파싱 단계에서 생성된 DOM, CSSOM 트리에 스타일을 매칭시켜주는 과정을 거쳐 렌더 트리를 구성한다.
            </p>

            <div>
                <figure>
                    <Image src={'/images/crp.avif'} width={1000} height={500} layout="responsive" alt={'html parsing'}/>
                    <figcaption>이미지 출처: https://web.dev/critical-rendering-path-render-tree-construction</figcaption>
                </figure>
            </div>

            <p>3. <strong>레이아웃</strong></p>
            <p>레이아웃 단계에서는 노드의 정확한 위치와 크기를 계산한다.</p>

            <p>4. <strong>페인트</strong></p>
            <p>이전 레이아웃 단계에서 계산된 값을 이용해 텍스트, 이미지들이 실제 픽셀로 변환된다. </p>

            <p>5. <strong>합성 및 렌더</strong></p>
            <p>페인트 단계에서 생성된 레이어를 합성하여 스크린을 업데이트한다. 합성과 렌더가 마무리되면 렌더링되어 실제로 화면에서 볼 수 있다.</p>

            <div>
                <figure>
                    <Image src={'/images/crp2.webp'} width={1000} height={500} layout="responsive" alt={'html parsing'}/>
                    <figcaption>이미지 출처: https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/</figcaption>
                </figure>
            </div>
            <DividedBox/>
            <DividedBox/>
            <hr/>
            <br/>

            <DividedBox/>
            <DividedBox/>
            <i>왜 가장 큰 콘텐츠의 렌더링 시기를 기준점으로 잡았을까?</i>
            <p>
                SPA가 널리 쓰이기 전에는 load, DOMContentLoaded 와 같이 웹 페이지가 로딩될때 발생하는 이벤트의 시점으로 성능을 측정하려 했다.
            </p>
            <p>참고로, DOMContentLoaded 이벤트는 HTML과 CSS 파싱이 끝나는 시점에 발생하고, load 이벤트는 HTML상에 필요한 모든 리소스가 로드된 시점에 발생한다.</p>
            <p>SPA를 사용하면 적은 양의 HTML로 load, DOMContentLoaded 이벤트가 일찍 발생할 수 있지만, 해당 이벤트가 발생한 이후에 수많은 스크립트가 실행되는 느린 로딩이 발생할
                여지가 있다.</p>
            <p>이외에도 사용자에게 최초로 제공되는 콘텐츠 시간을 측정하는 메트릭인 FCP(First Contentful Paint, 최초 콘텐츠풀 페인트)는 로딩 경험의 `시작` 부분만을 포착하므로 로딩
                성능을 측정하기에 부적절하다고 판단되었다.</p>
            <p>이러한 이유로 뷰포트 내의 가장 큰 요소가 렌더링된 시기를 확인하여 로딩 성능을 측정하고자 했다.</p>

            <figure>
                <Image src={'/images/react-html.png'} width={700} height={700} alt={'react-html'}/>
            </figure>
            <DividedBox/>
            <DividedBox/>
            <hr/>
            <br/>
            <DividedBox/>
            <DividedBox/>
            <p><strong>LCP 요소로 간주되는 것은 아래와 같다.</strong></p>
            <div>
                <Image src={'/images/lcp-element.png'} width={1000} height={500} alt={'lcp-elements'}/>
            </div>
            <DividedBox/>
            <DividedBox/>
            <hr/>
            <br/>
            <DividedBox/>
            <DividedBox/>
            <p><strong>요소의 크기는 어떻게 결정될까?</strong></p>
            <p>뷰포트 내에서 보여지는 요소</p>
            <p>기본 크기(intrinsic size)에서 크기가 조정된 이미지의 경우 보여지는 가시적 크기와 기본 크기 중 <strong>더 작은 것</strong>이 보고된다.</p>
            <p>텍스트 요소는 텍스트 노드의 크기만 고려된다.</p>

            <p><strong>LCP는 언제 보고될까?</strong></p>
            <p>LCP는 브라우저가 첫번째 프레임을 그리는 즉시 PerformanceEntry객체를 통해 최대 콘텐츠 요소를 식별하며, 이후에 최대 콘텐츠풀 요소가 변경될때마다 또 다른 PerformanceEntry 객체가 디스패치된다.</p>
            <p>
                PerformanceEntry 객체의 프로퍼티로는 name, entryType, startTime, duration 이 있다.
                특정 entryType 에 대해 성능 메트릭이 처음으로 시작되는 시기(PerformanceEntry가 생성되는 시기), 성능 이벤트가 지속되는 시기를 파악할 수 있다.
            </p>
            <p>정확한 분석을 위해 가장 최근에 디스패치된 PerformanceEntry를 사용한다.</p>

            <p><strong>LCP 요소의 크기가 변경되면 어떻게 처리될까?</strong></p>
            <p>
                오직 뷰포트에서 요소의 처음 크기와 위치만 고려한다.
                즉, 렌더링 이후에 요소의 크기나 위치를 변경해도 새 LCP 후보가 생성되지 않는다.
            </p>
            <NextButton path={'/lcp/optimization'}/>
        </Container>
    )
}

const Container = styled.div`
  figure {
    text-align: center;
  }

  p {
    line-height: 30px;
  }

  i {
    font-weight: 600;
    color: #0055D6;
  }
`;

const DividedBox = styled.div`
    padding-top: 100px;
`;
export default Definition;
