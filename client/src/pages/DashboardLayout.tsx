import { Outlet } from "react-router-dom";
import NavbarAlt from "../components/NavbarAlt";
import Sidebar from "../components/Sidebar";

function DashboardLayout() {
    return (
        <div className="flex flex-col h-screen"> {/* Set height to full screen */}
            <NavbarAlt />
            <div className="flex flex-row flex-1"> {/* Allow this div to take remaining space */}
                <Sidebar />
                <div className="flex-1 p-4 overflow-auto bg-[#F3F4F6]"> {/* Content area with overflow */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;
