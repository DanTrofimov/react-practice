import './App.css';
import { useEffect, useState } from "react";
import Timer from "./components/Timer";
import firebase, { onMessageListener } from "./firebase";

function App() {

    // need to get a token for messaging
    useEffect(()=>{
        const msg = firebase.messaging();
        msg.requestPermission().then(()=>{
          return msg.getToken({ vapidKey: "BM9Z6J_un2iJYmPUBBbNNZIvKdUun1iDjNDbSNQX_fot77rAKAA4QSIu965UbYSTncKLvcVx9RInzLSpqMglBEk" });
        }).then((data)=>{
          console.warn("token: ", data)
        })
    });

    const [message, setMessage] = useState("");

    onMessageListener().then(payload => {
        setMessage(`title: ${payload.notification.title}, body: ${[payload.notification.body]}`)
    });

    return (
    <div className="App">
        <Timer />
        <p>{ message }</p>
    </div>
  );
}

export default App;