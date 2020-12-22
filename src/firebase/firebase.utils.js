import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD47CzlKO8vLQsVuL6VTg7lCTo8jfxHq3Q",
  authDomain: "clothing-app-5d0b4.firebaseapp.com",
  projectId: "clothing-app-5d0b4",
  storageBucket: "clothing-app-5d0b4.appspot.com",
  messagingSenderId: "802600224988",
  appId: "1:802600224988:web:9c96b3f9a9285cc26a4c19"
};

firebase.initializeApp(config);

// Exporting .auth() and .firestore() methods from firebase
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Set up Google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
