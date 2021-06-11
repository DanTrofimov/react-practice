import './App.css';
import { useEffect, useState } from "react";
import { messaging, onMessageListener } from "./firebase";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

function App() {

    // need to get a token for messaging
    useEffect(()=>{
        messaging.requestPermission().then(()=>{
          return messaging.getToken({ vapidKey: "BM9Z6J_un2iJYmPUBBbNNZIvKdUun1iDjNDbSNQX_fot77rAKAA4QSIu965UbYSTncKLvcVx9RInzLSpqMglBEk" });
        }).then((token)=>{
          // here we can send a token to our backend
            if (token) {
                console.warn("token: ", token)
                // here we can send a token to our backend
            }
        })
    });

    const [message, setMessage] = useState({ title: "", body: "", imgSrc: "" });
    const [modalOpen, setModalOpen] = useState(false);

    // getting data from the notification
    onMessageListener().then(payload => {
        setMessage({
            title: payload.notification.title,
            body: payload.notification.body,
            imgSrc: payload.notification.image
        });
        setModalOpen(true)
    });

    // const triggerNotification = () => {
    //
    // }

    return (
    <div className="app">
        <div className="info">
            <img src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png" alt="logo" className="logo"/>
            <p>React App + FCM</p>
            <button className="trigger-button">
                trigger push
            </button>
        </div>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} center>
            <h2>{ message.title }</h2>
            <p>
                { message.body }
            </p>
            <img src={message.imgSrc} alt=""/>
        </Modal>
    </div>
  );
}

export default App;