import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

const SmallTitle = styled.h5`
  margin: 0;
`;

const ContentsHeader = ({ title }) => {
  return (
    <HeaderContainer>
      <SmallTitle>{title}</SmallTitle>
    </HeaderContainer>
  );
};

export default ContentsHeader;
