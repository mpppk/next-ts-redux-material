import { reducerWithInitialState } from 'typescript-fsa-reducers';

export const globalInitialState = {
  user: (null as IUser) || null,
};

export interface IUser {
  displayName: string;
  photoURL: string;
  uid: string;
}

export type GlobalState = typeof globalInitialState;
export const global = reducerWithInitialState(globalInitialState);
