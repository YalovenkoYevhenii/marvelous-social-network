import React from 'react';

import { PostsPageProvider } from './context';

import PostsPageContent from './content/PostsPageContent';

const PostsPage = () => (
  <PostsPageProvider>
    <PostsPageContent />
  </PostsPageProvider>
);

export default PostsPage;
