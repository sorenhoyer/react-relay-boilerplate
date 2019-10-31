import React from 'react';
import { graphql } from 'react-relay';
import { useFragment } from 'react-relay/hooks';
import { Comment_item } from './__generated__/Comment_item.graphql';

const fragmentSpec = graphql`
  fragment Comment_item on Comment {
    id
    text
    user {
      firstName
    }
  }
`;

const Comment: React.FC<any> = ({ item }) => {
  const data: Comment_item = useFragment(fragmentSpec, item);

  return (
    <div>
      <p>{data.text}</p>
      <p>{data.user.firstName}</p>
    </div>
  );
};

export default Comment;
