import { Link } from "react-router-dom";

const FooterCourses = ({ title, courses }) => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-10 border-t border-[var(--blue-teal)]">
            <h3 className="text-base font-semibold text-white mb-5">
                {title}
            </h3>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
                {courses.map((course) => (
                    <Link
                        key={course.slug}
                        to={`/${course.slug}`}
                        className="
                            text-sm text-[var(--blueLight)]
                            hover:text-[var(--accent)]
                            transition
                        "
                    >
                        {course.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FooterCourses;
