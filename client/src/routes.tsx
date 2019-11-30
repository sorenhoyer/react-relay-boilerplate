import { preloadQuery } from 'react-relay/hooks';
import JSResource from './JSResource';
import { RouteConfig } from './routing/createRouter';
import PreloadAppQuery, { AppQuery } from './components/routes/App/__generated__/AppQuery.graphql';
import PreloadArticlesQuery, { ArticlesQuery } from './components/routes/Articles/__generated__/ArticlesQuery.graphql';
import PreloadArticleQuery, { ArticleQuery } from './components/routes/Article/__generated__/ArticleQuery.graphql';
import RelayEnvironment from './relay/RelayEnvironment';

const routes: RouteConfig[] = [
  {
    component: JSResource('Callback', () => import('./components/routes/auth/Callback')),
    exact: true,
    path: '/callback',
  },
  {
    component: JSResource('Logout', () => import('./components/routes/auth/Logout')),
    exact: true,
    path: '/logout',
  },
  {
    component: JSResource('LogoutCallback', () => import('./components/routes/auth/LogoutCallback')),
    exact: true,
    path: '/logout/callback',
  },
  {
    component: JSResource('SilentRenew', () => import('./components/routes/auth/SilentRenew')),
    exact: true,
    path: '/silent-renew',
  },
  {
    component: JSResource('Admin', () => import('./components/routes/Admin/Admin')),
    path: '/admin',
  },
  {
    path: '/',
    component: JSResource('App', () => import('./components/routes/App/App')),
    prepare: params => {
      return {
        appQuery: preloadQuery<AppQuery>(
          RelayEnvironment,
          PreloadAppQuery,
          // The fetchPolicy allows us to specify whether to render from cached
          // data if possible (store-or-network) or only fetch from network
          // (network-only).
          { fetchPolicy: 'store-or-network' },
        ),
      };
    },
    routes: [
      {
        component: JSResource('Articles', () => import('./components/routes/Articles/Articles')),
        exact: true,
        path: '/articles',
        prepare: () => ({
          articlesQuery: preloadQuery<ArticlesQuery>(
            RelayEnvironment,
            PreloadArticlesQuery,
            // The fetchPolicy allows us to specify whether to render from cached
            // data if possible (store-or-network) or only fetch from network
            // (network-only).
            { fetchPolicy: 'store-or-network' },
          ),
        }),
      },
      {
        component: JSResource('Article', () => import('./components/routes/Article/Article')),
        prepare: params => ({
          articleQuery: preloadQuery<ArticleQuery>(
            RelayEnvironment,
            PreloadArticleQuery,
            {
              slug: params.slug,
            },
            { fetchPolicy: 'store-or-network' },
          ),
        }),
        path: '/article/:slug',
      },
    ],
  },
];

export default routes;
