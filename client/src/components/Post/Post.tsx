import React from 'react';
import { graphql } from 'react-relay';
import { useFragment } from 'react-relay/hooks';
import { Props } from './types';

const postItemFragment = graphql`
  fragment Post_item on Post {
    title
    text
    commentsCount
  }
`;

const Post: React.FC<Props> = ({ item }) => {
  const { commentsCount, text, title } = useFragment(postItemFragment, item);

  return (
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
      <p>Number of comments: {commentsCount}</p>
    </div>
  );
};

export default Post;
