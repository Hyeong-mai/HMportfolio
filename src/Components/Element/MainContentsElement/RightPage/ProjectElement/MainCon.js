import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); };`;

const MainCon = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 1s ease-in-out;
  @media (max-width: 1208px) {
    flex-direction: column;
    height: 100%;
    margin-bottom: 20px;
  }
`;
const AboutFrameWrap = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1208px) {
    width: 45%;
    height: 20%;
  }
`;
const PhoneFrameWrap = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media (max-width: 1208px) {
    width: 55%;
    height: 80%;
  }
`;
const PhoneFrame = styled.div`
  width: 90%;
  border: 3px solid black;
  background-color: black;
  overflow: hidden;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  @media (max-width: 1208px) {
    width: 70%;
    max-width: 240px;
    min-width: 200px;
  }
`;
const AboutFrame = styled.div`
  padding: 20px;
  width: 100%;
  height: 50%;
  display: flex;
  align-items: start;
  flex-direction: column;
  /* gap: 5px; */
  color: black;
  justify-content: start;
`;
const Image = styled.img`
  width: 100%;
`;
const PageTItle = styled.h2`
  margin: 0;
`;
const Description = styled.p`
  font-size: 13px;
  color: #555;
  letter-spacing: 1.5px;
`;
const pageTitle1 = ["Main", "Detail", "Bid", "Chat", "Profile"];
const Description1 = [
  "사용자들이 경매 입찰 등록한 상품들을 볼 수 있습니다.",
  "사용자가 등록한 상품의 상세 정보를 확인할 수 있습니다.",
  "상품 경매에 참여해 입찰할 수 있습니다.",
  "Chat",
  "Profile",
];
const pageTitle2 = ["Main", "Upload", "News", "Map", "Detail"];
const Description2 = [
  "사용자들이 경매 입찰 등록한 상품들을 볼 수 있습니다.",
  "사용자가 등록한 상품의 상세 정보를 확인할 수 있습니다.",
  "상품 경매에 참여해 입찰할 수 있습니다.",
  "Chat",
  "Profile",
];
const pageTitle3 = ["Main", "Product", "Detail", "Receipt"];
const Description3 = [
  "사용자들이 경매 입찰 등록한 상품들을 볼 수 있습니다.",
  "사용자가 등록한 상품의 상세 정보를 확인할 수 있습니다.",
  "상품 경매에 참여해 입찰할 수 있습니다.",
  "Chat",
  "Profile",
];
const MainFrame = ({ index, title }) => {
  console.log(index);
  return (
    <MainCon>
      <PhoneFrameWrap>
        <PhoneFrame>
          <Image src={`image/${title}/image${index}.PNG`} />
        </PhoneFrame>
        {/* <PhoneFrame>
          <Image src={`image/${title}/image${index + 1}.PNG`} />
        </PhoneFrame> */}
      </PhoneFrameWrap>
      <AboutFrameWrap>
        <AboutFrame>
          <PageTItle>
            {title === "project1" && pageTitle1[index - 1]}
            {title === "project2" && pageTitle2[index - 1]}
            {title === "project3" && pageTitle3[index - 1]}
          </PageTItle>
          <Description>
            {title === "project1" && Description1[index - 1]}
            {title === "project2" && Description2[index - 1]}
            {title === "project3" && Description3[index - 1]}
          </Description>
        </AboutFrame>
      </AboutFrameWrap>
    </MainCon>
  );
};

export default MainFrame;
