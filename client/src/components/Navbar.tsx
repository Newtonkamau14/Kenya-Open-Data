import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar() {


  return (
    <header className="bg-white border-1">
      <nav className="flex justify-between items-center w-[100%] mx-auto">
        <div>
          <Link className="flex items-center text-xl font-bold ml-8" to="/">
            <img
              src={logo}
              alt="logo image"
              className="w-16 inline-block mr-2"
            />
            Kenya Open Data
          </Link>
        </div>

        <div className="ml-8">
          <ul className="flex gap-10 mr-8">
            <li>
              <Link className="hover:text-gray-500 font-semibold" to="#">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 font-semibold" to="https://newtonkamau14.github.io/Kenya-Open-Data/">
                Documentation
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 font-semibold" to="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
