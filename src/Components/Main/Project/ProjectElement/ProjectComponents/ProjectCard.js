import React from "react";
import styled from "styled-components";

// ProjectCard 스타일 컴포넌트
const Card = styled.div`
  width: 90%;
  height: 100%;
  background-color: #373737;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 3px;
  position: relative; /* "자세히 보기" wrap을 위해 상대적 위치 지정 */
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* hover 시 그림자 추가 */
    transform: translateY(-5px); /* 살짝 떠오르는 효과 */
  }
`;

const Top = styled.div`
  width: 100%;
  height: 45%;
  background-color: white;
  border-radius: 4px 4px 0px 0px;
`;

const Bottom = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const IconWrap = styled.div`
  display: flex;
  gap: 10px;
`;

const Title = styled.p`
  font-size: 28px;
  font-weight: bold;
`;

const SubTitle = styled.p`
  font-size: 14px;
  color: gray;
`;

const getRandomPastelColor = () => {
  const hue = Math.floor(Math.random() * 360); // 0에서 360까지 랜덤한 색상 값
  return `hsl(${hue}, 100%, 85%)`; // HSL로 파스텔 톤 색상 생성
};

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

// "자세히 보기" wrap 추가
const HoverDetails = styled.div`
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #373737;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  opacity: 0;
  border-radius: 3px;
  transition: opacity 0.3s ease;
  font-size: 30px;
  ${Card}:hover & {
    opacity: 1;
  }
`;
const Detail = styled.button`
  border: 1px solid #f1f2f5;
  background-color: #373737;
  padding: 15px 50px;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  transition: all 0.3s ease;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: #f1f2f5;
    color: #373737;
  }
`;
const Image = styled.img`
  border-radius: 4px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const ProjectCard = ({ project, onClick }) => {
  return (
    <Card>
      {project.coverImage ? (
        <Top>
          <Image src={project.coverImage} />
        </Top>
      ) : null}

      <Bottom>
        <TextWrap>
          <Title>{project.name}</Title>
          <SubTitle>{project.description}</SubTitle>
        </TextWrap>
        <IconWrap>
          {project.tag &&
            project.tag.map((tag, index) => (
              <ToolItem key={index}>{tag}</ToolItem>
            ))}
        </IconWrap>
      </Bottom>
      <HoverDetails>
        <Title>{project.name}</Title>
        <Detail onClick={() => onClick(project)}>자세히 보기</Detail>
      </HoverDetails>
    </Card>
  );
};

export default ProjectCard;
