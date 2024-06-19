import React from "react";
import LeftContents from "./MainContentsElement/LeftContents";
import RightContents from "./MainContentsElement/RightContents";
import styled from "styled-components";
import PopUp from "./MainContentsElement/PopUp";

const MainContentsStyle = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 1208px) {
    height: 90%;
  }
`;

const MainContents = ({ setMenuToggle, menuToggle, menuItem, setMenuItem }) => {
  return (
    <MainContentsStyle>
      {menuItem === "project" ? null : <LeftContents />}

      <RightContents
        setMenuItem={setMenuItem}
        menuItem={menuItem}
        setMenuToggle={setMenuToggle}
      />
      <PopUp
        setMenuToggle={setMenuToggle}
        menuToggle={menuToggle}
        menuItem={menuItem}
        setMenuItem={setMenuItem}
      />
    </MainContentsStyle>
  );
};
export default MainContents;
