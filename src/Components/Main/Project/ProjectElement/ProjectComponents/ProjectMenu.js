import styled from "styled-components";

const MenuButton = styled.button`
  background-color: ${(props) => (props.isActive ? "#F1F2F5" : "#373737")};
  color: ${(props) => (props.isActive ? "#373737" : "#F1F2F5")};
  margin: 0 10px;
  padding: 15px 20px;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: ${(props) => (props.isActive ? "bold" : "light")};
  &:hover {
    background-color: #555;
  }
`;
const ProjectMenuLayout = styled.div`
  padding: 10px;
  background-color: #373737;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;
const ProjectMenu = ({ activeMenu, setActiveMenu }) => {
  return (
    <ProjectMenuLayout>
      <MenuButton
        isActive={activeMenu === "all"}
        onClick={() => setActiveMenu("all")}
      >
        All
      </MenuButton>
      <MenuButton
        isActive={activeMenu === "team"}
        onClick={() => setActiveMenu("team")}
      >
        Team
      </MenuButton>
      <MenuButton
        isActive={activeMenu === "single"}
        onClick={() => setActiveMenu("single")}
      >
        Single
      </MenuButton>
    </ProjectMenuLayout>
  );
};

export default ProjectMenu;
