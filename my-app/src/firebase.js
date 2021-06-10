import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBZXhCCwtfiomKBHUgiOUMV9SiwcywTGMk",
    authDomain: "my-app-bf4f3.firebaseapp.com",
    projectId: "my-app-bf4f3",
    storageBucket: "my-app-bf4f3.appspot.com",
    messagingSenderId: "825377096146",
    appId: "1:825377096146:web:b05f5da7f28f29eea0880b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

export const onMessageListener = () =>
    new Promise((resolve) => {
        messaging.onMessage((payload) => {
            console.log("push data: ", payload);
            resolve(payload);
        });
    });

export default firebase;
