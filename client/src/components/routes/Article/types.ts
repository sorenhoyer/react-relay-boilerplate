import { RouteComponentProps } from 'react-router';

export type TParams = { slug: string };

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Props extends RouteComponentProps<TParams> {}
