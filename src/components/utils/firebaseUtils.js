import firebase from "firebase";

let config = {
  apiKey: "AIzaSyCUud1-YVbIDDD7AS7dS__6RYjcJptpzzE",
  authDomain: "carrer-coach.firebaseapp.com",
  databaseURL: "https://carrer-coach.firebaseio.com",
  projectId: "carrer-coach",
  storageBucket: "carrer-coach.appspot.com",
  messagingSenderId: "796475322996"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
export const firebaseStorageRef = firebase.storage();
