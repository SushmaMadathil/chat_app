import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";




  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDajbV99TcMRXXMSzB6QpaB4mBgmC3-IgQ",
    authDomain: "react-slack-app-afdd3.firebaseapp.com",
    databaseURL: "https://react-slack-app-afdd3.firebaseio.com",
    projectId: "react-slack-app-afdd3",
    storageBucket: "react-slack-app-afdd3.appspot.com",
    messagingSenderId: "441998543926",
    appId: "1:441998543926:web:e431609ad999d59cff5c97",
    measurementId: "G-22PEHYG1SK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();


  export default firebase;