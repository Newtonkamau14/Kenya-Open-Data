import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar() {
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
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
