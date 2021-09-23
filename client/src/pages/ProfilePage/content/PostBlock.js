/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import useRequest from 'hooks/useRequest';
import {
  BlockWrapper, BlockRow, PostAvatar, PostBlockUserBlock,
  PostUserName, PostContent, PostDate,
} from 'reusableStyles';

import { StyledTextField } from './styles';

import { useContextProfilePage } from '../context';

import IconDropdownMenu from './IconDropdownMenu';

const PostBlock = ({
  body, time, userData: { firstName, lastName, avatar }, setDoRepeat, postId,
}) => {
  const { deleteRequestOptions, patchRequestOptions } = useContextProfilePage();
  const { setOptions: setDeleteOptions, requestData: deleteRequestData } = useRequest();
  const { setOptions: setUpdateOptions, requestData: updateRequestData } = useRequest();
  const [postAction, setPostAction] = useState('');
  const [editPostBody, setEditPostBody] = useState(body);

  const handlerEditPost = (e) => {
    setEditPostBody(e.target.value);
  };

  const handlerSendEditedPost = (e) => {
    if (e.key === 'Enter') {
      setUpdateOptions({
        ...patchRequestOptions,
        url: process.env.REACT_APP_URL_POSTS_EDIT_POST,
        data: { postId, body: editPostBody },
      });

      setPostAction('');
    }
  };

  if (postAction === 'delete') {
    setDeleteOptions({
      ...deleteRequestOptions,
      url: process.env.REACT_APP_URL_POSTS_DELETE_POST,
      data: { postId },
    });
    setPostAction('');
  }
  if (updateRequestData) setDoRepeat(prev => prev + 1);
  if (deleteRequestData) return null;

  return (
    <BlockWrapper>
      <BlockRow>
        <PostBlockUserBlock>
          <PostAvatar src={avatar ? `${process.env.REACT_APP_URL}/${avatar}` : `${process.env.REACT_APP_URL}/default.png`} />
          <PostUserName>
            {`${firstName} ${lastName}`}
          </PostUserName>
        </PostBlockUserBlock>
        <IconDropdownMenu setPostAction={setPostAction} />
      </BlockRow>
      <BlockRow>
        {postAction === 'edit' ? (
          <StyledTextField
            label="Редактирование"
            variant="outlined"
            color="secondary"
            multiline
            rows={4}
            value={editPostBody}
            onChange={handlerEditPost}
            onKeyDown={handlerSendEditedPost}
          />
        ) : (
          <PostContent>
            {body}
          </PostContent>
        )}
      </BlockRow>
      <hr />
      <BlockRow>
        <PostDate>
          {time}
        </PostDate>
      </BlockRow>
    </BlockWrapper>
  );
};

export default PostBlock;
