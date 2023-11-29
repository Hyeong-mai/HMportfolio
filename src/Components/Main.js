import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Element/Header";
import Footer from "./Element/Footer";
import MainContents from "./Element/MainContents";

const MainLayout = styled.div`
  width: 90%;
  height: 100%;
  margin: 0;
`;

const Main = () => {
  const [menuItem, setMenuItem] = useState("home");
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <MainLayout>
      <Header
        menuToggle={menuToggle}
        setMenuToggle={setMenuToggle}
        menuItem={menuItem}
        setMenuItem={setMenuItem}
      />
      <MainContents
        menuToggle={menuToggle}
        setMenuToggle={setMenuToggle}
        menuItem={menuItem}
        setMenuItem={setMenuItem}
      />
      <Footer />
    </MainLayout>
  );
};
export default Main;
