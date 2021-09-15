import firebase from 'firebase';
require('@firebase/firestore')


  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyAsvJqaMZ9LqV2LEMNpbSGjtqmg9AaeQus",
    authDomain: "food-6b426.firebaseapp.com",
    databaseURL: "https://food-6b426.firebaseio.com",
    projectId: "food-6b426",
    storageBucket: "food-6b426.appspot.com",
    messagingSenderId: "26364566147",
    appId: "1:26364566147:web:9490f2a259506c49ed59b6"
  };
  firebase.initializeApp(firebaseConfig);
  


  export default firebase.firestore();
