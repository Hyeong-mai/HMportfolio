import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import ProjectEducation from "./ProjectElement/ProjectEducation";
import ProjectCard from "./ProjectElement/ProjectComponents/ProjectCard";
import ProjectMenu from "./ProjectElement/ProjectComponents/ProjectMenu";
import SelectModal from "./ProjectElement/ProjectComponents/SelectModal";

// 프로젝트 리스트 레이아웃
const ProjectListLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

// 헤더 및 메뉴 설정
const ProjectListHeader = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 1160px) {
    height: 10%;
  }
`;

// 그리드 설정 (3개의 열)
const ProjectListGrid = styled.div`
  width: 100%;
  height: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 3개의 열 */
  align-items: flex-start;
  justify-items: flex-start;
  grid-auto-rows: 300px; // 고정된 높이
  gap: 20px;
  @media (max-width: 1160px) {
    grid-template-columns: repeat(2, 1fr); /* 3개의 열 */
    height: 90%;
  }
  @media (max-width: 1050px) {
    grid-template-columns: repeat(1, 1fr); /* 3개의 열 */
  }
  @media (max-width: 880px) {
    align-items: flex-start;
    justify-items: center;
  }
`;

// 상위 레이아웃
const ProjectLayout = styled.div`
  height: 350vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 3em;
  background-color: #232323;
  color: white;
  overflow: visible;
  position: relative;
  @media (max-width: 880px) {
    flex-direction: column;
  }
  @media (max-width: 430px) {
    height: 450vh;
  }
`;

// 메뉴 바
const MenuBar = styled.div`
  position: sticky;
  top: 0; /* 꼭 필요한 설정 */
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #232323;
  width: 25%;
  height: 100vh;
  z-index: 10; /* 다른 요소에 의해 가려지지 않도록 설정 */
  @media (max-width: 1160px) {
    width: 20%;
  }
  @media (max-width: 880px) {
    flex-direction: row;
    width: 100%;
    height: 5%;
  }
`;

// 콘텐츠 영역
const ContentArea = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  @media (max-width: 880px) {
    width: 100%;
  }
`;

// 콘텐츠 아이템
const ContentItem = styled.div`
  background-color: ${(props) => props.bgColor};
  height: ${(props) => (props.isSecond ? "200vh" : "150vh")};
  font-size: 1.5em;
  color: white;
  animation: ${(props) => (props.visible ? fadeIn : fadeOut)} 1s forwards;
  @media (max-width: 430px) {
    height: ${(props) => (props.isSecond ? "250vh" : "200vh")};
  }
`;

// 페이드 인 애니메이션
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 페이드 아웃 애니메이션
const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`;

// 메뉴 래퍼
const MenuWrap = styled.div`
  width: 80%;
  padding-top: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  & > div {
    font-size: 1.3em;
    font-weight: bold;
    cursor: pointer;
    color: #373737;
    transition: color 0.3s ease;
    @media (max-width: 1160px) {
      font-size: 1em;
    }
    @media (max-width: 880px) {
      font-size: 0.5em;
      font-weight: bold;
    }
    &.active {
      color: orange;
    }

    &:hover {
      color: white;
    }
  }
  @media (max-width: 880px) {
    flex-direction: row;
    width: 100%;
    padding-top: 0px;
    justify-content: flex-start;
    gap: 20px;
    padding: 10px 50px;
  }
