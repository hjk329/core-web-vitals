import styled from '@emotion/styled';
import Link from 'next/link'

const NavItem = ({item}) => {
    return (
        <Link href={item.path}>
            <Title>
                {item.title}
            </Title>
        </Link>
    )
}

const Title = styled.div`
  height: 40px;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  background: #b5c7e3;
  border: 1px solid #b5c7e3;
  border-radius: 8px;
  
  font-size: 28px;
  color: #fff;

  transition: 0.3s;
  
  &:hover {
    color: #b5c7e3;
    background: #fff;
  }
`;
export default NavItem;
