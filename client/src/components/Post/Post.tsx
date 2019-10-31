import React from 'react';
import { graphql } from 'react-relay';
import { useFragment } from 'react-relay/hooks';
import { Post_item } from './__generated__/Post_item.graphql';

const fragmentSpec = graphql`
  fragment Post_item on Post {
    title
    text
    commentsCount
  }
`;

const Post: React.FC<any> = ({ item }) => {
  const data: Post_item = useFragment(fragmentSpec, item);

  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.text}</p>
      <p>Number of comments: {data.commentsCount}</p>
    </div>
  );
};

export default Post;
