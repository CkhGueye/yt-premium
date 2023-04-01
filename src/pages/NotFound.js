import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography component="h1" fontSize={40}>
        Page not found
      </Typography>
      <Link to="/">
        <Typography sx={{ textDecoration: "underline" }}>Go home</Typography>
      </Link>
    </Box>
  );
};
export default NotFound;