`;
const Project = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeMenu, setActiveMenu] = useState("all");

  // 각각의 섹션을 참조하기 위한 ref
  const sectionRefs = useRef([]);

  const projects = [
    {
      id: 1,
      coverImage: "/image/project1/Project1Cover.png",
      githubLink: "https://github.com/Hyeong-mai/again-store",
      link: "https://again-shop-git-main-hyeongmins-projects-ca960665.vercel.app/home",
      mainColor: "#37475E",
      name: "Again Market",
      type: "single",
      tag: ["솔로", "Next", "클론코딩"],
      date: "2024년 6월 10일 → 2024년 6월 17일",
      description:
        "Next.js의 장점을 최대한 활용하여 kosta에서 진행한 프로젝트를 토대로 만든 풀스택 웹 애플리케이션을 제작.",
      subDescription:
        "현재는 완성도 높은 프로젝트를 구현하기 위해 꾸준히 개선하고 있습니다.",
      skills: [
        "중고 상품을 등록하고 경매를 진행할 수 있는 기능 구현",
        "실시간 입찰 시스템으로 사용자 간 경쟁 유도",
        "사용자간 채팅 기능 제공",
        "사용자 프로필 및 거래 내역 관리 시스템 구축",
      ],
      language: [
        {
          name: "Next.js",
          languageDescription:
            "폴더 구조 기반의 자동 페이지 생성, 유연한 데이터 패칭, 서버리스 함수로 풀스택 기능을 쉽게 구현할 수 있습니다..",
        },
        {
          name: "TypeScript",
          languageDescription:
            "TypeScript는 정적 타입을 지원하는 JavaScript 슈퍼셋 언어로, 코드를 실행하기 전 오류를 잡아 줄 수 있습니다.",
        },
        {
          name: "Tailwind",
          languageDescription:
            "Tailwind CSS는 유틸리티 클래스와 설정 파일을 통해 빠르고 일관된 스타일링과 손쉬운 디자인 시스템 커스터마이징을 지원합니다.",
        },
        {
          name: "Prisma",
          languageDescription:
            "Prisma는 직관적인 스키마 정의와 쿼리 작성, TypeScript 통합을 통한 타입 안정성, 그리고 쉬운 데이터베이스 마이그레이션 관리를 지원합니다.",
        },
      ],
      contribution: [
        {
          contributionTitle: "Supabase를 활용한 실시간 채팅 기능",
          contributionLi: [
            {
              title: "실시간 메시지 전송 및 수신",
              ex: [
                "Supabase의 실시간 채널을 활용하여 사용자들이 실시간으로 메시지를 주고받을 수 있도록 구현. on('broadcast', { event: 'message' }, ...) 메서드를 통해 새로운 메시지를 수신하여 즉시 상태에 반영.",
              ],
            },
            {
              title: "자동 스크롤 기능",
              ex: [
                "새로운 메시지가 도착할 때마다 scrollToBottom()을 호출하여 채팅창이 자동으로 최신 메시지를 보여주는 기능. 이를 통해 사용자 경험을 개선.",
              ],
            },
          ],
        },
        {
          contributionTitle: "Next.js의 미들웨어를 사용한 접근 제어",
          contributionLi: [
            {
              title: "로그인 상태에 따른 페이지 접근 제한",
              ex: [
                "Next.js의 middleware를 활용하여 세션 정보를 확인하고, 로그인하지 않은 사용자가 보호된 페이지에 접근하려고 하면 로그인 페이지로 리디렉션",
              ],
            },
            {
              title: "공개 페이지에 대한 예외 처리",
              ex: [
                "publicOnlyUrls 객체에 정의된 특정 공개 페이지들(/, /login, /create-account 등)에 대해서는 로그인 여부와 상관없이 누구나 접근할 수 있도록 설정. 로그인 여부를 확인하지 않고 바로 접근이 허용",
              ],
            },
          ],
        },
        {
          contributionTitle: "경매 낙찰 기능",
          contributionLi: [
            {
              title: "제품 판매 완료 처리",
              ex: [
                "특정 제품의 productId를 기반으로, 해당 제품의 가장 최근 입찰 기록을 조회하고, 입찰 기록이 있는 경우 제품의 상태를 '판매 완료'로 업데이트합니다.",
                "db.product.update를 사용하여 제품의 sell 필드를 true로 설정함으로써 판매 완료 상태로 표시합니다.",
              ],
            },
            {
              title: "판매 완료 내역 저장",
              ex: [
                "판매된 제품의 내역을 soldOut 테이블에 기록하여, 최근 입찰자와 판매된 제품을 추적 및 관리.",
              ],
            },
          ],
        },
      ],
      Trouble: [
        {
          TroubleTitle:
            "메시지 추가 시 스크롤이 마지막 메시지로 자동 이동하지 않는 문제 해결",
          TroubleLi: [
            {
              title: "문제점",
              ex: "메시지를 주고받을 때마다 스크롤이 마지막 메시지까지 내려가지 않는 문제를 발견했습니다. 새로운 메시지가 추가되었을 때 scrollToBottom()을 호출해도 스크롤이 제대로 작동하지 않았습니다.",
            },
            {
              title: "해결",
              ex: "문제의 원인은 메시지가 아직 렌더링되기 전에 스크롤을 시도하면서 발생한 것이었습니다. 이를 해결하기 위해 메시지가 실제로 화면에 그려진 후에 스크롤이 작동하도록 수정했습니다. useEffect를 활용해 메시지가 추가될 때마다 스크롤이 정확히 동작하도록 변경했습니다.",
              code: `
