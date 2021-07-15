import React from 'react';

import {
  ROOT_PATH, PROFILE_PATH, POSTS_PATH, SETTINGS_PATH,
} from '../../constants/routes';

import { Ul, Li } from './styles';
import { StyledLink } from '../../reusableStyled';

const NavBar = () => (
  <nav>
    <Ul>
      <Li>
        <StyledLink to={ROOT_PATH}>
          dash
        </StyledLink>
      </Li>
      <Li>
        <StyledLink to={PROFILE_PATH}>
          profile
        </StyledLink>
      </Li>
      <Li>
        <StyledLink to={POSTS_PATH}>
          posts
        </StyledLink>
      </Li>
      <Li>
        <StyledLink to={SETTINGS_PATH}>
          settings
        </StyledLink>
      </Li>
      <Li>
        <StyledLink to="/auth">
          auth
        </StyledLink>
      </Li>
    </Ul>
  </nav>
);

export default NavBar;
