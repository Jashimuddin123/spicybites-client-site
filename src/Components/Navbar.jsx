import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  console.log('user here', user);
  
  const navLinks = (
    <>
      <li className="mr-2 font-semibold text-md">
        <NavLink to="/" activeClassName="text-red-500">Home</NavLink>
      </li>
      <li className="mr-2 font-semibold text-md">
        <NavLink to="/allfoods" activeClassName="text-red-500">All Foods</NavLink>
      </li>
      <li className="mr-2 font-semibold text-md">
        <NavLink to="/register" activeClassName="text-red-500">Register</NavLink>
      </li>
      <li className="mr-2 font-semibold text-md">
        <NavLink to="/gallery" activeClassName="text-red-500">Gallery</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-lime-500  z-40  p-10 flex flex-wrap items-center justify-between">
      {/* Navbar Start */}
      <div className="navbar-start flex items-center  justify-between w-full lg:w-auto">
       
         <div className="flex justify-center gap-2  items-center">
          <img className="w-10 rounded-lg" src="https://i.ibb.co.com/58CHhFy/logo.jpg" alt="" />
          <p className="text-3xl text-red-700 font-bold"> SpicyBites</p>
         </div>
  
        <div className="dropdown lg:hidden">
          <button tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
      </div>

      {/* Navbar Center for larger screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center justify-between lg:justify-end w-full lg:w-auto">
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={user?.photoURL}
                  alt="User Avatar"
                />
              </div>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="font-semibold text-md">
                <NavLink to="/addfood" activeClassName="text-red-500">Add Food</NavLink>
              </li>
              <li className="font-semibold text-md">
                <NavLink to="/myAddedFood" activeClassName="text-red-500">My Added Food</NavLink>
              </li>
              <li className="font-semibold text-md">
                <NavLink to="/purchasefood" activeClassName="text-red-500">My Ordered Food</NavLink>
              </li>
              <li>
                <button onClick={logOut} className="btn text-green-600">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="px-6 py-2 rounded text-white bg-red-900">Login</button>
          </Link>
        )}
      
      </div>
    </div>
  );
};

export default Navbar;
