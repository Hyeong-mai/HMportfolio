import React from "react";
import Title from "./AboutElement/Title";
import styled, { keyframes } from "styled-components";

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

const ContentsStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;
const AboutMe = styled.div`
  margin-top: 50px;
  width: 80%;
`;

const FrontEnd = styled.div`
  width: 80%;
  color: black;
  margin-bottom: 50px;
`;
const PText = styled.p`
  color: black;
  font-weight: 500;
  margin: 0;
`;
const UlStyle = styled.ul`
  color: black;
  font-weight: 500;
  margin: 0;
`;
const LiStyle = styled.li`
  margin-bottom: 10px;
`;

const Animated1 = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-out forwards; // 애니메이션으로 나타남 // 애니메이션으로 나타남
`;
const Animated2 = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-out forwards; // 애니메이션으로 나타남
  animation-delay: 0.6s;
`;
const Animated3 = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-out forwards; // 애니메이션으로 나타남
  animation-delay: 0.9s;
`;
const Animated4 = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-out forwards; // 애니메이션으로 나타남
  animation-delay: 1.2s;
`;
const Animated5 = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-out forwards; // 애니메이션으로 나타남
  animation-delay: 1.5s;
`;

const Animated6 = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-out forwards; // 애니메이션으로 나타남
  animation-delay: 1.8s;
`;

const Animated7 = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-out forwards; // 애니메이션으로 나타남
  animation-delay: 2.1s;
`;

const AboutContents = () => {
  return (
    <ContentsStyle>
      <AboutMe>
        <Animated1>
          <Title text={`ABOUT_ME`} />
          <PText>
            끈기와 열정을 바탕으로 사용자의 가치를 최우선시하는 개발자
            김형민입니다. 시간을 내어 제 포트폴리오를 봐주셔서 감사합니다.
          </PText>
        </Animated1>
        <Animated2>
          <Title text={`_EDUCATION`} />
          <UlStyle>
            <LiStyle>
              2018.06 ~ 2018.12 한국소프트웨어진흥협회 - 소프트웨어 보안을 위한
              시큐어 프로그래밍 과정 수료
            </LiStyle>
            <LiStyle>
              2015.03 ~ 2018.02 양영디지털 고등학교 소프트웨어과 졸업
            </LiStyle>
          </UlStyle>
        </Animated2>
        <Animated3>
          <Title text={`_CERTIFICATE`} />
          <UlStyle>
            <LiStyle>정보처리기사(2017)</LiStyle>
            <LiStyle>웹디자인기능사(2017)</LiStyle>
          </UlStyle>
        </Animated3>
      </AboutMe>
      <FrontEnd>
        <Animated4>
          <Title text={"FRONT_END"} />
        </Animated4>
        <Animated5>
          <h3>_Basic</h3>
          <UlStyle>
            <LiStyle>JavaScript</LiStyle>
            <LiStyle>HTML5</LiStyle>
            <LiStyle>CSS3</LiStyle>
          </UlStyle>
        </Animated5>
        <Animated6>
          <h3>_Library</h3>
          <UlStyle>
            <LiStyle>React</LiStyle>
            <LiStyle>React-Native</LiStyle>
            <LiStyle>Style-Components</LiStyle>
          </UlStyle>
        </Animated6>
        <Animated7>
          <h3>_DataBase</h3>
          <UlStyle>
            <LiStyle>FireBase</LiStyle>
            <LiStyle>GraphQL</LiStyle>
            <LiStyle>CSS3</LiStyle>
          </UlStyle>
        </Animated7>
      </FrontEnd>
    </ContentsStyle>
  );
};
export default AboutContents;
