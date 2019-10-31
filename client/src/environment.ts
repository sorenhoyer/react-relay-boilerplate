import { ConnectionHandler, Environment, FetchFunction, Network, RecordSource, Store } from 'relay-runtime';
import { CommentsHandler } from './relay/handlers';

const fetchQuery: FetchFunction = async (operation, variables) => {
  const response = await fetch('http://localhost:4000/graphql', {
    body: JSON.stringify({
      query: operation.text,
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

const handlerProvider = (handle: string) => {
  switch (handle) {
    case 'connection':
      return ConnectionHandler;
    case 'comments':
      return CommentsHandler;
  }
  throw new Error(`handlerProvider: No handler provided for ${handle}`);
};

const environment = new Environment({
  handlerProvider,
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
