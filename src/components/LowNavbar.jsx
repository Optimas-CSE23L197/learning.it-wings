import React, { useState } from "react";
import allCourses from "../data/AllCourses";
import { NavLink } from "react-router-dom";

const LowNavbar = () => {
    const [courseArray] = useState(allCourses);

    return (
        <nav className="w-full fixed z-50 bg-[var(--blue-medium)] border-b border-[var(--blue-teal)]">
            <div
                className="
          flex gap-4
          overflow-x-auto
          whitespace-nowrap
          px-4 py-1
          scrollbar-hide
        "
            >
                {courseArray.map((course) => (
                    <NavLink
                        to={course.path}
                        key={course.id}
                        className={({ isActive }) =>
                            `
              cursor-pointer
              px-4 py-2
              rounded-full
              text-xs font-medium
              transition-all duration-200
              ${isActive
                                ? "bg-[var(--accent)] text-black"
                                : "text-[var(--gray-light)] hover:bg-[var(--accent)] hover:text-black"
                            }
            `
                        }
                    >
                        {course.title}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default LowNavbar;
