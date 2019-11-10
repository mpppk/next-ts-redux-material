import actionCreatorFactory, { ActionCreator } from 'typescript-fsa';
import { IUser } from '../reducer';

const sessionActionCreatorFactory = actionCreatorFactory('SESSION');

type SessionActionName = 'updateUser';

export type SessionActionCreators = Record<
  SessionActionName,
  ActionCreator<IUpdateUserPayload>
> & {
  updateUser: ActionCreator<IUpdateUserPayload>;
};

export const sessionActionCreators: SessionActionCreators = {
  updateUser: sessionActionCreatorFactory<IUpdateUserPayload>('UPDATE_USER')
};

export interface IUpdateUserPayload {
  user: IUser;
}
