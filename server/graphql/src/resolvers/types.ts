import { User } from '../types';

export interface Comment {
  id: string;
  title: string;
  user: User;
}

export interface Post {
  id: string;
  title: string;
  text: string;
}
