import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { customFetch } from "../utils/customFetch";
import { VideosGrid } from "../components";

const Search = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    customFetch(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <>
      <Typography component="h1" variant="h4" fontWeight="bold" mb={3}>
        Results for <span className="red">{searchTerm}</span> videos
      </Typography>
      <VideosGrid videos={videos} />
    </>
  );
};

export default Search;
