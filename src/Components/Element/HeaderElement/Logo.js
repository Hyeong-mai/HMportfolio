import React from "react";
import styled from "styled-components";

const LogoStyle = styled.a`
  text-decoration: none;
  color: black;
`;
const Point = styled.a`
  color: rgba(22, 73, 184);
`;
const Logo = () => {
  return (
    <LogoStyle href="/">
      <h1>
        H<Point>/</Point>M
      </h1>
    </LogoStyle>
  );
};

export default Logo;
