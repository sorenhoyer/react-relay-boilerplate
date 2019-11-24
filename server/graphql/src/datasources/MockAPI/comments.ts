import { comments } from './data';
import { RawComment } from '../../types';

// eslint-disable-next-line import/prefer-default-export
export const getComments = async (articleId: string): Promise<RawComment[] | undefined> => {
  try {
    return comments.filter((item: RawComment) => item.articleId === articleId);
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(exception);
  }
};
