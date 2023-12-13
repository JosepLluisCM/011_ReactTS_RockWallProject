import { NavLink } from "react-router-dom";
import rock from "../assets/rock_5767687.png";
import { loginActions, LoginActions } from "../store/index";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

const MainNav = () => {
  /* We load all we need from the login slice */
  const isLogged = useAppSelector((state) => state.isLogged);
  const dispatch = useAppDispatch();

  /* console.log(isLogged); */

  /* We execute the logOUT action on click */
  const actions: LoginActions = loginActions;
  const toggleLogOutHandler = () => {
    dispatch(actions.logOut());
  };

  /* We conditionally modify the LogIn button according to the state of isLogged */
  return (
    <nav className="w-full flex items-center justify-between flex-wrap p-6 bg-secondary">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img className="h-8 mr-4 -translate-y-1" src={rock} alt="rock" />
        <span className="font-semibold text-xl tracking-tight">RockWall</span>
      </div>

      <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
        <div className="text-sm sm:flex-grow">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "underline" : undefined)}
          >
            Home
          </NavLink>
        </div>

        <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-background hover:bg-accent mt-4 sm:mt-0">
          <NavLink
            className={({ isActive }) => (isActive ? "underline" : undefined)}
            to="/login"
            onClick={isLogged ? toggleLogOutHandler : undefined}
          >
            {isLogged ? "Log Out" : "Log In"}
          </NavLink>
        </button>
      </div>
    </nav>
  );
};

export default MainNav;