useEffect(() => {
  if (messages.length > 0) {
    scrollToBottom();
  }
}, [messages]);
    `,
            },
          ],
        },
        {
          TroubleTitle: "Intersection Observer 성능 최적화: 리렌더링 문제 해결",
          TroubleLi: [
            {
              title: "문제점",
              ex: "리스트 페이지에서 성능이 느려짐을 감지했습니다. Intersection Observer가 useEffect 훅 내에서 의존성 배열 없이 생성되고 있어, 컴포넌트가 리렌더링될 때마다 새로운 observer 인스턴스가 생성되고 있음을 확인했습니다.",
            },
            {
              title: "해결",
              ex: "useEffect의 의존성 배열에 필요한 변수를 추가하고, IntersectionObserver가 실제로 필요할 때만 초기화되도록 수정했습니다. 또한 컴포넌트가 처음 마운트될 때 한 번만 observer를 생성하도록 변경했습니다.",
              code: `
useEffect(() => {
  const observer = new IntersectionObserver(
    async (entries) => {
      const element = entries[0];
      if (element.isIntersecting && trigger.current) {
        // 상품 로딩 로직
      }
    },
    { threshold: 1.0 }
  );

  if (trigger.current) {
    observer.observe(trigger.current);
  }

  return () => observer.disconnect();
}, [trigger, page]); // 의존성 배열 추가

