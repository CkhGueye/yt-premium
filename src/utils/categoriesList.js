import MusicNoteIcon from "@mui/icons-material/MusicNote";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SchoolIcon from "@mui/icons-material/School";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CableIcon from "@mui/icons-material/Cable";
import JavascriptIcon from "@mui/icons-material/Javascript";

export const categories = [
  { name: "home", icon: <HomeIcon /> },
  { name: "javascript", icon: <JavascriptIcon sx={{ scale: "1.7" }} /> },
  { name: "music", icon: <MusicNoteIcon /> },
  { name: "education", icon: <SchoolIcon /> },
  { name: "podcast", icon: <GraphicEqIcon /> },
  { name: "movie", icon: <OndemandVideoIcon /> },
  { name: "gaming", icon: <SportsEsportsIcon /> },
  { name: "technology", icon: <CableIcon /> },
  { name: "live", icon: <LiveTvIcon /> },
  { name: "sport", icon: <FitnessCenterIcon /> },
  { name: "fashion", icon: <CheckroomIcon /> },
  { name: "beauty", icon: <FaceRetouchingNaturalIcon /> },
  { name: "comedy", icon: <TheaterComedyIcon /> },
];
