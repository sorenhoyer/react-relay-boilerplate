import React from 'react';
import { graphql } from 'react-relay';
import { useFragment } from 'react-relay/hooks';
import { Link } from 'react-router-dom';
import Post from '../Post/Post';
import { PostList_items } from './__generated__/PostList_items.graphql';

const fragmentSpec = graphql`
  fragment PostList_items on Query {
    posts {
      id
      ...Post_item
    }
  }
`;

const PostList: React.FC<any> = ({ items }) => {
  const data: PostList_items = useFragment(fragmentSpec, items);

  return (
    <div>
      {data.posts.map(item => {
        return (
          <>
            <Post item={item} />
            <Link to={`/post/${item.id}`}>Read more...</Link>
          </>
        );
      })}
    </div>
  );
};

export default PostList;
