import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
