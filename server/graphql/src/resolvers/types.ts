import { User } from '../types';

export interface Comment {
  id: string;
  title: string;
  user: User;
  userId: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  text: string;
  userId: string;
}
