import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import useContent from "../hooks/useContent";

const HEADER_HEIGHT = "96px";

export default function Sidebar() {
    const { courseId } = useParams();
    const { course } = useContent();
    const [open, setOpen] = useState(false);

    if (!course) return null;

    return (
        <>
            {/* ===== Mobile / Tablet Toggle Button ===== */}
            <button
                onClick={() => setOpen(!open)}
                className="
          fixed
          top-[96px] left-4
          z-50
          lg:hidden
          bg-[var(--accent)]
          text-black
          w-10 h-10
          rounded-md
          font-bold text-xl
          flex items-center justify-center
          shadow
        "
                aria-label="Toggle sidebar"
            >
                {open ? "✕" : "☰"}
            </button>

            {/* ===== Sidebar ===== */}
            <aside
                className={`
          fixed lg:static
          top-[96px] left-0
          z-40
          w-72
          h-[calc(100vh-96px)]
          bg-[var(--blue-dark)]
          text-[var(--white)]
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          overflow-y-auto
        `}
            >
                {/* Sidebar Header */}
                <div className="sticky top-0 bg-[var(--blue-medium)] z-10">
                    <h2 className="px-6 py-4 text-xl font-bold tracking-wide">
                        {course.course.title}
                    </h2>
                </div>

                {/* Sections */}
                <nav className="pb-10">
                    {course.sections.map((section, i) => (
                        <div key={i} className="mt-4">
                            <p className="px-6 py-2 text-sm font-bold uppercase text-[var(--purple-soft)] tracking-wider">
                                {section.title}
                            </p>

                            {section.lessons.map((lesson) => (
                                <NavLink
                                    key={lesson.id}
                                    to={`/${courseId}/${lesson.id}`}
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        `
                      block mx-3 my-1 px-4 py-2 rounded-md text-[15px] font-medium
                      transition-all duration-200
                      ${isActive
                                            ? "bg-[var(--accent)] text-black font-semibold shadow"
                                            : "text-[var(--gray-light)] hover:bg-[var(--blue-teal)]"
                                        }
                    `
                                    }
                                >
                                    {lesson.title}
                                </NavLink>
                            ))}
                        </div>
                    ))}
                </nav>
            </aside>

            {/* ===== Overlay ===== */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                />
            )}
        </>
    );
}
