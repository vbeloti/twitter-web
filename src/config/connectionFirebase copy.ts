import * as firebase from 'firebase/app';

import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAe7lP_oMM7VT8KmUmOIzu6wnFFJkFDDeU",
  authDomain: "twitter-web-c7fc5.firebaseapp.com",
  databaseURL: "https://twitter-web-c7fc5.firebaseio.com",
  projectId: "twitter-web-c7fc5",
  storageBucket: "twitter-web-c7fc5.appspot.com",
  messagingSenderId: "173236741888",
  appId: "1:173236741888:web:bace3bfe83ef05f61eb5e5",
  measurementId: "G-80LG20LPGG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
