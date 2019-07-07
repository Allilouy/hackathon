import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB6yE7KwH78vRbTucqwjRgHnTlFRZ-Y9f8",
  authDomain: "allilouy-1be17.firebaseapp.com",
  databaseURL: "https://allilouy-1be17.firebaseio.com",
  projectId: "allilouy-1be17",
  storageBucket: "allilouy-1be17.appspot.com",
  messagingSenderId: "718913944337",
  appId: "1:718913944337:web:63c758d307f92ff8"
};

try {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
} catch (e) {}
export default firebase;
