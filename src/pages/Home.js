import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { VideosGrid } from "../components";
import { customFetch } from "../utils/customFetch";
import { useParams } from "react-router-dom";

const Home = () => {
  const { category } = useParams();
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);
    customFetch(
      `search?part=snippet&q=${category === "home" ? "" : category}`
    ).then((data) => setVideos(data.items));
  }, [category]);

  return (
    <>
      <Typography component="h1" variant="h4" fontWeight="bold" mb={2}>
        <span className="cap red">{category ? category : "Home"}</span> videos
      </Typography>
      <VideosGrid videos={videos} />
    </>
  );
};

export default Home;
