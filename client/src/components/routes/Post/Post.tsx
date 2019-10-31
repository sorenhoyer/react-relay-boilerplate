import React from 'react';
import { graphql } from 'react-relay';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { CommentList, Post as PostItem } from '../..';
import { PostQueryResponse } from './__generated__/PostQuery.graphql';

const PostQuery = graphql`
  query PostQuery($id: ID!) {
    post(id: $id) {
      ...Post_item
      ...CommentList_items
    }
  }
`;

const Post: React.FC<any> = ({ match, history }) => {
  const data = useLazyLoadQuery(PostQuery, {
    id: match.params.id,
  }) as PostQueryResponse;

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
