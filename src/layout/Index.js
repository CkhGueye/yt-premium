import { useState } from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Main = styled(Box)({
  gridRow: "2/3",
  overflowY: "auto",
  overflowX: "hidden",
  height: "calc(100vh - 108px)",
  paddingRight: "10px",
  marginRight: -8,
});

const Wrapper = styled(Box)({
  display: "grid",
  gridTemplateRows: "60px auto",
  gap: 16,
});

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <Wrapper
      sx={{ gridTemplateColumns: { xs: "52px auto", lg: "220px auto" } }}
    >
      <Header handleMenu={handleMenu} />
      <Sidebar
        handleMenu={handleMenu}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <Main
        className="main"
        sx={{
          gridColumn: { xs: "1/3", sm: "2/3" },
        }}
      >
        {children}
      </Main>
    </Wrapper>
  );
};

export default Layout;
