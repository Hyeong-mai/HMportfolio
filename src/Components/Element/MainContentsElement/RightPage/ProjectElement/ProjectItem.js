import React from "react";
import styled, { keyframes } from "styled-components";
import { ChevronForwardOutline } from "react-ionicons";

const bounceAnimation = keyframes`
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(5px); } // 오른쪽으로 약간 이동
`;

const ArrowIcon = styled.span`
  display: inline-block;
  margin-left: 5px;
  animation: ${bounceAnimation} 1s ease-in-out infinite; // 바운스 애니메이션 적용
`;

const Item = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 45%;
  height: 90%;
  background-color: blue;
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 2px 2px 10px 2px gray;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.3s ease;
    border-radius: 20px;
  }

  &:hover::after {
    background-color: rgba(0, 0, 0, 0.7);
  }
  @media (max-width: 598px) {
    width: 90%;
    height: 100%;
    margin-bottom: 50px;
  }
`;
const Title = styled.button`
  height: 40%;
  border: none;
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  bottom: -50px; // 초기 위치를 바닥에서 약간 위로 설정
  left: 50%; // 가운데 정렬을 위해 left를 50%로 설정
  transform: translateX(-50%) translateY(0); // 좌우 중앙 정렬 및 초기 Y 위치 설정
  width: 80%; // 제목의 너비를 줄임
  text-align: center;
  background-color: rgba(3, 3, 3, 0.7);
  border-radius: 20px;
  cursor: pointer;
  color: white;
  transition: transform 0.3s ease, display 0s ease 0.3s;
  transition: transform 0.3s ease, height 0.3s ease;
  ${Item}:hover & {
    background-color: rgba(3, 3, 3, 0.7);
    height: 80%;
    transform: translateX(-50%) translateY(-80px); // hover 시 위로 이동
    opacity: 1; // Add opacity transition effectover 시 위로 이동
  }
`;
const Subtitle = styled.p`
  color: gray;
  font-size: 12px;
  text-align: center;
  transition: 0.3s;
  @media (max-width: 720px) {
    font-size: 16px;
  }
  ${Title}:hover & {
    color: gray; // hover 시 위로 이동
  }
`;
const TextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
const ProjectItem = ({ imgSrc, title, link, url }) => {
  const handleButtonClick = () => {
    window.open(link, "_blank");
  };

  return (
    <Item imgSrc={imgSrc}>
      <Title onClick={handleButtonClick}>
        <h2>{title}</h2>
        <TextWrap>
          <Subtitle>Notion으로 자세히보기</Subtitle>
          <ArrowIcon>
            <ChevronForwardOutline color={"gray"} height="25px" width="25px" />
          </ArrowIcon>
        </TextWrap>
      </Title>
    </Item>
  );
};

export default ProjectItem;
