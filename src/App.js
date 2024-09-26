import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import BackgroundMain from "./Components/Main/BackgroundMain";
import Main from "./Components/Main/Main";
import { ChevronUp, Mail } from "react-ionicons";

// 글로벌 스타일
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Pretendard', sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

// 레이아웃 스타일
const Layout = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 800vh;
  @media (max-width: 430px) {
    height: 1000vh;
  }
`;

// 버튼 컨테이너 스타일 (display: flex, column)
const ButtonContainer = styled.div`
  position: fixed;
  bottom: 40px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; /* 버튼 간의 간격 */
  z-index: 1000;
`;

// 스크롤 제일 위로 가기 버튼 스타일
const ScrollToTopButton = styled.button`
  padding: 15px 15px;
  font-size: 1em;
  background-color: white;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: opacity 0.3s, background-color 0.3s;

  &:hover {
    background-color: #e69500;
  }

  /* 스크롤을 내리지 않았을 때는 버튼 숨기기 */
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

// 이메일 보내기 버튼 스타일
const EmailButton = styled.button`
  padding: 15px 15px;
  font-size: 1em;
  background-color: white;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  &:hover {
    background-color: orange;
  }
`;

function App() {
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  // 스크롤 위치에 따라 스크롤 제일 위로 버튼을 보이게 설정
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsScrollVisible(true);
      } else {
        setIsScrollVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // 스크롤을 최상단으로 이동
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 이메일 보내기
  const sendEmail = () => {
    window.location.href = "mailto:toat1216@gmail.com";
  };

  return (
    <Layout>
      <GlobalStyle />
      <BackgroundMain />
      <Main />

      {/* 버튼 컨테이너 (Scroll to Top과 Email 버튼을 묶음) */}
      <ButtonContainer>
        <EmailButton onClick={sendEmail} isVisible={isScrollVisible}>
          <Mail />
        </EmailButton>
        <ScrollToTopButton onClick={scrollToTop} isVisible={isScrollVisible}>
          <ChevronUp />
        </ScrollToTopButton>
      </ButtonContainer>
    </Layout>
  );
}

export default App;
