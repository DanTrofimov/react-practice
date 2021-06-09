import './App.css';
import { useEffect } from "react";
import Timer from "./components/Timer";
import firebase from "./firebase";

function App() {
    useEffect(()=>{
        const msg = firebase.messaging();
        msg.requestPermission().then(()=>{
          return msg.getToken({ vapidKey: "BCJGMH9V106wtoEdG_QQP-CjTUnHwm7tsJtVW5WCqRZEII_W_r9FWbzmnE1iWcpWQHMHa6ZR3PcAre5MU0Wr5WA" });
        }).then((data)=>{
          console.warn("token: ", data)
        })
    });

    return (
    <div className="App">
        <Timer />
    </div>
  );
}

export default App;