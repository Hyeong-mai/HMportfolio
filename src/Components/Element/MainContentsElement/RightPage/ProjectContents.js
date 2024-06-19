import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import ProjectContainer from "./ProjectElement/ProjectList";

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
  justify-content: center;
  align-items: center;
  overflow: scroll;
  animation: ${fadeIn} 1s ease-in-out;
  @media (max-width: 1208px) {
    align-items: unset;
  }
`;

const ProjectSection = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;

  justify-content: center;
  @media (max-width: 1208px) {
    height: 180%;
  }
`;

const ProjectMenu = styled.button`
  background-color: rgba(237, 237, 237);
  padding: 20px;
  height: 100%;
  border-style: none;
  font-size: ${(props) => (props.isActive ? "18px" : "14px")};
  color: ${(props) => (props.isActive ? "black" : "gray")};

  transition: 0.5s;
  cursor: pointer;

  &:hover {
    font-size: 18px;
    transition: 0.5s;
    color: black;
  }
  @media (max-width: 1208px) {
    padding: 10px;
  }
`;

const MenuBar = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  position: relative;
  @media (max-width: 1208px) {
    height: 5%;
  }
`;

const UnderLine = styled.div`
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: black;
  z-index: -1;
`;

const ProjectContents = () => {
  const [menuItem, setMenuItem] = useState("project1");

  const handleMenuItemClick = (item) => {
    setMenuItem(item); // 선택된 메뉴 아이템 설정
  };

  return (
    <ContentsStyle>
      <ProjectSection>
        <MenuBar>
          <UnderLine />
          <ProjectMenu
            onClick={() => handleMenuItemClick("project1")}
            isActive={menuItem === "project1"}
          >
            Project 1
          </ProjectMenu>
          <ProjectMenu
            onClick={() => handleMenuItemClick("project2")}
            isActive={menuItem === "project2"}
          >
            Project 2
          </ProjectMenu>
          <ProjectMenu
            onClick={() => handleMenuItemClick("project3")}
            isActive={menuItem === "project3"}
          >
            Project 3
          </ProjectMenu>
          <ProjectMenu
            onClick={() => handleMenuItemClick("project4")}
            isActive={menuItem === "project4"}
          >
            Project 4
          </ProjectMenu>
        </MenuBar>
        {menuItem === "project1" && <ProjectContainer title={"project1"} />}
        {menuItem === "project2" && <ProjectContainer title={"project2"} />}
        {menuItem === "project3" && <ProjectContainer title={"project3"} />}
        {menuItem === "project4" && <ProjectContainer title={"project4"} />}
      </ProjectSection>
    </ContentsStyle>
  );
};

export default ProjectContents;
