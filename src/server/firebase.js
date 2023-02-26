import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyACstuj_upo1bCBxL947ALUpkJ0u9cvno8", // Add API Key
  databaseURL:"https://video-f2e7f-default-rtdb.asia-southeast1.firebasedatabase.app/" // Add databaseURL
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("что вас беспокоит?");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
