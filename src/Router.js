import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Router = () => {
  const Home = lazy(() => import("./pages/Home"));
  const Gallery = lazy(() => import("./pages/Gallery"));
  const OurStory = lazy(() => import("./pages/OurStory"));
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/OurStory" element={<OurStory />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
