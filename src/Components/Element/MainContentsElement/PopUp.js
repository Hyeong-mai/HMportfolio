import React from "react";
import styled from "styled-components";
import Menu from "../HeaderElement/Menu";
import LinkIcon from "../FooterElement/LinkIcon";

const PopupMenu = styled.div`
  width: 100%;
  height: 90%;
  overflow: hidden;
  bottom: 0;
  right: 0;
  position: absolute;
  display: none;
  align-items: center;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: ${(props) => (props.show ? 1 : 0)};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  @media (max-width: 1208px) {
    display: flex;
  }
`;
const MenuPup = styled.div`
  width: 50%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  transform: translateX(${(props) => (props.show ? 0 : 100)}%);
  transition: transform 0.5s ease-out;
`;
const MenuSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;
const Copyright = styled.h5`
  text-align: center;
`;
const PopUp = ({ menuToggle, menuItem, setMenuItem }) => {
  return (
    <PopupMenu show={menuToggle}>
      <MenuPup show={menuToggle}>
        <MenuSec>
          <Menu menuItem={menuItem} setMenuItem={setMenuItem} />
          <LinkIcon />
          <Copyright>
            Copyright © H/M <br />
            All Rights Reserved.
          </Copyright>
        </MenuSec>
      </MenuPup>
    </PopupMenu>
  );
};

export default PopUp;
