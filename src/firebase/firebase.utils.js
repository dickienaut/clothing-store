import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAq8vzPGsQgzLs3rk4NnBHtYWlLLTlUG9A",
    authDomain: "clothing-store-ede84.firebaseapp.com",
    databaseURL: "https://clothing-store-ede84.firebaseio.com",
    projectId: "clothing-store-ede84",
    storageBucket: "clothing-store-ede84.appspot.com",
    messagingSenderId: "186337914486",
    appId: "1:186337914486:web:a43b4e2e0008b80d717957"
  };

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
