import React from "react";
import styled from "styled-components";
import ContentsHeader from "./AboutComponents/ContentsHeader";

const InterviewLayout = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1160px) {
    height: 40%;
  }
`;

const InterviewCon = styled.div`
  width: 90%;
  border-radius: 30px;
  padding: 20px;
  background-color: #373737;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-direction: column;
`;

const BoldTitle = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 430px) {
    font-size: 16px;
  }
`;

const BoldText = styled.p`
  font-weight: bold;
  background-color: orange; /* 배경색 설정 */
  padding: 3px 3px; /* 여백 추가 */
  margin: 0px 5px;
  border-radius: 5px; /* 모서리 둥글게 */
  display: inline; /* 너비가 컨텐츠에 맞게 조절되도록 설정 */
`;

const SmallText = styled.p`
  margin: 0;
  gap: 10px; /* 문장 간격 설정 */
  font-size: 16px;
  font-weight: 300;
  line-height: 1.7; /* 줄 간격 설정 */
  width: 100%;
  @media (max-width: 430px) {
    font-size: 14px;
  }
`;

const AboutInterview = () => {
  return (
    <InterviewLayout>
      <ContentsHeader title={"InterView"} />
      <InterviewCon>
        <BoldTitle>
          Q. 프론트엔드 개발자로서 목표를 세우게 된 계기나 동기는 무엇인가요?
        </BoldTitle>
        <SmallText>
          웹 퍼블리싱을 공부하며 사용자 중심 디자인, 협업, 프론트엔드 기초
          지식을 쌓았습니다. <BoldText>사용자와의 소통</BoldText>에 대해
          중요성을 인지하고, 더 밀접하게 상호작용 가능한 프로젝트를 개발하고자
          프론트엔드 개발자로 목표를 정하게 되었습니다. Next, React,
          React-native, Styled Components 등 다양한 프레임워크와 라이브러리를
          공부하며 <BoldText>끊임없이 도전</BoldText>하고 있습니다.
        </SmallText>
      </InterviewCon>
      <InterviewCon>
        <BoldTitle>
          Q. 개발자로서의 목표는 무엇이며, 이를 위해 어떻게 노력하고 있나요?
        </BoldTitle>
        <SmallText>
          저는 항상 사용자가 만족할 수 있는 경험을 제공하기 위해 노력했습니다.
          사용자 경험을 개선하기 위한 욕구가 새로운 개발 지식을 쌓는 원동력이
          되었고, 이를 통해 더 나은 서비스를 제공하고자 하는 목표를 갖게
          되었습니다.<BoldText>"와, 이런 기능도 있네"</BoldText>라는 감동을 직접
          기획하고 개발하여 더 많은 사용자들에게 전달하고 싶습니다.
        </SmallText>
      </InterviewCon>
      <InterviewCon>
        <BoldTitle>Q. 자기계발을 위해 어떤 것들을 해왔는지?</BoldTitle>
        <SmallText>
          "처음이니 당연히 어려운 것이다 언제든지 물어보고 소통해 나가면
          발전하는 개발자가 될 수 있다" 라는 마인드로, 각종 매체를 통해 독학하며
          부족한 부분은 현업자에게 <BoldText>끈질기게</BoldText> 질문해왔습니다.
          이를 통해 다양한 프로젝트에 <BoldText>도전하며</BoldText>도전하며
          지속적으로 성장해왔습니다."
        </SmallText>
      </InterviewCon>
    </InterviewLayout>
  );
};

export default AboutInterview;