`,
            },
          ],
        },
      ],
      images: [
        { src: "/image/project1/image1.png", title: "Image 1" },
        { src: "/image/project1/image2.png", title: "Image 2" },
        { src: "/image/project1/image3.png", title: "Image 3" },
        { src: "/image/project1/image4.png", title: "Image 4" },
        { src: "/image/project1/image5.png", title: "Image 5" },
      ],
    },
    {
      id: 2,
      name: "먹 DAM map",
      mainColor: "#D19060",
      githubLink: "https://github.com/Hyeong-mai/DAM-MAP",
      coverImage: "/image/project2/Project2Cover.png",
      type: "single",
      tag: ["솔로", "React-Native", "클론코딩"],
      date: "2022년 11월 30일 → 2023년 5월 24일",
      description:
        "주변에 있는 맛있는 식당 및 카페를 이용자들이 직접 추천하고 소통 하는 어플",
      subDescription:
        "푸딘코 앱의 벤치마킹 형태로 Google Maps API를 활용하여 사용자가 현재 위치에서 추천된 맛집을 지도상에서 확인할 수 있는 앱을 개발했습니다 ",
      skills: [
        "Google Maps API를 활용해 장소 표시 및 검색",
        "사용자간 채팅 기능 제공",
        "카메라를 통해 앱내에서 사진 촬열 및 업로드 기능 제공",
        "사용자간의 실시간 채팅 기능 제공",
      ],
      language: [
        {
          name: "React-Native",
          languageDescription:
            "React-Native는 컴포넌트 기반으로 하며, JavaScript를 사용해 iOS와 Android 애플리케이션을 동시에 개발할 수 있는 크로스 플랫폼 프레임워크입니다.",
        },
        {
          name: "Styled Components",
          languageDescription:
            "Styled Components는 JavaScript 코드 내에서 CSS를 작성할 수 있게 해주는 라이브러리입니다. 컴포넌트와 스타일을 함께 정의해 컴포넌트 별로 스타일을 관리하고 재사용할 수 있습니다.",
        },
        {
          name: "Expo",
          languageDescription:
            "React Native 애플리케이션 개발을 간소화하고, 기본 설정 없이 다양한 네이티브 기능을 쉽게 사용할 수 있게 해주는 플랫폼입니다.",
        },
        {
          name: "Prisma",
          languageDescription:
            "Prisma는 직관적인 스키마 정의와 쿼리 작성, TypeScript 통합을 통한 타입 안정성, 그리고 쉬운 데이터베이스 마이그레이션 관리를 지원합니다.",
        },
      ],
      contribution: [
        {
          contributionTitle:
            "실시간 위치 기반 서비스 및 동적 주소 검색 기능 구현",
          contributionLi: [
            {
              title: "실시간 위치 기반 서비스 및 지도 연동",
              ex: [
                "사용자의 현재 위치를 자동으로 감지하고, 그에 따라 지도 상의 마커를 업데이트하는 기능을 제공합니다. 이 기능은 react-native-geolocation-service와 react-native-maps를 사용하여 구현되었으며, 사용자에게 지도에서 자신의 위치를 시각적으로 확인할 수 있는 경험을 제공합니다.",
                "사용자가 검색한 주소를 기반으로 지도를 업데이트하고, 검색된 마커를 지도에 표시하여 사용자가 원하는 위치를 쉽게 찾을 수 있도록 돕습니다.",
              ],
            },
            {
              title: "주소 기반 위치 검색 기능",
              ex: [
                "사용자가 입력한 주소를 기반으로 GPS 좌표(위도 및 경도)를 검색하는 기능을 제공합니다. react-geocode 라이브러리를 사용하여 Google Geocoding API를 통해 주소를 좌표로 변환합니다. 이 기능은 사용자가 특정 장소를 쉽게 찾고, 그 위치를 지도에서 시각화할 수 있도록 도와줍니다.",
                "사용자가 입력한 주소나 키워드를 기반으로 실시간으로 검색하고, 해당 위치에 마커를 표시하는 기능을 제공합니다. 이 과정에서 GraphQL을 사용하여 서버에서 데이터를 가져오고, useLazyQuery를 통해 쿼리를 실행합니다.",
              ],
            },
          ],
        },
        {
          contributionTitle: "사진 촬영 및 업로드 기능",
          contributionLi: [
            {
              title: "사진 촬영 및 미리보기",
              ex: [
                "사용자가 카메라 인터페이스를 통해 사진을 쉽게 촬영할 수 있는 기능을 제공합니다. 사용자는 TakePhotoButton을 눌러 사진을 찍을 수 있으며, 찍은 사진은 즉시 미리보기로 표시됩니다. 이는 Image 컴포넌트를 통해 구현되며, 사용자가 촬영한 사진을 바로 확인할 수 있는 직관적인 사용자 경험을 제공합니다.",
                "또한, 사용자가 사진 촬영 후 `Dismiss` 버튼을 눌러 사진을 취소하거나, `Upload` 버튼을 통해 사진을 업로드할 수 있는 선택권을 제공합니다. 이러한 흐름은 사용자가 편리하게 사진을 관리하고, 필요에 따라 작업을 진행할 수 있도록 돕습니다.",
              ],
            },
            {
              title: "줌 및 플래시 기능 조절",
              ex: [
                "사용자는 슬라이더를 통해 카메라의 줌을 조절할 수 있는 기능을 제공합니다. 이 기능은 사용자가 원하는 만큼 줌을 조절할 수 있도록 하여, 다양한 촬영 조건에서 최적의 구도를 잡을 수 있게 해줍니다.",
                "플래시 모드를 변경할 수 있는 버튼을 통해 사용자는 다양한 조명 상황에서 촬영할 때 유용하게 활용할 수 있습니다. 플래시 모드는 꺼짐, 켜짐, 자동으로 설정할 수 있으며, 각 모드에 맞춰 아이콘이 변경되어 사용자가 현재 상태를 쉽게 파악할 수 있도록 도와줍니다.",
              ],
            },
          ],
        },
      ],
      Trouble: [
        {
          TroubleTitle: "카메라 자동 활성화 문제 해결",
          TroubleLi: [
            {
              title: "문제점",
              ex: "사용자가 카메라 화면으로 전환하자마자 카메라가 자동으로 활성화되었고, 화면을 떠나도 계속 켜져 있는 버그를 발견했습니다",
            },
            {
              title: "해결",
              ex: "useIsFocused를 사용하여 사용자가 카메라 화면에 있을 때만 카메라가 활성화되도록 했습니다.카메라가 사용 중일 때만 활성화되고, 사용자가 해당 화면을 떠나면 자동으로 비활성화되면서 더 나은 사용자 경험을 제공할 수 있었습니다. ",
              code: `
