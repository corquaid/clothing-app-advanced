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

// Take user ID from authentication library on Firebase and store it as user within Firestore database
// ASYNCHRONOUS action since this is an API request
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if userAuth object is not present exit out of function
  if(!userAuth) return;
  
  // create userRef variable
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // create snapShot of database instance
  const snapShot = await userRef.get();
  // if no record is present in the snapshot we need to create a database record
  if(!snapShot.exists) {
    const { displayName, email } = userAuth; // extract 2 fields from userAuth object
    const createdAt = new Date(); // invoke current time and date of create action

    // Make async request to database to store new user data
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData // spread additionalData prop
      })
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef; // return userRef object for future use
}

firebase.initializeApp(config);

// Exporting .auth() and .firestore() methods from firebase
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Set up Google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
