import React from 'react';
import { graphql } from 'react-relay';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { CommentList, Post as PostItem } from '../..';
import { PostQuery } from './__generated__/PostQuery.graphql';
import { Props } from './types';

const postQuery = graphql`
  query PostQuery($id: ID!) {
    post(id: $id) {
      ...Post_item
      ...CommentList_items
    }
  }
`;

const Post: React.FC<Props> = ({ match, history }) => {
  const data = useLazyLoadQuery<PostQuery>(postQuery, {
    id: match.params.id,
  });

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        onClick={(e): void => {
          e.preventDefault();
          history.goBack();
        }}
      >
        Back to posts
      </a>
      <PostItem item={data.post} />
      <CommentList items={data.post} />
    </>
  );
};

export default Post;
