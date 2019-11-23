import { User } from '../types';

export interface Comment {
  id: string;
  title: string;
  user: User;
  userId: string;
}

export interface Post {
  id: string;
  title: string;
  text: string;
  userId: string;
}
