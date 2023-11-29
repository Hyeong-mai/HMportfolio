import React from "react";
import styled from "styled-components";

const TitleStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  font-size: 21px;
  letter-spacing: 3px;
  color: black;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
  margin-left: 30px;
`;

const Title = (props) => {
  return (
    <TitleStyle>
      <h4>{props.text}</h4>
      <Line />
    </TitleStyle>
  );
};
export default Title;
