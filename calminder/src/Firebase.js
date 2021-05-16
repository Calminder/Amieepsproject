import firebase from 'firebase/app';
import "firebase/storage";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";
const config = {
    apiKey: "AIzaSyBhRKBZwIFRYICGqquv08Cj2IpiCAmDGRM",
    authDomain: "calminder-6e144.firebaseapp.com",
    projectId: "calminder-6e144",
    storageBucket: "calminder-6e144.appspot.com",
    messagingSenderId: "342163801680",
    appId: "1:342163801680:web:f712357e317badd1a7f355",
    measurementId: "G-BNTDH7TYPX",
    databaseURL: "https://calminder-6e144-default-rtdb.europe-west1.firebasedatabase.app"
};

firebase.initializeApp(config);

export default firebase;