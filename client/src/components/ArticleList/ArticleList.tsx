import React from 'react';
import { graphql } from 'react-relay';
import { useFragment } from 'react-relay/hooks';
import Link from '../../routing/Link';
import Article from '../Article/Article';
import { Props } from './types';

const ArticleList: React.FC<Props> = ({ items }) => {
  const { articles } = useFragment(
    graphql`
      fragment ArticleList_items on Query {
        articles {
          edges {
            node {
              id
              slug
              ...Article_item
            }
          }
        }
      }
    `,
    items,
  );

  const edges = articles?.edges;

  if (!edges) return null;

  return (
    <div>
      {edges.map(edge => {
        if (!edge?.node) return null;
        const { node } = edge;

        return (
          <div key={node.id}>
            <Article item={node} />
            <Link to={`/article/${node.slug}`}>Read more...</Link>
          </div>
        );
      })}
    </div>
  );
};

export default ArticleList;
