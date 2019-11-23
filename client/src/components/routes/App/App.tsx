import React, { Suspense } from 'react';
import { graphql } from 'react-relay';
import { usePreloadedQuery } from 'react-relay/hooks';
import { Props } from './types';
import { AppHeader } from '../..';

const appQuery = graphql`
  query AppQuery {
    me {
      firstName
      lastName
    }
  }
`;

const App: React.FC<Props> = ({ children, prepared }) => {
  const { me } = usePreloadedQuery(appQuery, prepared.appQuery);

  return (
    <div>
      <pre>{JSON.stringify(me, null, 2)}</pre>
      <AppHeader me={me} />
      <main>
        <Suspense fallback="Loading...">{children}</Suspense>
      </main>
    </div>
  );
};

export default App;
