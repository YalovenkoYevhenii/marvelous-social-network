import styled from 'styled-components';
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import TextField from '@material-ui/core/TextField';

import background from 'assets/img/background.jpg';
import { Container, StyledLink, PageContentContainer } from 'reusableStyles';

// ProfileHeading

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

export const StyledSendButton = styled(Button)`
  width: 10rem;
  align-self: center;
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

export const ProfileContentContainer = styled(PageContentContainer)`
  justify-content: space-between;
  align-items: flex-start;
`;
// AdditionalBlock
export const StyledColumnBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

// InfoBlock

export const InfoBlockHeading = styled.h2`
  margin: 0 auto;
  padding: .5rem;
`;

export const InfoBlockRowElement = styled.div`
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
`;

// PreviewFriendsBlock

export const StyledAvatarGroup = styled(AvatarGroup)`
  padding: 1rem 1rem 1rem 1rem;
  display: flex;
  justify-content: center;
`;

export const StyledAvatar = styled(Avatar)`
  height: 4rem;
  width: 4rem;
`;

export const CenteredStyledLink = styled(StyledLink)`
  margin: 0 auto;
  padding: .5rem;
`;

// PostsBlock

export const StyledColumnBlockPosts = styled(StyledColumnBlock)`
  flex: 1;
`;

export const StyledTextField = styled(TextField)`
  flex: 1;
  margin: 1rem 1rem 1rem 0;
`;

export const SendPostHeading = styled(InfoBlockHeading)`
  padding-bottom: 0;
`;
