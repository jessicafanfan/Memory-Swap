
import * as firebase from "firebase/app";
import "firebase/firestore";

export default class FirebaseController {
  constructor() {
    var config = {
      apiKey: "AIzaSyClcu6gbx9v1v8X_UsZ8rxLd7vjjyqDUrg",
      authDomain: "memory-swap.firebaseapp.com",
      databaseURL: "https://memory-swap.firebaseio.com",
      projectId: "memory-swap",
      storageBucket: "memory-swap.appspot.com",
      messagingSenderId: "294187190948"
    };
    firebase.initializeApp(config);
    this.db = firebase.firestore();
    this.clothesCollectionRef = this.db.collection('clothes');
    this.usersCollectionRef = this.db.collection('users');
  }

  getAllClothesData = callback => {
    this.clothesCollectionRef.get().then(callback); 
      
      // (querySnapshot) => {
      // const clothesData = querySnapshot.forEach((doc) => {return doc.data()});
      // callback(clothesData);
  }
}