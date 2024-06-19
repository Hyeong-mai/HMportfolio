import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); };`;

const MainCon = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 1s ease-in-out;
`;
const AboutFrameWrap = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1208px) {
    width: 45%;
  }
`;
const PhoneFrameWrap = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1208px) {
    width: 55%;
  }
`;
const PhoneFrame = styled.div`
  width: 50%;
  height: 90%;
  border: 3px solid black;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  @media (max-width: 1208px) {
    width: 70%;
    max-width: 240px;
    min-width: 200px;
  }
`;
const AboutFrame = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
`;

const MainFrame = ({ title }) => {
  return (
    <MainCon>
      <PhoneFrameWrap>
        <PhoneFrame>{title}</PhoneFrame>
      </PhoneFrameWrap>
      <AboutFrameWrap>
        <AboutFrame>Description</AboutFrame>
      </AboutFrameWrap>
    </MainCon>
  );
};

export default MainFrame;
