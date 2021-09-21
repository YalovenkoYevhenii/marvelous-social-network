import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

import COLORS from 'constants/styles';

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding: 0 4rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: ${COLORS.secondary};
  font-size: 1rem;
  &:hover {
    color: ${COLORS.active};
  }
`;

export const Main = styled.main`
  flex: 1;
`;

export const PageContentContainer = styled.div`
  background-color: ${COLORS.lightGrayBg};
  padding: 2rem 1rem;
  border-radius: .5rem;
  display: flex;
`;

// PostBlock

export const BlockWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fff;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
  margin: 1rem;
  padding: 1rem;
  align-self: stretch;
`;

export const MessageBlock = styled.div`
  background-color: #fff;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
  margin: 1rem;
  padding: 1rem;
  align-self: stretch;
  text-align: center;
  font-weight: 600;
  font-size: 1.2rem;
`;

export const BlockRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
`;

export const PostAvatar = styled(Avatar)`
  margin: 1rem;
`;

export const PostBlockUserBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const PostUserName = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

export const PostContent = styled.p`
  font-size: 1rem;
  overflow-wrap: anywhere;
`;

export const PostDate = styled.time`
  color: grey;
  font-size: .8rem;
`;

// FriendBlock
export const FriendBlockWrapper = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: flex-start;
  background-color: #fff;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
  margin: 1rem;
  padding: 1rem;
  &:hover {
    background-color: rgba(0, 0, 0, .05);
  }
  &:active {
    background-color: rgba(0, 0, 0, .1);
  }
`;

export const FriendBlockLink = styled(Link)`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  color: black;

`;

export const FriendBlockAvatar = styled.img`
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  object-fit: cover;
  border: 0.25rem solid Gainsboro;
`;

export const FriendBlockInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
  flex: 1;
`;

export const FriendBlockInfoName = styled.div`
  font-size: 2rem;
  font-weight: 600;
`;

export const AbsenceMessage = styled.div`
  color: grey;
  font-weight: 400;
`;
