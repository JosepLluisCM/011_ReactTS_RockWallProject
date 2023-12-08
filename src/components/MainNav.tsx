import { NavLink } from "react-router-dom";
import rock from "../assets/rock_5767687.png";
/* import { loginActions } from "../store/index"; */
import { /* useAppDispatch, */ useAppSelector } from "../hooks/hooks";

const MainNav = () => {
  /* const dispatch = useAppDispatch(); */
  const isLogged = useAppSelector((state) => state.isLogged);

  const toggleLogInHandler = () => {
    /* dispatch(loginActions.logIn()); */
  };

  const toggleLogOutHandler = () => {
    /* dispatch(loginActions.logOut()); */
  };

  let logInButton: JSX.Element;
  if (isLogged) {
    logInButton = (
      <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-background hover:bg-accent mt-4 sm:mt-0">
        <NavLink
          className={({ isActive }) => (isActive ? "underline" : undefined)}
          to="/login"
          onClick={toggleLogOutHandler}
        >
          LogOut
        </NavLink>
      </button>
    );
  } else {
    logInButton = (
      <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-background hover:bg-accent mt-4 sm:mt-0">
        <NavLink
          className={({ isActive }) => (isActive ? "underline" : undefined)}
          to="/login"
          onClick={toggleLogInHandler}
        >
          Login
        </NavLink>
      </button>
    );
  }

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
        <div className="text-sm sm:flex-grow">
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? "underline" : undefined)}
          >
            Register
          </NavLink>
        </div>
        {logInButton}
      </div>
    </nav>
  );
};

export default MainNav;

/* <nav>
        <ul className="flex gap-4 text-orange-300">
          <li className="bg-secondary px-4 py-2 rounded-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "underline text-orange-500" : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li className="bg-secondary px-4 py-2 rounded-lg self-end">
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
      </nav> */
