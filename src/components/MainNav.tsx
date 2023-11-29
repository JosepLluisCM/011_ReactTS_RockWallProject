import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="inline-block m-5">
            <Link to="/">Home</Link>
          </li>
          <li className="inline-block m-5">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
