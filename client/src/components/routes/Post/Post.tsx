import React from 'react';
import { graphql } from 'react-relay';
import { usePreloadedQuery } from 'react-relay/hooks';
// eslint-disable-next-line import/no-unresolved
import { PreloadedQuery } from 'react-relay/lib/relay-experimental/EntryPointTypes';
import { CommentList, Post as PostItem } from '../..';
import { PostQuery } from './__generated__/PostQuery.graphql';
// import { Props } from './types';

const postQuery = graphql`
  query PostQuery($id: ID!) {
    post(id: $id) {
      ...Post_item
      ...CommentList_items
    }
  }
`;

interface Props {
  prepared: {
    postQuery: PreloadedQuery<PostQuery>;
  };
}

const Post: React.FC<Props> = ({ /* match, history,  */ prepared }) => {
  const data = usePreloadedQuery(postQuery, prepared.postQuery);

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        onClick={(e): void => {
          e.preventDefault();
          // history.goBack();
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
