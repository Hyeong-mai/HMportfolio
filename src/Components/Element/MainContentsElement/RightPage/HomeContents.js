import React from "react";
import styled, { keyframes } from "styled-components";
import TextTransition, { presets } from "react-text-transition";

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

// 애니메이션이 적용된 스타일 컴포넌트
const AnimatedFirst = styled.div`
  width: 80%;
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-out forwards; // 애니메이션으로 나타남 // 애니메이션으로 나타남
`;
const AnimatedSeconds = styled.div`
  width: 80%;
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-out forwards; // 애니메이션으로 나타남
  animation-delay: 0.6s;
`;
const AnimatedThirds = styled.div`
  width: 40%;
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-out forwards; // 애니메이션으로 나타남
  animation-delay: 0.9s;
`;
const AnimatedFourth = styled.div`
  width: 30%;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out forwards; // 애니메이션으로 나타남
  animation-delay: 1.5s;
`;
const ContentsStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Name = styled.div`
  width: 100%;
  text-align: center;
  font-size: 28px;
  color: black;
  animation: smoothAppear 1s;
`;
const Line = styled.div`
  width: 100%;
  background-color: black;
  padding: 2px;
`;
const Tag = styled.div`
  color: black;
  width: 10 0%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
`;
const GoButton = styled.div`
  width: 100%;
  height: 50px;
  align-items: center;
  display: flex;
  justify-content: center;

  margin-top: 10px;
  transition: 0.5s;
  font-weight: bold;
  border: 3px solid black;
  cursor: pointer;
  border-radius: 3px;
  background: black;
  color: white;
  &:hover {
    background-color: white;
    color: black;

    transition: 0.5s;
  }
`;
const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Right = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PointText = styled.h3`
  color: rgba(22, 73, 184);
`;
const TEXTS = ["Patience", "Passion", "User-centered"];

const HomeContents = ({ setMenuItem }) => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <ContentsStyle>
      <AnimatedFirst>
        <Name>
          <h1>HYEONGMIN &nbsp;&nbsp;KIM</h1>
        </Name>
      </AnimatedFirst>
      <AnimatedSeconds>
        <Line></Line>
      </AnimatedSeconds>
      <AnimatedThirds>
        <Tag>
          <Right>
            <TextTransition springConfig={presets.gentle}>
              <PointText> {TEXTS[index % TEXTS.length]} </PointText>
            </TextTransition>{" "}
          </Right>
          <Left>
            <h3>DEVELOPER</h3>
          </Left>
        </Tag>
      </AnimatedThirds>
      <AnimatedFourth>
        <GoButton onClick={() => setMenuItem("project")}>Go Project</GoButton>
      </AnimatedFourth>
    </ContentsStyle>
  );
};
export default HomeContents;
