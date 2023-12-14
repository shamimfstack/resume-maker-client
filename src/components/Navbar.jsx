import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    const navOptions = <>
        <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Sign In
            </NavLink>
          </li>
    </>
  return (
    <div>
      <nav>
        <Logo></Logo>
        <ul>
          {navOptions}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
