// eslint-disable-next-line import/no-extraneous-dependencies
import { ConnectionHandler, Environment, FetchFunction, Network, RecordSource, Store } from 'relay-runtime';
import { CommentsHandler } from './handlers';

const fetchRelay: FetchFunction = async (params, variables) => {
  const response = await fetch('http://localhost:4000/graphql', {
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  return response.json();
};

const handlerProvider = (handle: string): unknown => {
  switch (handle) {
    case 'connection':
      return ConnectionHandler;
    case 'comments':
      return CommentsHandler;
    default:
      throw new Error(`handlerProvider: No handler provided for ${handle}`);
  }
};

const environment = new Environment({
  handlerProvider,
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});

export default environment;
