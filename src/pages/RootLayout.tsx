import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";

/* This page acts as a parent for the other, to make the MainNav appear always on the screen */
const RootLayout = () => {
  return (
    <div className="h-screen flex flex-col items-center">
      <MainNav />
      <Outlet />
    </div>
  );
};

export default RootLayout;
