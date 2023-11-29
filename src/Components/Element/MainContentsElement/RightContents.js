import React from "react";
import styled from "styled-components";
import AboutContents from "./RightPage/AboutContents";
import HomeContents from "./RightPage/HomeContents";
import ProjectContents from "./RightPage/ProjectContents";

const RightContentsStyle = styled.div`
  width: 55%;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100%;
  color: white;
  background-color: rgba(163, 163, 163, 0.2);
  @media (max-width: 1208px) {
    width: 100%;
  }
`;

const RightContents = ({ menuItem, setMenuItem }) => {
  return (
    <RightContentsStyle>
      {menuItem === "home" ? (
        <HomeContents setMenuItem={setMenuItem} />
      ) : menuItem === "about" ? (
        <AboutContents />
      ) : menuItem === "project" ? (
        <ProjectContents />
      ) : null}
    </RightContentsStyle>
  );
};
export default RightContents;
