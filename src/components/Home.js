import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

// Styled Components
const HomeSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background: transparent;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: auto;
  }
`;

const HomeContent = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem;
  background: transparent;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    z-index: 0;
  }
`;

const IconCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  z-index: 1;
  opacity: 0.5;

  @media (max-width: 1024px) {
    width: 700px;
    height: 700px;
  }

  @media (max-width: 768px) {
    width: 500px;
    height: 500px;
    opacity: 0.3;
  }

  @media (max-width: 480px) {
    width: 350px;
    height: 350px;
    opacity: 0.2;
  }
`;

const TechIcon = styled.div`
  position: absolute;
  transition: all 0.3s ease-in-out;
  animation: float 3s ease-in-out infinite;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
  color: #007bff;
  opacity: 0.8;
  will-change: transform, opacity;

  @media (max-width: 768px) {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }

  &:hover {
    transform: scale(1.3) rotate(10deg) !important;
    filter: brightness(1.2) drop-shadow(0 6px 8px rgba(0, 123, 255, 0.4));
    opacity: 1;
    color: #00a8ff;

    @media (max-width: 768px) {
      transform: scale(1.2) rotate(5deg) !important;
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0) rotate(var(--rotation));
    }
    50% {
      transform: translateY(-15px) rotate(var(--rotation));

      @media (max-width: 768px) {
        transform: translateY(-10px) rotate(var(--rotation));
      }
    }
  }
`;

const IntroTitle = styled.h1`
  font-size: 3.5rem;
  line-height: 1.4;
  margin-bottom: 3rem;
  color: white;
  position: relative;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const Word = styled.span`
  display: inline-block;
  will-change: transform;
  transform-origin: center center;
  color: ${(props) => (props.highlight ? "#00a8ff" : "white")};
  font-weight: ${(props) => (props.highlight ? "700" : "normal")};
`;

const InterviewSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  backdrop-filter: blur(3px);
  border-radius: 20px;
  transition: transform 0.3s ease;

  @media (max-width: 1024px) {
    gap: 3rem;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
    padding: 1rem;
  }
`;

const InterviewContent = styled.div`
  flex: 1;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const InterviewTitle = styled.h2`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 2rem;
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
  }
`;

const InterviewText = styled.div`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #e0e0e0;
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  p {
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      margin-bottom: 0.8rem;
    }
  }

  strong {
    color: #00a8ff;
    font-weight: 600;
  }
`;

const BoldText = styled.p`
  background-color: #00a8ff;
  font-weight: 600;
  font-size: 1rem;
  color: white;
  padding: 2px 4px;
  margin: 0px 5px;
  border-radius: 5px;
  display: inline;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 1px 3px;
    margin: 0px 3px;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 1px 2px;
    margin: 0px 2px;
  }

  &:hover {
    background-color: #0099e6;
    transform: translateY(-1px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  }
`;

const ProfileImage = styled.div`
  flex: 1;
  position: relative;
  max-width: 500px;
  aspect-ratio: 3/4;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transform: rotate(-2deg);
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    max-width: 400px;
  }

  @media (max-width: 768px) {
    max-width: 350px;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    max-width: 280px;
  }

  &:hover {
    transform: rotate(0deg) translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 123, 255, 0.2);

    @media (max-width: 768px) {
      transform: rotate(0deg) translateY(-5px);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.9);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }
`;

const ExperienceSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  backdrop-filter: blur(3px);
  border-radius: 20px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  transition: transform 0.3s ease;

  @media (max-width: 1024px) {
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }

  &:hover {
    transform: translateY(-10px);

    @media (max-width: 768px) {
      transform: translateY(-5px);
    }
  }
`;

const ExperienceTitle = styled.h2`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`;

const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  perspective: 1000px;

  @media (max-width: 1024px) {
    gap: 3rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const ExperienceBox = styled.div`
  background: rgba(255, 255, 255, 0.03);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(3px);
  transform: translateZ(20px);
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }

  &:hover {
    transform: translateY(-5px) translateZ(30px);
    background: rgba(255, 255, 255, 0.05);

    @media (max-width: 768px) {
      transform: translateY(-3px) translateZ(20px);
    }
  }
