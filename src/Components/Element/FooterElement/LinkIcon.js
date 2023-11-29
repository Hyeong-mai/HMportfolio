import React from "react";
import styled from "styled-components";
import { LogoGithub } from "react-ionicons";
const LinkWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: black;
  padding: 20px;
`;
const Github = styled.a`
  text-decoration: none;
  margin-right: 10px;
`;
const Notion = styled.a`
  text-decoration: none;
  color: black;
  margin-right: 10px;
`;
const Nbox = styled.div`
  border: 4px solid black;
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
const Ntitle = styled.h2`
  margin: 0;
`;
const LinkIcon = () => {
  return (
    <LinkWrap>
      <Github href="https://github.com/Hyeong-mai">
        <LogoGithub height="33px" width="33px" />
      </Github>
      <Notion href="https://cute-apogee-96e.notion.site/Let-s-go-13f9b2b16d7b432eb2835a27401226c7?pvs=4">
        <Nbox>
          <Ntitle>N</Ntitle>
        </Nbox>
      </Notion>
    </LinkWrap>
  );
};
export default LinkIcon;
