import React from 'react'
import Input from '../Chat/Input/Input'
import Messages from '../Chat/Messages/Messages'
import styled from "styled-components"

const StyledBg = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #000;
`;


function Container() {
  return (
    <StyledBg>
        <Messages />
        <Input />
    </StyledBg>
  )
}

export default Container