import React from "react";
import styled, { keyframes } from "styled-components";

// 애니메이션 정의
const fadeIn = keyframes`from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); };`;

const Container = styled.div`
  width: 30%;
  height: 100%;
  border-radius: 8px;

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
`;

const SectionTitle = styled.h1`
  font-weight: bold;
  font-size: 18px;
  color: #333;
`;

const List = styled.ul`
  padding-left: 0;
  color: #555;
`;

const ListItem = styled.li`
  list-style: none;
  font-size: 13px;
  padding-left: 0;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  & {
    color: gray;
  }
`;

const Paragraph = styled.p`
  font-size: 13px;
  color: #555;
`;

const AboutProject = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Section>
        <SectionTitle>사용한 라이브러리 및 프레임워크</SectionTitle>
        <List>
          <ListItem>React</ListItem>
          <ListItem>Next.js</ListItem>
          <ListItem>Styled-components</ListItem>
          <ListItem>Prisma</ListItem>
          <ListItem>PostgreSQL</ListItem>
          <ListItem>Vercel</ListItem>
          {/* 필요한 라이브러리 및 프레임워크 추가 */}
        </List>
      </Section>

      <Section>
        <SectionTitle>만들게 된 계기</SectionTitle>
        <Paragraph>
          이 프로젝트를 만들게 된 계기에 대한 설명을 여기에 작성합니다. 예를
          들어, 특정 문제를 해결하기 위해, 새로운 기술을 배우기 위해, 또는
          개인적인 관심사로 인해 프로젝트를 시작하게 되었을 수 있습니다.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>프로젝트를 통해 얻은 점</SectionTitle>
        <Paragraph>
          이 프로젝트를 통해 얻은 점에 대한 설명을 여기에 작성합니다. 예를 들어,
          새로운 기술을 습득한 경험, 문제 해결 능력의 향상, 협업을 통해 얻은
          교훈 등을 작성할 수 있습니다.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default AboutProject;
