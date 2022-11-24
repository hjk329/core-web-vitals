import styled from '@emotion/styled';
import {GrFormPrevious} from "react-icons/gr";
import Link from "next/link";

const PrevButton = ({path}) => {
    return (
        <Container>
            {path && <Link href={path}>
                <Button>
                    <GrFormPrevious/>
                </Button>
            </Link>}
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  display: flex;
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
export default PrevButton;
