
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-[60] -translate-y-20 rounded-md bg-white px-4 py-2 font-semibold text-[#081a2e] shadow-lg focus:translate-y-0"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
