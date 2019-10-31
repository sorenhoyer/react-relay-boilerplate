import React from 'react';
import { graphql } from 'react-relay';
import { useFragment } from 'react-relay/hooks';
import { Comment } from '..';
import { CommentList_items } from './__generated__/CommentList_items.graphql';

const fragmentSpec = graphql`
  fragment CommentList_items on Post {
    comments @__clientField(handle: "comments") {
      ...Comment_item
    }
  }
`;

const CommentList: React.FC<any> = ({ items }) => {
  const data: CommentList_items = useFragment(fragmentSpec, items);

  return (
    <div>
      {data.comments.map(item => {
        return <Comment item={item} />;
      })}
    </div>
  );
};

export default CommentList;
