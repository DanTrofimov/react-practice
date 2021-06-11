// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyC3kc6SP4Qr_nQ29Fo5rlZ3o0Pv05c9Bsg",
    authDomain: "push-test-b191a.firebaseapp.com",
    projectId: "push-test-b191a",
    storageBucket: "push-test-b191a.appspot.com",
    messagingSenderId: "395448917099",
    appId: "1:395448917099:web:56181422f0e45c1a9ea52e"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    // here we can handle notification data
});