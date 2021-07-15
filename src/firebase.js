import firebase from "firebase"


const firebaseConfig = {


    apiKey: "AIzaSyC0HtTuOiodsge3xaVTyZcEt07rPu4cN-E",
    authDomain: "fir-crud-rhak.firebaseapp.com",
    databaseURL: "https://fir-crud-rhak-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-crud-rhak",
    storageBucket: "fir-crud-rhak.appspot.com",
    messagingSenderId: "469804715076",
    appId: "1:469804715076:web:5fd13d39e7f573f53e0011",
    measurementId: "G-YEW6LXR157"

 


}

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth()

export default firebase;
