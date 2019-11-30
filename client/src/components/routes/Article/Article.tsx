import React, { useContext } from 'react';
import { graphql } from 'react-relay';
import { usePreloadedQuery } from 'react-relay/hooks';
// eslint-disable-next-line import/no-unresolved
import { PreloadedQuery } from 'react-relay/lib/relay-experimental/EntryPointTypes';
import { CommentList, Article as ArticleItem } from '../..';
import { ArticleQuery } from './__generated__/ArticleQuery.graphql';
import RoutingContext from '../../../routing/RoutingContext';
// import { Props } from './types';

const articleQuery = graphql`
  query ArticleQuery($slug: String!) {
    article(slug: $slug) {
      ...Article_item
      ...CommentList_items
    }
  }
`;

interface Props {
  prepared: {
    articleQuery: PreloadedQuery<ArticleQuery>;
  };
}

const Article: React.FC<Props> = ({ /* match, history,  */ prepared }) => {
  const data = usePreloadedQuery(articleQuery, prepared.articleQuery);
  const router = useContext(RoutingContext);

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        onClick={(e): void => {
          e.preventDefault();
          router.history.goBack();
        }}
      >
        Back to articles
      </a>
      <ArticleItem item={data.article} />
      <CommentList items={data.article} />
    </>
  );
};

export default Article;
