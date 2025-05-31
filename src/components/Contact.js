import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = styled.div`
  width: 100%;
  min-height: 100vh;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  z-index: 1;
  pointer-events: none;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  z-index: 2;
  background: transparent;
  pointer-events: auto;
`;

const ThankYouMessage = styled.div`
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  background: transparent;
  position: relative;
`;

const ThankYouTitle = styled.h2`
  font-size: 3.5rem;
  color: white;
  margin-bottom: 2rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ThankYouText = styled.p`
  font-size: 1.2rem;
  color: #ffffff;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  background: transparent;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 2;

  &:hover {
    transform: translateY(-5px);
    background: rgba(0, 0, 0, 0.3);
    color: #00a8ff;
    box-shadow: 0 5px 15px rgba(0, 168, 255, 0.2);
  }

  svg {
    font-size: 1.3rem;
  }
`;

const Contact = () => {
  const sectionRef = useRef(null);
  const messageRef = useRef(null);
  const linksRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 감사 메시지 애니메이션
      gsap.fromTo(
        messageRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "center center",
            scrub: 1,
          },
        }
      );

      // 연락처 링크 애니메이션
      const links = linksRef.current?.children;
      if (links) {
        gsap.fromTo(
          links,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              end: "center center",
              scrub: 1,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <ContactSection ref={sectionRef} id="contact">
      <ContactContainer>
        <ThankYouMessage ref={messageRef}>
          <ThankYouTitle>Thank you</ThankYouTitle>
          <ThankYouText>
            제 포트폴리오를 봐주셔서 감사합니다 :)
            <br />
            프론트엔드 개발자로 성장하기 위해 낯선 기술에도 적극적으로 도전하고,
            <br />
            항상 사용자의 관점에서 생각하며 사용하기 좋은 서비스를 만들고
            싶습니다.
          </ThankYouText>
        </ThankYouMessage>

        <ContactLinks ref={linksRef}>
          <ContactLink
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            GitHub
          </ContactLink>
          <ContactLink
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </ContactLink>
          <ContactLink href="mailto:your.email@example.com">
            <FaEnvelope />
            Email
          </ContactLink>
        </ContactLinks>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
