import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Li = styled.li`
  padding: 1rem;

`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: red;
  }
`;
