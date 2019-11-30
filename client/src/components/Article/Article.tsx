import React from 'react';
import { graphql } from 'react-relay';
import { useFragment } from 'react-relay/hooks';
import { Props } from './types';

const articleItemFragment = graphql`
  fragment Article_item on Article {
    title
    text
    commentsCount
  }
`;

const Article: React.FC<Props> = ({ item }) => {
  const { commentsCount, text, title } = useFragment(articleItemFragment, item);

  return (
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
      <p>Number of comments: {commentsCount}</p>
    </div>
  );
};

export default Article;
