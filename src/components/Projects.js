import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/projects";
import { FaGithub } from "react-icons/fa";
import { IoClose as Close } from "react-icons/io5";
import { IoLinkOutline as LinkOutline } from "react-icons/io5";
import ProjectModal from "./ProjectModal";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
  padding: 4rem 0;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color: white;
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  perspective: 1000px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 1rem;
  transform: translateZ(20px);
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #e0e0e0;
  margin-bottom: 1.5rem;
  transform: translateZ(10px);
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  transform: translateZ(15px);
`;

const TechTag = styled.span`
  background: rgba(0, 123, 255, 0.1);
  color: #007bff;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: #2a2a2a;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  color: white;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  transition: transform 0.3s ease;

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

    ${ProjectImage} img {
      transform: scale(1.1);
    }

    ${ProjectTitle} {
      color: #00a8ff;
    }

    ${TechTag} {
      background: rgba(0, 168, 255, 0.2);
    }
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 168, 255, 0.5);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 168, 255, 0.7);
  }
`;

const CloseButton = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 1001;
  padding: 0.5rem;
  transition: transform 0.3s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);

  &:hover {
    transform: rotate(90deg);
    background: rgba(0, 0, 0, 0.8);
  }
`;

const GitHubButton = styled.a`
  position: fixed;
  top: 2rem;
  right: 5rem;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  cursor: pointer;
  z-index: 1001;
  padding: 0.5rem;
  transition: all 0.3s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover {
    color: #007bff;
    background: rgba(0, 0, 0, 0.8);
  }
`;

const LinkButton = styled.a`
  position: fixed;
  top: 2rem;
  right: 8rem;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  cursor: pointer;
  z-index: 1001;
  padding: 0.5rem;
  transition: all 0.3s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover {
    color: #007bff;
    background: rgba(0, 0, 0, 0.8);
  }
`;

const ModalContent = styled.div`
  width: 90%;
  max-width: 1200px;
  background: rgba(17, 34, 64, 0.95);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  margin: 4rem auto;
  max-height: calc(100vh - 8rem);
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  padding: 2rem;
  background: ${(props) => props.color || "#1a1a1a"};
  color: white;
  position: relative;
  min-height: ${(props) => (props.hasCoverImage ? "300px" : "auto")};
  flex-shrink: 0;
`;

const Tag = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const ToolItem = styled.span`
  background: rgba(255, 255, 255, 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const MainTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Date = styled.p`
  font-size: 1rem;
  opacity: 0.8;
`;

const CoverImageWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ModalDetail = styled.div`
  padding: 2rem;
  color: white;
  overflow-y: auto;
  flex: 1;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 168, 255, 0.5);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 168, 255, 0.7);
  }
`;

const SubTitleWrap = styled.div`
  margin-bottom: 2rem;
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #e0e0e0;
`;

const ModalAbout = styled.div`
  margin-bottom: 2rem;
`;

const AboutTitle = styled.h3`
  font-size: 1.5rem;
  color: #00a8ff;
  margin-bottom: 1rem;
`;

const ModalList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #00a8ff;
  }
`;

const ModalCon = styled.div`
  margin-bottom: 2rem;
`;

const ModalConTitle = styled.h3`
  font-size: 1.5rem;
  color: #00a8ff;
  margin-bottom: 1rem;
`;

const ModalBox = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 0.5rem;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ModalBoxTitle = styled.h4`
  font-size: 1.1rem;
  color: white;
  margin: 0;
`;

const ModalBoxDetail = styled.div`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 10px;
  margin-bottom: 1rem;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const Wrap = styled.div`
  margin-bottom: 1rem;
`;

const BoldText = styled.strong`
  display: block;
  margin-bottom: 0.5rem;
  color: #00a8ff;
`;

const CodeWrap = styled.div`
  margin-top: 1rem;
`;

const CodeBlock = styled.pre`
  background: #1a1a1a;
  padding: 1rem;
  border-radius: 5px;
  overflow-x: auto;
  margin-top: 0.5rem;
`;

const CodeText = styled.code`
  color: #e0e0e0;
  font-family: monospace;
`;

const ModalImageSlide = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const ImageBox = styled.div`
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const ImageTitle = styled.p`
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 0.9rem;
  text-align: center;
`;

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 섹션 제목 애니메이션
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top bottom-=100",
            end: "top center",
            scrub: 1,
          },
        }
      );

      // 카드 애니메이션
      cardsRef.current.forEach((card, index) => {
        // 카드 내부 요소들
        const elements = card.querySelectorAll("*");

        // 카드 등장 애니메이션
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=200",
            end: "top center",

            scrub: 1,
            toggleActions: "play none none reverse",
          },
        });

        // 카드 스플릿 효과
        tl.fromTo(
          card,
          {
            clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
          },
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1,
            ease: "power2.inOut",
          }
        );

        // 내부 요소들 순차적 페이드인
        elements.forEach((el, i) => {
          tl.fromTo(
            el,
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power2.out",
            },
            "-=0.3"
          );
        });

        // 스크롤에 따른 카드 움직임
        gsap.to(card, {
          y: -20,
          scrollTrigger: {
            trigger: card,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        });

        // 마우스 움직임에 따른 카드 기울기
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateX = (y - centerY) / 30;
          const rotateY = (centerX - x) / 30;

          gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        // 마우스가 카드를 벗어날 때
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <ProjectsSection ref={sectionRef} id="projects">
      <Container>
        <SectionTitle ref={titleRef}>Projects</SectionTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              onClick={() => handleProjectClick(project)}
            >
              {project.coverImage && (
                <ProjectImage>
                  <img src={project.coverImage} alt={project.name} />
                </ProjectImage>
              )}
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.language.map((lang, techIndex) => (
                  <TechTag key={techIndex}>{lang.name}</TechTag>
                ))}
              </TechStack>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </ProjectsSection>
  );
};

export default Projects;
