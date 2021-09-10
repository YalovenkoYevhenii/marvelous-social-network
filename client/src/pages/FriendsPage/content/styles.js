import styled from 'styled-components';
import SearchBar from 'material-ui-search-bar';
import Button from '@material-ui/core/Button';

import { PageContentContainer } from 'reusableStyles';

export const FriendsPageContentContainer = styled(PageContentContainer)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 2rem;
`;

export const StyledSearchBar = styled(SearchBar)`
  align-self: stretch;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

export const StyledButton = styled(Button)`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;
