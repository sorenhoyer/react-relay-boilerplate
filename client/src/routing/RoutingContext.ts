import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { History, Location } from 'history';
import { match } from 'react-router';
// eslint-disable-next-line import/no-unresolved
import { PreloadedQuery } from 'react-relay/lib/relay-experimental/EntryPointTypes';
import { Resource } from '../JSResource';

export type PreparedQuery = {
  [queryName: string]: PreloadedQuery<any>;
};

export interface RouteComponentProps extends Entry {
  children?: JSX.Element;
}
export interface Route {
  location: Location;
  entries: Entry[];
}

export interface Entry {
  component?: Resource<any>;
  prepared: PreparedQuery;
  routeData: match<{}>;
}

export interface Router {
  history: History<any>;
  get: () => Route;
  preloadCode: (pathname: string) => void;
  preload: (pathname: string) => void;
  subscribe: (callback: (arg: Route) => void) => () => void;
}

const RoutingContext = React.createContext<Router | null>(null);

/**
 * A custom context instance for our router type
 */

export default RoutingContext;
