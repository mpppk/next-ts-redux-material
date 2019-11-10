// Import FirebaseAuth and firebase.
import firebase from 'firebase';
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

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

// Configure FirebaseUI.
const uiConfig = {
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

export class SignInScreen extends React.Component {
  public render() {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
}
