import { decode /* , verify */ } from 'jsonwebtoken';
import { User } from '../types';

const tempdb = [
  {
    id: '38447ec4-ce18-401f-ab24-baf7192e005e',
    linkedId: 'google-oauth2|118019196908306508755',
    firstName: 'Søren',
    lastName: 'Høyer',
  },
];

// eslint-disable-next-line import/prefer-default-export
export const getUser = (authHeader: string): User | undefined => {
  try {
    if (process.env.GRAPHQL_MOCK_USER === 'true') {
      return {
        id: '38447ec4-ce18-401f-ab24-baf7192e005e',
        firstName: 'John',
        lastName: 'Doe',
      } as User;
    }

    if (authHeader) {
      /** TODO: Use "verify" instead of "decode" */
      const token = authHeader.split(' ')[1];
      const payload = decode(token) as any;
      const { sub: id } = payload;

      const user = tempdb.find(item => item.linkedId === id);

      return user as User;
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};
