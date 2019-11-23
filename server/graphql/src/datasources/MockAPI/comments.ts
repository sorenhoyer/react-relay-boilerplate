import { comments } from './data';
import { Comment } from './types';

// eslint-disable-next-line import/prefer-default-export
export const getComments = async (articleId: string): Promise<Comment[] | undefined> => {
  try {
    return comments.filter((item: Comment) => item.articleId === articleId);
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(exception);
  }
};
