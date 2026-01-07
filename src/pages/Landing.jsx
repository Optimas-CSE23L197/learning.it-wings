import Navbar from "../components/Navbar";
import LowNavbar from "../components/LowNavbar";
import { Link } from "react-router-dom";

const HEADER_HEIGHT = "96px";

export default function Landing() {
    return (
        <div className="min-h-screen bg-[var(--blue-dark)] text-[var(--white)] overflow-hidden">
            {/* ===== Fixed Header ===== */}
            <header className="fixed top-0 left-0 w-full z-50">
                <Navbar />
                <LowNavbar />
            </header>

            {/* ===== Page Content ===== */}
            <main
                className="pt-[96px]"
            >
                {/* Hero Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-28">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                            Learn Modern Development
                            <span className="block text-[var(--accent)]">
                                Step by Step
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-[var(--gray-light)] mb-8 leading-relaxed">
                            Master Frontend, Backend, JavaScript, and AI with
                            structured lessons and real-world examples.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/frontend"
                                className="px-6 py-3 rounded-full bg-[var(--accent)] text-black font-semibold hover:opacity-90 transition"
                            >
                                Start Learning
                            </Link>

                            <Link
                                to="/"
                                className="px-6 py-3 rounded-full border border-[var(--blue-teal)] text-[var(--gray-light)] hover:bg-[var(--blue-medium)] transition"
                            >
                                Browse Courses
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="border-t border-[var(--blue-teal)]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    title: "Structured Learning",
                                    desc: "Well-organized lessons that build concepts step by step.",
                                },
                                {
                                    title: "Real-World Examples",
                                    desc: "Practical explanations you can apply immediately.",
                                },
                                {
                                    title: "Beginner Friendly",
                                    desc: "Clear explanations without unnecessary complexity.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="p-6 rounded-xl bg-[var(--blue-medium)] border border-[var(--blue-teal)]"
                                >
                                    <h3 className="text-lg font-bold mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-[var(--gray-light)] leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
