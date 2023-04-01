import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { VideosGrid, Loader, ChannelName } from "../components";
import { customFetch } from "../utils/customFetch";

const Video = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setVideos(null);
    setVideoDetail(null);

    customFetch(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    customFetch(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
      <Box flex="1">
        <Box
          sx={{
            position: "sticky",
            top: "0",
            display: "flex",
            flexDirection: "column",
            height: { xs: "380px", sm: "calc(100vh - 108px)" },
            borderBottom: { xs: "2px solid #757d8b", md: "unset" },
            marginBottom: { xs: 2, md: "0" },
            paddingBottom: { xs: 2, md: "0" },
          }}
        >
          <ReactPlayer
            className="react-player"
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
          />
          <Typography
            component="h1"
            variant="h5"
            fontWeight="bold"
            mt={2}
            fontSize={{ xs: 18, sm: 24 }}
          >
            {title}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            flexWrap="wrap"
            sx={{ color: "#aaa", mt: 1, gap: 0.5 }}
          >
            <ChannelName color="rgb(255 255 255 / 80%)" maxWidth="100%">
              <Link className="ellipsis" to={`/channel/${channelId}`}>
                {channelTitle}
              </Link>
            </ChannelName>
            <Stack
              direction="row"
              gap={2}
              alignItems="center"
              justifyContent="space-between"
              flex={{ xs: "100%", sm: "unset" }}
            >
              <Typography component="span" variant="body1" fontWeight="bold">
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography component="span" variant="body1" fontWeight="bold">
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Box
        sx={{ flex: "0 0 260px" }}
        justifyContent="center"
        alignItems="center"
      >
        <VideosGrid videos={videos} />
      </Box>
    </Stack>
  );
};

export default Video;
