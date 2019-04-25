
import * as firebase from "firebase/app";
import "firebase/firestore";

export default class FirebaseController {
  constructor() {
    
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