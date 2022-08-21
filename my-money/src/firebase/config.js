import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDEunEWU44yfv001XiS7wgnB7Dz4fIel_c",
  authDomain: "thaomoneyapp.firebaseapp.com",
  projectId: "thaomoneyapp",
  storageBucket: "thaomoneyapp.appspot.com",
  messagingSenderId: "553904200576",
  appId: "1:553904200576:web:63d50bf7c3a1719c6e7f65"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }