import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import "./App.css";

// 컴포넌트 import
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

gsap.registerPlugin(ScrollTrigger);

const Header = styled.header`
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 70px;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 25px 25px;
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 60px;
    padding: 0 1rem;
    flex-direction: column;
    height: auto;
    padding: 1rem;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 0.8rem;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    gap: 1rem;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #00a8ff;
  text-shadow: 0 0 10px rgba(0, 168, 255, 0.5);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Nav = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;
  position: relative;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }

  &:hover {
    color: #00a8ff;
    background: rgba(0, 168, 255, 0.1);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: #00a8ff;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 80%;
  }
`;

const AppContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

const GradientBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    45deg,
    #000000,
    #1a1a1a,
    #0a192f,
    #112240,
    #000000
  );
  background-size: 400% 400%;
  z-index: 0;
  animation: gradientMove 15s ease infinite;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      rgba(0, 168, 255, 0.1) 0%,
      transparent 70%
    );
    animation: radialPulse 8s ease-in-out infinite;
  }

  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes radialPulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.8;
    }
  }
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 20%;
  height: 50px;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  border-radius: 25px;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  transition: all 0.3s ease-in-out;

  @media (max-width: 1024px) {
    width: 30%;
  }

  @media (max-width: 768px) {
    width: 40%;
    height: 40px;
    gap: 1rem;
    bottom: 10px;
  }

  @media (max-width: 480px) {
    width: 50%;
    height: 35px;
    gap: 0.8rem;
    bottom: 8px;
  }
`;

const FooterLink = styled.a`
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 30px;
    height: 30px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    width: 25px;
    height: 25px;
  }

  &:hover {
    color: #00a8ff;
    opacity: 1;
    transform: translateY(-2px);
    background: rgba(0, 168, 255, 0.1);
  }
`;

const ProgressBar = styled.div`
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 1000;
  border-radius: 2px;
  overflow: hidden;

  @media (max-width: 1024px) {
    left: 15px;
    height: 250px;
  }

  @media (max-width: 768px) {
    left: 10px;
    height: 200px;
    width: 4px;
  }

  @media (max-width: 480px) {
    left: 8px;
    height: 150px;
    width: 3px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${(props) => props.progress}%;
    background: #00a8ff;
    transition: height 0.1s ease-out;
    box-shadow: 0 0 10px rgba(0, 168, 255, 0.5);
  }
`;

const ProgressDot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  background: #00a8ff;
  border-radius: 50%;
  top: ${(props) => props.progress}%;
  transition: 0.5s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 168, 255, 0.5);

  @media (max-width: 768px) {
    width: 6px;
    height: 6px;
  }

  @media (max-width: 480px) {
    width: 4px;
    height: 4px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    border: 2px solid #00a8ff;
    border-radius: 50%;
    opacity: 0.5;
    animation: pulse 2s infinite;

    @media (max-width: 768px) {
      width: 12px;
      height: 12px;
      border-width: 1.5px;
    }

    @media (max-width: 480px) {
      width: 8px;
      height: 8px;
      border-width: 1px;
    }
  }

  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.5;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.5;
    }
  }
`;

const MovingText = styled.div`
  position: fixed;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 40px;
  backdrop-filter: blur(10px);
  z-index: 999;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  align-items: center;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 15%,
    black 85%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 15%,
    black 85%,
    transparent 100%
  );

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    top: 120px;
    width: 90%;
    height: 30px;
  }

  @media (max-width: 480px) {
    top: 110px;
    width: 95%;
    height: 25px;
  }

  &::before {
    content: "Frontend Developer • React • TypeScript • Next.js • Styled-Components • GSAP • Flutter • Dart • Tailwind CSS • Redux Toolkit • GetX • Fabric.js • Framer Motion • Git • Vercel • Jira • Notion • Slack • Teams •";
    position: absolute;
    left: 0;
    color: #00a8ff;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 1px;
    animation: moveText 20s linear infinite;
    text-shadow: 0 0 10px rgba(0, 168, 255, 0.3);

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }

    @media (max-width: 480px) {
      font-size: 0.7rem;
    }
  }

  @keyframes moveText {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const ResumeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  background: rgba(0, 168, 255, 0.1);
  border: 1px solid rgba(0, 168, 255, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.7rem;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.65rem;
  }

  @media (max-width: 480px) {
    padding: 0.3rem 0.6rem;
    font-size: 0.6rem;
  }

  &:hover {
    background: rgba(0, 168, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 168, 255, 0.2);
  }

  svg {
    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease;
`;

const ModalContent = styled.div`
  background: rgba(26, 26, 26, 0.95);
  border-radius: 20px;
  padding: 2rem;
  width: 70%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  transform: ${(props) =>
    props.isOpen ? "translateY(0)" : "translateY(20px)"};
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    width: 80%;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 1rem;
  }

  &::-webkit-scrollbar {
    width: 8px;

    @media (max-width: 768px) {
      width: 6px;
    }
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 168, 255, 0.3);
    border-radius: 4px;
  }
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    color: #00a8ff;
    transform: rotate(90deg);
  }
`;

const ModalTitle = styled.h2`
  color: white;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
  }
`;

const ModalText = styled.div`
  color: white;
  line-height: 1.8;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  h3 {
    color: #00a8ff;
    margin: 2.5rem 0 1.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    position: relative;
    padding-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 1.3rem;
      margin: 2rem 0 1.2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.1rem;
      margin: 1.8rem 0 1rem;
    }

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 2px;
      background: #00a8ff;
      opacity: 0.5;
    }
  }

  p {
    margin-bottom: 1.5rem;
    text-align: justify;
    word-break: keep-all;

    @media (max-width: 768px) {
      margin-bottom: 1.2rem;
    }

    @media (max-width: 480px) {
      margin-bottom: 1rem;
    }
  }

  .highlight {
    color: #00a8ff;
    font-weight: 600;
    font-size: 1.2rem;
    text-align: center;
    margin: 2rem 0;
    padding: 1rem;
    background: rgba(0, 168, 255, 0.1);
    border-radius: 10px;
    border: 1px solid rgba(0, 168, 255, 0.2);
  }
`;

const ResumeModal = ({ isOpen, onClose }) => {
  return (
    <ModalOverlay isOpen={isOpen} onClick={onClose}>
      <ModalContent isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <ModalCloseButton onClick={onClose}>×</ModalCloseButton>
        <ModalTitle>자기소개서</ModalTitle>
        <ModalText>
          <h3>"와, 이런 기능도 있네"</h3>
          <p>
            저는 항상 사용자가 만족할 수 있는 경험을 제공하기 위해 노력했습니다.
            사용자 경험을 개선하기 위한 욕구가 새로운 개발 지식을 쌓는 원동력이
            되었고, 이를 통해 더 나은 서비스를 제공하고자 하는 목표를 갖게
            되었습니다. "와, 이런 기능도 있네"라는 감동을 직접 기획하고 개발하여
            더 많은 사용자들에게 전달하고 싶습니다.
          </p>
          <p>
            입사하게되면 저는 기술 역량 강화에 힘쓸 것입니다. 프론트엔드 개발을
            넘어 데이터베이스와 서버에 대한 지식을 쌓아 전체적인 개발 과정을
            이해하고, 필요한 경우 백엔드 개발에도 참여할 수 있는 능력을 키울
            것입니다. 이를 통해 최신 기술과 트렌드를 지속적으로 학습하고,
            프로젝트에 적용하여 플랫폼의 성능과 사용자 경험을 향상시키겠습니다.
          </p>
          <p>
            혁신적인 기능 개발에도 적극 참여할 것입니다. 사용자 맞춤형 서비스,
            예를 들어 개인화된 추천 시스템이나 사용자 행동 분석을 통한 맞춤형
            서비스 제공 등 사용자에게 더 큰 만족을 줄 수 있는 기능을
            개발하겠습니다.
          </p>
          <p>
            마지막으로, 최고의 서비스는 최고의 팀원들과 함께했을 때 나온다고
            생각합니다. 팀원들과의 팀워크를 다지며 서로 지식을 공유하고 공부하여
            기업을 한 단계 업그레이드하는 데 기여하고 싶습니다.
          </p>

          <h3>프로젝트 경험을 통한 프론트엔드 개발 역량 강화</h3>
          <p>
            저는 '개발은 질문에서 시작된다'는 신념으로 성장해 왔습니다. 군 복무
            중에도 주어진 휴식 시간을 쪼개 React와 React Native를 공부하며 작은
            앱을 완성했고, "언제든 배우고 만들 수 있다"는 확신을 얻었습니다.
            전역과 동시에 Next.js·Firebase·Tailwind CSS 같은 최신 스택을 독학해
            개인 프로젝트 '어게인 마켓'을 출시했고, SSR·SSG와 Prisma,
            TypeScript를 조합해 빠르고 안전한 쇼핑 경험을 직접 구현했습니다. 이
            첫 도전은 성능과 사용자 경험(UX)을 동시에 고민하는 개발자의 출발점이
            되었습니다.
          </p>
          <p>
            입사 후 마주한 첫 번째 실전 과제는 웹 기반 사진 인화 플랫폼 Photo
            Press였습니다. 신입이라는 두려움 탓에 초반에는 의견 표현이
            조심스러웠지만, 사수는 "내 말이 정답이 아니니 언제든 질문하라"고
            격려했습니다. 그 말에 용기를 얻어 캔버스 편집 로직의 병목 지점,
            이미지 압축 방식, 세션 만료 처리 등 작지만 핵심적인 질문을 끊임없이
            던졌고, 함께 토론하며 문제를 해결했습니다. 결과적으로 Blob 스트림
            최적화로 렌더링 속도를 단축하고, DPI 설정을 재조정해 출력 품질을 한
            단계 끌어올렸습니다. 이 경험은 질문이 곧 성장의 가속임을 깨닫게
            했습니다.
          </p>
          <p>
            두 번째 프로젝트 Photo Press Admin에서는 Flutter로 키오스크 상태를
            실시간 모니터링하는 관리 도구를 만들었습니다. Controller–Binding
            구조에 미숙해 데이터 흐름이 어색했고, 401/403 처리 때문에 서비스가
            자주 끊겼습니다. 도움을 구하려 했지만, 사수 부재로, 문서를 뒤지고
            커뮤니티에 글을 남기며 스스로 실험해야 했습니다. 토큰 재발급 로직과
            Hive 오프라인 캐싱을 안정화하는 데 여러 번 실패했지만, 그 실패
            기록이 곧 가이드가 되어 결국 끊임없이 최신 상태를 보여 주는
            대시보드를 완성했습니다. 이 과정에서 "처음 설계가 프로젝트의
            자연스러움을 결정한다"라는 것을 깨달았습니다.
          </p>
          <p>
            세 번째 과제 IRIS User에서는 설계 단계부터 구조 다이어그램을 그리고
            모듈 경계를 명확히 나눴습니다. 덕분에 카메라 싱글턴 컨트롤러, QR
            파싱, 복권 해시 검증까지 큰 뒤틀림 없이 구현할 수 있었습니다. 물론
            클라이언트단 데이터 정제 과정이 과해 성능이 떨어지는 문제, 플랫폼
            권한 이슈 등 새로운 난관도 있었지만, 지난 프로젝트에서 쌓인 구조적
            사고 덕분에 더 빠르게 원인을 찾고 최소 수정으로 해결할 수
            있었습니다. 프로젝트가 끝날 무렵엔 제가 던지는 질문이 사수와 "같이
            머리를 맞대야 하는" 수준으로 깊어졌고, 팀과 협업하며 문제를 풀어가는
            즐거움과 성취감을 온전히 느꼈습니다.
          </p>
          <p>
            저는 현재도 기술 블로그와 커뮤니티를 탐독하며 Flutter로 멀티플랫폼
            UI를 구현하고, GSAP으로 인터랙티브 애니메이션을 실험하며, 제품
            기획·시나리오 작성과 시스템 아키텍처 설계 방법론까지 폭넓게
            습득-적용하고 있습니다. 더 나아가 사내 프로젝트 경험을 바탕으로
            개발자·디자이너·기획자와 별도 팀을 조직해 신규 서비스를 공동
            개발하고 있으며, 저는 기술 스택 선정·아키텍처 설계·코드 리뷰를
            주도하면서 협업 프로세스를 고도화하고 있습니다.
          </p>
          <p>
            질문을 멈추지 않는 집요함, 빠르게 학습해 팀과 지식을 나누는 속도,
            데이터 흐름을 중심으로 구조를 설계하는 관점으로 더 빠르고 직관적인
            사용자 경험을 만들어 내는 개발자가 되겠습니다. 동료들과 끝없이
            질문하고 함께 답을 찾아가며, 코드 한 줄마다 가치를 담아내는 문화에
            기여하고 싶습니다.
          </p>

          <h3>성격의 장단점</h3>
          <p>
            저의 장점은 사람을 어려워하지 않고 팀 분위기를 화목하게 만드는 점과
            계획적인 성격이라고 생각합니다. 개발자는 회사에서 개발 업무를
            담당하는 것으로 끝날 수도 있습니다. 그러나 회사는 개인들이 모여
            하나의 공동체가 된 공간이기 때문에 무엇보다도 소통이 개발의 완성도와
            분위기 증진에 중요한 덕목입니다. 다양한 프로젝트를 진행 하며
            팀원들과 업무적인 부분에서 많은 소통을 하려고 노력했습니다. 저의
            팀의 경우 처음엔 소통이 부족한 팀이었으나 제가 먼저 팀원들이 잘
            적응할 수 있도록 도와주었고, 마지막에는 가장 화목한 팀으로
            뽑혔습니다. 또 저는 계획적인 성향이 강한 사람입니다. 앞선
            프로젝트들을 진행할 때도 업무를 계획적으로 처리하여 짧은 시간에 일을
            효율적으로 진행할 수 있었습니다.
          </p>
          <p>
            저는 처음 맞닥뜨리는 것들은 어려울 거라고 단정 짓고 부정적으로
            생각하는 단점이 있습니다. 어떠한 지식도 없으니 당연히 해내지 못할
            것이라는 두려움으로 인해 소극적으로 시작합니다. 하지만 KOSTA에서의
            프로젝트에서 발전하려는 자세를 배웠습니다. 혼자 난관에 봉착하고
            시행착오를 겪고 있을 때 한 팀원이 "처음이니 당연히 어려운 것이니
            언제든지 물어보고 소통해 나가면 발전하는 개발자가 될 수 있다"는
            말씀에 단점을 보완해 내며 성장하는 개발자가 될 수 있었습니다.
          </p>
        </ModalText>
      </ModalContent>
    </ModalOverlay>
  );
};

const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFooterVisible, setIsFooterVisible] = useState(true);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      const currentScrollY = window.scrollY;
      const contactSection = document.getElementById("contact");

      if (contactSection) {
        const contactTop = contactSection.offsetTop;
        const windowHeight = window.innerHeight;
        const scrollPosition = currentScrollY + windowHeight;

        // Contact 섹션에 도달하기 전까지만 Footer 표시
        setIsFooterVisible(scrollPosition < contactTop);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        const totalScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const currentProgress = (currentScrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <AppContainer>
      <ProgressBar progress={scrollProgress}>
        <ProgressDot progress={scrollProgress} />
      </ProgressBar>
      <Header>
        <HeaderContent>
          <Logo>HM's Portfolio</Logo>
          <ResumeButton onClick={() => setIsResumeModalOpen(true)}>
            <FaFileAlt />
            자기소개서
          </ResumeButton>
        </HeaderContent>
        <Nav>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>
      </Header>
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
      <MovingText />
      <GradientBackground />
      <Home />
      <About />
      <Projects />
      <Contact ref={contactRef} />
      <Footer isVisible={isFooterVisible}>
        <FooterLink
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </FooterLink>
        <FooterLink
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </FooterLink>
        <FooterLink href="mailto:your.email@example.com" aria-label="Email">
          <FaEnvelope />
        </FooterLink>
      </Footer>
    </AppContainer>
  );
};

export default App;
