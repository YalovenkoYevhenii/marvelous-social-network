import styled from 'styled-components';
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

import background from '../../../assets/img/background.jpg';
import { Container, StyledLink } from '../../../reusableStyles';

export const StyledProfileHeadingBlock = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 10rem;
  margin-bottom: 2rem;
  padding: 0 2rem;
  position: relative;
  
`;

export const ProfileHeadingButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  width: 15rem;
  margin: 0.5rem;
`;

export const ProfileHeadingName = styled.div`
  font-size: 2rem;
  font-weight: 600;
  padding: 0 0 2rem 2rem;
`;

export const ProfileHeadingUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const StyledImage = styled.img`
  height: 13rem;
  width: 13rem;
  border-radius: 50%;
  object-fit: cover;
  border: 0.25rem solid white;
`;

export const ProfileHeading = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2rem;
`;

export const NameBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 12.5rem;
`;

export const StyledInfoBlock = styled.div`
  padding-left: 5rem;
  flex: 1;

`;

export const StyledUserName = styled.div`
  font-size: 2rem;
  font-weight: 600;
  padding: .2rem;
`;

export const StyledPersonalInfo = styled.div`
  font-size: 1rem;
`;

// new

export const ProfileHeaderImage = styled.div`
  border-radius: 0 0 .5rem .5rem;
  height: 20rem;
  width: 80vw;
  margin: 0 auto;
  background: url(${background}) center center / cover no-repeat;
`;

export const ProfileContainer = styled(Container)`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const ProfileInnerContainer = styled.div`
  background-color: #f0f2f5;
  padding: 2rem;
  border-radius: .5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
// AdditionalBlock
export const StyledAdditionalBlock = styled.div`
  display: block;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

// InfoBlock

export const InfoBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fff;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
  margin: 1rem;
`;

export const InfoBlockHeading = styled.h2`
  margin: 0 auto;
  padding: .5rem;
`;

export const InfoBlockRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoBlockRowElement = styled.div`
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
`;

// PreviewFriendsBlock

export const StyledAvatarGroup = styled(AvatarGroup)`
  padding: 1rem 1rem 1rem 1rem;
`;

export const StyledAvatar = styled(Avatar)`
  height: 4rem;
  width: 4rem;
`;

export const CenteredStyledLink = styled(StyledLink)`
  margin: 0 auto;
  padding: .5rem;
`;
