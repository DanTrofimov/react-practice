// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyBZXhCCwtfiomKBHUgiOUMV9SiwcywTGMk",
    authDomain: "my-app-bf4f3.firebaseapp.com",
    projectId: "my-app-bf4f3",
    storageBucket: "my-app-bf4f3.appspot.com",
    messagingSenderId: "825377096146",
    appId: "1:825377096146:web:b05f5da7f28f29eea0880b"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});
