import { articles } from './data';

export const getArticleBySlug = async (slug: string): Promise<unknown> => {
  try {
    return articles.find(item => item.slug === slug);
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(exception);
  }
};

export const getArticles = async (): Promise<unknown> => {
  try {
    return articles;
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(exception);
  }
};
