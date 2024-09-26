import React from "react";
import styled from "styled-components";
import AboutMe from "./About/AboutMe";
import Project from "./Project/Project";
import Footer from "./FooterLayout/Footer";
import Header from "./Header/Header";

const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  height: 800vh; /* 6개의 섹션을 합한 높이 */
  @media (max-width: 430px) {
    height: 1000vh;
  }
`;

const Main = () => {
  return (
    <Container>
      <Header />
      <AboutMe />

      {/* Project 섹션 */}
      <Project />
      <Footer />
    </Container>
  );
};

export default Main;
