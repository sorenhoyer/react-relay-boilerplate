import { comments } from './data';
import { Comment } from './types';

// eslint-disable-next-line import/prefer-default-export
export const getComments = async (postId: string): Promise<Comment[] | undefined> => {
  try {
    return comments.filter((item: Comment) => item.postId === postId);
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(exception);
  }
};
