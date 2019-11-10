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

export const initializeFirebase = () => {
  // Configure Firebase.
  if (!firebase.apps.length) {
    const firebaseConfig = {
      apiKey: 'AIzaSyAUPXs37tdgPLG_M_KnfUQLEt72OnIugU8',
      appId: '1:1034627125798:web:6bc441e3a2eb14385b0ce7',
      authDomain: 'next-ts-redux-material.firebaseapp.com',
      databaseURL: 'https://next-ts-redux-material.firebaseio.com',
      measurementId: 'G-1BYGS2NT7P',
      messagingSenderId: '1034627125798',
      projectId: 'next-ts-redux-material',
      storageBucket: 'next-ts-redux-material.appspot.com'
    };
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
