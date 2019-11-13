import React from 'react';
import { graphql } from 'react-relay';
import { useFragment } from 'react-relay/hooks';
import Link from '../../routing/Link';
import Post from '../Post/Post';
import { Props } from './types';

const postListItemsFragment = graphql`
  fragment PostList_items on Query {
    posts {
      id
      ...Post_item
    }
  }
`;

const PostList: React.FC<Props> = ({ items }) => {
  const { posts } = useFragment(postListItemsFragment, items);

  return (
    <div>
      {posts.map(item => {
        return (
          <div key={item.id}>
            <Post item={item} />
            <Link to={`/post/${item.id}`}>Read more...</Link>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
