import styled from '@emotion/styled';
import Link from 'next/link'
import Image from 'next/image'
import {ContentContainer} from "../../../styles/Layout.Styled";

const Footer = () => {
    return (
        <Wrapper>
            <p>
                Copyright ⓒ f-lab-eden. All Rights Reserved
            </p>
            <Contact>
                <Link href={'https://github.com/f-lab-eden/core-web-vitals'} target={'_blank'}>
                    <Image src={'https://cdn-icons-png.flaticon.com/128/733/733609.png'} width={20} height={20}/>
                </Link>
                <Link href={'https://hjk329.github.io'} target={'_blank'}>
                    <Image src={'https://cdn-icons-png.flaticon.com/128/3959/3959542.png'} width={20} height={20}/>
                </Link>
                <Link href={'mailto:dev.hjk329@gmail.com'}>
                    <Image src={'https://cdn-icons-png.flaticon.com/128/5968/5968534.png'} width={20} height={20}/>
                </Link>
            </Contact>
        </Wrapper>
    )
}

const Wrapper = styled(ContentContainer)`
  //position: absolute;
  //bottom: 0;
  //left: 0;
  //width: 100%;
  padding: 20px 0;
  border-top: 1px solid #d1d1d1;
  
  p {
    display: flex;
    justify-content: center;
    font-size: 14px;
  }
`;

const Contact = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export default Footer;