const TakePhoto = ({ navigation }) => {
  const focused = useIsFocused(); // 현재 화면에 포커스 확인
          focused ? ( // 포커스가 있을 때만 카메라 활성화
            <Wrap>
              <Camera
                type={cameraType}
                style={{ flex: 1 }}
                ref={camera}
              >
                {/* 카메라 UI 요소들 */}
              </Camera>
            </Wrap>
          ) : null // 포커스가 없으면 null 반환
};
    `,
            },
          ],
        },
        {
          TroubleTitle: "무한 루프 문제 해결: 지도 마커 업데이트 최적화",
          TroubleLi: [
            {
              title: "문제점",
              ex: "사용자가 지도를 이동할 때마다 마커가 업데이트되면서, markers가 변경되어 useEffect가 다시 실행되고, 이 과정이 반복되어 무한 루프가 발생했습니다.",
            },

            {
              title: "해결",
              ex: "useEffect의 의존성 배열에 markers를 추가한 것이 문제라는 것을 확인했습니다. 이를 수정하여 markers 대신 특정 지역이나 위치 정보를 의존성으로 추가하여 무한 루프를 방지했습니다.",
              code: `문제가 발생하는 코드:
useEffect(() => {
  // 지도 이동 시 마커 업데이트
  setMarkers(newMarkers);
}, [markers]); // 무한 루프 발생!

