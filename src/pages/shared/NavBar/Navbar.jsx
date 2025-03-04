import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOption = (
    <>
      <li>
        <NavLink to={"/"}>HOME</NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}>OUR MENU</NavLink>
      </li>
      <li>
        <NavLink to={"/order/salad"}>ORDER FOOD</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>LOGIN</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>DASHBOARD</NavLink>
      </li>

      <li>
        <NavLink to={"/secret"}>OUR SHOP</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 max-w-screen-xl mx-auto text-white bg-opacity-30  bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOption}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <span>{user?.displayName}</span>
              <button onClick={handleLogout} className="btn btn-ghost">
                {" "}
                Logout
              </button>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
