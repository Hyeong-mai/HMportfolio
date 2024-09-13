import React, { useState } from "react";
import { ChevronForward, Close } from "react-ionicons";
import styled from "styled-components";

const AboutUserLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1160px) {
    height: 30%;
  }
`;
const UserIcon = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 400px;
  background-image: url("/image/IMG_3521.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const UserTag = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-self: start;
  justify-content: center;
  gap: 30px;
`;
const Tag = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

const UserWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MeButton = styled.button`
  margin-top: 20px;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: white;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-5px);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ButtonTitle = styled.p`
  font-size: 13px;
  font-weight: bold;
`;

// 모달 배경
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: scroll;
  z-index: 1000;
`;

// 모달 창
const ModalContent = styled.div`
  padding: 30px;
  width: 60%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 100px;
  @media (max-width: 880px) {
    width: 90%;
  }
`;

const ModalHeader = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  background: #333;
  border: none;
  display: flex;
  font-size: 25px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 0;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

const ModalBody = styled.div`
  padding: 20px 0;
  font-size: 1em;
  line-height: 1.6;
`;

const SectionTitle = styled.h1`
  font-size: 35px;
  margin-bottom: 20px;
  font-weight: bold;
  @media (max-width: 880px) {
    font-size: 25px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
  font-size: 18px;
  @media (max-width: 880px) {
    font-size: 16px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const AboutUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AboutUserLayout>
      <UserWrap>
        <UserIcon></UserIcon>
        <UserTag>
          <Tag>#끊임없는_배움</Tag>
          <Tag>#도전</Tag>
          <Tag>#끈기</Tag>
          <Tag>#겸손함</Tag>
        </UserTag>
      </UserWrap>
      <MeButton onClick={handleOpenModal}>
        <ButtonTitle>자기소개서 보기</ButtonTitle>
        <ChevronForward />
      </MeButton>

      {/* 모달 */}
      {isModalOpen && (
        <ModalBackground>
          <ModalHeader>
            <CloseButton onClick={handleCloseModal}>
              <Close color={"white"} />
            </CloseButton>
          </ModalHeader>
          <ModalContent>
            <ModalBody>
              <SectionTitle>와, 이런 기능도 있네</SectionTitle>
              <Paragraph>
                저는 항상 사용자가 만족할 수 있는 경험을 제공하기 위해 노력했습니다. 사용자 경험을 개선하기 위한 욕구가 새로운 개발 지식을 쌓는 원동력이 되었고, 이를 통해 더 나은 서비스를 제공하고자 하는 목표를 갖게 되었습니다. "와, 이런 기능도 있네"라는 감동을 직접 기획하고 개발하여 더 많은 사용자들에게 전달하고 싶습니다.
                <br />
                입사하게되면 저는 기술 역량 강화에 힘쓸 것입니다. 프론트엔드 개발을 넘어 데이터베이스와 서버에 대한 지식을 쌓아 전체적인 개발 과정을 이해하고, 필요한 경우 백엔드 개발에도 참여할 수 있는 능력을 키울 것입니다. 이를 통해 최신 기술과 트렌드를 지속적으로 학습하고, 프로젝트에 적용하여 플랫폼의 성능과 사용자 경험을 향상시키겠습니다.
                <br />
                혁신적인 기능 개발에도 적극 참여할 것입니다. 사용자 맞춤형 서비스, 예를 들어 개인화된 추천 시스템이나 사용자 행동 분석을 통한 맞춤형 서비스 제공 등 사용자에게 더 큰 만족을 줄 수 있는 기능을 개발하겠습니다.
                <br />
                마지막으로, 최고의 서비스는 최고의 팀원들과 함께했을 때 나온다고 생각합니다. 팀원들과의 팀워크를 다지며 서로 지식을 공유하고 공부하여 기업을 한 단계 업그레이드하는 데 기여하고 싶습니다.
              </Paragraph>

              <SectionTitle>
                프로젝트 경험을 통한 프론트엔드 개발 역량 강화
              </SectionTitle>
              <Paragraph>
                군 복무 중에도 개발에 대한 열정을 잃지 않고 React 및 React
                Native를 학습하며 앱 개발에 도전했습니다. 복무 후에도 꾸준히
                Next.js, Firebase, Tailwind CSS 등 최신 기술을 익히고 이를
                프로젝트에 적용하면서 성장했습니다.
                <br /> 첫 번째 프로젝트는 Next.js 프레임워크를 활용한 어게인
                마켓 애플리케이션 개발이었습니다. 서버리스 데이터베이스인
                Prisma를 사용하여 애플리케이션의 안정성과 속도를 개선했고,
                Tailwind CSS를 적용해 다양한 기기에서 일관된 사용자 경험을
                제공할 수 있는 반응형 디자인을 구현했습니다. 또한, Next.js의
                서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG) 기능을 통해
                페이지 로딩 시간을 단축하고, 검색 엔진 최적화(SEO)를 통해 더
                많은 사용자가 쉽게 접근할 수 있도록 했습니다. TypeScript를
                도입해 코드의 안정성과 유지보수성을 확보함으로써 사용자들이
                불편함 없이 서비스를 이용할 수 있도록 했습니다.
                <br /> 두 번째 프로젝트는 사용자의 위치 기반 맛집 추천
                애플리케이션이었습니다. Google Maps API를 활용해 사용자가 현재
                위치에서 가까운 맛집을 직관적으로 확인할 수 있도록 하여 사용자
                인터페이스(UI)를 최적화했습니다. 프로젝트 중간에는 실시간 데이터
                처리와 관련된 문제에 직면했으나, fragments와 cache 업데이트를
                통해 전체 query를 refetch하지 않으면서도 빠르고 원활한 사용자
                경험을 제공할 수 있었습니다. 이로 인해 데이터베이스의 부하를
                줄이면서 사용자에게 더욱 신속한 피드백을 제공할 수 있었습니다.
                <br />세 번째 프로젝트로는 카페 스마트 오더 애플리케이션을
                개발했습니다. Firebase를 사용해 데이터베이스 구축의 복잡성을
                줄였고, 실시간 데이터 관리 기능을 통해 사용자에게 더욱 빠르고
                정확한 주문 경험을 제공했습니다. 또한, React Hook을 사용해
                컴포넌트 간의 상태 관리를 효율적으로 처리하며 코드의 재사용성과
                간편함을 높였습니다. Styled-components를 활용하여 코드의 중복을
                줄이고 일관된 디자인 시스템을 구축함으로써 UI의 일관성과
                유지보수성을 확보했습니다.
                <br /> 이러한 프로젝트들을 통해 저는 단순히 기능을 구현하는 데
                그치지 않고, 사용자 경험(UX)을 최적화하는 것이 얼마나 중요한지
                깨달았습니다. 성능, 반응성, 안정성을 높이는 기술적 해결책을
                고민하고 이를 실현하는 과정에서, 사용자의 입장에서 문제를
                해결하는 개발자로서 성장할 수 있었습니다.
                <br /> 저는 앞으로도 사용자 중심의 애플리케이션을 개발하기 위해
                최신 기술을 지속적으로 학습하고, 더 나은 사용자 경험을 제공하는
                데 집중할 것입니다. 현재 저는 새로운 기술 트렌드를 빠르게
                학습하고 적용하기 위해 주기적으로 기술 블로그와 커뮤니티를
                탐색하고 있으며, 특히 Next.js와 React의 최신 기능에 대한 실습
                프로젝트를 통해 이해도를 높이고 있습니다. 또한 사용자 경험을
                개선하기 위해 A/B 테스트와 사용자 피드백 분석을 학습 중이며,
                이를 프로젝트에 도입해 UI/UX 최적화를 실현하고자 노력하고
                있습니다. <br />
                이처럼 기술적인 어려움 앞에서 포기하지 않고 문제를 해결하는
                끈기를 바탕으로, 최신 기술을 프로젝트에 적극적으로 적용해 더
                빠르고 직관적인 서비스를 만들기 위해 끊임없이 도전할 것입니다.
                이를 통해 사용자에게 혁신적이고 만족스러운 경험을 제공하는
                개발자로 지속적으로 성장해 나가겠습니다.
              </Paragraph>

              <SectionTitle>
                계획과 소통을 바탕으로 어려운 상황을 극복한 경험
              </SectionTitle>
              <Paragraph>
                KOSTA에서 중고 경매 사이트 개발 프로젝트를 진행하던 중, 촉박한
                일정 속에서 새로운 기능 추가 요청이 발생했습니다. 단순히
                끈기만으로는 해결이 어려운 상황이었고, 저는 철저한 계획 수립과
                팀원 간의 소통이 필요하다는 것을 인식했습니다. <br />
                우선, 팀원들과 함께 프로젝트 계획을 재정비하고 기능 우선순위를
                설정했습니다. 각자의 역할을 명확히 분배하고, 매일 작업 진행
                상황을 체크하며 일정을 효율적으로 관리했습니다. 이 과정에서
                서로의 작업 상태를 지속적으로 공유하고 피드백을 주고받는 체계를
                도입하여 작업의 효율성을 높였습니다. <br />
                또한, 팀원 간 소통이 원활하지 않던 상황에서 제가 먼저 다가가
                각자의 의견을 경청하고 조율하며, 팀 내 커뮤니케이션을
                개선했습니다. 주기적인 회의와 피드백 세션을 통해 서로의 진행
                상황을 공유하며 팀워크를 강화했습니다. 그 결과, 추가된 기능과
                함께 프로젝트를 성공적으로 마무리할 수 있었습니다.
                <br /> 이 경험을 통해 저는 철저한 계획 수립과 원활한 소통이
                어려운 상황을 극복하고 목표를 달성하는 데 중요한 요소임을 깨닫게
                되었습니다. 이를 바탕으로 다양한 도전에도 효과적으로 대응할 수
                있는 자신감을 얻게 되었습니다.
              </Paragraph>

              <SectionTitle>성격의 장단점</SectionTitle>
              <Paragraph>
                저의 장점은 사람을 어려워하지 않고 팀 분위기를 화목하게 만드는
                점과 계획적인 성격이라고 생각합니다. 개발자는 회사에서 개발
                업무를 담당하는 것으로 끝날 수도 있습니다. 그러나 회사는
                개인들이 모여 하나의 공동체가 된 공간이기 때문에 무엇보다도
                소통이 개발의 완성도와 분위기 증진에 중요한 덕목입니다. 다양한
                프로젝트를 진행 하며 팀원들과 업무적인 부분에서 많은 소통을
                하려고 노력했습니다. 저의 팀의 경우 처음엔 소통이 부족한
                팀이었으나 제가 먼저 팀원들이 잘 적응할 수 있도록 도와주었고,
                마지막에는 가장 화목한 팀으로 뽑혔습니다. 또 저는 계획적인
                성향이 강한 사람입니다. 앞선 프로젝트들을 진행할 때도 업무를
                계획적으로 처리하여 짧은 시간에 일을 효율적으로 진행할 수
                있었습니다. <br />
                저는 처음 맞닥뜨리는 것들은 어려울 거라고 단정 짓고 부정적으로
                생각하는 단점이 있습니다. 어떠한 지식도 없으니 당연히 해내지
                못할 것이라는 두려움으로 인해 소극적으로 시작합니다. 하지만
                KOSTA에서의 프로젝트에서 발전하려는 자세를 배웠습니다. 혼자
                난관에 봉착하고 시행착오를 겪고 있을 때 한 팀원이 "처음이니
                당연히 어려운 것이니 언제든지 물어보고 소통해 나가면 발전하는
                개발자가 될 수 있다"는 말씀에 단점을 보완해 내며 성장하는
                개발자가 될 수 있었습니다.
              </Paragraph>
            </ModalBody>
          </ModalContent>
        </ModalBackground>
      )}
    </AboutUserLayout>
  );
};

export default AboutUser;
