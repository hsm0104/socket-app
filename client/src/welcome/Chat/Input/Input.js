import React from 'react'
import styled from "styled-components"

const StyledInput = styled.input`
    width: 100%;
    height: 10vh;
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

function Input() {
  return (
    <div>
        <StyledInput placeholder='정보 입력 창'/>
    </div>
  )
}

export default Input