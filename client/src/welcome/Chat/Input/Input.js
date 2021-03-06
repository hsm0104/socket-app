import React, {useState} from 'react'
import io from 'socket.io-client';

import { useDispatch } from 'react-redux';

import styled from "styled-components"
import {SendOutlined} from "@ant-design/icons"

const StyledInput = styled.input`
    width: 100%;
    height: 10vh;
    line-height: 10vh;
    border: none;
    border-top: 1px solid #CDCDCD;
    color: #373C47;
    font-size: 1rem;
    box-sizing: border-box;
    background-color: transparent;
    position: absolute;
    bottom:0;
    left: 0;
    padding-left: 2.625rem;
    :focus{
        color: #fff;
    }
`;

const StyledSendButton = styled.button`
    position: absolute;
    bottom: 2.5%;
    right:0;
    z-index:9;
    color: #373C47;
    background-color: transparent;
    border: none;
    font-size: 3rem;
    transform: rotate(-35deg);
    &:hover{
        color: #fff;
    }
`;

const SendMessage = ({handleSendButton}) => {
    const sendMessage = () => {
        handleSendButton(true)
    }
    return(
    <StyledSendButton onClick={sendMessage}>
        <SendOutlined />
    </StyledSendButton>
    )
}

function Input() {
    const ENDPOINT = 'localhost:5000';
    let socket = io(ENDPOINT);

    const [isInput, setIsInput] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    
    const handleNameChange = (event) =>{
        setName(event.currentTarget.value)
    }
    const handleEmailChange = (event) =>{
        setEmail(event.currentTarget.value);
    }
    const handleSendButton = (state) => {
        setIsInput(state);
        socket.emit("join", {name, email}, () => {
        });
        setIsInput("");
    }
  return (
    <div>
        {
            isInput ? <StyledInput placeholder='닉네임을 입력해주세요' onChange={handleNameChange}/>
            :  <StyledInput placeholder='이메일 입력해주세요' type="email" onChange={handleEmailChange}/>
        }
        <SendMessage handleSendButton={handleSendButton} />
    </div>
  )
}

export default Input