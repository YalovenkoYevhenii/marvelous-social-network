import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import {
  ROOT_PATH, PROFILE_PATH, FRIENDS_PATH, SETTINGS_PATH,
} from '../../constants/routes';
import { useContextApp } from '../../App/context';

import {
  Ul, Li, NavLinkStyled, StyledButton,
} from './styles';

const NavBar = () => {
  const { user, handlerSignOut } = useContextApp();
  return (
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
          <NavLinkStyled to={FRIENDS_PATH}>
            friends
          </NavLinkStyled>
        </Li>
        <Li>
          <NavLinkStyled to={SETTINGS_PATH}>
            settings
          </NavLinkStyled>
        </Li>
        {user
          ? (
            <Li>
              <StyledButton
                endIcon={<ExitToAppIcon />}
                onClick={handlerSignOut}
              >
                <span>sign out</span>
              </StyledButton>
            </Li>
          )
          : null}
      </Ul>
    </nav>
  );
};

export default NavBar;
