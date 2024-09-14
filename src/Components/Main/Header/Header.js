import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled, { keyframes } from "styled-components";

// BigLogo가 커졌다가 작아지는 애니메이션
const bigLogoAnimation = keyframes`
  0% {
    transform:  scale(5); /* 처음에 크게 시작 */
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform:  scale(1); /* 작은 크기로 변경 */
  }
`;

// 배경 이미지를 페이드인하는 애니메이션
const backgroundFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
// LogoWrap 텍스트가 아래에서 나타나는 애니메이션
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px); /* 아래에서 위로 올라오는 애니메이션 */
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Chevron 애니메이션 (아래로 움직였다가 위로 다시 올라가는 애니메이션)
const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const HeaderLayout = styled.div`
  height: 100vh; /* 각 섹션이 화면의 100% 높이를 차지 */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const BigLogo = styled.p`
  font-size: 10em;
  font-weight: bold;
  color: orange;
  margin: 0;
  padding: 0;
  animation: ${bigLogoAnimation} 2s ease-in-out forwards;
  @media (max-width: 1440px) {
    font-size: 6em;
  }
  @media (max-width: 880px) {
    font-size: 3em;
  }
`;

const Logo = styled.p`
  font-size: 2em;
  display: flex;
  gap: 5px;
  margin: 0;
  animation: ${fadeInUp} 1s ease-in-out forwards 2s; /* BigLogo 작아진 후 나타남 */
  opacity: 0;
  @media (max-width: 880px) {
    font-size: 1em; /* 더 작은 화면에서는 더 작게 */
  }
`;

const Etc = styled.p`
  font-size: 1em;
  margin: 0;
  text-align: center;
  /* display: flex;
  flex-direction: column;
  gap: 5px; */
  opacity: 0;
  animation: ${fadeInUp} 1s ease-in-out forwards 2.5s; /* Logo 후에 나타남 */
  @media (max-width: 880px) {
    font-size: 0.7em; /* 더 작은 화면에서는 더 작게 */
  }
`;

const LogoWrap = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  /* position: relative;
  width: 50%;
  gap: 5px;
  left: 50%;
  top: 35%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; */
`;

const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  z-index: 2;
  top: 30px;
  left: 30px;
  gap: 15px; /* GitHub와 Notion 버튼 사이의 간격 */
`;

const IconWrapper = styled.a`
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  color: orange;
  font-weight: bold;
  &:hover {
    transform: scale(1.2); /* 크기 확대 */
  }

  &:hover {
    color: tomato; /* 아이콘 색상 변경 */
  }
`;

const ChevronWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50px;
  height: 50px;
  animation: ${bounceAnimation} 2s infinite; /* 지속적인 bounce 애니메이션 */
  cursor: pointer;
`;
const BoldText = styled.span`
  font-weight: bold;
`;
const ImageWrap = styled.div`
  animation: ${backgroundFadeIn} 1s ease-in-out forwards 2.5s;
  opacity: 0;
  display: flex;
  align-items: center;
  position: absolute; /* 화면에 고정되도록 fixed 사용 */
  right: 100px;
  top: 180px;
  /* @media (max-width: 1020px) {
    right: 100px;
  } */
  @media (max-width: 880px) {
    right: 0px;
  }
  @media (max-width: 430px) {
    right: -100px;
  }
`;
const MainImageIcon = styled.img`
  scale: 0.8;
`;
const Header = () => {
  return (
    <HeaderLayout>
      <LogoWrap>
        <BigLogo>Front-end</BigLogo>
        <Logo>
          프론트엔드 개발자 <BoldText>김형민</BoldText>입니다.
        </Logo>
        <Etc>
          새로운 <BoldText>도전</BoldText>을 두려워하지 않으며,
          <br />
          매일 더 나은 개발자가 되기 위해<BoldText>끊임없이</BoldText> 노력하고
          있습니다
        </Etc>
      </LogoWrap>
      <ImageWrap>
        <MainImageIcon src="/image/MainImageIcon.png" />
      </ImageWrap>
      {/* GitHub와 Notion 버튼을 묶는 Wrapper */}
      <ButtonWrapper>
        <IconWrapper
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </IconWrapper>
        <IconWrapper
          href="https://notion.so"
          target="_blank"
          rel="noopener noreferrer"
        >
          Notion
        </IconWrapper>
      </ButtonWrapper>

      <ChevronWrapper>
        <FontAwesomeIcon size="xl" color="orange" icon={faChevronDown} />
        <FontAwesomeIcon size="xl" color="orange" icon={faChevronDown} />
      </ChevronWrapper>
    </HeaderLayout>
  );
};

export default Header;
