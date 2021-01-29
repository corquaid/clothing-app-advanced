import firebase from 'firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('9pjA3N5Hz2QHENu8Z2h7').collection('cartItems').doc('HtwvHFjYZX2UN1Pbf0ew');

firestore.doc('/users/9pjA3N5Hz2QHENu8Z2h7/cartItems/HtwvHFjYZX2UN1Pbf0ew');