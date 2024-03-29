import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";
import { categories } from "../utils/categoriesList";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styled from "@emotion/styled";
import { useState } from "react";

const SidebarWrapper = styled(Box)({
  overflowY: "auto",
  gridRow: "1/3",
  gridColumn: "1/2",
  backgroundColor: "#78adff3d",
  borderRadius: 12,
  border: "1px solid rgb(255, 255, 255, 0.15)",
});

const ButtonNav = styled(Button)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  borderBlock: "1px solid transparent",
  borderRadius: 0,
  color: "rgb(255,255,255,0.8)",
  padding: "9px 19px",
  textTransform: "capitalize",
  minWidth: "unset",
  width: "100%",
  "&.active, &:hover": {
    backgroundColor: "#35517c",
    borderBlock: "1px solid rgb(255, 255, 255, 0.2)",
    color: "white",
  },
});

const StyledStack = styled(Stack)({
  position: "relative",
  overflow: "hidden",
  flexDirection: "column",
  height: "100%",
});

const Categories = ({ handleMenu, showMenu, setShowMenu }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const currentPath = pathname.split("/")[2];

  const [category, setCategory] = useState(currentPath ? currentPath : "home");

  const handleClick = (categoryName) => {
    navigate(categoryName === "home" ? "/" : `/category/${categoryName}`);
    setShowMenu(false);
    setCategory(categoryName);
  };

  return (
    <SidebarWrapper
      className={`sidemenu ${showMenu ? "shown" : "hidden"}`}
      sx={{ height: { xs: "100%", sm: "calc(100vh - 32px)" } }}
    >
      <Box className="backdrop" onClick={() => handleMenu()} />
      <StyledStack className="sidebar">
        <Box
          sx={{
            position: "sticky",
            top: 0,
            backgroundColor: "#192e47",
            zIndex: 1,
          }}
        >
          <Link
            to="/"
            aria-label="Go to Home"
            onClick={() => handleClick("home")}
            style={{
              display: "flex",
              alignItems: "center",
              paddingInline: { lg: 1.5 },
            }}
          >
            <YouTubeIcon
              sx={{ color: "red", height: 50, width: 50, ml: { lg: 1.5 } }}
            />
            <Typography
              component="span"
              color="rgb(255 255 255 / 80%)"
              fontSize="24px"
              fontWeight="600"
              letterSpacing="-0.5px"
              whiteSpace="nowrap"
              sx={{
                visibility: { xs: "visible", sm: "hidden", lg: "visible" },
              }}
            >
              Yt Premium
            </Typography>
          </Link>
        </Box>
        <Box component="nav" sx={{ flex: 1 }} arial-label="Main menu">
          {categories.map((item) => (
            <ButtonNav
              className={`${item.name === category && "active"}`}
              onClick={() => handleClick(item.name)}
              key={item.name}
              startIcon={item.icon}
              aria-label={item.name}
            >
              <Typography
                component="span"
                sx={{ visibility: { xs: "hidden", lg: "visible" } }}
              >
                {item.name}
              </Typography>
            </ButtonNav>
          ))}
        </Box>
        <Typography className="copyright" variant="body2" padding="12px 16px">
          Copyright © 2022 CkhGueye
        </Typography>
      </StyledStack>
    </SidebarWrapper>
  );
};

export default Categories;
