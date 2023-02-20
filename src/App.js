import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Home, Video, Channel, Search } from "./pages";
import { Header, Sidebar } from "./components";
import styled from "@emotion/styled";

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

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <BrowserRouter>
      <Wrapper
        sx={{ gridTemplateColumns: { xs: "52px auto", lg: "220px auto" } }}
      >
        <Header handleMenu={handleMenu} />
        <Sidebar
          handleMenu={handleMenu}
          showMenu={showMenu}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setShowMenu={setShowMenu}
        />
        <Main
          className="main"
          sx={{
            gridColumn: { xs: "1/3", sm: "2/3" },
          }}
        >
          <Routes>
            <Route
              path="/"
              exact
              element={<Home selectedCategory={selectedCategory} />}
            />
            <Route path="/video/:id" element={<Video />} />
            <Route path="/channel/:id" element={<Channel />} />
            <Route path="/search/:searchTerm" element={<Search />} />
          </Routes>
        </Main>
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;
