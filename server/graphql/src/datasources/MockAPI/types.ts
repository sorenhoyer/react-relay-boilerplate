export interface User {
  id: string;
  firstName: string;
  lastName: string;
}

export interface Comment {
  id: string;
  text: string;
  userId: string;
  postId: string;
}

export interface Post {
  id: string;
  userId: string;
  title: string;
  text: string;
}
