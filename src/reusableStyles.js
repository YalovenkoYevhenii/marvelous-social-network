import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding: 0 4rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: #3949AB;
  font-size: 1rem;
  &:hover {
    color: #FF4447;
  }
`;

export const Main = styled.main`
  flex: 1;
`;
