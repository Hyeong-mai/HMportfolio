import React from "react";
import styled, { keyframes } from "styled-components";
import Title from "./AboutElement/Title";
import ProjectItem from "./ProjectElement/ProjectItem";

const fadeIn = keyframes`
   from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const AnimatedBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 350px;
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-out forwards;

  // 화면 크기가 작을 때 스타일 변경
  @media (max-width: 598px) {
    flex-direction: column;
    height: 350px;
  }
`;
const Animated1 = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-out forwards; // 애니메이션으로 나타남 // 애니메이션으로 나타남
`;
const Animated2 = styled(AnimatedBase)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 350px;
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-out forwards; // 애니메이션으로 나타남
  animation-delay: 0.6s;
  @media (max-width: 598px) {
    height: 700px;
  }
`;
const Animated3 = styled(AnimatedBase)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 350px;
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-out forwards; // 애니메이션으로 나타남
  animation-delay: 0.9s;
  @media (max-width: 768px) {
    height: 700px;
  }
`;
const Animated4 = styled(AnimatedBase)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 350px;
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-out forwards; // 애니메이션으로 나타남
  animation-delay: 1.2s;
`;

const ContentsStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;
const ProjectSection = styled.div`
  padding-top: 50px;
  width: 80%;
`;
const ProjectList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;
// const Row = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
//   height: 350px;
// `;

const ProjectContents = () => {
  return (
    <ContentsStyle>
      <ProjectSection>
        <Animated1>
          <Title text={"PROJECT"}></Title>
        </Animated1>
        <ProjectList>
          <Animated2>
            {/* <Row> */}
            <ProjectItem
              link={
                "https://cute-apogee-96e.notion.site/DAM-map-f13cddee5185425aab0cd991ca3fa54f?pvs=4"
              }
              url={""}
              imgSrc={"image/next-carrot.png"}
              title={"먹 DAM map"}
            />
            <ProjectItem
              link={
                "https://cute-apogee-96e.notion.site/DAM-sns-8928e1f702084385a25cd12d7b70ea56?pvs=4"
              }
              imgSrc={"image/next-carrot.png"}
              title={"먹 DAM sns"}
            />
            {/* </Row> */}
          </Animated2>
          <Animated2>
            {/* <Row> */}
            <ProjectItem
              link={
                "https://cute-apogee-96e.notion.site/DAM-map-f13cddee5185425aab0cd991ca3fa54f?pvs=4"
              }
              imgSrc={"image/map.png"}
              title={"먹 DAM map"}
            />
            <ProjectItem
              link={
                "https://cute-apogee-96e.notion.site/DAM-sns-8928e1f702084385a25cd12d7b70ea56?pvs=4"
              }
              imgSrc={"image/sns.png"}
              title={"먹 DAM sns"}
            />
            {/* </Row> */}
          </Animated2>
          <Animated3>
            {/* <Row> */}
            <ProjectItem
              link={
                "https://cute-apogee-96e.notion.site/CafeDam-App-ef1200128e1a49ad95eed16c261d6f33?pvs=4"
              }
              imgSrc={"image/cafeDam.png"}
              title={"CafeDam App"}
            />
            <ProjectItem
              link={
                "https://cute-apogee-96e.notion.site/Kosta-6c1cacb401934b2e9308cd1054976b71?pvs=4"
              }
              imgSrc={"image/kosta.png"}
              title={"Kosta 경매 사이트"}
            />
            {/* </Row> */}
          </Animated3>
          <Animated4>
            {/* <Row> */}
            <ProjectItem
              link={
                "https://cute-apogee-96e.notion.site/Portfolio-dd9ec006c2b14211b93ee8fced336873?pvs=4"
              }
              imgSrc={"image/portfolio.png"}
              title={"나의 포트폴리오"}
            />
            {/* </Row> */}
          </Animated4>
        </ProjectList>
      </ProjectSection>
    </ContentsStyle>
  );
};
export default ProjectContents;
