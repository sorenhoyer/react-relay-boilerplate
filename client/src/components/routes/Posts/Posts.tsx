import React from 'react';
import { graphql } from 'react-relay';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { PostList } from '../..';
import { PostsQuery } from './__generated__/PostsQuery.graphql';

const postsQuery = graphql`
  query PostsQuery {
    ...PostList_items
  }
`;

const Posts: React.FC<{}> = () => {
  const data = useLazyLoadQuery<PostsQuery>(postsQuery, {});

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
