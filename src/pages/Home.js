import { useCallback, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { VideosGrid } from "../components";
import { customFetch } from "../utils/customFetch";
import { useParams } from "react-router-dom";

const Home = () => {
  const { category } = useParams();
  const [videos, setVideos] = useState(null);

  const getRandomVideos = useCallback(async () => {
    const videos = await customFetch(
      `search?part=snippet&q=new%20technology`
    ).then((data) => data.items);

    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideoId = videos[randomIndex].id.videoId;

    customFetch(
      `search?part=snippet&relatedToVideoId=${randomVideoId}&type=video`
    ).then((data) => setVideos(data.items));
  }, []);

  useEffect(() => {
    setVideos(null);
    if (!category) {
      getRandomVideos();
    } else {
      customFetch(`search?part=snippet&q=${category}`).then((data) =>
        setVideos(data.items)
      );
    }
  }, [category, getRandomVideos]);

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
