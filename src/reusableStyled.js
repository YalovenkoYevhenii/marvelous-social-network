import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: #0d0c0a;
  font-size: 1.3rem;
  &:hover {
    color: #FF4447;
  }
`;
