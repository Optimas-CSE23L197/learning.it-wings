import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";

function Navbar() {
    return (
        <header className="sticky top-0 left-0 z-50">
            <nav
                className="
          w-full
          bg-[var(--blue-dark)]
          border-b border-[var(--blue-teal)]
        "
            >
                <div
                    className="
            max-w-7xl mx-auto
            px-4 sm:px-6 lg:px-10
            h-12
            flex items-center justify-between
          "
                >
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="IT-Wings Webtech Solutions"
                            className="h-10 w-auto"
                        />
                        <span className="hidden sm:block text-lg font-bold text-[var(--white)] tracking-wide">
                            IT-Wings
                        </span>
                    </Link>

                    {/* Navigation */}
                    <ul className="hidden md:flex items-center gap-8">
                        {["All", "Frontend", "JavaScript", "Backend", "AI"].map((item) => (
                            <li key={item}>
                                <Link
                                    to="/"
                                    className="
                    relative
                    text-sm font-medium
                    text-[var(--gray-light)]
                    hover:text-[var(--accent)]
                    transition-colors
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-0 after:bg-[var(--accent)]
                    after:transition-all after:duration-300
                    hover:after:w-full
                  "
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Action Button */}
                    <div className="hidden md:block">
                        <Link
                            to="/login"
                            className="
                px-5 py-2
                rounded-full
                text-sm font-semibold
                bg-[var(--accent)]
                text-black
                hover:opacity-90
                transition
              "
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
