import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyCXFIKWodcaueBYENpS_6zss6SO8njc72U",
    authDomain: "ecommerce-f88fc.firebaseapp.com",
    projectId: "ecommerce-f88fc",
    storageBucket: "ecommerce-f88fc.appspot.com",
    messagingSenderId: "973830318960",
    appId: "1:973830318960:web:0794251d47f0689859bdb5"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db ,auth};
