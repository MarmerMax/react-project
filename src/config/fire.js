import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCm5S7isCjeefcU7we0Wj8dzPG-o6t-n9U",
  authDomain: "my-web-project-01.firebaseapp.com",
  databaseURL: "https://my-web-project-01.firebaseio.com",
  projectId: "my-web-project-01",
  storageBucket: "my-web-project-01.appspot.com",
  messagingSenderId: "437100495831",
  appId: "1:437100495831:web:afd6afab7c619ada17c192"
}

const fire = firebase.initializeApp(firebaseConfig);
export default fire;