수정된 코드:
useEffect(() => {
  // 지도 이동 시 마커 업데이트
  setMarkers(newMarkers);
}, [currentLocation]); // 현재 위치만 의존성으로 추가
    `,
            },
            {
              title: "회고",
              ex: "의존성 배열의 역할의 이해를 통해 useEffect 훅이 어떻게 작동하는지, 그리고 어떻게 의존성이 설정되면 다시 호출되는지를 깊이 있게 이해할 수 있었습니다. 또한, 실제로 어떤 변화가 필요할 때마다 코드를 어떻게 수정해야 할지에 대한 실질적인 경험을 쌓았습니다.",
            },
          ],
        },
      ],
      images: [
        { src: "/image/project2/image1.png", title: "Image 1" },
        { src: "/image/project2/image2.png", title: "Image 2" },
        { src: "/image/project2/image3.png", title: "Image 3" },
        { src: "/image/project2/image4.png", title: "Image 4" },
        { src: "/image/project2/image5.png", title: "Image 5" },
      ],
    },
    {
      id: 3,
      name: "카페담 스마트 오더",
      mainColor: "#333",
      githubLink: "https://github.com/Hyeong-mai/CafeDam-native",
      coverImage: "/image/project3/Project3Cover.png",
      type: "single",
      tag: ["솔로", "React-Native"],
      date: "2023년 6월 16일 → 2023년 6월 18일",
      description:
        "스마트 오더 앱 개발: 컴포즈 커피 벤치마킹을 통한 편리한 주문 시스템",
      skills: [
        "4일이라는 짧은 기간내에 구현",
        "주문 회전율 향상을 위한 스마트 오더 시스템",
        "장바구니 기능과 결제 내역 제공으로 고객 편의성 강화",
      ],
      language: [
        {
          name: "React-Native",
          languageDescription:
            "React-Native는 컴포넌트 기반으로 하며, JavaScript를 사용해 iOS와 Android 애플리케이션을 동시에 개발할 수 있는 크로스 플랫폼 프레임워크입니다.",
        },
        {
          name: "Styled Components",
          languageDescription:
            "Styled Components는 JavaScript 코드 내에서 CSS를 작성할 수 있게 해주는 라이브러리입니다. 컴포넌트와 스타일을 함께 정의해 컴포넌트 별로 스타일을 관리하고 재사용할 수 있습니다.",
        },
        {
          name: "Expo",
          languageDescription:
            "React Native 애플리케이션 개발을 간소화하고, 기본 설정 없이 다양한 네이티브 기능을 쉽게 사용할 수 있게 해주는 플랫폼입니다.",
        },
        {
          name: "Firebase",
          languageDescription:
            "Firebase는 실시간 데이터베이스, 인증, 호스팅 등 다양한 백엔드 서비스를 제공하는 클라우드 기반 애플리케이션 개발 플랫폼입니다.",
        },
      ],
      contribution: [
        {
          contributionTitle: "장바구니 및 주문 과정",
          contributionLi: [
            {
              title: "메뉴 항목 필터링 및 표시",
              ex: [
                "사용자가 다양한 카테고리 버튼(커피, 논-커피, 티, 디저트 등)을 클릭하면, 해당 카테고리에 맞는 메뉴 항목을 Firestore에서 가져와 화면에 표시합니다. 이를 통해 사용자는 원하는 메뉴를 쉽게 탐색하고 선택할 수 있습니다.",
              ],
            },

            {
              title: "로그인 유도",
              ex: [
                "사용자가 수량을 입력한 후 바로 주문 또는 장바구니 담기 버튼을 클릭하여 선택한 메뉴를 장바구니에 추가하거나 바로 결제할 수 있습니다. 또한, 사용자가 로그인을 하지 않은 경우 오류 메시지를 표시하여 로그인하도록 유도합니다.",
              ],
            },
          ],
        },
        {
          contributionTitle: "주문 및 수량 선택 기능",
          contributionLi: [
            {
              title: "주문 상세 및 수량 선택",
              ex: [
                "사용자가 메뉴 항목을 선택하면 모달이 열리며, 해당 메뉴의 상세 정보를 보여줍니다. 사용자는 음료를 아이스 또는 핫으로 선택하고 수량을 입력할 수 있습니다. 이를 통해 원하는 음료를 선택할 수 있습니다.",
              ],
            },
            {
              title: "주문 및 결제 기능",
              ex: [
                "사용자가 메뉴 항목을 클릭하면 모달을 통해 선택한 메뉴의 상세 정보를 확인할 수 있으며, 이를 카트에 추가하여 결제할 수 있습니다. 카트에 담긴 항목 수를 시각적으로 표시하여 사용자가 결제 화면으로 쉽게 이동할 수 있도록 도와줍니다.",
              ],
            },
          ],
        },
      ],
      images: [
        { src: "/image/project3/image1.png", title: "Image 1" },
        { src: "/image/project3/image2.png", title: "Image 2" },
        { src: "/image/project3/image3.png", title: "Image 3" },
        { src: "/image/project3/image4.png", title: "Image 4" },
      ],
    },
    {
      id: 4,
      name: "중고 경매 사이트",
      mainColor: "#333",
      type: "team",
      tag: ["팀", "JAVA", "Spring Framework"],
      date: "2017년 11월 27일 → 2017년 12월 20일",
      description: "kobay를 벤치마킹 하여 중고 경매 사이트 개발",
      skills: [
        "6주간 교육 후 최종 프로젝트",
        "API를 활용한 배송 시스템 구축",
        "실시간 경매 기능 구현",
        "판매자와 구매자간 채팅기능 구현",
      ],
      language: [
        {
          name: "JAVA",
          languageDescription:
            "Java는 객체 지향 프로그래밍 언어로, 플랫폼에 독립적이며 강력한 메모리 관리와 풍부한 라이브러리를 제공하여 다양한 애플리케이션 개발에 사용됩니다.",
        },
        {
          name: "JavaScript",
          languageDescription:
            "JavaScript는 웹 페이지의 동적 콘텐츠를 제어하기 위해 사용되는 스크립트 언어로, 클라이언트 및 서버 측에서 실행 가능한 프로토타입 기반 언어입니다.",
        },
        {
          name: "Spring FrameWork",
          languageDescription:
            "Spring Framework는 자바 기반의 오픈 소스 애플리케이션 프레임워크로, 엔터프라이즈 애플리케이션 개발을 간소화하고 다양한 모듈을 제공하여 개발자에게 유연성과 효율성을 제공합니다.",
        },
        {
          name: "SQL Developer",
          languageDescription:
            "SQL Developer는 Oracle에서 제공하는 통합 개발 환경(IDE)으로, SQL 쿼리 작성, 데이터베이스 관리, PL/SQL 개발 등을 편리하게 수행할 수 있도록 도와주는 도구입니다.",
        },
      ],
      contribution: [
        {
          contributionTitle: "실시간 소통 및 안전한 인증 시스템",
          contributionLi: [
            {
              title: "1대 1 채팅 기능",
              ex: [
                "사이트를 이용하는 판매자 와 구매자간의 실시간 소통을 위한 1대 1 채팅 구현",
              ],
            },
            {
              title: "Gmail SMTP 기반 알림 서비스",
              ex: [
                "낙찰, 판매등록, 승인거절, 결제관련 등 사용자에게 제공하는 알림을 G-mail의 SMTP 이용하여 알림 서비스 구현",
              ],
            },
            {
              title: "안전한 본인 인증 시스템",
              ex: [
                "회원가입 시 안전한 본인 인증처리를 위해 Gmail의 SMTP를 이용하여 사용자 인증처리 구현",
              ],
            },
          ],
        },
        {
          contributionTitle: "주소 검색 및 배송 조회 기능",
          contributionLi: [
            {
              title: "도로명 주소 검색",
              ex: ["Juso.go.kr API를 활용 하여 도로명 주소 검색 구현"],
            },
            {
              title: "배송 조회 기능",
              ex: ["운송정보를 입력 받아 검색을 통해 팝업으로 조회 결과 출력"],
            },
          ],
        },
        {
          contributionTitle: "보안 및 스케줄 관리 기능",
          contributionLi: [
            {
              title: "인증 및 권한 관리",
              ex: [
                "Spring Security를 이용하여 인증과 권한을 구현",
                "Spring Security에서 제공하는 BCryptPasswordEncoder를 이용하여 패스워드 암호화",
              ],
            },
            {
              title: "스케줄 관리",
              ex: ["Spring Scheduling를 이용한 스케쥴 관리"],
            },
            {
              title: "트랜잭션 처리",
              ex: [
                "Spring AOP기반의 Transaction 을 이용하여 여러 개의 DML작업을 일괄처리 할 수 있도록 구현",
              ],
            },
          ],
        },
      ],
      Trouble: [
        {
          TroubleTitle: "의견 충돌 및 소통 문제",
          TroubleLi: [
            {
              title: "문제점",
              ex: "팀원들 간의 의견 차이로 인해 개발 방향성에 대한 갈등이 발생했습니다.",
            },
            {
              title: "해결",
              ex: "팀원들과의 정기적인 회의를 통해 서로의 의견을 공유하고, 충돌이 발생했을 때는 중재하여 합의점을 찾았습니다. 또한, 서로의 지식을 공유하는 시간을 가짐으로써 팀워크를 강화했습니다.",
            },
            {
              title: "회고",
              ex: "프로젝트를 성공적으로 마무리하기 위해서는 팀원 간의 원활한 소통이 필수적이라는 것을 깨달았습니다. 의견 차이를 극복하고 조율하는 과정이 팀워크를 더욱 강화하는 데 기여했습니다.",
            },
          ],
        },
        {
          TroubleTitle: "기한 내 기능 구현의 어려움",
          TroubleLi: [
            {
              title: "문제점",
              ex: "프로젝트 막바지에 추가 기능 구현을 맡게 되어 기한 내에 완성하기 어려울 것 같은 압박을 느꼈습니다.",
            },
            {
              title: "해결",
              ex: "팀원들과 함께 문제를 나누고, 역할을 조정하여 효율적으로 작업할 수 있도록 하였습니다. 각자 맡은 부분에 대해 책임감을 가지고 임함으로써 기한 내에 모든 기능을 구현할 수 있었습니다.",
            },
            {
              title: "회고",
              ex: "여러 어려움을 겪으며 협업의 힘과, 절대 포기하지 않는 자세가 중요하다는 것을 배우게 되었습니다. 이를 통해 앞으로의 개발 과정에서도 끈기와 협업을 기반으로 한 문제 해결 능력을 키우게 되었습니다.",
            },
          ],
        },
      ],
    },
  ];

  // 선택된 메뉴에 따라 필터링된 프로젝트 리스트
  const filteredProjects = projects.filter(
    (project) => activeMenu === "all" || project.type === activeMenu
  );

  // 스크롤 이벤트로 섹션 감지
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = document.querySelectorAll(".content-section");

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + rect.height
        ) {
          setVisibleIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 모달 상태 관리
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  // 메뉴 클릭 시 스크롤 이동
  const scrollToSection = (index) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ProjectLayout>
      {/* 왼쪽 고정 메뉴 */}
      <MenuBar>
        <MenuWrap>
          <div
            className={visibleIndex === 0 ? "active" : ""}
            onClick={() => scrollToSection(0)}
          >
            Education
          </div>
          <div
            className={visibleIndex === 1 ? "active" : ""}
            onClick={() => scrollToSection(1)}
          >
            Project
          </div>
        </MenuWrap>
      </MenuBar>

      {/* 오른쪽 콘텐츠 */}
      <ContentArea>
        <ContentItem
          ref={(el) => (sectionRefs.current[0] = el)}
          className="content-section"
          visible={visibleIndex === 0}
        >
          <ProjectEducation />
        </ContentItem>
        <ContentItem
          ref={(el) => (sectionRefs.current[1] = el)}
          isSecond={true}
          className="content-section"
          visible={visibleIndex === 1}
        >
          <ProjectListLayout>
            {/* 메뉴 표시 */}
            <ProjectListHeader>
              <ProjectMenu
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
              />
            </ProjectListHeader>

            {/* 필터링된 프로젝트 리스트 그리드 */}
            <ProjectListGrid>
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => handleProjectClick(project)}
                >
                  {project.name}
                </ProjectCard>
              ))}
            </ProjectListGrid>
          </ProjectListLayout>
        </ContentItem>
      </ContentArea>
      <SelectModal
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
    </ProjectLayout>
  );
};

export default Project;
