import styled from '@emotion/styled';
import Link from 'next/link';
import {FcHome} from 'react-icons/fc';

const HomeButton = () => {
    return (
        <Container>
           <Link href={'/home'}>
                <Button>
                    <FcHome/>
                </Button>
            </Link>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 40px 0;
`;

const Button = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #b5c7e3;;
  border-radius: 50%;

  font-size: 28px;
  color: #fff;

  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;

`;
export default HomeButton;
