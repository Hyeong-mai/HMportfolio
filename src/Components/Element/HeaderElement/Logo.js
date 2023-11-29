import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoStyle = styled.a`
  text-decoration: none;
  color: black;
`;

const Logo = () => {
  return (
    <LogoStyle href="/">
      <h1>H/M</h1>
    </LogoStyle>
  );
};

export default Logo;
