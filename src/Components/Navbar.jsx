
import {  NavLink } from "react-router-dom";

const Navbar = () => {

  const navLinks = (
    <>
      <li className="mr-2 font-semibold text-md">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="mr-2 font-semibold text-md">
        <NavLink to="/allfoods">All Foods,</NavLink>
      </li>
      <li className="mr-2 font-semibold text-md">
        <NavLink to="/register">Register</NavLink>
      </li>
      <li className="mr-2 font-semibold text-md">
        <NavLink to="/addTourist">. Gallery</NavLink>
      </li>
      <li className="mr-2 font-semibold text-md">
        <NavLink to="/mylist">My Profile</NavLink>
      </li>
      <li className="mr-2 font-semibold text-md">
        <NavLink to="/login">login</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-black  ">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
       <div className="flex items-center">
       <img className="w-8 h-8 rounded" src="https://i.ibb.co.com/vXT4k76/logo.jpg" alt="" />
       
       
       <div>
    
         <span className="font-bold text-xl ">Spicy</span><span className="text-xl ">Bites</span>
       </div>
       </div>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end flex flex-col lg:flex-row items-center">

        <button className="bg-orange-600 text-white px-4 rounded py-2 mt-2 lg:mt-0 lg:ml-4">
          01820339433
        </button>
        
      </div>
    </div>
  );
};

export default Navbar;
