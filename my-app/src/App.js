import './App.css';
import { useEffect, useState } from "react";
import { messaging, onMessageListener, triggerNotification } from "./firebase";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

function App() {

    // need to get a token for messaging
    useEffect(()=>{
        messaging.requestPermission().then(()=>{
          return messaging.getToken({ vapidKey: process.env.REACT_APP_VAPID_KEY });
        }).then((tokenReceived)=>{
          // here we can send a token to our backend
            if (tokenReceived) {
                setToken(tokenReceived);
                // here we can send a token to our backend
            }
        })
    });

    const [message, setMessage] = useState({ title: "", body: "", imgSrc: "" });
    const [token, setToken] = useState("");
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

    return (
    <div className="app">
        <div className="info">
            <img src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png" alt="logo" className="logo"/>
            <p>React App + FCM</p>
            <button
                className="trigger-button"
                onClick={() => triggerNotification(token)}
            >
                trigger push
            </button>
            <p className="token">{ token }</p>
        </div>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} center>
            <h2>{ message.title }</h2>
            <p>
                { message.body }
            </p>
            <img src={message.imgSrc} alt="" className="message-img"/>
        </Modal>
    </div>
  );
}

export default App;