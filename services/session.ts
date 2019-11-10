import firebase from 'firebase';
import { IUser } from '../reducer';

export const fromFirebaseUserToUser = (user: firebase.User): IUser => {
  return {
    displayName: user.displayName,
    email: user.email,
    emailVerified: user.emailVerified,
    isAnonymous: user.isAnonymous,
    phoneNumber: user.phoneNumber,
    photoURL: user.photoURL,
    uid: user.uid
  };
};
