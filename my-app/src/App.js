import './App.css';
import { useEffect, useState } from "react";
import Timer from "./components/Timer";
import firebase, { onMessageListener } from "./firebase";

function App() {

    // need to get a token for messaging
    useEffect(()=>{
        const msg = firebase.messaging();
        msg.requestPermission().then(()=>{
          return msg.getToken({ vapidKey: "BCg1U7jwGD0yl35D4WMLuHnpgSN_IaN5Z-4YCjcL7J6tyTmXV2deTe-LlRqW4z_pGeKyr6vXYh9Ahl0m0N2CsK0" });
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