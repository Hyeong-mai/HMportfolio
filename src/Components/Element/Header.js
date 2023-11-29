import React from "react";
import styled from "styled-components";
import Logo from "./HeaderElement/Logo";
import Menu from "./HeaderElement/Menu";
import { Squash as Hamburger } from "hamburger-react";

const HeaderStyle = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MenuButton = styled.button`
  display: none;
  @media (max-width: 1208px) {
    display: block; // 화면 크기가 768px 이하일 때 버튼 표시
    background-color: white;
    border: none;
  }
`;
const MenuWrap = styled.div`
  width: 40%;
  @media (max-width: 1208px) {
    display: none;
  }
`;
const Header = ({ menuToggle, setMenuToggle, menuItem, setMenuItem }) => {
  return (
    <HeaderStyle>
      <Logo />
      <MenuWrap>
        <Menu menuItem={menuItem} setMenuItem={setMenuItem} />
      </MenuWrap>
      <MenuButton>
        <Hamburger toggled={menuToggle} toggle={setMenuToggle} />
      </MenuButton>
    </HeaderStyle>
  );
};

export default Header;
