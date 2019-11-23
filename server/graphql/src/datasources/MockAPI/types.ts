export interface User {
  id: string;
  firstName: string;
  lastName: string;
}

export interface Comment {
  id: string;
  text: string;
  userId: string;
  articleId: string;
}

export interface Article {
  id: string;
  userId: string;
  slug: string;
  title: string;
  text: string;
}
