import React from "react";
import styled, { keyframes } from "styled-components";
import { LogoGithub } from "react-ionicons";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// 애니메이션 정의
const fadeIn = keyframes`from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); };`;

const Container = styled.div`
  width: 30%;
  height: 100%;
  border-radius: 8px;
  display: flex;
  align-items: start;
  justify-content: space-around;
  flex-direction: column;
  color: #1d1d1f;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  animation: ${fadeIn} 1s ease-in-out;
  @media (max-width: 1208px) {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

const Title = styled.h1`
  /* font-size: 2.5rem; */
  font-weight: bold;
  font-size: 35px;
  color: #000;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Section = styled.section`
  animation: ${fadeIn} 1s ease-in-out;
  animation-delay: 0.5s;
  animation-fill-mode: both;
  margin-bottom: 20px;
`;
const LinkWrap = styled.div`
  display: flex;
`;
const SectionTitle = styled.h1`
  font-weight: bold;
  font-size: 18px;
  color: #333;
`;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap; /* 자동 줄바꿈 설정 */
  gap: 5px; /* 아이템 간의 간격 설정 */
`;

const ListItem = styled.div`
  list-style: none;
  font-size: 12px;
  padding: 5px;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  background-color: ${({ color }) => hexToRgba(color, 0.5)}; /* 투명도 적용 */
  color: black;
  font-weight: bold;
  border-radius: 5px;
`;

const Paragraph = styled.p`
  font-size: 13px;
  color: #555;
  letter-spacing: 1.5px;
`;

const Github = styled.a`
  text-decoration: none;
  margin-right: 10px;
`;
const Notion = styled.a`
  text-decoration: none;
  color: black;
  margin-right: 10px;
`;
const Nbox = styled.div`
  border: 4px solid black;
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
const Ntitle = styled.h2`
  margin: 0;
`;
const Url = styled.a`
  font-size: 12px;
  color: gray;
  padding: 20px;
`;

const items1 = [
  "React",
  "Next.js",
  "Zod",
  "TailWind",
  "Cloud Flare",
  "TypeScript",
  "Supabase",
  "AWS",
  "Vercel",
];
const items2 = [
  "React-native",
  "Styled-components",
  "ApolloGraphql",
  "Prisma",
  "GoogleMap API",
  "Geocoding API",
  "Geolocation API",
  "Place API",
  "AWS",
  "Expo",
];
const items3 = ["React-native", "Styled-components", "FireBase", "AWS", "Expo"];

const subTitle = [
  "필요 없는 물건들을 경매를 통해 중고 거래를 하는 사이트",
  "주변에 있는 맛있는 식당 및 카페를 이용자들이 직접 추천 해주는 어플",
  "앱을 통해 편리하게 음료 주문을 할 수 있는 스마트 오더 앱",
];

const description = [
  "Expo를 활용하여 React Native로 모바일 앱을 개발했습니다. Expo의 라이브러리를 사용해 카메라 및 앨범 접근 기능을 구현했으며, Google Map API를 통해 사용자가 추천 맛집을 지도에서 쉽게 찾을 수 있도록 했습니다. 또한, Apollo Server를 사용하여 GraphQL 서버를 구축했습니다.",
  "Next.js의 장점을 최대한 활용하여 풀스택 웹 애플리케이션을 제작했습니다. Next.js 14의 최신 기능인 App Router, 서버 컴포넌트, 서버 액션을 적극 활용하여 최적화된 성능과 효율성을 구현했습니다. 또한, Tailwind CSS와 Prisma를 사용하여 개발 생산성을 극대화하였습니다.",
  "Firebase를 활용하여 React Native로 카페 스마트 오더 앱을 개발했습니다. Firebase를 사용하여 데이터베이스 구축의 복잡성을 줄이고, 데이터 관리를 효율적으로 수행했습니다. 또한, React Hook을 활용하여 컴포넌트 간 상태 로직을 쉽게 재사용하고 공유하여 코드의 재사용성을 높이고 간결하게 유지했습니다. Styled-components를 통해 코드 중복을 줄이고 일관된 디자인 시스템을 구축하여 효율적이고 유동적인 스타일링을 구현했습니다.",
];
const AboutProject = ({ title }) => {
  return (
    <Container>
      <Section>
        <Title>
          {title === "project1" && "중고 경매 어플"}
          {title === "project2" && "맛집 공유 어플"}
          {title === "project3" && "카페 스마트 오더 어플"}
          {title === "project1" && (
            <Url
              href={`https://again-shop-git-main-hyeongmins-projects-ca960665.vercel.app/home`}
            >
              홈페이지로 이동하기
            </Url>
          )}
        </Title>

        <SectionTitle>
          {title === "project1" && subTitle[0]}
          {title === "project2" && subTitle[1]}
          {title === "project3" && subTitle[2]}
        </SectionTitle>
      </Section>

      <Section>
        <List>
          {title === "project1" &&
            items1.map((item) => (
              <ListItem key={item} color={getRandomColor()}>
                {item}
              </ListItem>
            ))}
          {title === "project2" &&
            items2.map((item) => (
              <ListItem key={item} color={getRandomColor()}>
                {item}
              </ListItem>
            ))}
          {title === "project3" &&
            items3.map((item) => (
              <ListItem key={item} color={getRandomColor()}>
                {item}
              </ListItem>
            ))}
          {}
        </List>
      </Section>

      <Section>
        <Paragraph>
          {title === "project1" && description[0]}
          {title === "project2" && description[1]}
          {title === "project3" && description[2]}
        </Paragraph>
      </Section>
      {title === "project1" && (
        <LinkWrap>
          <Github href="https://github.com/Hyeong-mai/again-store">
            <LogoGithub height="35px" width="35px" />
          </Github>
          <Notion href="https://cute-apogee-96e.notion.site/f13cddee5185425aab0cd991ca3fa54f?pvs=4">
            <Nbox>
              <Ntitle>N</Ntitle>
            </Nbox>
          </Notion>
        </LinkWrap>
      )}
      {title === "project2" && (
        <LinkWrap>
          <Github href="https://github.com/Hyeong-mai/DAM-MAP">
            <LogoGithub height="35px" width="35px" />
          </Github>
          <Notion href="https://cute-apogee-96e.notion.site/DAM-map-71e0f3e997a44270afc8ad1c817e4f2d?pvs=4">
            <Nbox>
              <Ntitle>N</Ntitle>
            </Nbox>
          </Notion>
        </LinkWrap>
      )}
      {title === "project3" && (
        <LinkWrap>
          <Github href="https://github.com/Hyeong-mai/CafeDam-native">
            <LogoGithub height="35px" width="35px" />
          </Github>
          <Notion href="https://cute-apogee-96e.notion.site/CafeDam-App-ef1200128e1a49ad95eed16c261d6f33?pvs=4">
            <Nbox>
              <Ntitle>N</Ntitle>
            </Nbox>
          </Notion>
        </LinkWrap>
      )}
    </Container>
  );
};

export default AboutProject;
