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
  grid-template-columns: repeat(3, 1fr); /* 3개의 열 */
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
  height: 200vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 3em;
  background-color: #232323;
  color: white;
  position: relative;
  @media (max-width: 880px) {
    flex-direction: column;
  }
  @media (max-width: 1050px) {
    height: 350vh;
  }
  @media (max-width: 430px) {
    height: 400vh;
  }
`;

// 메뉴 바
const MenuBar = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #232323;
  width: 25%;
  height: 100vh;
  z-index: 10;
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
  height: 100vh;
  font-size: 1.5em;
  color: white;
  animation: ${(props) => (props.visible ? fadeIn : fadeOut)} 1s forwards;
  @media (max-width: 1160px) {
    height: ${(props) => (props.isSecond ? "200vh" : "150vh")};
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
      mainColor: "#37475E",
      name: "우주를 테마로 한 회사 소개 사이트",
      type: "single",
      tag: ["팀", "외주", "반응형", "퍼블리싱"],
      date: "2023.10 - 약 3일 2인 (프론트엔드 2명)",
      description: "우주를 테마로 한 회사 소개 홈페이지입니다.",
      subDescription:
        "디자인 시안을 Figma로 확인하며 제시한 기한 내에 최대한 클라이언트가 요구한 기능을 작업하려고 했습니다.",
      skills: [
        "3일이라는 짧은 기간내에 구현",
        "우주를 컨셉으로한 홈페이지로 이미지 요소가 많음",
        "네비게이션 메뉴 클릭 시 메인 화면에서 특정 위치로 부드럽게 이동",
        "localStorage를 활용해 서브 페이지에서도 네비게이션 메뉴 클릭 시 메인 화면의 특정 위치로 이동",
      ],
      language: [
        {
          name: "React",
          languageDescription:
            "React는 컴포넌트 기반으로 하며, 가상 DOM을 활용해 웹 애플리케이션의 성능을 최적화 합니다. 컴포넌트 재사용성을 높이고, 상태 관리를 용이하게 할 수 있습니다.",
        },
        {
          name: "TypeScript",
          languageDescription:
            "TypeScript는 정적 타입을 지원하는 JavaScript 슈퍼셋 언어로, 코드를 실행하기 전 오류를 잡아 줄 수 있습니다.",
        },
        {
          name: "Styled Components",
          languageDescription:
            "Styled Components는 JavaScript 코드 내에서 CSS를 작성할 수 있게 해주는 라이브러리입니다. 컴포넌트와 스타일을 함께 정의해 컴포넌트 별로 스타일을 관리하고 재사용할 수 있습니다.",
        },
      ],
      contribution: [
        {
          contributionTitle:
            "header navigation - localStorage를 활용한 특정 위치 저장",
          contributionLi: [
            "각 메뉴 클릭 시 메인 화면 특정 영역으로 부드럽게 이동 되도록 useRef를 활용해 구현",
            "서브 페이지에서도 해당 메뉴 클릭 시 메인 페이지 특정 위치로 자동 이동 되도록 상태 관리 라이브러리 없이 localStorage에 위치를 저장하도록 작업",
            "불필요한 저장을 막기 위해 setTimeout 메서드를 활용해 특정 위치에 도달한 후 지정된 시간이 지나면 자동으로 해당 위치 정보를 삭제하도록 조치",
          ],
        },
        {
          contributionTitle:
            "이미지 요소가 많은 페이지에서 이미지 최적화 작업 진행",
          contributionLi: [
            "이미지 요소가 많은 웹 사이트로 일러스트 요소는 디자이너에게 재요청 진행",
            "수정가능한 이미지는 확장자를 webp로 변경하여 용량 감소 진행",
            "초기 로딩 속도와 사용자 경험을 향상",
          ],
        },
        {
          contributionTitle: "웹 표준 / 접근성 고려 및 인터랙션 작업",
          contributionLi: [
            "디자인된 웹 페이지를 마크업하여 웹 표준을 준수하고 웹 접근성을 고려하여 프로젝트 진행",
            "각 섹션을 팀원과 협업해 PC 부터 Mobile까지 고려한 반응형 웹으로 개발",
            "디자이너가 요구한 디자인 시안을 Figma를 통해 정확히 이해하고, 섬세한 배경 위치 조절을 통해 완성도 높은 디자인 구현",
          ],
        },
      ],
      Trouble: [
        {
          TroubleTitle:
            "서브 페이지에서 navigation 클릭 시 메인 화면 특정 영역으로 이동 해야하는 점",
          TroubleLi: [
            {
              title: "문제점",
              ex: "navigation은 메인, 서브 페이지 공통으로 사용 중으로 서브 페이지에서 메인 화면의 특정 영역으로 이동할 수 있도록 요구사항을 받았으며, 단기 프로젝트로 상태 관리 라이브러리를 사용하지 않고 있었습니다.",
            },
            {
              title: "해결",
              ex: "localStorage를 활용해 특정 영역의 id값을 저장하고, 이동된 후 저장된 값을 setTimeout 메서드를 활용해 특정 영역 도착 후 삭제 되도록 작업해 불필요한 저장 공간 사용을 막았습니다.",
            },
          ],
        },
        {
          TroubleTitle: "초기 로딩 속도 개선하기 위한 이미지 작업",
          TroubleLi: [
            {
              title: "문제점",
              ex: "이미지 요소가 많아 초기 로딩 속도가 느렸습니다.",
            },
            {
              title: "해결",
              ex: "변경하기 어려운 일려스트 요소는 디자이너에게 재요청하고, 변환 가능한 경우 확장자를 webp로 변환 및 용량 감소를 통해 초기 로딩 속도를 개선할 수 있었습니다.",
            },
            {
              title: "회고",
              ex: "마무리된 프로젝트지만 img 태그에 loading=`lazy`속성과 placeholder를 이미지 최적화를 진행했을 것 같습니다.",
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
      name: "우주를 테마로 한 회사 소개 사이트",
      mainColor: "#D19060",

      coverImage: "/image/project2/Project2Cover.png",
      type: "single",
      tag: ["팀", "외주", "반응형", "퍼블리싱"],
      date: "2023.10 - 약 3일 2인 (프론트엔드 2명)",
      description: "우주를 테마로 한 회사 소개 홈페이지입니다.",
      subDescription:
        "디자인 시안을 Figma로 확인하며 제시한 기한 내에 최대한 클라이언트가 요구한 기능을 작업하려고 했습니다.",
      skills: [
        "3일이라는 짧은 기간내에 구현",
        "우주를 컨셉으로한 홈페이지로 이미지 요소가 많음",
        "네비게이션 메뉴 클릭 시 메인 화면에서 특정 위치로 부드럽게 이동",
        "localStorage를 활용해 서브 페이지에서도 네비게이션 메뉴 클릭 시 메인 화면의 특정 위치로 이동",
      ],
      language: [
        {
          name: "React",
          languageDescription:
            "React는 컴포넌트 기반으로 하며, 가상 DOM을 활용해 웹 애플리케이션의 성능을 최적화 합니다. 컴포넌트 재사용성을 높이고, 상태 관리를 용이하게 할 수 있습니다.",
        },
        {
          name: "TypeScript",
          languageDescription:
            "TypeScript는 정적 타입을 지원하는 JavaScript 슈퍼셋 언어로, 코드를 실행하기 전 오류를 잡아 줄 수 있습니다.",
        },
        {
          name: "Styled Components",
          languageDescription:
            "Styled Components는 JavaScript 코드 내에서 CSS를 작성할 수 있게 해주는 라이브러리입니다. 컴포넌트와 스타일을 함께 정의해 컴포넌트 별로 스타일을 관리하고 재사용할 수 있습니다.",
        },
      ],
      contribution: [
        {
          contributionTitle:
            "header navigation - localStorage를 활용한 특정 위치 저장",
          contributionLi: [
            "각 메뉴 클릭 시 메인 화면 특정 영역으로 부드럽게 이동 되도록 useRef를 활용해 구현",
            "서브 페이지에서도 해당 메뉴 클릭 시 메인 페이지 특정 위치로 자동 이동 되도록 상태 관리 라이브러리 없이 localStorage에 위치를 저장하도록 작업",
            "불필요한 저장을 막기 위해 setTimeout 메서드를 활용해 특정 위치에 도달한 후 지정된 시간이 지나면 자동으로 해당 위치 정보를 삭제하도록 조치",
          ],
        },
        {
          contributionTitle:
            "이미지 요소가 많은 페이지에서 이미지 최적화 작업 진행",
          contributionLi: [
            "이미지 요소가 많은 웹 사이트로 일러스트 요소는 디자이너에게 재요청 진행",
            "수정가능한 이미지는 확장자를 webp로 변경하여 용량 감소 진행",
            "초기 로딩 속도와 사용자 경험을 향상",
          ],
        },
        {
          contributionTitle: "웹 표준 / 접근성 고려 및 인터랙션 작업",
          contributionLi: [
            "디자인된 웹 페이지를 마크업하여 웹 표준을 준수하고 웹 접근성을 고려하여 프로젝트 진행",
            "각 섹션을 팀원과 협업해 PC 부터 Mobile까지 고려한 반응형 웹으로 개발",
            "디자이너가 요구한 디자인 시안을 Figma를 통해 정확히 이해하고, 섬세한 배경 위치 조절을 통해 완성도 높은 디자인 구현",
          ],
        },
      ],
      Trouble: [
        {
          TroubleTitle:
            "서브 페이지에서 navigation 클릭 시 메인 화면 특정 영역으로 이동 해야하는 점",
          TroubleLi: [
            {
              title: "문제점",
              ex: "navigation은 메인, 서브 페이지 공통으로 사용 중으로 서브 페이지에서 메인 화면의 특정 영역으로 이동할 수 있도록 요구사항을 받았으며, 단기 프로젝트로 상태 관리 라이브러리를 사용하지 않고 있었습니다.",
            },
            {
              title: "해결",
              ex: "localStorage를 활용해 특정 영역의 id값을 저장하고, 이동된 후 저장된 값을 setTimeout 메서드를 활용해 특정 영역 도착 후 삭제 되도록 작업해 불필요한 저장 공간 사용을 막았습니다.",
            },
          ],
        },
        {
          TroubleTitle: "초기 로딩 속도 개선하기 위한 이미지 작업",
          TroubleLi: [
            {
              title: "문제점",
              ex: "이미지 요소가 많아 초기 로딩 속도가 느렸습니다.",
            },
            {
              title: "해결",
              ex: "변경하기 어려운 일려스트 요소는 디자이너에게 재요청하고, 변환 가능한 경우 확장자를 webp로 변환 및 용량 감소를 통해 초기 로딩 속도를 개선할 수 있었습니다.",
            },
            {
              title: "회고",
              ex: "마무리된 프로젝트지만 img 태그에 loading=`lazy`속성과 placeholder를 이미지 최적화를 진행했을 것 같습니다.",
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
      name: "Team Project 2",
      mainColor: "#333",
      coverImage: "/image/project3/Project3Cover.png",
      type: "team",
      description: "This is Team Project 2",
      images: [
        { src: "/image/project3/image1.png", title: "Image 1" },
        { src: "/image/project3/image2.png", title: "Image 2" },
        { src: "/image/project3/image3.png", title: "Image 3" },
        { src: "/image/project3/image4.png", title: "Image 4" },
      ],
    },
    {
      id: 4,
      name: "Team Project 4",
      mainColor: "#333",
      coverImage: "/image/project3/Project3Cover.png",
      type: "team",
      description: "This is Team Project 2",
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
