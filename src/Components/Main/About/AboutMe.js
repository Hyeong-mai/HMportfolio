import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import AboutHeader from "./AboutElement/AboutHeader";
import AboutUser from "./AboutElement/AboutUser";
import AboutInterview from "./AboutElement/AboutInterview";
import AboutSkill from "./AboutElement/AboutSkill";

// 페이드 인 애니메이션 정의
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutMeLayout = styled.div`
  height: 250vh; /* 각 섹션이 화면의 100% 높이를 차지 */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 3em;
  color: white;
  background-color: #232323;
  @media (max-width: 1160px) {
    font-size: 2.5em;
  }
  @media (max-width: 430px) {
    height: 350vh;
  }
`;

const ContentsLayout = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  animation: ${(props) => (props.visible ? fadeIn : "none")} 2s ease-in-out;
  transition: opacity 0.3s ease-in-out;

  @media (max-width: 1160px) {
    width: 90%;
  }
`;

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const layoutTop = document
      .querySelector("#contentsLayout")
      .getBoundingClientRect().top;

    if (layoutTop < windowHeight) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AboutMeLayout>
      <AboutHeader />
      <ContentsLayout id="contentsLayout" visible={isVisible}>
        <AboutUser />
        <AboutInterview />
        <AboutSkill />
      </ContentsLayout>
    </AboutMeLayout>
  );
};

export default AboutMe;
