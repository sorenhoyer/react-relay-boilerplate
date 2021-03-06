/* eslint no-restricted-globals:0 */
import React, { useCallback, useContext } from 'react';
import RoutingContext from './RoutingContext';

interface Props {
  to: string;
  children: React.ReactNode;
}

/**
 * An alternative to react-router's Link component that works with
 * our custom RoutingContext.
 */
export default function Link(props: Props) {
  const router = useContext(RoutingContext);

  if (router == null) {
    throw new Error('<Link> requires a routing context to be set.');
  }

  // When the user clicks, change route
  const changeRoute = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      router.history.push(props.to);
    },
    // eslint-disable-next-line react/destructuring-assignment
    [props.to, router],
  );

  // Callback to preload just the code for the route:
  // we pass this to onMouseEnter, which is a weaker signal
  // that the user *may* navigate to the route.
  const preloadRouteCode = useCallback(() => {
    router.preloadCode(props.to);
    // eslint-disable-next-line react/destructuring-assignment
  }, [props.to, router]);

  // Callback to preload the code and data for the route:
  // we pass this to onMouseDown, since this is a stronger
  // signal that the user will likely complete the navigation
  const preloadRoute = useCallback(() => {
    router.preload(props.to);
    // eslint-disable-next-line react/destructuring-assignment
  }, [props.to, router]);

  return (
    // eslint-disable-next-line react/destructuring-assignment
    <a href={props.to} onClick={changeRoute} onMouseEnter={preloadRouteCode} onMouseDown={preloadRoute}>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {props.children}
    </a>
  );
}
