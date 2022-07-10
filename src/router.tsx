import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

export const ROUTES = {
  home: "/",
  favorite: "/favorite",
};

function Router() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.favorite} element={<Favorite />} />
        <Route path="search">
          <Route path=":term" element={<Search />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
