import { Link,useLocation } from "react-router-dom";
import space_dashboard from "../assets/space_dashboard.svg";
import list from "../assets/list.svg";
import group from "../assets/group.svg";
import credit from "../assets/credit.svg";


function Sidebar() {
  const location = useLocation();

  return (
    <>
      <aside className="bg-[#FFFFFF] border-1 shadow-lg w-1/6 min-h-screen flex flex-col justify-between">
        <ul className="flex flex-col items-start mt-3 ">
          <li
            className={`flex items-center w-full text-black rounded-md ${
              location.pathname === "/app" ? "bg-[#f4f4f5]" : "hover:bg-[#f4f4f5]"
            }`}
          >
            <img src={space_dashboard} alt="dashboard" className="mx-2 inline-block" />
            <Link to="/app" className="text-lg w-full py-2 px-4">
              Dashboard
            </Link>
          </li>

          <li
            className={`flex items-center w-full text-black rounded-md ${
              location.pathname === "/app/api-key"
                ? "bg-[#f4f4f5]"
                : "hover:bg-[#f4f4f5]"
            }`}
          >
            <img src={list} alt="api" className="mx-2 inline-block" />
            <Link to="/app/api-key" className="text-lg w-full py-2 px-4">
              API
            </Link>
          </li>

          <li
            className={`flex items-center w-full text-black rounded-md ${
              location.pathname === "/app/support"
                ? "bg-[#f4f4f5]"
                : "hover:bg-[#f4f4f5]"
            }`}
          >
            <img src={group} alt="support" className="mx-2 inline-block" />
            <Link to="/app/support" className="text-lg w-full py-2 px-4">
              Support
            </Link>
          </li>

          <li
            className={`flex items-center w-full text-black rounded-md ${
              location.pathname === "/app/credits"
                ? "bg-[#f4f4f5]"
                : "hover:bg-[#f4f4f5]"
            }`}
          >
            <img src={credit} alt="credits" className="mx-2 inline-block" />
            <Link to="/app/credits" className="text-lg w-full py-2 px-4">
              Credits
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;

