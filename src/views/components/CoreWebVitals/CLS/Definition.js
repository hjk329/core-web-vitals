import styled from '@emotion/styled';
import Image from "next/image";
import Link from 'next/link'
import NextButton from "../../Buttons/NextButton";

const Definition = () => {
    return (
        <Container>
            <figure>
                <Image src={'/images/cls.svg'} width={500} height={500} alt={'cls'}/>
                <figcaption>이미지 출처: https://web.dev/vitals/</figcaption>
            </figure>
            <p>CLS(Cumulative Layout Shift, 누적 레이아웃 이동)은 뷰포트 내에서 예기치 않은 레이아웃 이동에 대한 점수를 의미한다.</p>
            <p>웹 사이트를 이용하면서 보고있던 글자가 반짝거리거나, 보이지 않았던 이미지나 비디오, 광고 등이 화면 위로 불쑥 올라온 경험 다들 있으시죠?</p>
            <p>바로 그거예요! 예기치 않은 레이아웃 이동을 발생시키는 바로 그것!</p>

            <br/>
            <br/>
            <Link href={'https://www.zachleat.com/web/mitt-romney-webfont-problem/'} target={'_blank'}>
            열악한 CLS의 원인이 되는 FOIT(Flash Of Invisible Text)로 인한 슬픈 썰 🥶
            </Link>

            <br/>
            <br/>
            <p style={{paddingTop: '200px'}}>우수한 사용자 경험을 제공하기 위해서 CLS는 <strong>0.1 이하</strong>가 되어야 한다.</p>
            <br/>
            <br/>
            <br/>
            <p>CLS 점수는 어떻게 계산될까?</p>
            <p><strong>layout shift score(레이아웃 이동 점수) = impact fraction(영향분율) * distance fraction(거리분율)</strong></p>
            <p><strong>영향분율: 불안정 요소가 두 프레임 사이 뷰포트 영역에 미치는 영향을 측정한다.</strong></p>
            <figure>
                <img src={'/images/impact-fraction.avif'} alt={'impact fraction'}/>
                <figcaption>이미지 출처: https://web.dev/i18n/ko/cls/</figcaption>
            </figure>
            <p>두 프레임 모두에서 요소의 <strong>가시 영역</strong>을 합친 빨간색 직사각형 만큼이 영향분율에 해당한다.</p>
            <p><strong>영향을 받은 영역이 뷰포트의 약 75%가 되므로 영향분율은 75%에 해당한다.</strong></p>
            <br/>
            <br/>
            <p><strong>거리분율: 불안정 요소가 수평 또는 수직으로 이동한 최대 거리를 뷰포트의 가장 큰 치수로 나눈 값이다.</strong></p>
            <figure>
                <img src={'/images/distance-fraction.avif'} alt={'impact fraction'}/>
                <figcaption>이미지 출처: https://web.dev/i18n/ko/cls/</figcaption>
            </figure>
            <p><strong>불안정 요소가 이동한 거리는 높이의 25%이다. 따라서, 거리분율은 25%가 된다.</strong></p>
            <i>즉, 레이아웃 이동 점수는 영향분율 0.75 * 거리분율 0.25 = 0.1875 이다.</i>
            <br/>
            <br/>
            <Quiz>
                <p>
                    기존 요소에 콘텐츠를 추가해서 레이아웃이 밀려나는 경우에는 레이아웃 이동 점수가 어떻게 측정될까?
                </p>
                <figure>
                    <img src={'/images/cls-quiz.avif'} alt={'cls quiz'}/>
                    <figcaption>이미지 출처: https://web.dev/i18n/ko/cls/</figcaption>
                </figure>
                <p>
                    두번째 프레임에서 Click Me! 라는 버튼이 갑자기 나타나면서 초록생 상자가 아래로 (부분적으로는 뷰포트 밖으로) 밀어낸 상황이다.
                </p>
                <p>회색 상자는 불안정 요소가 아니다. 왜냐하면 Click Me 라는 버튼이 추가되면서 그 ‘시작 위치’가 변경되지 않았기 때문이다.</p>
                <p><strong>CLS는 뷰포트 내에서 기존에 보였던 요소의 ‘시작 위치’가 변경될때 측정된다.</strong></p>
                <p>Click Me! 라는 버튼은 이전에 DOM에 없었기 때문에 ‘시작 위치’가 변경된 것은 아니다.</p>
                <p>불안정 요소는 녹색 상자이다. 시작 위치가 변경되었기 때문이다. 이에 대한 영향분율은 0.5이다.</p>
                <p>거리분율은 보라색 화살표로 표시되었다. 약 14%만큼 아래로 이동하였으므로 0.14가 거리분율이 되겠다.</p>
                <p>따라서 레이아웃 이동 점수는 0.5 * 0.14 = 0.07이다.</p>
            </Quiz>
            <Quiz>
                <p>예상치 못한 레이아웃 이동은 모두 나쁜걸까?</p>
                <p>구글은 이에 대해 <strong>사용자가 예상하지 않은 경우에만</strong> 좋지 않다고 해석하고 있다.</p>
                <p>예를 들어 사용자가 링크를 클릭하거나, 버튼을 누르거나, 검색 상자에 입력하는 등 사용자와의 상호작용으로 발생하는 레이아웃 이동은 사용자에게 그 관계가 명확히 보이므로 괜찮다고 본다. </p>
            </Quiz>
            <NextButton path={'/cls/optimization'}/>
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

  a {
    color: #3884c7;

    &:hover {
      text-decoration: underline;
    }
  }
  
  img {
    width: 100%;
  }

`;

const Quiz = styled.div`
   padding-top: 200px;

  p {
    line-height: 30px;
  }
`;

export default Definition;
