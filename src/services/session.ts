import { sleep } from '../util';

const getPasswordHash = (p: string) => p; // FIXME
export const requestSignIn = async (_email: string, password: string) => {
  getPasswordHash(password);
  await sleep(1000);
  return {
    jwt: 'xxx',
    user: {
      displayName: 'user-name',
      photoURL: 'https://i.gyazo.com/f335ba575e7009ab424dea80ac992e9f.jpg',
      uid: 1,
    },
  };
};
