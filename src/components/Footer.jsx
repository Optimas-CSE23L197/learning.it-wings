import React from "react";
// import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import FooterList from "./FooterList";
import FooterCourses from "./FooterCourses";

const Footer = () => {
    return (
        <footer className="bg-[var(--blue-dark)] text-[var(--gray-light)] relative z-50 bottom-0 right-0">

            {/* ================= TOP FOOTER ================= */}
            <div className="max-w-7xl mx-auto px-6 py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* BRAND */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-3">
                            Wings<span className="text-[var(--accent)]">Academy</span>
                        </h2>

                        <p className="text-[var(--blueLight)] text-sm leading-relaxed mb-6">
                            Transforming education with modern learning tools and
                            innovative knowledge pathways.
                        </p>

                        {/* SOCIALS */}
                        <div className="flex items-center gap-4">
                            {[Facebook, Instagram, Linkedin, Twitter, Youtube].map(
                                (Icon, i) => (
                                    <button
                                        key={i}
                                        className="
                                            p-2 rounded-full border border-[var(--blueLight)]
                                            hover:bg-[var(--accent)]
                                            hover:border-[var(--accent)]
                                            hover:text-white transition
                                        "
                                    >
                                        <Icon size={18} />
                                    </button>
                                )
                            )}
                        </div>
                    </div>

                    {/* COMPANY */}
                    <FooterList title="Company" items={companyLinks} />

                    {/* PROGRAMS */}
                    <FooterList title="Programs" items={programLinks} />

                    {/* SUPPORT */}
                    <FooterList title="Support" items={supportLinks} />
                </div>
            </div>

            <Divider />

            {/* ================= COURSES ================= */}
            <FooterCourses title="Frontend Development" courses={frontendCourses} />
            <FooterCourses title="Backend Development" courses={backendCourses} />
            <FooterCourses title="JavaScript Ecosystem" courses={javascriptCourses} />
            <FooterCourses title="AI & Data Science" courses={aiCourses} />

            <Divider />

            {/* ================= BOTTOM ================= */}
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between gap-2 text-sm text-[var(--blueLight)]">
                <p>© 2026 WingsAcademy. All rights reserved.</p>
                <p>Version 1.0</p>
            </div>
        </footer>
    );
};

export default Footer;

const Divider = () => (
    <div className="border-t border-[var(--blue-teal)]" />
);


const backendCourses = [
    { name: "Python", slug: "python" },
    { name: "SQL", slug: "sql" },
    { name: "MySQL", slug: "mysql" },
    { name: "PHP", slug: "php" },
    { name: "Java", slug: "java" },
    { name: "C", slug: "c" },
    { name: "C++", slug: "cpp" },
    { name: "C#", slug: "csharp" },
    { name: "R", slug: "r" },
    { name: "Kotlin", slug: "kotlin" },
    { name: "Rust", slug: "rust" },
    { name: "Go", slug: "go" },
    { name: "Django", slug: "django" },
    { name: "TypeScript", slug: "typescript" },
    { name: "ASP.NET", slug: "asp-net" },
    { name: "Node.js", slug: "node-js" },
    { name: "Raspberry Pi", slug: "raspberry-pi" },
    { name: "Swift", slug: "swift" },
    { name: "Git", slug: "git" },
    { name: "MongoDB", slug: "mongodb" },
    { name: "AWS Cloud", slug: "aws-cloud" },
    { name: "XML", slug: "xml" }
];

const javascriptCourses = [
    { name: "JavaScript", slug: "javascript" },
    { name: "React", slug: "react" },
    { name: "jQuery", slug: "jquery" },
    { name: "Angular", slug: "angular" },
    { name: "AngularJS", slug: "angularjs" },
    { name: "JSON", slug: "json" },
    { name: "AJAX", slug: "ajax" }
];

const aiCourses = [
    { name: "AI Basics", slug: "ai-basics" },
    { name: "DSA", slug: "dsa" },
    { name: "Data Science", slug: "data-science" },
    { name: "NumPy", slug: "numpy" },
    { name: "Pandas", slug: "pandas" },
    { name: "Google Sheets", slug: "google-sheets" }
];

const frontendCourses = [
    { name: "HTML", slug: "html" },
    { name: "CSS", slug: "css" },
    { name: "Responsive Web Design", slug: "responsive-web-design" },
    { name: "Bootstrap", slug: "bootstrap" },
    { name: "Colors", slug: "colors" },
    { name: "Icons", slug: "icons" },
    { name: "Canvas", slug: "canvas" },
    { name: "Graphics", slug: "graphics" },
    { name: "How To", slug: "how-to" }
];
const companyLinks = [
    "About Us",
    "Careers",
    "Contact",
    "Press & Media",
    "Partnerships"
];

const programLinks = [
    "Web Development",
    "Data Analytics",
    "UI/UX Design",
    "Cloud Computing",
    "Cybersecurity"
];

const supportLinks = [
    "Help Center",
    "Terms of Use",
    "Privacy Policy",
    "Refund Policy",
    "Community Guidelines"
];