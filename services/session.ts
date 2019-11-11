import firebase from 'firebase';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
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

export const initializeFirebase = () => {
  // Configure Firebase.
  if (!firebase.apps.length) {
    const firebaseConfig = publicRuntimeConfig.firebase;
    firebase.initializeApp(firebaseConfig);
  }
};

export const getFirebaseUIConfig = () => {
  // Configure FirebaseUI.
  return {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/'
  };
};
