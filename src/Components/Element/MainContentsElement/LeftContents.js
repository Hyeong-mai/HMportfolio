import React from "react";
import styled from "styled-components";

const LeftContentsStyle = styled.div`
  width: 45%;
  background-color: black;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100%;
  color: white;
  overflow: hidden;
  @media (max-width: 1208px) {
    width: 0%;
  }
`;
const Image = styled.img`
  width: 110%;
`;

const LeftContents = () => {
  return (
    <LeftContentsStyle>
      <Image src="image/IMG_4652.JPG"></Image>
    </LeftContentsStyle>
  );
};
export default LeftContents;
