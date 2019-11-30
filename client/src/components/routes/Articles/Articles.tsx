import React from 'react';
import { graphql } from 'react-relay';
import { usePreloadedQuery } from 'react-relay/hooks';
// eslint-disable-next-line import/no-unresolved
import { PreloadedQuery } from 'react-relay/lib/relay-experimental/EntryPointTypes';
import { ArticleList } from '../..';
import { ArticlesQuery } from './__generated__/ArticlesQuery.graphql';

const articlesQuery = graphql`
  query ArticlesQuery {
    ...ArticleList_items
  }
`;

interface Props {
  prepared: {
    articlesQuery: PreloadedQuery<ArticlesQuery>;
  };
}

const Articles: React.FC<Props> = ({ prepared }) => {
  const data = usePreloadedQuery(articlesQuery, prepared.articlesQuery);

  return (
    <div>
      <p>ArticleList</p>
      <ArticleList items={data} />
    </div>
  );
};

export default Articles;
