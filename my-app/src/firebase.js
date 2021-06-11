import firebase from 'firebase';

// client web app's firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC3kc6SP4Qr_nQ29Fo5rlZ3o0Pv05c9Bsg",
    authDomain: "push-test-b191a.firebaseapp.com",
    projectId: "push-test-b191a",
    storageBucket: "push-test-b191a.appspot.com",
    messagingSenderId: "395448917099",
    appId: "1:395448917099:web:56181422f0e45c1a9ea52e"
};

// init of client firebase
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
