import React from 'react';

import {
  ROOT_PATH, PROFILE_PATH, POSTS_PATH, SETTINGS_PATH,
} from '../../constants/routes';

import { Ul, Li, StyledLink } from './styled';

const NavBar = () => {
  const probe = 'link to ';
  return (
    <nav>
      <Ul>
        <Li>
          <StyledLink to={ROOT_PATH}>
            {probe}
            dash
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to={PROFILE_PATH}>
            {probe}
            profile
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to={POSTS_PATH}>
            {probe}
            posts
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to={SETTINGS_PATH}>
            {probe}
            settings
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to="/auth">
            {probe}
            auth
          </StyledLink>
        </Li>
      </Ul>
    </nav>
  );
};

export default NavBar;
