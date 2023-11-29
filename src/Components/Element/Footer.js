import React from "react";
import styled from "styled-components";
import LinkIcon from "./FooterElement/LinkIcon";

const FooterStyle = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1208px) {
    display: none;
  }
`;
const Copyright = styled.h5`
  text-align: left;
`;
const Footer = () => {
  return (
    <FooterStyle>
      <Copyright>
        Copyright © H/M
        <br />
        All Rights Reserved.
      </Copyright>

      <LinkIcon />
    </FooterStyle>
  );
};

export default Footer;
