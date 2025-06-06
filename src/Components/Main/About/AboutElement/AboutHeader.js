import React from "react";
import styled from "styled-components";

const AboutHeaderLayout = styled.div`
  width: 95%;
  height: 5%;
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  @media (max-width: 430px) {
    font-size: 34px;
  }
`;

const AboutHeader = () => {
  return (
    <AboutHeaderLayout>
      <Title>About me</Title>
    </AboutHeaderLayout>
  );
};

export default AboutHeader;
