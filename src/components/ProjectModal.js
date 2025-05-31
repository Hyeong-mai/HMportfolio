import React, { useState, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { IoClose as Close } from "react-icons/io5";
import { IoLinkOutline as LinkOutline } from "react-icons/io5";
import gsap from "gsap";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  backdrop-filter: blur(0px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
  opacity: 0;
  visibility: hidden;

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
  transform: scale(0.9);
  opacity: 0;
`;

const ModalHeader = styled.div`
  padding: 1rem;
  background: ${(props) => props.color || "#1a1a1a"};
  color: white;
  position: relative;
  min-height: auto;
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

const TitleWrap = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
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
  max-height: 350px;
  object-fit: cover;
`;

const ImageTitle = styled.p`
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 0.9rem;
  text-align: center;
`;

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [openDetails, setOpenDetails] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const headerRef = useRef(null);
  const detailRef = useRef(null);

  useLayoutEffect(() => {
    if (!modalRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      if (isOpen) {
        // 모달 배경 애니메이션
        gsap.to(modalRef.current, {
          background: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(5px)",
          opacity: 1,
          visibility: "visible",
          duration: 0.5,
          ease: "power2.out",
        });

        // 모달 컨텐츠 애니메이션
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        tl.to(contentRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        })
          .from(
            headerRef.current,
            {
              y: -30,
              opacity: 0,
              duration: 0.4,
            },
            "-=0.3"
          )
          .from(
            detailRef.current.children,
            {
              y: 20,
              opacity: 0,
              duration: 0.4,
              stagger: 0.1,
            },
            "-=0.2"
          );
      } else {
        // 닫기 애니메이션
        const tl = gsap.timeline({
          onComplete: () => {
            gsap.set(modalRef.current, {
              visibility: "hidden",
            });
          },
        });

        tl.to(contentRef.current, {
          scale: 0.9,
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        })
          .to(
            modalRef.current,
            {
              background: "rgba(0, 0, 0, 0)",
              backdropFilter: "blur(0px)",
              opacity: 0,
              duration: 0.4,
              ease: "power2.inOut",
            },
            "-=0.3"
          )
          .to(
            [headerRef.current, ...detailRef.current.children],
            {
              opacity: 0,
              y: 10,
              duration: 0.3,
              stagger: 0.05,
              ease: "power2.inOut",
            },
            "-=0.4"
          );
      }
    }, modalRef);

    return () => ctx.revert();
  }, [isOpen]);

  const toggleDetail = (id) => {
    setOpenDetails((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  if (!project) return null;

  return (
    <>
      <ModalBackground ref={modalRef} onClick={onClose}>
        <CloseButton onClick={onClose}>
          <Close size={24} />
        </CloseButton>
        {project.githubLink && (
          <GitHubButton
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
          </GitHubButton>
        )}
        {project.link && (
          <LinkButton
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkOutline size={20} />
          </LinkButton>
        )}
        <ModalContent ref={contentRef} onClick={(e) => e.stopPropagation()}>
          <ModalHeader
            ref={headerRef}
            color={project.mainColor}
            hasCoverImage={!!project.coverImage}
          >
            <Tag>
              {project.tag &&
                project.tag.map((tag, index) => (
                  <ToolItem key={index}>{tag}</ToolItem>
                ))}
            </Tag>
            <TitleWrap>
              <MainTitle>{project.name}</MainTitle>
              <Date>{project.date}</Date>
            </TitleWrap>
            {/* {project.coverImage && (
              <CoverImageWrap>
                <CoverImage src={project.coverImage} />
              </CoverImageWrap>
            )} */}
          </ModalHeader>
          <ModalDetail ref={detailRef}>
            <SubTitleWrap>
              <SubTitle>
                {project.description}
                <br />
                {project.subDescription}
              </SubTitle>
            </SubTitleWrap>
            <ModalAbout>
              <AboutTitle>📍 특징</AboutTitle>
              <ModalList>
                {project.skills &&
                  project.skills.map((skill, index) => (
                    <ListItem key={index}>{skill}</ListItem>
                  ))}
              </ModalList>
            </ModalAbout>
            <ModalCon>
              <ModalConTitle>🛠️ 사용 기술 및 언어</ModalConTitle>
              {project.language &&
                project.language.map((language, index) => (
                  <React.Fragment key={index}>
                    <ModalBox onClick={() => toggleDetail(`language-${index}`)}>
                      <ModalBoxTitle>{language.name}</ModalBoxTitle>
                    </ModalBox>
                    <ModalBoxDetail isOpen={openDetails[`language-${index}`]}>
                      {language.languageDescription}
                    </ModalBoxDetail>
                  </React.Fragment>
                ))}
            </ModalCon>
            <ModalCon>
              <ModalConTitle>✨ 주요 기능</ModalConTitle>
              {project.contribution &&
                project.contribution.map((contribution, index) => (
                  <React.Fragment key={index}>
                    <ModalBox
                      onClick={() => toggleDetail(`contribution-${index}`)}
                    >
                      <ModalBoxTitle>
                        {contribution.contributionTitle}
                      </ModalBoxTitle>
                    </ModalBox>
                    <ModalBoxDetail
                      isOpen={openDetails[`contribution-${index}`]}
                    >
                      <ModalList>
                        {contribution.contributionLi &&
                          contribution.contributionLi.map(
                            (contributionLi, liIndex) => (
                              <Wrap key={liIndex}>
                                <BoldText>{contributionLi.title}</BoldText>
                                {contributionLi.ex &&
                                  contributionLi.ex.map((p, exIndex) => (
                                    <ListItem key={exIndex}>{p}</ListItem>
                                  ))}
                              </Wrap>
                            )
                          )}
                      </ModalList>
                    </ModalBoxDetail>
                  </React.Fragment>
                ))}
            </ModalCon>
            {project.Trouble && (
              <ModalCon>
                <ModalConTitle>💫 Trouble Shooting</ModalConTitle>
                {project.Trouble.map((trouble, index) => (
                  <React.Fragment key={index}>
                    <ModalBox onClick={() => toggleDetail(`trouble-${index}`)}>
                      <ModalBoxTitle>{trouble.TroubleTitle}</ModalBoxTitle>
                    </ModalBox>
                    <ModalBoxDetail isOpen={openDetails[`trouble-${index}`]}>
                      <ModalList>
                        {trouble.TroubleLi &&
                          trouble.TroubleLi.map((troubleLi, liIndex) => (
                            <Wrap key={liIndex}>
                              <BoldText>{troubleLi.title}</BoldText>
                              <ListItem>{troubleLi.ex}</ListItem>
                              {troubleLi.code && (
                                <CodeWrap>
                                  <BoldText>관련코드</BoldText>
                                  <CodeBlock>
                                    <CodeText>{troubleLi.code}</CodeText>
                                  </CodeBlock>
                                </CodeWrap>
                              )}
                            </Wrap>
                          ))}
                      </ModalList>
                    </ModalBoxDetail>
                  </React.Fragment>
                ))}
              </ModalCon>
            )}
            {project.images && (
              <ModalCon>
                <ModalConTitle>💻 작업 화면</ModalConTitle>
                <ModalImageSlide>
                  {project.images.map((img, index) => (
                    <ImageBox
                      key={index}
                      onClick={() => handleImageClick(img.src)}
                    >
                      <Image src={img.src} alt={img.title} />
                      <ImageTitle>{img.title}</ImageTitle>
                    </ImageBox>
                  ))}
                </ModalImageSlide>
              </ModalCon>
            )}
          </ModalDetail>
        </ModalContent>
      </ModalBackground>
      {selectedImage && (
        <ModalBackground onClick={closeImageModal}>
          <CloseButton onClick={closeImageModal}>
            <Close size={24} />
          </CloseButton>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Selected"
              style={{ width: "100%", height: "auto" }}
            />
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

export default ProjectModal;
