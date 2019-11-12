import React from 'react';
import { graphql } from 'react-relay';
import { useFragment } from 'react-relay/hooks';
import { Props } from './types';

const commentItemFragment = graphql`
  fragment Comment_item on Comment {
    text
    user {
      firstName
    }
  }
`;

const Comment: React.FC<Props> = ({ item }) => {
  const { text, user } = useFragment(commentItemFragment, item);

  return (
    <div>
      <p>{text}</p>
      <p>{user.firstName}</p>
    </div>
  );
};

export default Comment;
