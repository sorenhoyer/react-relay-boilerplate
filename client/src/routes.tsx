import React, { ReactNode } from 'react';
import { preloadQuery } from 'react-relay/hooks';
import { Redirect } from 'react-router';
import { Home } from './components/routes';
import JSResource from './JSResource';
import { RouteConfig } from './routing/createRouter';
import PreloadAppQuery, { AppQuery } from './components/routes/App/__generated__/AppQuery.graphql';
import PreloadPostsQuery, { PostsQuery } from './components/routes/Posts/__generated__/PostsQuery.graphql';
import PreloadPostQuery, { PostQuery } from './components/routes/Post/__generated__/PostQuery.graphql';
import RelayEnvironment from './relay/RelayEnvironment';

export default [
  {
    path: '/',
    component: JSResource('App', () => import('./components/routes/App/App')),
    prepare: params => {
      return {
        rootQuery: preloadQuery<AppQuery>(
          RelayEnvironment,
          PreloadAppQuery,
          {
            owner: 'facebook',
            name: 'relay',
          },
          // The fetchPolicy allows us to specify whether to render from cached
          // data if possible (store-or-network) or only fetch from network
          // (network-only).
          { fetchPolicy: 'store-or-network' },
        ),
      };
    },
    routes: [
      // {
      //   exact: true,
      //   path: '/',
      //   render: (): ReactNode => <Redirect from="/" to="/home" />,
      // },
      // {
      //   component: Home,
      //   exact: true,
      //   path: '/home',
      // },
      {
        component: JSResource('Posts', () => import('./components/routes/Posts/Posts')),
        exact: true,
        path: '/posts',
        prepare: () => ({
          issuesQuery: preloadQuery<PostsQuery>(
            RelayEnvironment,
            PreloadPostsQuery,
            {
              owner: 'facebook',
              name: 'relay',
            },
            // The fetchPolicy allows us to specify whether to render from cached
            // data if possible (store-or-network) or only fetch from network
            // (network-only).
            { fetchPolicy: 'store-or-network' },
          ),
        }),
      },
      {
        component: JSResource('Post', () => import('./components/routes/Post/Post')),
        prepare: params => ({
          issueDetailQuery: preloadQuery<PostQuery>(
            RelayEnvironment,
            PreloadPostQuery,
            {
              id: params.id,
            },
            { fetchPolicy: 'store-or-network' },
          ),
        }),
        path: '/post/:id',
      },
    ],
  },
] as RouteConfig[];
