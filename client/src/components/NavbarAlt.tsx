import { Link } from "react-router-dom";
import { useState } from "react";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import logo from "../assets/logo.svg";

function NavbarAlt() {
  const { logout } = useLogout();
  const { state } = useAuthContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const user = state.user;

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClick = () => {
    logout();
  };

  return (
    <header className="bg-white border-1 shadow">
      <nav className="flex justify-between">
        <div className="ml-8 sm:ml-2">
          <Link to="/app" className="font-bold text-xl">
            <img
              src={logo}
              alt="logo image"
              className="w-16 inline-block mr-2"
            />
            Kenya Open Data
          </Link>
        </div>
        <div className="my-auto mr-4 sm:mr-0">
          <ul className="flex items-center">
            <li>
              <button>
                <svg
                  className="w-6 h-6 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
                </svg>
              </button>
            </li>

            {user && (
              <li className="relative">
                <button
                  className="hover:bg-[#F4F4F5] px-4 rounded-md flex items-center"
                  onClick={toggleDropdown}
                >
                  <svg
                    className="p-2 w-10 h-10 inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                  </svg>
                  {user.username}
                  <svg
                    className={`p-2 w-10 h-10 inline-block transform transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                  </svg>
                </button>
                {/* Dropdown menu */}
                {dropdownOpen && (
                  <ul className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                    <li className="hover:bg-gray-100 px-4 py-2">
                      <Link to="/app/profile" className="block">
                        Profile
                      </Link>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2">
                      <Link to="/app/settings" className="block">
                        Settings
                      </Link>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2">
                      <button
                        onClick={handleClick}
                        className="text-start block w-full"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavbarAlt;
