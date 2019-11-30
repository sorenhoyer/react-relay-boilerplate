import React from 'react';
import { graphql } from 'react-relay';
import { useFragment } from 'react-relay/hooks';
import Link from '../../routing/Link';
import Article from '../Article/Article';
import { Props } from './types';

const articleListItemsFragment = graphql`
  fragment ArticleList_items on Query {
    articles {
      id
      slug
      ...Article_item
    }
  }
`;

const ArticleList: React.FC<Props> = ({ items }) => {
  const { articles } = useFragment(articleListItemsFragment, items);

  return (
    <div>
      {articles.map(item => {
        return (
          <div key={item.id}>
            <Article item={item} />
            <Link to={`/article/${item.slug}`}>Read more...</Link>
          </div>
        );
      })}
    </div>
  );
};

export default ArticleList;
