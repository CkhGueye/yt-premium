import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { VideosGrid } from "../components";
import { customFetch } from "../utils/customFetch";

const Home = ({ selectedCategory }) => {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);
    customFetch(
      `search?part=snippet&q=${
        selectedCategory === "Home" ? "" : selectedCategory
      }`
    ).then((data) => setVideos(data.items));
  }, [selectedCategory]);

  return (
    <>
      <Typography component="h1" variant="h4" fontWeight="bold" mb={2}>
        <span className="red">{selectedCategory}</span> videos
      </Typography>
      <VideosGrid videos={videos} />
    </>
  );
};

export default Home;
