import { RawComment, RawArticle, RawUser } from '../../types';

export const users: RawUser[] = [
  {
    id: '38447ec4-ce18-401f-ab24-baf7192e005e',
    linkedId: 'google-oauth2|118019196908306508755',
    firstName: 'Søren',
    lastName: 'Høyer',
  },
  {
    id: '1e65426d-1390-467d-964b-9046741b19401e65426d-1390-467d-964b-9046741b1940',
    linkedId: 'auth0|5dd9bed9b338760f072cf224',
    firstName: 'John',
    lastName: 'Doe',
  },
];

export const comments: RawComment[] = [
  {
    id: '59b7c1d6-c71c-4ec5-8542-79ebb30ee7d0',
    text: 'Comment 1',
    userId: '38447ec4-ce18-401f-ab24-baf7192e005e',
    articleId: 'a7b968bd-7abf-4707-bc0a-ed9faad33166',
  },
  {
    id: 'eb730811-d5be-435d-9666-2d74ff2da34d',
    text: 'Comment 2',
    userId: '38447ec4-ce18-401f-ab24-baf7192e005e',
    articleId: 'a7b968bd-7abf-4707-bc0a-ed9faad33166',
  },
  {
    id: 'd9b263c6-8c2c-4397-9557-b9e5657f3ef7',
    text: 'Comment 3',
    userId: '38447ec4-ce18-401f-ab24-baf7192e005e',
    articleId: '1d8478ed-f278-4cec-94ea-5c4ed454061a',
  },
  {
    id: 'f73cd451-fb37-47cb-856b-ce613b8c518f',
    text: 'Comment 4',
    userId: '38447ec4-ce18-401f-ab24-baf7192e005e',
    articleId: '1d8478ed-f278-4cec-94ea-5c4ed454061a',
  },
];

export const articles: RawArticle[] = [
  {
    id: 'a7b968bd-7abf-4707-bc0a-ed9faad33166',
    userId: '38447ec4-ce18-401f-ab24-baf7192e005e',
    slug: 'article-1',
    title: 'Article 1 title',
    text: 'Article 1 text',
  },
  {
    id: '1d8478ed-f278-4cec-94ea-5c4ed454061a',
    userId: '38447ec4-ce18-401f-ab24-baf7192e005e',
    slug: 'article-1',
    title: 'Article 2 title',
    text: 'Article 2 text',
  },
];
