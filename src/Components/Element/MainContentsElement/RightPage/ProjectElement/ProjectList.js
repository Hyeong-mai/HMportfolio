import { useState } from "react";
import styled, { keyframes } from "styled-components";
import AboutProject from "./AboutProject";
import MainFrame from "./MainCon";

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
const ProjectList = styled.div`
  width: 100%;
  height: 90%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1208px) {
    flex-direction: column;
    justify-content: start;
  }
`;
const ScrollArea = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1s ease-in-out;
  @media (max-width: 1208px) {
    width: 100%;
    height: 50%;
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const MiniSlide = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const MiniPhoneFrame = styled.div`
  width: 6%;
  height: 70%;
  min-width: 50px;
  border: 2px solid ${(props) => (props.isActive ? "black" : "gray")};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 15px;
  transition: transform 0.5s, width 0.5s, height 0.5s;
  cursor: pointer;
  position: relative;

  &:hover {
    border: 2px solid black;
    transform: scale(1.3) translateY(-13%);
    z-index: 10;
  }
  @media (max-width: 1208px) {
    width: 20%;
    max-width: 60px;
  }
  @media (max-width: 400px) {
    width: 15%;
    max-width: 60px;
  }
`;
const MiniImage = styled.img`
  width: 100%;
`;
const ProjectContainer = ({ title }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleMiniPhoneClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // 클릭된 인덱스와 activeIndex를 비교하여 toggle
  };
  return (
    <ProjectList>
      <AboutProject title={title} />
      <ScrollArea>
        {/* 조건부 렌더링을 통해 선택된 MiniPhoneFrame에 해당하는 MainFrame을 보여줍니다 */}
        {activeIndex === 1 && <MainFrame index={1} title={title} />}
        {activeIndex === 2 && <MainFrame index={2} title={title} />}
        {activeIndex === 3 && <MainFrame index={3} title={title} />}
        {activeIndex === 4 && <MainFrame index={4} title={title} />}
        {title === "project3"
          ? null
          : activeIndex === 5 && <MainFrame index={5} title={title} />}

        <Wrap>
          <MiniSlide>
            {[1, 2, 3, 4, 5].map((index) =>
              index === 5 && title === "project3" ? null : (
                <MiniPhoneFrame
                  key={index}
                  isActive={activeIndex === index} // 선택된 상태일 때만 isActive prop을 true로 설정
                  onClick={() => {
                    if (activeIndex !== index) {
                      handleMiniPhoneClick(index);
                    }
                  }}
                >
                  <MiniImage src={`image/${title}/image${index}.PNG`} />
                </MiniPhoneFrame>
              )
            )}
          </MiniSlide>
        </Wrap>
      </ScrollArea>
    </ProjectList>
  );
};
export default ProjectContainer;
