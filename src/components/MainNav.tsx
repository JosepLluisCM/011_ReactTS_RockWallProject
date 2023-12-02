import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <header className="max-w-60 m-auto p-8 flex justify-center">
      <nav>
        <ul className="flex gap-4 text-orange-300">
          <li className="">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "underline text-orange-500" : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline text-orange-500" : undefined
              }
              to="/login"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
