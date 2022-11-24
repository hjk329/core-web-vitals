import styled from '@emotion/styled';
import {NavMenu} from "../../../data/NavMenu";
import NavItem from "./NavItem";

const Navigation = () => {
    return (
        <Container>
            {
                NavMenu.map((item) => <NavItem item={item} key={item.title} />)
            }
        </Container>
    )
}

const Container = styled.div`
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
export default Navigation;
