import React, { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import styled from 'styled-components'



const Spinner = () => {
  return (
    <SpinnerContainer className="d-flex justify-content-center spinner">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</SpinnerContainer>

  )
}

export default Spinner

const SpinnerContainer = styled.div`
height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  background-color: rgba(255, 255, 255, 0.5);
`