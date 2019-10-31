import { posts } from './data';

export const getPostById = async (id: string, userId: string): Promise<unknown> => {
  try {
    return posts.find(item => item.id === id && item.userId === userId);
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(exception);
  }
};

export const getPosts = async (userId: string): Promise<unknown> => {
  try {
    const userPosts = posts.filter(item => item.userId === userId);

    if (userPosts && userPosts.length) return userPosts;

    return;
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(exception);
  }
};
