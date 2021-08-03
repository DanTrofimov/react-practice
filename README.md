# Web-pushed with FCM (Firebase Cloud Messaging)

FCM allows us to generate on web-pushes server & receive them on client side.

<img src="https://firebase.google.com/docs/cloud-messaging/images/diagram-FCM.png" alt="Architectural overview" style="width:300px;"/>

### Steps to setup FCM in your React app:

* Create web application in Firebase console (we will use credentials from it)
* Go to the left sidebar -> **Engage** -> **Cloud Messaging**. Here we can setup out web-push - add related image, title & subtitle.
* On the client we need to add `firebase` & `@firebase/messaging` dependencies
* Create `worker` folder in the root of project and initialize in the `index.js` file our Firebase client app
* Create service worker `firebase-messaging-sw.js` and initialize our client app here too, service worker can recieve message from the FCM backend and trigger web-push notification with the message's content on our client
* Also we added custom hook `useFirebaseMessaging` to make page where it used an entrypoint of messaging.

```javascript
export const useFirebaseMessaging = () => {
  // need to get a token for messaging
  useEffect(() => {
    const tokenTest = firebaseCloudMessaging.init();
    tokenTest.then(payload => {
      console.log(payload);
      // getting messaging token here
      // maybe send token to the backend, to start messaging
    });
  });
};
```
* After creating connection between server & client we are getting token of our client app, which we can use on FCM backend to send messages to a specific client app.


<img src="https://sun9-59.userapi.com/impg/T3TAwZES9OxxTxKrXdStFK4D8_mah4CUWN1Itw/YLZ3XkwKeFc.jpg?size=802x499&quality=96&sign=bfd8afc5cff5b12456dbd55d2a96300f&type=album" alt="Example of adding token" style="width:300px;"/>
