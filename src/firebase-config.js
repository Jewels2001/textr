import React, { useRef, useState } from 'react';
//firebase imports
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
//
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

//tutorial firebase 8 imports as compat
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

// tutorial wtih firebase 8 compat
firebase.initializeApp({
  //   //config
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MEASUREMENT_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();



//firebase 9 modular:
// const firebaseConfig = {
//   //config
//   apiKey: "AIzaSyD6UbMjG_zu-xtOFBstZEL5fjAzINyC69Y",
//   authDomain: "textr-e3098.firebaseapp.com",
//   projectId: "textr-e3098",
//   storageBucket: "textr-e3098.appspot.com",
//   messagingSenderId: "335206742328",
//   appId: "1:335206742328:web:97fb6d534ea698889129cd",
//   measurementId: "G-43V08YM3RX"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
//
// const auth = getAuth(app);
// const db = getFirestore(app);

//auth, db, analytics
export { firebase, auth, firestore, analytics };
