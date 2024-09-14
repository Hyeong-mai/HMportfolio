import React from "react";
import styled from "styled-components";

const EducationItemLayout = styled.div`
  width: 90%;
  height: 90%;
  background-color: #373737;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 10px;
  flex-direction: column;
  border-radius: 3px;
  @media (max-width: 1160px) {
    height: 90%;
  }
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex-direction: column;
`;
const Date = styled.p`
  color: gray;
  font-size: 16px;
`;
const BigTitle = styled.p`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;
const SmallTitle = styled.p`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;
const Ul = styled.ul`
  margin-left: 20px;
`;
const Li = styled.li`
  color: gray;
  font-size: 16px;
`;
const Bottom = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 그리드 형식으로 한 줄에 4개씩 */
  gap: 20px;
  width: 90%;
  @media (max-width: 1660px) {
    grid-template-columns: repeat(4, 1fr); /* 3개의 열 */
  }
  @media (max-width: 430px) {
    grid-template-columns: repeat(3, 1fr); /* 3개의 열 */
  }
`;

// 랜덤 파스텔 색상 생성 함수
const getRandomPastelColor = () => {
  const hue = Math.floor(Math.random() * 360); // 0에서 360까지 랜덤한 색상 값
  return `hsl(${hue}, 100%, 85%)`; // HSL로 파스텔 톤 색상 생성
};

const ToolItem = styled.div`
  background-color: black; /* 랜덤 파스텔 색상 적용 */
  border-radius: 15px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  color: ${getRandomPastelColor};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
  @media (max-width: 430px) {
    padding: 5px;
    font-size: 0.8rem;
  }
  @media (max-width: 390px) {
    padding: 3px;
    font-size: 0.7rem;
  }
`;
const EducationItem = ({ project }) => {
  return (
    <EducationItemLayout>
      <Top>
        <Date>{project.date}</Date>
        <BigTitle>{project.BigTitle}</BigTitle>
        <SmallTitle>{project.SmallTitle}</SmallTitle>
        <Ul>
          {project.descriptions.map((description) => (
            <Li>{description}</Li>
          ))}
        </Ul>
      </Top>
      <Bottom>
        {project.skills.map((skill) => (
          <ToolItem>{skill}</ToolItem>
        ))}
      </Bottom>
    </EducationItemLayout>
  );
};

export default EducationItem;
