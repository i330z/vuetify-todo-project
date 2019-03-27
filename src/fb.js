import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
apiKey: "AIzaSyAGaZ6Os7u37BnDtPpuT3HK6-8T91n6esc",
authDomain: "todo-vuetify-15050.firebaseapp.com",
databaseURL: "https://todo-vuetify-15050.firebaseio.com",
projectId: "todo-vuetify-15050",
storageBucket: "todo-vuetify-15050.appspot.com",
messagingSenderId: "741255799456"
};
firebase.initializeApp(config);
const db = firebase.firestore();


export default db;