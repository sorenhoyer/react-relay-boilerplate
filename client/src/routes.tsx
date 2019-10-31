import React from 'react';
import { Redirect } from 'react-router';
import { RouteConfig } from 'react-router-config';
import { App, Home, Post, Posts } from './components/routes';

export default [
  {
    path: '/',
    component: App,
    routes: [
      {
        exact: true,
        path: '/',
        render: () => <Redirect from="/" to="/home" />,
      },
      {
        component: Home,
        exact: true,
        path: '/home',
      },
      {
        component: Posts,
        exact: true,
        path: '/posts',
      },
      {
        component: Post,
        path: '/post/:id',
      },
    ],
  },
] as RouteConfig[];
