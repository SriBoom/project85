import firebase from 'firebase';
require('@firebase/firestore');

export const firebaseConfig = {
    apiKey: "AIzaSyBmPIfyd9KNws0r8UONM7ZQ59oBzzKKi4U",
    authDomain: "spectagram-321703.firebaseapp.com",
    projectId: "spectagram-321703",
    storageBucket: "spectagram-321703.appspot.com",
    messagingSenderId: "588016081266",
    appId: "1:588016081266:web:c8b7f1af5710c3b42d25eb"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
} else{
  firebase.app();
}