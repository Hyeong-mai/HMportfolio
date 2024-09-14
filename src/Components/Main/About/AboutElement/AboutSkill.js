import React from "react";
import styled from "styled-components";

const SmallTitle = styled.h5`
  margin: 0;
`;
const SkillTitle = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 30px;
`;

const Skill = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  @media (max-width: 1160px) {
    height: 30%;
  }
`;

const ContentsHeader = styled.div`
  width: 100%;
  padding: 20px;
`;

const SkillCon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  @media (max-width: 880px) {
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;
  }
`;

const FrontEnd = styled.div`
  height: 100%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Tool = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 그리드 형식으로 한 줄에 4개씩 */
  gap: 20px;
  width: 100%;
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
    font-size: 0.7rem;
  }
`;

const AboutSkill = () => {
  return (
    <Skill>
      <ContentsHeader>
        <SmallTitle>Skill & Tool</SmallTitle>
      </ContentsHeader>
      <SkillCon>
        <FrontEnd>
          <SkillTitle>FrontEnd</SkillTitle>
          <Tool>
            <ToolItem>HTML</ToolItem>
            <ToolItem>CSS</ToolItem>
            <ToolItem>JavaScript</ToolItem>
            <ToolItem>TypeScript</ToolItem>
            <ToolItem>React</ToolItem>
            <ToolItem>React-Native</ToolItem>
            <ToolItem>Next</ToolItem>
          </Tool>
        </FrontEnd>
        <FrontEnd>
          <SkillTitle>Cooperation</SkillTitle>
          <Tool>
            <ToolItem>Github</ToolItem>
            <ToolItem>Notion</ToolItem>
          </Tool>
        </FrontEnd>
      </SkillCon>
    </Skill>
  );
};

export default AboutSkill;
