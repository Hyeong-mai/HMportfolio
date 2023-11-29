import React from "react";
import styled from "styled-components";

const MenuStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 60%;
  @media (max-width: 1208px) {
    flex-direction: column; // 화면 크기가 768px 이하일 때 Menu 컴포넌트 숨김
    height: 100%;
    justify-content: flex-end;
  }
`;

const MenuItem = styled.button`
  width: 33%;
  height: 100%;
  margin-right: 20px;
  border-style: none;
  background-color: ${(props) => (props.isActive ? "black" : "white")};
  color: ${(props) => (props.isActive ? "white" : "black")};
  transition: 0.5s;
  cursor: pointer;
  @media (max-width: 1208px) {
    margin-right: 0;
    width: 100%;
    height: 33.33333333333333333%;
    font-size: 22px;
  }
  &:hover {
    background: black;
    color: white;
    transition: 0.5s;
  }
`;

const Menu = ({ menuItem, setMenuItem }) => {
  return (
    <MenuStyle>
      <MenuItem
        onClick={() => setMenuItem("home")}
        isActive={menuItem === "home"} // 현재 선택된 메뉴와 비교
      >
        <h4>Home</h4>
      </MenuItem>
      <MenuItem
        onClick={() => setMenuItem("about")}
        isActive={menuItem === "about"} // 현재 선택된 메뉴와 비교
      >
        <h4>About</h4>
      </MenuItem>
      <MenuItem
        onClick={() => setMenuItem("project")}
        isActive={menuItem === "project"} // 현재 선택된 메뉴와 비교
      >
        <h4>Project</h4>
      </MenuItem>
    </MenuStyle>
  );
};

export default Menu;
