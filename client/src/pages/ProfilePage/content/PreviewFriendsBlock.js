import React, { useEffect } from 'react';

import { BlockWrapper, BlockRow } from 'reusableStyles';
import Preloader from 'components/Preloader';
import { FRIENDS_PATH } from 'constants/routes';
import useRequest from 'hooks/useRequest';
import { useContextProfilePage } from 'pages/ProfilePage/context';

import {
  InfoBlockHeading, StyledAvatarGroup, StyledAvatar, CenteredStyledLink,
} from './styles';

const PreviewFriendsBlock = () => {
  const { getRequestOptions } = useContextProfilePage();
  const {
    requestData, loading, setOptions,
  } = useRequest();

  useEffect(() => {
    setOptions({ ...getRequestOptions, url: process.env.REACT_APP_URL_FRIENDS });
  }, []);

  return (
    <BlockWrapper>
      <BlockRow>
        <InfoBlockHeading>Друзья</InfoBlockHeading>
      </BlockRow>
      {loading ? <Preloader /> : (
        <StyledAvatarGroup>
          <StyledAvatar alt="friend_photo" src={`${process.env.REACT_APP_URL}/${requestData?.content[0]?.avatar}` && null} />
          <StyledAvatar alt="friend_photo" src={`${process.env.REACT_APP_URL}/${requestData?.content[1]?.avatar}` && null} />
          <StyledAvatar alt="friend_photo" src={`${process.env.REACT_APP_URL}/${requestData?.content[2]?.avatar}` && null} />
          <StyledAvatar alt="friend_photo" src={`${process.env.REACT_APP_URL}/${requestData?.content[3]?.avatar}` && null} />
          <StyledAvatar alt="friend_photo" src={`${process.env.REACT_APP_URL}/${requestData?.content[4]?.avatar}` && null} />
        </StyledAvatarGroup>
      )}
      <BlockRow>
        <CenteredStyledLink to={FRIENDS_PATH}>
          Все друзья
        </CenteredStyledLink>
      </BlockRow>
    </BlockWrapper>
  );
};

export default PreviewFriendsBlock;
