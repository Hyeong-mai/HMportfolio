import React, { useState, useEffect } from "react";
import { LogoGithub } from "react-ionicons";
import styled, { keyframes } from "styled-components";

// 페이드 인 애니메이션 정의
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const FooterLayOut = styled.div`
  height: 100vh; /* 각 섹션이 화면의 100% 높이를 차지 */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const BigLogo = styled.p`
  font-size: 10em;
  font-weight: bold;
  color: orange;
  margin: 0;
  padding: 0;
  opacity: ${(props) => (props.visible ? 1 : 0)}; /* 상태에 따라 가시성 조절 */
  animation: ${(props) => (props.visible ? fadeIn : "none")} 1s ease-in-out;
  @media (max-width: 1440px) {
    font-size: 6em;
  }
`;

const Logo = styled.p`
  font-size: 2em;
  font-weight: bold;
  margin: 0;
  opacity: ${(props) => (props.visible ? 1 : 0)}; /* 상태에 따라 가시성 조절 */
  animation: ${(props) => (props.visible ? fadeIn : "none")} 1s ease-in-out;
  @media (max-width: 1440px) {
    font-size: 1em;
  }
`;

const Etc = styled.p`
  font-size: 1em;
  font-weight: bold;
  margin: 0;
  text-align: center;
  opacity: ${(props) => (props.visible ? 1 : 0)}; /* 상태에 따라 가시성 조절 */
  animation: ${(props) => (props.visible ? fadeIn : "none")} 1s ease-in-out;
  @media (max-width: 1440px) {
    font-size: 0.7em;
  }
`;

const LogoWrap = styled.div`
  position: relative;
  width: 40%;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CopyRight = styled.p`
  text-align: center;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  color: #999;
  opacity: ${(props) => (props.visible ? 1 : 0)}; /* 상태에 따라 가시성 조절 */
  animation: ${(props) => (props.visible ? fadeIn : "none")} 1s ease-in-out;
`;

const IconWrapper = styled.a`
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  color: orange;
  font-weight: bold;
  opacity: ${(props) => (props.visible ? 1 : 0)}; /* 상태에 따라 가시성 조절 */
  animation: ${(props) => (props.visible ? fadeIn : "none")} 1s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }

  &:hover {
    color: tomato;
  }
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Footer = () => {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  const handleScroll = () => {
    // 스크롤이 페이지의 끝에 도달했는지 확인
    const isBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    if (isBottom) {
      setIsScrolledToBottom(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FooterLayOut>
      <BigLogo visible={isScrolledToBottom}>Thank you</BigLogo>
      <LogoWrap>
        <Logo visible={isScrolledToBottom}>봐주셔서 감사합니다 :)</Logo>
        <Etc visible={isScrolledToBottom}>
          프론트엔드 개발자로 성장하기 위해 낯선 기술에도 적극적으로 도전하고,
          항상 사용자의 관점에서 생각하며 사용하기 좋은 서비스를 만들고
          싶습니다.
        </Etc>
      </LogoWrap>
      <IconWrap>
        <IconWrapper
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          visible={isScrolledToBottom}
        >
          Github
        </IconWrapper>
        <IconWrapper
          href="https://notion.so"
          target="_blank"
          rel="noopener noreferrer"
          visible={isScrolledToBottom}
        >
          Notion
        </IconWrapper>
      </IconWrap>

      <CopyRight visible={isScrolledToBottom}>
        Copyright 2024. Hyeong min all rights reserved.
        <br />
        React, Styled Components 기반으로 제작된 사이트입니다.
      </CopyRight>
    </FooterLayOut>
  );
};

export default Footer;
