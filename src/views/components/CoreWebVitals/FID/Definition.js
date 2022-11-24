import styled from '@emotion/styled';
import Image from "next/image";
import NextButton from "../../Buttons/NextButton";

const Definition = () => {
    return (
        <Container>
            <figure>
                <Image src={'/images/fid.svg'} width={500} height={500} alt={'fid'}/>
                <figcaption>이미지 출처: https://web.dev/vitals/</figcaption>
            </figure>
            <p>
                FID(First Input Delay, 최초 입력 지연)는 사용자가 링크를 클릭하거나, 버튼을 탭하는 등의 최초 입력 시작한 시점부터 브라우저가 해당 인터렉션에 대한 응답으로 실제로
                이벤트 핸들러 처리를 시작하기까지의 시간을 측정한다.
            </p>
            <p>좋은 사용자 경험을 제공하기 위해서 FID는 100밀리초 이하여야 한다.</p>
            <p>FID 값이 커지는 이유는 대개 브라우저의 메인 스레드가 다른 작업을 할 수 없어서 사용자에게 응답할 수 없기 때문이다.</p>

            <br/>
            <br/>
            <DividedBox/>


            <p><strong>최초 입력으로 간주되는 것은?</strong></p>
            <p>클릭, 탭 및 키 누름과 같은 이벤트이다.</p>
            <span>참고로 스크롤 및 확대/축소는 최초 입력으로 간주되지 않는다.</span>

            <DividedBox/>
            <DividedBox/>


            <p><strong>상호 작용에 이벤트 리스너가 없으면 어떻게 될까?</strong></p>
            <p>FID는 상호 작용에 이벤트 리스너가 없어도 측정된다. 입력 이벤트가 수신된 시점과 메인 스레드가 다음 유휴 상태에 들어간 시점 사이의 델타를 측정하기 때문이다. </p>
            <p>사용자의 입력에 브라우저가 응답하기 위해서는 메인 스레드가 유휴 상태가 되어야 하므로 메인 스레드가 유휴 상태인지의 여부를 체크한다.</p>
            <p>예를 들어, 다음 HTML 요소는 모두 사용자의 입력에 응답하기 위해 메인 스레드에서 진행 중인 작업이 완료되어야 한다.</p>
            <figure>
                <Image src={'/images/html-elements.png'} width={500} height={200} alt={'html-elements'}/>
            </figure>

            <DividedBox/>
            <DividedBox/>
            <p><strong>만약 사용자가 페이지와 상호작용하지 않으면 어떻게 될까?</strong></p>
            <p>모든 사용자가 사이트를 방문할때마다 상호작용 하는 것은 아니다. 따라서, 사용자마다 FID 값이 없을 수도 있다. </p>
            <p>같은 페이지더라도 메인 스레드의 유휴 상태 여부에 따라서 FID 값이 높거나, 낮을 수도 있다.</p>

            <DividedBox/>
            <DividedBox/>
            <p><strong>이벤트 처리 시간이 아닌, 입력 지연만 고려하는 이유는 무엇일까?</strong></p>
            <p>이벤트 처리 시간 자체를 메트릭으로 정하면 setTimeout() 또는 requestAnimationFrame() 등의 비동기화 콜백을 사용해서 이벤트에 응답하는 시간만 단축시킬 꽤를 부릴 여지가 있다 🥶</p>
            <span>사용자에게는 더 느린 응답을 제공하게 된다</span>
            <p>따라서 FID는 이벤트 대기 시간의 지연만을 측정한다!</p>
            <NextButton path={'/fid/optimization'}/>
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
