import { useState } from "react";
import { Close } from "react-ionicons";
import styled from "styled-components";

// 랜덤 파스텔 색상 생성
const getRandomPastelColor = () => {
  const hue = Math.floor(Math.random() * 360); // 0에서 360까지 랜덤한 색상 값
  return `hsl(${hue}, 100%, 85%)`; // HSL로 파스텔 톤 색상 생성
};

// 툴 아이템
const ToolItem = styled.div`
  background-color: black; /* 랜덤 파스텔 색상 적용 */
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: ${getRandomPastelColor};
`;

// 태그
const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

// 메인 타이틀
const MainTitle = styled.h1`
  font-weight: bold;
  font-size: 30px;
`;

// 날짜
const Date = styled.p`
  font-size: 14px;
`;

// 모달 디테일
const ModalDetail = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 100px;
`;

// 서브 타이틀 래퍼
const SubTitleWrap = styled.div`
  width: 60%;
  padding: 50px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  @media (max-width: 880px) {
    width: 90%;
  }
`;

// 서브 타이틀
const SubTitle = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: black;
  text-align: center;
`;

// 모달 어바웃
const ModalAbout = styled.div`
  color: black;
  width: 60%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  @media (max-width: 880px) {
    width: 90%;
  }
`;

// 어바웃 타이틀
const AboutTitle = styled.h1`
  font-weight: bold;
  font-size: 30px;
`;

// 모달 리스트
const ModalList = styled.ul`
  width: 100%;
  padding-left: 20px;
`;

// 리스트 아이템
const ListItem = styled.li`
  font-size: 16px;
  margin-top: 5px;
`;

// 모달 컨텐츠
const ModalCon = styled.div`
  width: 60%;
  padding: 20px;
  color: black;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 880px) {
    width: 90%;
  }
`;

// 모달 컨텐츠 타이틀
const ModalConTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

// 모달 박스
const ModalBox = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

// 모달 박스 타이틀
const ModalBoxTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
`;

// 모달 박스 디테일
const ModalBoxDetail = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  padding: 15px;
  margin-top: 5px;
  margin-bottom: 20px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 1.5;

  overflow: hidden;
  max-height: ${({ isOpen }) =>
    isOpen ? "500px" : "0px"}; /* 초기 값 0 설정 */
  padding: ${({ isOpen }) =>
    isOpen ? "15px" : "0px"}; /* padding도 상태에 따라 변경 */
`;

// 이미지 모달 슬라이드
const ModalImageSlide = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 3개의 열 */
  gap: 20px;
  padding: 20px;
  @media (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr); /* 3개의 열 */
  }
`;

// 이미지 박스
const ImageBox = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

// 이미지
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// 이미지 제목
const ImageTitle = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  color: #333;
`;

// 이미지 모달 배경
const ImageModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

// 이미지 모달 콘텐츠
const ImageModalContent = styled.div`
  position: relative;
  height: 80%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 이미지 모달 이미지
const ImageModalImage = styled.img`
  max-width: 100%; // 부모 요소 너비에 맞춤
  max-height: 100%; // 부모 요소 높이에 맞춤
  width: auto; // 비율을 유지하면서 너비 자동 조정
  height: auto; // 비율을 유지하면서 높이 자동 조정
  object-fit: contain; // 비율을 유지하면서 컨테이너에 맞게 조정
`;

// 모달 배경
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: flex-start;
  overflow: scroll;
  justify-content: center;
  z-index: 1000;
`;

// 모달 콘텐츠
const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 80%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 880px) {
    width: 90%;
  }
`;

// 닫기 버튼
const CloseButton = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  color: white;
  font-size: 25px;
  line-height: 0;

  &:hover {
    color: red;
  }
`;

// 모달 닫기 버튼
const ModalCloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  color: white;
  font-size: 25px;
  line-height: 0;

  &:hover {
    color: red;
  }
`;

// 모달 헤더

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background: ${({ hasCoverImage, color }) =>
    hasCoverImage
      ? `linear-gradient(to bottom, ${color} 70%, white 30%)`
      : color}; /* 커버 이미지가 있으면 그라데이션, 없으면 지정한 color 사용 */
`;

const BoldText = styled.p`
  font-weight: bold;
`;
const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const CoverImageWrap = styled.div`
  overflow: hidden;
  border: 0.5px solid gray;
  width: 600px;
  height: 350px;
  border-radius: 50px;
  background-color: black;
  @media (max-width: 720px) {
    width: 450px;
    height: 250px;
  }
  @media (max-width: 430px) {
    width: 300px;
    height: 170px;
  }
`;

const Modal = ({ image, onClose }) => (
  <ImageModalBackground onClick={onClose}>
    <ImageModalContent onClick={(e) => e.stopPropagation()}>
      <ModalCloseButton onClick={onClose}>
        <Close color={"white"} />
      </ModalCloseButton>
      <ImageModalImage src={image} />
    </ImageModalContent>
  </ImageModalBackground>
);

