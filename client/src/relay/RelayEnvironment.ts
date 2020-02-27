// eslint-disable-next-line import/no-extraneous-dependencies
import { ConnectionHandler, Environment, FetchFunction, Network, RecordSource, Store } from 'relay-runtime';
import { CommentsHandler } from './handlers';

const getAccessToken = (): string => {
  const sessionKey = process.env.REACT_RELAY_BOILERPLATE_OIDC_SESSION_KEY;
  const info = sessionKey ? sessionStorage.getItem(sessionKey) : undefined;
  return info ? JSON.parse(info).access_token : '';
};

const fetchRelay: FetchFunction = async (params, variables) => {
  const response = await fetch(process.env.REACT_RELAY_BOILERPLATE_GRAPHQL_ENDPOINT, {
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${getAccessToken()}`,
    },
    method: 'POST',
  });

  // Get the response as JSON
  const json = await response.json();

  // GraphQL returns exceptions (for example, a missing required variable) in the "errors"
  // property of the response. If any exceptions occurred when processing the request,
  // throw an error to indicate to the developer what went wrong.
  if (Array.isArray(json.errors)) {
    // eslint-disable-next-line no-console
    console.log(json.errors);
    throw new Error(
      `Error fetching GraphQL query '${params.name}' with variables '${JSON.stringify(variables)}': ${JSON.stringify(
        json.errors,
      )}`,
    );
  }

  // Otherwise, return the full payload.
  return json;
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
  store: new Store(new RecordSource(), {
    // This property tells Relay to not immediately clear its cache when the user
    // navigates around the app. Relay will hold onto the specified number of
    // query results, allowing the user to return to recently visited pages
    // and reusing cached data if its available/fresh.
    gcReleaseBufferSize: 10,
  } as any),
});

export default environment;
