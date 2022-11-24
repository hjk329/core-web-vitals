import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import {ContentContainer} from "../../../styles/Layout.Styled";

const Header = () => {
    return (
        <Wrapper>
            <Link href={'/'}>
                <Logo>
                    <Image src={'/images/logo.svg'} width={60} height={60} alt={'f-lab-logo'}/>
                </Logo>
            </Link>

            <Title>
                월간 에프랩 11월호: 이든의 코어 웹 바이탈
            </Title>
        </Wrapper>

    )
}

const Wrapper = styled(ContentContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d1d1d1;
`;

const Logo = styled.div`

`;

const Title = styled.div`
  height: 94px;
  display: flex;
  justify-content: flex-end;
  align-items: center;


  font-size: 20px;
`;
export default Header;
