/* eslint-disable */

const express = require('express');
const PORT = 3000;
const app = express();

/* JSON body parse*/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
console.info('/hello call success ');
res.send('Welcome to Firebase Cloud Functions');
});

app.listen(PORT, () => {
console.info('Server is running on PORT:', PORT);
});

// exports.app = functions.https.onRequest(app);


// Import the functions you need from the SDKs you need
const firebase = require("firebase/app");

require("firebase/auth");
require('firebase/analytics')
require("firebase/firestore");
require("firebase/database");


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDxtbYFluOT9F_kOOnaLfPT4XtKED1Ck6w",
  authDomain: "projet-tournoi.firebaseapp.com",
  projectId: "projet-tournoi",
  storageBucket: "projet-tournoi.appspot.com",
  messagingSenderId: "1062852811907",
  appId: "1:1062852811907:web:287a8b00dbcde4181a0fb6",
  measurementId: "G-GPQVBWFLLG"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);

// firebase.analytics();

regarder les modeles de vues dans le dernier onglet epinglés pour structurer le projet !