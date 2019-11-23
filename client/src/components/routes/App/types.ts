// eslint-disable-next-line import/no-unresolved
import { PreloadedQuery } from 'react-relay/lib/relay-experimental/EntryPointTypes';
import { AppQuery } from './__generated__/AppQuery.graphql';

export interface Props {
  prepared: {
    appQuery: PreloadedQuery<AppQuery>;
  };
  children: React.ReactChildren;
}
