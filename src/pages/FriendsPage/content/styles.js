import styled from 'styled-components';
import SearchBar from 'material-ui-search-bar';

import { PageContentContainer } from '../../../reusableStyles';

export const FriendsPageContentContainer = styled(PageContentContainer)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;
`;

export const StyledSearchBar = styled(SearchBar)`
  align-self: stretch;
`;
