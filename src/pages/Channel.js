import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { VideosGrid, ChannelCard, Loader } from "../components";
import { customFetch } from "../utils/customFetch";

const Channel = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    customFetch(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    customFetch(`search?channelId=${id}&part=snippet%2Cid&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  if (!channelDetail) return <Loader />;

  return (
    <>
      <Box sx={{ position: "relative", height: { xs: "300px", sm: "320px" } }}>
        <Box
          className="channel-header"
          sx={{ height: { xs: "110px", sm: "150px" } }}
        />
        <ChannelCard channelDetail={channelDetail} />
      </Box>
      <VideosGrid videos={videos} />
    </>
  );
};

export default Channel;
