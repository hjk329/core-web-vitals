import styled from '@emotion/styled';
import Link from 'next/link'
import Image from 'next/image'

const Desc = () => {
    return (
        <Container>
            <p>
                웹 사이트를 성공적으로 유지하기 위해 <strong>최적화된 사용자 경험을 제공</strong>하는 것은 필수적이다.
            </p>
            <p>
                구글에서는 웹 사이트의 성능을 측정하고 보고하는 다양한 지표와 도구를 제공해왔으며, ‘코어 웹 바이탈(Core Web Vitals)’ 이라는 가장 중요한 메트릭을 소개했다.
            </p>
            <p>
                말 그대로 좋은 사용자 경험을 제공하기 위해 핵심이 되는 필수적인 지표들을 포함한다.
            </p>
            <p>코어 웹 바이탈에 포함되는 메트릭은 <strong>LCP, FID, CLS</strong> 이다.</p>
            <span>
                메트릭이란? 성능은 상대적일 수 있다.
                왜냐하면 동일한 사이트이더라도 빠른 네트워크를 사용하는 사용자에게는 빠르고, 느린 네트워크를 사용하는 사용자에게는 느리게 동작할 수 있기 때문이다.
                따라서, 이러한 상대성을 줄이고 정확하고 정량적이며 객관적인 기준에서 성능을 비교할 수 있어야하는데 이러한 객관적인 기준을 ‘메트릭’이라고 한다.</span>

            <p>위 세가지 메트릭이 모두 75번째 백분위수인지를 기준으로 권장 목표에 도달했는지 확인한다.</p>
            <Box/>
            <Box/>
            <p>
                코어 웹 바이탈을 측정할 수 있는 도구는 아래와 같다.
            </p>
            <p className={'center'}><strong>Lighthouse</strong></p>
            <figure>
                <Image src={'/images/lighthouse.png'} width={500} height={700} alt={'lighthouse'}/>
            </figure>
            <br/>
            <br/>
            <br/>
            <p className={'center'}><strong><Link href={'https://pagespeed.web.dev/'} target={'_blank'}>PageSpeedInsights</Link></strong></p>
            <figure>
                <Image src={'/images/page-speed-insights.png'} width={1000} height={400} alt={'page-speed-insights'}/>
            </figure>
            <br/>
            <br/>
            <br/>
            <p className={'center'}><strong>Chrome DevTools</strong></p>
            <figure>
                <Image src={'/images/chrome-devtools.png'} width={500} height={700} alt={'dev-tools'}/>
            </figure>
            <br/>
            <br/>
            <br/>
            <p className={'center'}><strong>Web Vitals 익스텐션</strong></p>
            <figure>
                <Image src={'/images/web-vitals-extension.png'} width={1000} height={400} alt={'web-vitals-extension'}/>
            </figure>
            <br/>
            <br/>
            <br/>
            <p className={'center'}><strong><Link
                href={'https://search.google.com/search-console/core-web-vitals?resource_id=sc-domain%3Af-lab.kr&hl=ko'}
                target={'_blank'}>
                Search Console
            </Link></strong></p>
            <figure>
                <Image src={'/images/search-console.png'} width={1000} height={400} alt={'search-console'}/>
            </figure>
            <br/>
            <br/>
            <br/>
            <p className={'center'}><strong><Link href={'https://web.dev/measure/'} target={'_blank'}>web.dev</Link></strong></p>
            <br/>
            <br/>
            <br/>
            <p>
                <Link
                    href={'https://search.google.com/search-console/core-web-vitals?resource_id=sc-domain%3Af-lab.kr&hl=ko'}
                    target={'_blank'}>
                    우리 프로덕트의 코어 웹 바이탈은 여기에서 확인하실 수 있어요!
                </Link>
            </p>
            <br/>
            <br/>
            <br/>
        </Container>
    )
}

const Container = styled.div`
  margin-top: 40px;

  p {
    font-size: 16px;
    line-height: 26px;
  }

  span {
    font-size: 12px;
  }


  a {
    color: #3884c7;

    &:hover {
      text-decoration: underline;
    }
  }

  figure {
    text-align: center;
  }
  
  >.center {
    text-align: center;
  }
`;

const Box = styled.div`
  padding-top: 100px;
`;

export default Desc;
