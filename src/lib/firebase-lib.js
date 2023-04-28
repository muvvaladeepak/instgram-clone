import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDp70FhTXymllvFLU1IYTu_TDj6zoFWvdU",
  authDomain: "instagram-clone-d2a8e.firebaseapp.com",
  projectId: "instagram-clone-d2a8e",
  storageBucket: "instagram-clone-d2a8e.appspot.com",
  messagingSenderId: "488110771703",
  appId: "1:488110771703:web:f5c2f1ac43b0afeed4b2f2",
  measurementId: "G-0J50SPG2N6",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
seedDatabase(firebase);

export { firebase, FieldValue };
