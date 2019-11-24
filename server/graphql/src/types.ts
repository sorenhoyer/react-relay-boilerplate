import DataLoader from 'dataloader';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Request } from 'express';

export interface Loaders {
  [key: string]: DataLoader<string, unknown>;
}

export interface RawComment {
  id: string;
  articleId: string;
  text: string;
  userId: string;
}

export interface RawArticle {
  id: string;
  slug: string;
  title: string;
  text: string;
  userId: string;
}

export interface RawUser {
  id: string;
  linkedId: string;
  firstName: string;
  lastName?: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName?: string;
}

export interface Context {
  me?: User;
  loaders: Loaders;
  req: Request;
}
