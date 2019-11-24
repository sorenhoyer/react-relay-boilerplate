import { decode /* , verify */ } from 'jsonwebtoken';
import { User } from '../types';
import { users } from '../datasources/MockAPI/data';
// eslint-disable-next-line import/prefer-default-export
export const getUser = (authHeader: string): User | undefined => {
  try {
    if (process.env.GRAPHQL_MOCK_USER === 'true') {
      return {
        id: '38447ec4-ce18-401f-ab24-baf7192e005e',
        firstName: 'Foo',
        lastName: 'Bar',
      } as User;
    }

    if (authHeader) {
      /** TODO: Use "verify" instead of "decode" */
      const token = authHeader.split(' ')[1];
      const payload = decode(token) as any;
      const { sub: id } = payload;

      const user = users.find(item => item.linkedId === id);

      return user as User;
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};
