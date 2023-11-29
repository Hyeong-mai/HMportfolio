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

const Footer = () => {
  return (
    <FooterStyle>
      <h5>Copyright © 2023</h5>
      <LinkIcon />
    </FooterStyle>
  );
};

export default Footer;
