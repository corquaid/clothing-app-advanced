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
  
  // if no record is present in the snapshot we need to create a database record / create a new document object
  if(!snapShot.exists) {
    const { displayName, email } = userAuth; // extract 2 fields from userAuth object
    const createdAt = new Date(); // invoke current time and date of create action

    // Make async request to database to store new user data / make new document object
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
};


// Function to convert shop data from returned ComponentDidMount array to desired object format
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data(); // destructure off required shop data variables

    return { // returning a new object from the collections array
      endPoint: encodeURI(title.toLowerCase()), // creates a URL-encoded object from a passed string, dealing with odd characters, etc.
      id: doc.id,
      title,
      items
    }
  });
  // Reduce method which is taking title from each collection object as the new object key and setting its value as the collection itself, e.g. "hats" = HATS COLLECTION, "jackets" = JACKETS COLLECTION, etc.
  return transformedCollection.reduce((accum, collection) => {
    accum[collection.title.toLowerCase()] = collection;
    return accum;
  }, {}); // empty object as initial return
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
