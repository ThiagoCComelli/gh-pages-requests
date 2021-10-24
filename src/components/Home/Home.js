import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import './Home.css'

const Home = () => {
  const [pulse,setPulse] = useState(true)
  const history = useHistory()

  useEffect(() => {
    const pulseInterval = window.setInterval(() => {
      setPulse(pulse => !pulse)
    }, 1000)
    return () => {
      window.clearInterval(pulseInterval)
    }
  },[])

  return (
    <div className="mainHome">
        <div className="mainHomeBox">
            <h1 onClick={() => {history.push("/workspace")}}>Make your notes.</h1>
            <span onClick={() => {history.push("/")}}>And no more "ops, i forgot where i saved<span className={`mainHomeBoxPulse ${pulse ? "active" : null}`}></span>"</span>
        </div>
        <div className="mainHomeBox">
            <img src={`${process.env.PUBLIC_URL}/images/dancing-duck.gif`} alt="Dancing Duck"/>
        </div>
        <button onClick={() => {history.push("/api")}}>Test API</button>
    </div>
  )
}

export default Home;
