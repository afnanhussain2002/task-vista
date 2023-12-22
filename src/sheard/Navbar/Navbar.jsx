import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const {users, logOut} = useContext(AuthContext)
  const handleLogout = () =>{
    logOut()
    Swal.fire({
      position: 'center',
      icon: 'success',
      iconColor: '#4834D4' ,
      title: 'logout succsessfully',
      showConfirmButton: false,
      timer: 1500
  });
  }
  const navItems = (
    <>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/about'}>About</Link>
      </li>
      <li>
        <Link to={'/feedback'}>Give us Feedback</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
                {navItems}
            </ul>
          </div>
          <a className=" text-xl text-violet-600 font-extrabold">Task Vista</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          {
            users  ? <a className="btn bg-violet-600 text-white" onClick={handleLogout}>Logout</a>
            :
            <Link to={'/login'} className="btn bg-violet-600 text-white">Login</Link>
          }
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
