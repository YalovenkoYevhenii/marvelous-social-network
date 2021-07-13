import React from 'react';
import { Link } from 'react-router-dom';

import {
  rootPath, profilePath, postsPath, settingsPath,
} from '../../utils/routes';

const NavBar = () => {
  const probe = 'link to ';
  return (
    <nav>
      <ul>
        <li>
          <Link to={rootPath}>
            {probe}
            dash
          </Link>
        </li>
        <li>
          <Link to={profilePath}>
            {probe}
            profile
          </Link>
        </li>
        <li>
          <Link to={postsPath}>
            {probe}
            posts
          </Link>
        </li>
        <li>
          <Link to={settingsPath}>
            {probe}
            settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
