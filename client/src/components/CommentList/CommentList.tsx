import React from 'react';
import { graphql } from 'react-relay';
import { useFragment } from 'react-relay/hooks';
import Comment from '../Comment/Comment';
import { Props } from './types';

const commentListItemsFragment = graphql`
  fragment CommentList_items on Article {
    comments @__clientField(handle: "comments") {
      id
      ...Comment_item
    }
  }
`;

const CommentList: React.FC<Props> = ({ items }) => {
  const { comments } = useFragment(commentListItemsFragment, items);

  return (
    <div>
      {comments?.map(item => {
        return <Comment key={item.id} item={item} />;
      })}
    </div>
  );
};

export default CommentList;
