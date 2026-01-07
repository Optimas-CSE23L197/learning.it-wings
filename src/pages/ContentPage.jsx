import Navbar from "../components/Navbar";
import LowNavbar from "../components/LowNavbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const HEADER_HEIGHT = "96px"; // Navbar (48px) + LowNavbar (~48px)

export default function ContentPage() {
    return (
        <div className="h-screen bg-[var(--blue-dark)] text-[var(--gray-light)] overflow-hidden">
            {/* ===== Fixed Header ===== */}
            <header className="fixed top-0 left-0 w-full z-50">
                <Navbar />
                <LowNavbar />
            </header>

            {/* ===== Body ===== */}
            <div
                className="flex"
                style={{ paddingTop: HEADER_HEIGHT }}
            >
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <main
                    className="
            flex-1
            h-[calc(100vh-96px)]
            overflow-y-auto
          "
                >
                    <div
                        className="
              max-w-5xl mx-auto
              px-4 sm:px-6 lg:px-10
              py-6 sm:py-8
            "
                    >
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}
