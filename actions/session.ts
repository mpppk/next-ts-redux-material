import actionCreatorFactory from 'typescript-fsa';
import { IUser } from '../reducer';

const sessionActionCreatorFactory = actionCreatorFactory('SESSION');

export const sessionAsyncActionCreators = {
  logout: sessionActionCreatorFactory.async('LOGOUT')
};

export const sessionActionCreators = {
  requestToInitializeFirebase: sessionActionCreatorFactory(
    'REQUEST_TO_INITIALIZE_FIREBASE'
  ),
  requestToLogout: sessionActionCreatorFactory('REQUEST_TO_LOGOUT'),
  updateUser: sessionActionCreatorFactory<IUpdateUserPayload>('UPDATE_USER')
};

export interface IUpdateUserPayload {
  user: IUser;
}
