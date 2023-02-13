import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import OurStory from "./pages/OurStory";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/OurStory" element={<OurStory />} />
    </Routes>
  );
};

export default Router;
