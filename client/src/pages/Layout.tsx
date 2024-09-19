import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
