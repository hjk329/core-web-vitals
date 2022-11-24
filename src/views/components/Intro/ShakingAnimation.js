import styled from '@emotion/styled';
import Link from 'next/link'

const ShakingAnimation = () => {
    return (
        <Container className={'container'}>
            <Link href={'/home'}>
                뿌시기
            </Link>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);

  > a {
    color: #d74c63;
    font-size: 24px;
    font-weight: 600;

    animation: shake 0.5s infinite;
  }

  @keyframes shake {
    0% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
    10% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    20% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    100% {
      transform: translate(1px, 1px) rotate(0deg);
    }
  }

`;
export default ShakingAnimation;