`;

const ExperienceBoxTitle = styled.h3`
  font-size: 1.8rem;
  color: #00a8ff;
  margin-bottom: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const ExperienceItem = styled.div`
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  border-left: 3px solid rgba(0, 123, 255, 0.3);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    padding-left: 1.2rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1.2rem;
    padding-left: 1rem;
  }

  &:hover {
    border-left-color: #00a8ff;
    transform: translateX(5px);

    @media (max-width: 768px) {
      transform: translateX(3px);
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const ExperiencePeriod = styled.div`
  font-size: 0.9rem;
  color: #a0a0a0;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const ExperienceName = styled.h4`
  font-size: 1.2rem;
  color: white;
  margin-bottom: 0.5rem;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ExperienceDescription = styled.p`
  font-size: 1rem;
  color: #e0e0e0;
  line-height: 1.6;

  @media (max-width: 1024px) {
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.4;
  }
`;

const Home = () => {
  const sectionRef = useRef(null);
  const firstContentRef = useRef(null);
  const secondContentRef = useRef(null);
  const thirdContentRef = useRef(null);
  const titleRef = useRef(null);
  const iconsRef = useRef([]);
  const interviewRef = useRef(null);
  const profileRef = useRef(null);
  const experienceRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 첫 번째 섹션 애니메이션
      const firstSectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: firstContentRef.current,
          start: "top top",
          end: "bottom center",

          scrub: 1,
          // pin: true,
          // anticipatePin: 1,
          pinSpacing: true,
        },
      });

      // 각 아이콘의 현재 위치를 기준으로 가장 가까운 모서리 방향 계산
      iconsRef.current.forEach((icon, index) => {
        if (!icon) return;

        firstSectionTl.to(
          icon,
          {
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut",
          },
          0
        );
      });

      // 텍스트 애니메이션도 더 빠르게
      const titleWords = titleRef.current?.querySelectorAll(".word");
      if (titleWords) {
        titleWords.forEach((word, index) => {
          const rect = word.getBoundingClientRect();
          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;
          const wordX = rect.left + rect.width / 2;
          const wordY = rect.top + rect.height / 2;

          // 흩어지는 거리를 20%로 줄임 (800 -> 160, 100 -> 20)
          const toCornerX = wordX < centerX ? -160 : 160;
          const toCornerY = wordY < centerY ? -160 : 160;

          const distanceX = Math.abs(wordX - centerX);
          const distanceY = Math.abs(wordY - centerY);

          const finalX =
            distanceX < distanceY ? toCornerX : wordX < centerX ? -20 : 20;
          const finalY =
            distanceX < distanceY ? (wordY < centerY ? -20 : 20) : toCornerY;

          firstSectionTl.to(
            word,
            {
              x: finalX,
              y: finalY,
              rotation: (Math.random() - 0.5) * 72, // 회전 각도도 20%로 줄임 (360 -> 72)
              opacity: 0,
              duration: 0.5,
              delay: index * 0.05,
            },
            0
          );
        });
      }

      // 두 번째 섹션 애니메이션
      const secondSectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: secondContentRef.current,
          start: "top center",
          end: "center center",

          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

      // 인터뷰 섹션 전체 페이드 인/아웃
      secondSectionTl.fromTo(
        interviewRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        }
      );

      // 인터뷰 내용 순차적 페이드 인
      const interviewContent =
        interviewRef.current?.querySelector(".interview-content");
      if (interviewContent) {
        const paragraphs = interviewContent.querySelectorAll("p");
        paragraphs.forEach((p, index) => {
          secondSectionTl.fromTo(
            p,
            {
              opacity: 0,
              x: -30,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              ease: "power2.out",
            },
            "-=0.3" // 이전 애니메이션과 약간 겹치도록
          );
        });
      }

      // 프로필 이미지 페이드 인
      secondSectionTl.fromTo(
        profileRef.current,
        {
          opacity: 0,
          scale: 0.8,
          rotation: -5,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: -2,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5" // 인터뷰 내용과 동시에 시작
      );

      // 세 번째 섹션 애니메이션
      const thirdSectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: thirdContentRef.current,
          start: "top center",
          end: "center center",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

      // 경력 섹션 전체 페이드 인/아웃
      thirdSectionTl.fromTo(
        experienceRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        }
      );

      // Education 박스 애니메이션
      const educationBox =
        experienceRef.current?.querySelector(".education-box");
      if (educationBox) {
        thirdSectionTl.fromTo(
          educationBox,
          {
            opacity: 0,
            x: -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        );

        // Education 항목들 순차적 페이드 인
        const educationItems =
          educationBox.querySelectorAll(".experience-item");
        educationItems.forEach((item, index) => {
          thirdSectionTl.fromTo(
            item,
            {
              opacity: 0,
              x: -30,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              ease: "power2.out",
            },
            "-=0.3"
          );
        });
      }

      // Experience 박스 애니메이션
      const experienceBox =
        experienceRef.current?.querySelector(".experience-box");
      if (experienceBox) {
        thirdSectionTl.fromTo(
          experienceBox,
          {
            opacity: 0,
            x: 50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.8"
        );

        // Experience 항목들 순차적 페이드 인
        const experienceItems =
          experienceBox.querySelectorAll(".experience-item");
        experienceItems.forEach((item, index) => {
          thirdSectionTl.fromTo(
            item,
            {
              opacity: 0,
              x: 30,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              ease: "power2.out",
            },
            "-=0.3"
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const icons = [
    { Component: FaReact, className: "icon-1" },
    { Component: FaHtml5, className: "icon-2" },
    { Component: FaCss3Alt, className: "icon-3" },
    { Component: FaJs, className: "icon-4" },
    { Component: SiTypescript, className: "icon-5" },
    { Component: FaGitAlt, className: "icon-6" },
    { Component: FaNodeJs, className: "icon-7" },
    { Component: SiTailwindcss, className: "icon-8" },
    { Component: SiNextdotjs, className: "icon-9" },
  ];

  // 아이콘 초기 위치 설정 함수
  const getInitialPosition = (index) => {
    const positions = [
      { top: "15%", left: "35%", rotation: -25, size: 4.2 },
      { top: "25%", left: "75%", rotation: 20, size: 4.0 },
      { top: "45%", left: "85%", rotation: -15, size: 4.3 },
      { top: "65%", left: "70%", rotation: 30, size: 4.1 },
      { top: "80%", left: "40%", rotation: -20, size: 4.4 },
      { top: "70%", left: "15%", rotation: 15, size: 4.2 },
      { top: "40%", left: "5%", rotation: -30, size: 4.0 },
      { top: "20%", left: "20%", rotation: 25, size: 4.3 },
      { top: "15%", left: "55%", rotation: -10, size: 4.1 },
    ];
    return positions[index];
  };

  return (
    <HomeSection ref={sectionRef} id="home">
      <HomeContent ref={firstContentRef} isFirst>
        <IconCircle>
          {icons.map(({ Component, className }, index) => {
            const pos = getInitialPosition(index);
            return (
              <TechIcon
                key={index}
                ref={(el) => (iconsRef.current[index] = el)}
                as={Component}
                className={className}
                style={{
                  "--rotation": `${pos.rotation}deg`,
                  top: pos.top,
                  left: pos.left,
                  fontSize: `${pos.size}rem`,
                  animationDelay: `${index * 0.2}s`,
                  transform: `rotate(${pos.rotation}deg)`,
                }}
              />
            );
          })}
        </IconCircle>
        <IntroTitle ref={titleRef}>
          <Word className="word">안녕하세요</Word>
          <br />
          <Word className="word">프론트엔드</Word>
          <br />
          <Word className="word">개발자</Word>
          <br />
          <Word className="word" highlight>
            김형민
          </Word>
          <Word className="word">입니다</Word>
        </IntroTitle>
      </HomeContent>

      <HomeContent ref={secondContentRef} isSecond>
        <InterviewSection ref={interviewRef}>
          <InterviewContent className="interview-content">
            <InterviewTitle ref={profileRef}>About Me</InterviewTitle>
            <InterviewText>
              <p>
                <strong>
                  Q. 프론트엔드 개발자로서 목표를 세우게 된 계기나 동기는
                  무엇인가요?
                </strong>
                <br />
                A. 웹 퍼블리싱으로{" "}
                <BoldText>‘사용자와 화면이 직접 대화한다’</BoldText>는 매력을
                느꼈습니다. 더 깊이 있는 상호작용을 만들고 싶어 프론트엔드로
                방향을 잡았고, 지금도 Flutter·Next.js·React·React Native 등을
                꾸준히 탐험하며 그 대화를 한층 풍성하게 만드는 중입니다.
              </p>
              <p>
                <strong>
                  Q. 개발자로서의 목표는 무엇이며, 이를 위해 어떻게 노력하고
                  있나요?
                </strong>
                <br />
                A.사용자가 <BoldText>‘와, 이런 기능도 있네!’</BoldText> 하고
                미소 짓게 만드는 게 제 목표입니다. 그래서 매일 새 기술을 시험해
                보고, 받은 피드백으로 서비스를 끊임없이 갈아엎고 다듬습니다.
                서비스를 끊임없이 갈아엎고 다듬습니다.
              </p>
              <p>
                <strong>Q. 자기계발을 위해 어떤 것들을 해왔는지?</strong>
                <br />
                A. 새 기술이 궁금하면 먼저 공식 문서·온라인 강의로 파고들고,
                막히면 주저 없이 선배 개발자에게 물어봤습니다. 프로젝트가 끝날
                때마다 <br />
                <BoldText>‘아쉬운 점 목록’</BoldText>을 적어 다음 프로젝트에서
                구조와 성능을 바로 고쳤더니, 페이지 로딩은 40 % 빨라지고 코드
                리뷰 지적은 30 % 줄었습니다. 작은 궁금증도 끝까지 파고드는{" "}
                <BoldText>집요함</BoldText>이 저를 한 단계씩 끌어올리고
                있습니다.
              </p>
            </InterviewText>
          </InterviewContent>
          <ProfileImage ref={profileRef}>
            <img src="/image/profile.jpg" alt="김형민 프로필" />
          </ProfileImage>
        </InterviewSection>
      </HomeContent>

      <HomeContent ref={thirdContentRef}>
        <ExperienceSection ref={experienceRef}>
          <ExperienceTitle>Education & Experience</ExperienceTitle>
          <ExperienceContainer>
            <ExperienceBox className="education-box">
              <ExperienceBoxTitle>Experience</ExperienceBoxTitle>
              <ExperienceItem className="experience-item">
                <ExperiencePeriod>2024.03 - 현재</ExperiencePeriod>
                <ExperienceName>HINGOM - Frontend Developer</ExperienceName>
                <ExperienceDescription>
                  • Photo Press (키오스크 연동 웹 기반 디자인 플랫폼)
                  <br />
                  - Canvas 기반 사진 편집, QR 세션 관리, UI/UX 설계 및 개선
                  <br />
                  - 대용량 이미지 처리, 세션 보안, 출력 품질 개선, 모바일 제스처
                  최적화
                  <br />
                  <BoldText>React 18</BoldText> <BoldText>TypeScript</BoldText>{" "}
                  <BoldText>Fabric.js</BoldText>{" "}
                  <BoldText>Redux Toolkit</BoldText> <br />
                  <BoldText>Tailwind CSS</BoldText>
                  <br />
                  <br />
                  • Photo Press Admin (키오스크 운영 관리 웹 앱)
                  <br />
                  - WebSocket 기반 실시간 모니터링, 매출 데이터 분석, 사용자
                  관리 시스템
                  <br />
                  - 토큰 관리, 실시간 데이터 동기화, 오프라인 지원 구현
                  <br />
                  <BoldText>Flutter</BoldText> <BoldText>Dart</BoldText>{" "}
                  <BoldText>GetX</BoldText> <BoldText>Dio</BoldText>
                  <br />
                  <br />
                  • IRIS User (QR 기반 데모 가계부 앱)
                  <br />
                  - QR 스캔 및 데이터 파싱, 복권 추첨 시스템, 소비 내역 분석
                  <br />
                  - 카메라 최적화, QR 인식률 개선, 추첨 시스템 보안 강화
                  <br />
                  <BoldText>Flutter</BoldText> <BoldText>Dart</BoldText>{" "}
                  <BoldText>GetX</BoldText> <BoldText>Hive</BoldText>
                </ExperienceDescription>
              </ExperienceItem>
              <ExperienceItem className="experience-item">
                <ExperiencePeriod>2021.09 - 2024.02</ExperiencePeriod>
                <ExperienceName>카페 매니저 - 식품/음료영업</ExperienceName>
                <ExperienceDescription>
                  • 직원 관리: 채용, 교육, 근무 일정 관리, 평가 및 피드백 제공
                  <br />
                  • 고객 서비스: 불만 처리, 서비스 질 유지 및 개선, 고객 피드백
                  반영
                  <br />
                  • 재무 관리: 매출 및 비용 관리, 예산 작성, 재고 관리 및 주문
                  <br />
                  • 운영 관리: 일일 운영 및 청결 유지, 장비 유지보수, 메뉴 기획
                  <br />
                  • 마케팅 및 프로모션: 프로모션 및 이벤트 기획, 소셜 미디어
                  관리
                  <br />
                  • 규정 준수: 위생 및 안전 규정 준수, 법적 규제 준수, 직원 교육
                  <br />
                  <BoldText>리더십</BoldText> <BoldText>고객관리</BoldText>{" "}
                  <BoldText>재무관리</BoldText> <BoldText>운영관리</BoldText>{" "}
                  <BoldText>마케팅</BoldText>
                </ExperienceDescription>
              </ExperienceItem>
            </ExperienceBox>

            <ExperienceBox className="experience-box">
              <ExperienceBoxTitle>Education</ExperienceBoxTitle>
              <ExperienceItem className="experience-item">
                <ExperiencePeriod>2024.04 - 2024.06</ExperiencePeriod>
                <ExperienceName>
                  NOMAD CODERS - 캐럿마켓 클론코딩
                </ExperienceName>
                <ExperienceDescription>
                  • Next.js 14, Tailwind, Prisma, Vercel을 활용한 풀스택 웹
                  애플리케이션 개발
                  <br />
                  • App Router, 서버 컴포넌트, 서버 액션 등 Next.js 14 최신 기능
                  활용
                  <br />
                  • Tailwind, Prisma를 이용한 개발 생산성 극대화
                  <br />
                  • Vercel, PlanetScale을 이용한 배포
                  <br />
                  <BoldText>TypeScript</BoldText> <BoldText>Next</BoldText>{" "}
                  <BoldText>Tailwind</BoldText> <BoldText>Vercel</BoldText>
                </ExperienceDescription>
              </ExperienceItem>
              <ExperienceItem className="experience-item">
                <ExperiencePeriod>2023.09 - 2023.12</ExperiencePeriod>
                <ExperienceName>
                  NOMAD CODERS - 인스타그램 클론코딩
                </ExperienceName>
                <ExperienceDescription>
                  • React Native, Expo, Prisma, ApolloGraphql, AWS를 활용한
                  인스타그램 클론코딩
                  <br />
                  • React Hooks와 React Router를 활용한 함수형 컴포넌트 상태
                  관리 및 라우팅 구현
                  <br />
                  • styled-components, Prisma를 이용한 개발 생산성 극대화
                  <br />
                  • Netlify를 이용한 배포
                  <br />
                  <BoldText>React</BoldText> <BoldText>Apollo</BoldText>{" "}
                  <BoldText>Prisma</BoldText> <BoldText>Expo</BoldText>{" "}
                  <BoldText>AWS</BoldText>
                </ExperienceDescription>
              </ExperienceItem>
              <ExperienceItem className="experience-item">
                <ExperiencePeriod>2017.06 - 2017.12</ExperiencePeriod>
                <ExperienceName>
                  KOSTA 소프트웨어 보안을 위한 시큐어프로그래밍 개발자 양성 과정
                </ExperienceName>
                <ExperienceDescription>
                  • 프론트엔드 개발자 교육과정 수료 (6개월 과정)
                  <br />
                  • 반응형 웹 개발 및 Git을 이용한 협업 경험
                  <br />
                  • Spring Framework를 활용한 RESTful API 구축
                  <br />
                  <BoldText>Java</BoldText> <BoldText>JavaScript</BoldText>{" "}
                  <BoldText>HTML5</BoldText> <BoldText>CSS3</BoldText>{" "}
                  <BoldText>jQuery</BoldText> <BoldText>Spring</BoldText>
                </ExperienceDescription>
              </ExperienceItem>
            </ExperienceBox>
          </ExperienceContainer>
        </ExperienceSection>
      </HomeContent>
    </HomeSection>
  );
};

export default Home;
