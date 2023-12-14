import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    const navOptions = <>
        <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-purple-600 underline" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signIn"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-purple-600 underline" : ""
              }
            >
              Sign In
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/templates"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-purple-600 underline" : ""
              }
            >
              Templates
            </NavLink>
          </li>
    </>
  return (
    <div className="py-5">
      <nav className="flex justify-between">
        <Logo></Logo>
        <ul className="flex gap-8">
          {navOptions}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
