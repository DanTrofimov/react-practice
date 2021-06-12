import firebase from 'firebase';

// client web app's firebase configuration
let firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

// init of client firebase
firebase.initializeApp(firebaseConfig);

export const messaging = firebase.messaging();

export const onMessageListener = () =>
    new Promise((resolve) => {
        messaging.onMessage((payload) => {
            console.log("push data: ", payload);
            resolve(payload);
        });
    });

// try to trigger notification on client
export const triggerNotification = async (token) => {
    const endpoint = process.env.REACT_APP_BASE_API;
    const data = {
        notification: {
            title: "Message Title",
            body: "Message body",
            image: "https://medialeaks.ru/wp-content/uploads/2018/11/Sai--t-Arte--m-273.jpg"
        },
        to: token
    };
    const options = {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json',
            'Authorization': `key=${process.env.REACT_APP_SERVER_TOKEN}`
        },
        body: JSON.stringify(data)
    };
    await fetch(endpoint, options);
};

export default firebase;