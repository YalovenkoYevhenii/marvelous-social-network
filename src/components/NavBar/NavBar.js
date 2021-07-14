import React from 'react';
import { Link } from 'react-router-dom';

import {
  ROOT_PATH, PROFILE_PATH, POSTS_PATH, SETTINGS_PATH,
} from '../../constants/routes';

import { Ul, Li } from './styled';

const NavBar = () => {
  const probe = 'link to ';
  return (
    <nav>
      <Ul>
        <Li>
          <Link to={ROOT_PATH}>
            {probe}
            dash
          </Link>
        </Li>
        <Li>
          <Link to={PROFILE_PATH}>
            {probe}
            profile
          </Link>
        </Li>
        <Li>
          <Link to={POSTS_PATH}>
            {probe}
            posts
          </Link>
        </Li>
        <Li>
          <Link to={SETTINGS_PATH}>
            {probe}
            settings
          </Link>
        </Li>
        <Li>
          <Link to="/auth">
            {probe}
            auth
          </Link>
        </Li>
      </Ul>
    </nav>
  );
};

export default NavBar;
