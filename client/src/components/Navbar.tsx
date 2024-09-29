import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import logo from "../assets/logo.svg";

function Navbar() {
  const {
    state: { user },
  } = useAuthContext();

  return (
    <header className="bg-white border-1">
      <nav className="flex justify-around items-center w-[92%] mx-auto">
        <div className="mr-8 items-start">
          <Link className="flex items-center text-xl font-bold" to="/">
            <img
              src={logo}
              alt="logo image"
              className="w-16 inline-block mr-2"
            />
            Kenya Open Data
          </Link>
        </div>

        <div className="ml-8">
          <ul className="flex gap-[4vw]">
            <li>
              <Link className="hover:text-gray-500" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" to="/faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" to="/terms">
                Terms
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>

        <ul className="flex gap-4">
          {user ? (
            <li className="items-center bg-[#357de8] text-white px-4 py-2 rounded-md hover:bg-[#7298ee]">
              <Link
                to="/app"
              >
                App
                <svg
                  className="w-6 h-6 text-white ml-3 inline-block fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#fffff"
                >
                  <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                </svg>
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link className="items-end" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className="bg-[#357de8] text-white px-4 py-2 rounded-md hover:bg-[#7298ee]"
                  to="/signup"
                >
                  Sign up
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
