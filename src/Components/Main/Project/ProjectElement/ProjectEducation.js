import React from "react";
import styled from "styled-components";
import EducationItem from "./ProjectComponents/ListItem";

const ProjectEducationLayout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2개의 열을 동일한 너비로 설정 */
  align-items: center;
  justify-items: center;
  grid-auto-rows: 500px; // 고정된 높이
  @media (max-width: 1160px) {
    grid-template-columns: repeat(1, 1fr); /* 2개의 열을 동일한 너비로 설정 */
  }
`;

const projects = [
  {
    id: 1,
    date: "2024.04 ~ 2024.06",
    BigTitle: "NOMAD CODERS",
    SmallTitle: " Next.js 14, Tailwind, Prisma, Vercel 캐럿마켓 클론코딩",
    descriptions: [
      " Next.js의 장점을 최대한 활용하여 현재 시장에서 가장 좋은 개발자 경험과 가장 빠른 개발 속도를 갖춘 풀스택 웹 애플리케이션을 제작합니다.",
      " App Router를 비롯하여 서버 컴포넌트 및 서버 액션과 같은 Next.js 14의 최신 기능을 활용",
      " Tailwind, Prisma 등을 이용해 개발 생산성 극대화",
      " Vercel, PlanetScale을 이용한 배포",
    ],
    skills: ["TypeScript", "Next", "Tailwind", "Vercel"],
  },
  {
    id: 2,
    date: "2023.09 ~ 2023.12",
    BigTitle: "NOMAD CODERS",
    SmallTitle: "React Native, Prisma 인스타그램 클론코딩",
    descriptions: [
      " React Native, Expo, Prisma, ApolloGraphql, AWS 를 활용하여 로그인. 이미지 업로드. 채팅. 수정. 삭제 등 기본적인 인스타그램 클론코딩을 완성했습니다.",
      " React Hooks와 React Router의 기초 이론을 공부하며 함수형 컴포넌트의 상태 관리와 클라이언트 사이드 라우팅에 대한 이해를 깊이 있게 다졌습니다",
      "styled-components, Prisma 등을 이용해 개발 생산성 극대화",
      "netlify 이용한 배포",
    ],
    skills: ["React-Native", "Apollo", "Prisma", "Expo", "AWS"],
  },
  {
    id: 3,
    date: "2017.06 ~ 2017.12",
    BigTitle: "소프트웨어진흥협회",
    SmallTitle:
      "KOSTA 소프트웨어 보안을 위한 시큐어프로그래밍 개발자 양성 과정 ",
    descriptions: [
      " 프론트엔드 개발자 교육과정 수료(6개월 과정),반응형 웹에 대한 이해 및 개선 경험,Git을 이용한 협업",
      " Spring Framework을 사용하는 이유와 목적에 대해 이해하고, RESTFul API를 구축",
    ],
    skills: ["Java", "JavaScript", "HTML5", "CSS3", "jQuery", "Spring"],
  },
];

const ProjectEducation = () => {
  return (
    <ProjectEducationLayout>
      {projects.map((project) => (
        <EducationItem key={project.id} project={project} />
      ))}
    </ProjectEducationLayout>
  );
};

export default ProjectEducation;
