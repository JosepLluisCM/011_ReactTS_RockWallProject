import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";

const RootLayout = () => {
  return (
    <div className="h-screen flex flex-col items-center">
      <MainNav tabs={[{ key: "home", text: "12312" }]} />
      <Outlet />
    </div>
  );
};

export default RootLayout;
