import { preloadQuery } from 'react-relay/hooks';
import JSResource from './JSResource';
import { RouteConfig } from './routing/createRouter';
import PreloadAppQuery, { AppQuery } from './components/routes/App/__generated__/AppQuery.graphql';
import PreloadPostsQuery, { PostsQuery } from './components/routes/Posts/__generated__/PostsQuery.graphql';
import PreloadPostQuery, { PostQuery } from './components/routes/Post/__generated__/PostQuery.graphql';
import RelayEnvironment from './relay/RelayEnvironment';

const routes: RouteConfig[] = [
  {
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
        component: JSResource('Posts', () => import('./components/routes/Posts/Posts')),
        exact: true,
        path: '/posts',
        prepare: () => ({
          postsQuery: preloadQuery<PostsQuery>(
            RelayEnvironment,
            PreloadPostsQuery,
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
          postQuery: preloadQuery<PostQuery>(
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
];

export default routes;
