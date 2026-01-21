import Navbar from "../components/Navbar";
import LowNavbar from "../components/LowNavbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const HEADER_HEIGHT = 96; // px

export default function ContentPage() {
    return (
        <div className="min-h-screen bg-[var(--blue-dark)] text-[var(--gray-light)]">
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
                {/* ===== Sidebar ===== */}
                <aside
                    className="
                        w-[260px]
                        shrink-0
                        h-[calc(100vh-96px)]
                        border-r border-[var(--blue-teal)]
                    "
                >
                    <Sidebar />
                </aside>

                {/* ===== Main Content ===== */}
                <main
                    className="
                        flex-1
                        h-[calc(100vh-96px)]
                        overflow-y-auto
                        scrollbar-hide
                        flex
                        flex-col
                    "
                >
                    <div
                        className="
                            flex-1
                            max-w-5xl mx-auto
                            px-4 sm:px-6 lg:px-10
                            py-6 sm:py-8
                        "
                    >
                        <Outlet />
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}