const SelectModal = ({ selectedProject, setSelectedProject }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };
  const closeModal = () => {
    setSelectedProject(null);
  };

  // 각 ModalBox의 열림 상태를 배열로 관리
  const [openDetails, setOpenDetails] = useState({});

  // 특정 인덱스의 디테일만 열고 닫기 (각 ModalBox의 상태를 독립적으로 관리)
  const toggleDetail = (index) => {
    setOpenDetails((prev) => ({
      ...prev,
      [index]: !prev[index], // 선택된 index의 상태만 토글
    }));
  };

  return (
    <>
      {/* 모달 */}
      {selectedProject && (
        <ModalBackground onClick={closeModal}>
          <CloseButton onClick={closeModal}>
            <Close color={"white"} />
          </CloseButton>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader
              color={selectedProject.mainColor}
              hasCoverImage={!!selectedProject.coverImage}
            >
              <Tag>
                {selectedProject.tag &&
                  selectedProject.tag.map((tag, index) => (
                    <ToolItem key={index}>{tag}</ToolItem>
                  ))}
              </Tag>
              <MainTitle>{selectedProject.name}</MainTitle>
              <Date>{selectedProject.date}</Date>
              {selectedProject.coverImage ? (
                <CoverImageWrap>
                  <CoverImage src={selectedProject.coverImage} />
                </CoverImageWrap>
              ) : null}
            </ModalHeader>
            <ModalDetail>
              <SubTitleWrap>
                <SubTitle>
                  {selectedProject.description}
                  <br />
                  {selectedProject.subDescription}
                </SubTitle>
              </SubTitleWrap>
              <ModalAbout>
                <AboutTitle>📍 주요 기능 및 특징</AboutTitle>
                <ModalList>
                  {selectedProject.skills &&
                    selectedProject.skills.map((skill, index) => (
                      <ListItem key={index}>{skill}</ListItem>
                    ))}
                </ModalList>
              </ModalAbout>
              <ModalCon>
                <ModalConTitle>🛠️ 사용 기술 및 언어</ModalConTitle>

                {/* React 디테일 */}
                {selectedProject.language &&
                  selectedProject.language.map((language, index) => (
                    <>
                      <ModalBox
                        onClick={() => toggleDetail(`language-${index}`)}
                      >
                        <ModalBoxTitle>{language.name}</ModalBoxTitle>
                      </ModalBox>
                      <ModalBoxDetail isOpen={openDetails[`language-${index}`]}>
                        {language.languageDescription}
                      </ModalBoxDetail>
                    </>
                  ))}
              </ModalCon>
              <ModalCon>
                <ModalConTitle>✨ 작업 기여도</ModalConTitle>
                {selectedProject.contribution &&
                  selectedProject.contribution.map((contribution, index) => (
                    <>
                      <ModalBox
                        onClick={() => toggleDetail(`contribution-${index}`)}
                      >
                        <ModalBoxTitle>
                          {contribution.contributionTitle}
                        </ModalBoxTitle>
                      </ModalBox>
                      <ModalBoxDetail
                        isOpen={!openDetails[`contribution-${index}`]}
                      >
                        <ModalList>
                          {contribution.contributionLi &&
                            contribution.contributionLi.map(
                              (contributionLi, index) => (
                                <ListItem key={index}>
                                  {contributionLi}
                                </ListItem>
                              )
                            )}
                        </ModalList>
                      </ModalBoxDetail>
                    </>
                  ))}
              </ModalCon>
              <ModalCon>
                <ModalConTitle>💫 Trouble Shooting</ModalConTitle>
                {selectedProject.Trouble &&
                  selectedProject.Trouble.map((Trouble, index) => (
                    <>
                      <ModalBox
                        onClick={() => toggleDetail(`trouble-${index}`)}
                      >
                        <ModalBoxTitle>{Trouble.TroubleTitle}</ModalBoxTitle>
                      </ModalBox>
                      <ModalBoxDetail isOpen={!openDetails[`trouble-${index}`]}>
                        <ModalList>
                          {Trouble.TroubleLi &&
                            Trouble.TroubleLi.map((TroubleLi, index) => (
                              <ListItem key={index}>
                                <BoldText>{TroubleLi.title}</BoldText>
                                {TroubleLi.ex}
                              </ListItem>
                            ))}
                        </ModalList>
                      </ModalBoxDetail>
                    </>
                  ))}
              </ModalCon>
              <ModalCon>
                <ModalConTitle>💻 작업 화면</ModalConTitle>
                <ModalImageSlide>
                  {selectedProject.images &&
                    selectedProject.images.map((img, index) => (
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
            </ModalDetail>
          </ModalContent>
        </ModalBackground>
      )}
      {/* 이미지 모달 */}
      {selectedImage && (
        <Modal image={selectedImage} onClose={closeImageModal} />
      )}
    </>
  );
};

export default SelectModal;
