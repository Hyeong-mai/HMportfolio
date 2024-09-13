import React from "react";
import styled, { keyframes } from "styled-components";
import { LogoGithub, ChevronDownOutline } from "react-ionicons";

const backgroundFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const BackgroundMainLayout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.05);
  position: fixed;
  background-image: url("/image/Footer.png");
  animation: ${backgroundFadeIn} 2s ease-in-out forwards 1s;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  z-index: -1;
`;

const BackgroundMain = () => {
  return <BackgroundMainLayout></BackgroundMainLayout>;
};

export default BackgroundMain;
