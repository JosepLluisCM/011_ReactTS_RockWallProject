import { Outlet } from "react-router-dom";
/* import MainNav from "../components/MainNav"; */

const RootLayout = () => {
  return (
    <div className="h-screen flex flex-col items-center">
      {/* <MainNav /> */}
      <Outlet />
    </div>
  );
};

export default RootLayout;
