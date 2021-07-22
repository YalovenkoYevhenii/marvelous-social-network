import React from 'react';

import {
  ROOT_PATH, PROFILE_PATH, POSTS_PATH, SETTINGS_PATH, AUTH_PATH,
} from '../../constants/routes';

import { Ul, Li, NavLinkStyled } from './styles';

const NavBar = () => (
  <nav>
    <Ul>
      <Li>
        <NavLinkStyled to={ROOT_PATH} exact>
          dash
        </NavLinkStyled>
      </Li>
      <Li>
        <NavLinkStyled to={PROFILE_PATH}>
          profile
        </NavLinkStyled>
      </Li>
      <Li>
        <NavLinkStyled to={POSTS_PATH}>
          posts
        </NavLinkStyled>
      </Li>
      <Li>
        <NavLinkStyled to={SETTINGS_PATH}>
          settings
        </NavLinkStyled>
      </Li>
      <Li>
        <NavLinkStyled to={AUTH_PATH}>
          auth
        </NavLinkStyled>
      </Li>
    </Ul>
  </nav>
);

export default NavBar;
