import { ArrowLeft, ArrowRight } from "lucide-react";
import useContent from "../hooks/useContent";
import { normalizeLesson } from "../utils/normalizeLesson";

export default function LessonPage() {
    const { lesson: rawLesson } = useContent();
    const lesson = normalizeLesson(rawLesson);

    if (!lesson) {
        return (
            <div className="flex items-center justify-center min-h-[60vh] text-center">
                <p className="text-lg font-semibold text-[var(--accent)]">
                    Lesson not found
                </p>
            </div>
        );
    }

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10 relative z-40">
            {/* ===== Header ===== */}
            <div className="mb-10">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--white)]">
                    {lesson.title}
                </h1>

                <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--blue-medium)] border border-[var(--blue-teal)] text-[var(--gray-light)] hover:bg-[var(--accent)] hover:text-black transition">
                        <ArrowLeft className="w-5 h-5" />
                        Previous
                    </button>

                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent)] text-black font-semibold hover:opacity-90 transition">
                        Next
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="border-t border-[var(--blue-teal)] mb-8" />

            {/* ===== Simple Lesson ===== */}
            {lesson.paragraphs?.map((p, i) => (
                <p
                    key={i}
                    className="mb-6 text-base sm:text-lg leading-relaxed text-[var(--gray-light)]"
                >
                    {p}
                </p>
            ))}

            {/* ===== Sectioned Lesson ===== */}
            {lesson.sections?.map((sec, i) => (
                <section
                    key={i}
                    className="mb-12 space-y-4 text-[var(--gray-light)]"
                >
                    {sec.heading && (
                        <h2 className="text-xl sm:text-2xl font-bold text-[var(--white)]">
                            {sec.heading}
                        </h2>
                    )}

                    {sec.paragraphs?.map((p, idx) => (
                        <p key={idx} className="leading-relaxed">
                            {p}
                        </p>
                    ))}

                    {/* List */}
                    {Array.isArray(sec.list) && sec.list.length > 0 && (
                        <ul className="list-disc ml-6 space-y-1">
                            {sec.list.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    )}

                    {/* Example */}
                    {typeof sec.example === "string" && sec.example.trim() !== "" && (
                        <pre className="bg-[var(--blue-medium)] p-4 rounded-lg overflow-x-auto text-sm text-white">
                            <code>{sec.example}</code>
                        </pre>
                    )}

                    {/* Multiple Examples */}
                    {Array.isArray(sec.examples) &&
                        sec.examples.map((ex, idx) => (
                            <pre
                                key={idx}
                                className="bg-[var(--blue-medium)] p-4 rounded-lg overflow-x-auto text-sm text-white"
                            >
                                <code>{ex}</code>
                            </pre>
                        ))}

                    {/* Code */}
                    {typeof sec.code === "string" && sec.code.trim() !== "" && (
                        <pre className="bg-black/60 p-4 rounded-lg overflow-x-auto text-sm text-green-400">
                            <code>{sec.code}</code>
                        </pre>
                    )}

                    {/* Table (SAFE) */}
                    {sec.table?.headers?.length > 0 && sec.table?.rows?.length > 0 && (
                        <div className="overflow-x-auto">
                            <table className="w-full border border-[var(--blue-teal)] text-sm">
                                <thead className="bg-[var(--blue-medium)]">
                                    <tr>
                                        {sec.table.headers.map((h, idx) => (
                                            <th
                                                key={idx}
                                                className="px-3 py-2 border border-[var(--blue-teal)] text-left"
                                            >
                                                {h}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {sec.table.rows.map((row, rIdx) => (
                                        <tr key={rIdx}>
                                            {row.map((cell, cIdx) => (
                                                <td
                                                    key={cIdx}
                                                    className="px-3 py-2 border border-[var(--blue-teal)]"
                                                >
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Note */}
                    {typeof sec.note === "string" && sec.note.trim() !== "" && (
                        <div className="border-l-4 border-[var(--accent)] bg-[var(--blue-medium)] p-4 rounded">
                            {sec.note}
                        </div>
                    )}

                    {sec.exercise?.question && (
                        <div className="bg-[var(--blue-medium)] p-4 rounded-lg space-y-2">
                            <p className="font-semibold text-[var(--white)]">Exercise:</p>
                            <p className="whitespace-pre-line">{sec.exercise.question}</p>

                            {Array.isArray(sec.exercise.options) && sec.exercise.options.length > 0 && (
                                <ul className="list-disc ml-6">
                                    {sec.exercise.options.map((opt, idx) => (
                                        <li key={idx}>{opt}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}

                    {/* CTA */}
                    {typeof sec.cta === "string" && sec.cta.trim() !== "" && (
                        <button className="mt-2 px-5 py-2.5 rounded-full bg-[var(--accent)] text-black font-semibold hover:opacity-90 transition">
                            {sec.cta}
                        </button>
                    )}
                </section>
            ))}
        </main>
    );
}
