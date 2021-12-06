import React from 'react';
import styled from 'styled-components';

const Button = ({ text, active }) => {
  return (
    <ButtonWrapper>
      <div className={`button ${active ? 'buttonActive' : ''}`}>{text}</div>
    </ButtonWrapper>     
  )
}

const ButtonWrapper = styled.div`
  display: inline-block;
  .button {
    border: 2px solid #46b156;
    border-radius: 5px;
    cursor: pointer;
    color: #46b156;
    font-size: 14px;
    font-weight: bold;
    padding: 6px 10px;
    text-transform: uppercase;
    &Active {
      background-color: #46b156;
      color: #fff;
    }
  }
`

export default Button;