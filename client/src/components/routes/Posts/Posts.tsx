import React from 'react';
import { graphql } from 'react-relay';
import { usePreloadedQuery } from 'react-relay/hooks';
// eslint-disable-next-line import/no-unresolved
import { PreloadedQuery } from 'react-relay/lib/relay-experimental/EntryPointTypes';
import { PostList } from '../..';
import { PostsQuery } from './__generated__/PostsQuery.graphql';

const postsQuery = graphql`
  query PostsQuery {
    ...PostList_items
  }
`;

interface Props {
  prepared: {
    postsQuery: PreloadedQuery<PostsQuery>;
  };
}

const Posts: React.FC<Props> = ({ prepared }) => {
  const data = usePreloadedQuery(postsQuery, prepared.postsQuery);

  return (
    <div>
      <p>PostList</p>
      <main>
        <PostList items={data} />
      </main>
    </div>
  );
};

export default Posts;
