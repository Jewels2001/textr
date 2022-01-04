import React from 'react';
import { auth, db } from "../firebase-config.js";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}
