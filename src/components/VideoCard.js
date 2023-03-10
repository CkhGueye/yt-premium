import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import ChannelName from "./ChannelName";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <Card
    sx={{
      width: "100%",
      boxShadow: "none",
      borderRadius: 0,
      backgroundColor: "transparent",
    }}
  >
    <Link
      to={videoId && `/video/${videoId}`}
      style={{ borderRadius: 8, overflow: "hidden", display: "block" }}
    >
      <CardMedia
        component="img"
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{ width: { xs: "100%", sm: "100%" }, height: { xs: 170, sm: 140 } }}
      />
    </Link>
    <CardContent sx={{ maxHeight: 65, p: 0, mt: 1, "&:last-child": { pb: 0 } }}>
      <Typography
        component="h2"
        variant="subtitle2"
        fontWeight="bold"
        color="#fff"
        maxHeight="44px"
        overflow="hidden"
      >
        <Link to={videoId && `/video/${videoId}`}>
          {snippet?.title.slice(0, 60)}
          {snippet?.title.length > 60 && "..."}
        </Link>
      </Typography>
      <ChannelName component="p" variant="subtitle2">
        <Link
          className="ellipsis"
          to={snippet?.channelId && `/channel/${snippet?.channelId}`}
        >
          {snippet?.channelTitle}
        </Link>
      </ChannelName>
    </CardContent>
  </Card>
);

export default VideoCard;
