import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaGitAlt, FaCode } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = styled.section`
  width: 100%;
  height: 250vh;
  background: transparent;
  /* padding: 4rem 0; */
  overflow: hidden;
`;

const Container = styled.div`
  position: sticky;
  top: 0;
  height: 200vh;
  width: 100%;
  overflow: hidden;
`;

const HorizontalWrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  width: fit-content;
  overflow: hidden;
`;

const ContentSection = styled.div`
  width: fit-content;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 0 5vw;
  position: relative;
  transform: ${() => {
    const x = (Math.random() - 0.5) * 30;
    const y = (Math.random() - 0.5) * 20;
    const rotate = (Math.random() - 0.5) * 2;
    return `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
  }};

  &.bottom-aligned {
    align-items: flex-end;
    padding-top: 50vh;
  }

  &:hover {
    transform: ${() => {
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 60;
      const rotate = (Math.random() - 0.5) * 2;
      return `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
    }};
  }
`;

const AboutTitle = styled.h2`
  font-size: 3rem;
  color: white;
  text-align: center;
  margin-bottom: 4rem;
  opacity: 1;
  transform: translateY(30px);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const TechStackCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  color: white;
  position: relative;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  transition: transform 0.3s ease;
  width: 600px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);

    &::after {
      opacity: 1;
    }
  }

  &.active {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
`;

const TechStackTitle = styled.h3`
  font-size: 2rem;
  color: #007bff;
  margin-bottom: 2rem;
  text-align: center;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  perspective: 1000px;
  flex: 1;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  transition: all 0.3s ease;
  transform: translateZ(20px);

  &:hover {
    transform: translateY(-5px) translateZ(30px);
    background: rgba(255, 255, 255, 0.1);
  }

  svg {
    font-size: 2.5rem;
    color: #007bff;
    transition: all 0.3s ease;
  }

  span {
    font-size: 1rem;
    color: #e0e0e0;
    text-align: center;
  }

  &:hover svg {
    transform: scale(1.2);
    color: #00a8ff;
  }
`;

const TechDescription = styled.p`
  font-size: 0.9rem;
  color: #a0a0a0;
  text-align: center;
  margin-top: 0.5rem;
`;

const About = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const sections = gsap.utils.toArray(".about-content");

    // 각 섹션의 초기 위치 설정
    sections.forEach((section, index) => {
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 20;
      const rotate = (Math.random() - 0.5) * 2;

      gsap.set(section, {
        x: x,
        y: y,
        rotation: rotate,
        xPercent: index * 15,
      });
    });

    // 스크롤 애니메이션
    gsap.to(sections, {
      xPercent: -50 * (sections.length - 1),
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: container,
        pin: true,
        start: "top top",
        end: "bottom center",
        scrub: 0.5,
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: { min: 0.1, max: 0.2 },
          delay: 0,
          ease: "power1.inOut",
        },
        onUpdate: (self) => {
          const progress = self.progress;
          const activeIndex = Math.round(progress * (sections.length - 1));

          sections.forEach((section, index) => {
            section.classList.remove("active");
            // 활성화된 섹션이 아닐 때는 약간의 랜덤한 움직임 추가
            if (index !== activeIndex) {
              const x = (Math.random() - 0.5) * 10;
              const y = (Math.random() - 0.5) * 5;
              gsap.to(section, {
                x: x,
                y: y,
                duration: 0.3,
                ease: "power1.out",
              });
            }
          });

          if (sections[activeIndex]) {
            sections[activeIndex].classList.add("active");
            // 활성화된 섹션은 원래 위치로 부드럽게 이동
            gsap.to(sections[activeIndex], {
              x: 0,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
            });
          }
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, []);

  const renderContent = () => {
    return (
      <>
        <ContentSection key="title" className="about-content">
          <AboutTitle>About Me</AboutTitle>
        </ContentSection>

        <ContentSection className="about-content">
          <TechStackCard>
            <TechStackTitle>Language & Framework</TechStackTitle>
            <TechGrid>
              <TechItem>
                <FaReact />
                <span>React 18</span>
              </TechItem>
              <TechItem>
                <SiNextdotjs />
                <span>Next.js</span>
              </TechItem>
              <TechItem>
                <SiTypescript />
                <span>TypeScript</span>
              </TechItem>
              <TechItem>
                <FaCode />
                <span>Flutter</span>
              </TechItem>
              <TechItem>
                <FaCode />
                <span>Dart</span>
              </TechItem>
            </TechGrid>
          </TechStackCard>
        </ContentSection>
        <ContentSection className="about-content bottom-aligned">
          <TechStackCard>
            <TechStackTitle>Styling & State Management</TechStackTitle>
            <TechGrid>
              <TechItem>
                <SiTailwindcss />
                <span>Tailwind CSS</span>
              </TechItem>
              <TechItem>
                <FaCode />
                <span>Styled Components</span>
              </TechItem>
              <TechItem>
                <FaCode />
                <span>Redux Toolkit</span>
              </TechItem>
              <TechItem>
                <FaCode />
                <span>GetX</span>
              </TechItem>
              <TechItem>
                <FaCode />
                <span>React Router</span>
              </TechItem>
              <TechItem>
                <FaCode />
                <span>Dio</span>
                <TechDescription>Networking</TechDescription>
              </TechItem>
              <TechItem>
                <FaCode />
                <span>Hive</span>
                <TechDescription>Local Storage</TechDescription>
              </TechItem>
            </TechGrid>
          </TechStackCard>
        </ContentSection>
        <ContentSection className="about-content">
          <TechStackCard>
            <TechStackTitle>Animation & Canvas</TechStackTitle>
            <TechGrid>
              <TechItem>
                <FaCode />
                <span>GSAP</span>
                <TechDescription>ScrollTrigger, ScrollToPlugin</TechDescription>
              </TechItem>
              <TechItem>
                <FaCode />
                <span>Fabric.js</span>
              </TechItem>
              <TechItem>
                <FaCode />
                <span>Framer Motion</span>
              </TechItem>
            </TechGrid>
          </TechStackCard>
        </ContentSection>

        <ContentSection className="about-content">
          <TechStackCard>
            <TechStackTitle>Development Tools</TechStackTitle>
            <TechGrid>
              <TechItem>
                <FaGitAlt />
                <span>Git & GitHub</span>
                <TechDescription>Version Control</TechDescription>
              </TechItem>
              <TechItem>
                <FaCode />
                <span>Vercel</span>
                <TechDescription>CI/CD</TechDescription>
              </TechItem>
              <TechItem>
                <FaCode />
                <span>Jira & Notion</span>
                <TechDescription>Project Management</TechDescription>
              </TechItem>
              <TechItem>
                <FaCode />
                <span>Slack & Teams</span>
                <TechDescription>Communication</TechDescription>
              </TechItem>
            </TechGrid>
          </TechStackCard>
        </ContentSection>
        <ContentSection className="about-content"></ContentSection>
      </>
    );
  };

  return (
    <AboutSection id="about">
      <Container ref={containerRef}>
        <HorizontalWrapper>{renderContent()}</HorizontalWrapper>
      </Container>
    </AboutSection>
  );
};

export default About;
