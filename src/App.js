import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Video, Channel, Search } from "./pages";
import Layout from "./layout/Index";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/category/:category" exact element={<Home />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/channel/:id" element={<Channel />} />
          <Route path="/search/:searchTerm" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
