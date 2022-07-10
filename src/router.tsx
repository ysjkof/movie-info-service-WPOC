import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="bookmark" element={<Favorite />} />
        <Route path="search">
          <Route path=":term" element={<p>Nested Routes</p>} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
