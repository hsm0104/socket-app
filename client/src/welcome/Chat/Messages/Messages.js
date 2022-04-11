import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';


let socket;

function Messages() {
const ENDPOINT = 'localhost:5000';
const [greetingMsg, setGreetingMsg] = useState("잠시만요!");
const [inputName, setInputName] = useState(" 잠시만요!");
const [message, setMessage] = useState("");
const [messages, setMessages] = useState("");


useEffect(() => {
  socket = io(ENDPOINT);

  socket.on("greeting", data => {
    setGreetingMsg(data);
  })
  socket.on("setName", data => {
    setInputName(data);
  })

}, [])
  return (
    <>
      <div style={{color: "#fff"}}>{greetingMsg}</div>
      <div style={{color: "#fff"}}>{inputName}</div>
    </>
  )
}

export default Messages