import * as firebase from 'firebase';
 
 
 var firebaseConfig = {
    apiKey: "AIzaSyDFIj1BOsjiebjH6o7zF5IR0FygdhdEUwQ",
    authDomain: "projectnepal-80325.firebaseapp.com",
    databaseURL: "https://projectnepal-80325.firebaseio.com",
    projectId: "projectnepal-80325",
    storageBucket: "projectnepal-80325.appspot.com",
    messagingSenderId: "689006637844",
    appId: "1:689006637844:web:11f8fdcf3c5027dec90801"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }

  export default firebase;