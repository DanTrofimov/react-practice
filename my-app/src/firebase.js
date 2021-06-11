import firebase from 'firebase';

// client web app's firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyC3kc6SP4Qr_nQ29Fo5rlZ3o0Pv05c9Bsg",
    authDomain: "push-test-b191a.firebaseapp.com",
    projectId: "push-test-b191a",
    storageBucket: "push-test-b191a.appspot.com",
    messagingSenderId: "395448917099",
    appId: "1:395448917099:web:56181422f0e45c1a9ea52e"
};

let serverToken = "AAAAXBKXnGs:APA91bGpXNsjVJHgKH1r71vIAO0vTQA6Y1ThYHuOeMj3k-DxnrUljk2Bofx47P-Bo0MVd50PRsljU_-CKpwh-DcHY4cGTNWOjkR-nj8a6JGki9cq9x_pGjHEUXqRORpuxvFof94FOMs9"

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

export const triggerNotification = async (token) => {
    const endpoint = `https://fcm.googleapis.com//v1/projects/${firebaseConfig.projectId}/messages:send`;
    const data = {
        data: {
            message: {
                notification: {
                    title: "Message Title",
                    body: "Message body"
                },
                webpush: {
                    fcm_options: {
                        "link": "https://dummypage.com"
                    }
                }
            }
        },
        to: token
    };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `key=${serverToken}`
        },
        body: JSON.stringify(data)
    };
    await fetch(endpoint, options);
}

export default firebase;