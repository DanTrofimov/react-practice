import './App.css';
import { useEffect, useState } from "react";
import firebase, { onMessageListener } from "./firebase";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

function App() {

    // need to get a token for messaging
    useEffect(()=>{
        const msg = firebase.messaging();
        msg.requestPermission().then(()=>{
          return msg.getToken({ vapidKey: "BM9Z6J_un2iJYmPUBBbNNZIvKdUun1iDjNDbSNQX_fot77rAKAA4QSIu965UbYSTncKLvcVx9RInzLSpqMglBEk" });
        }).then((data)=>{
          // here we can send a token to our backend
          console.warn("token: ", data)
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

    return (
    <div className="app">
        <div className="info">
            <img src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png" alt="logo" className="logo"/>
            <p>React App + FCM</p>
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