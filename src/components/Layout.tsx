import { Outlet } from "react-router-dom";
import Modal from "./Modal";
import Navigation from "./Navigation";

function Layout() {
  return (
    <>
      <div>
        <Navigation />
        <Outlet />
      </div>
      <Modal />
    </>
  );
}
export default Layout;
