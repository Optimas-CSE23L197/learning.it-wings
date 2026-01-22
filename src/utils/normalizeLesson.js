// src/utils/normalizeLesson.js
export function normalizeLesson(rawLesson) {
  if (!rawLesson) return null;

  const normalizeExamples = (examples) => {
    // examples: ["string"] (old supported)
    if (Array.isArray(examples) && typeof examples[0] === "string") {
      return examples;
    }

    // examples: [{ heading, description, code, result }]
    if (Array.isArray(examples) && typeof examples[0] === "object") {
      return examples.map((ex) => {
        const title = ex.heading ? `${ex.heading}\n` : "";
        const desc = ex.description ? `${ex.description}\n\n` : "";
        const code = ex.code ? `${ex.code}\n` : "";
        const result = ex.result ? `\nResult:\n${ex.result}` : "";

        return `${title}${desc}${code}${result}`.trim();
      });
    }

    return null;
  };

  const normalizeSection = (sec) => {
    // example can be string OR object
    const example =
      typeof sec.example === "string"
        ? sec.example
        : sec.example?.code
          ? sec.example.code
          : null;

    // examples can be array of string OR array of objects
    const examples = normalizeExamples(sec.examples);

    // table can be array OR object {headers, rows}
    let table = null;

    if (Array.isArray(sec.table) && sec.table.length > 0) {
      const headers = Object.keys(sec.table[0] || {});
      const rows = sec.table.map((row) => headers.map((h) => row?.[h] ?? ""));
      table = { headers, rows };
    } else if (
      sec.table &&
      Array.isArray(sec.table.headers) &&
      Array.isArray(sec.table.rows)
    ) {
      table = sec.table;
    }

    // exercise: supports both formats
    // 1) options style: {question, options: []}
    // 2) code style: {question, code, answer}
    let exercise = null;

    if (sec.exercise) {
      if (Array.isArray(sec.exercise.options)) {
        exercise = {
          question: sec.exercise.question || "",
          options: sec.exercise.options,
        };
      } else if (typeof sec.exercise.code === "string") {
        // convert code exercise into a simple "question + 1 code line"
        exercise = {
          question: `${sec.exercise.question || "Exercise"}\n\n${sec.exercise.code}`,
          options: [],
        };
      }
    }

    return {
      heading: sec.heading || sec.title || "",
      paragraphs: Array.isArray(sec.paragraphs) ? sec.paragraphs : [],

      list: Array.isArray(sec.list) ? sec.list : null,
      cta: typeof sec.cta === "string" ? sec.cta : null,

      example,
      examples,

      code: typeof sec.code === "string" ? sec.code : null,
      note: typeof sec.note === "string" ? sec.note : null,

      table,
      exercise,
    };
  };

  return {
    title: rawLesson.title || "Untitled Lesson",
    paragraphs: Array.isArray(rawLesson.paragraphs) ? rawLesson.paragraphs : [],
    sections: Array.isArray(rawLesson.sections)
      ? rawLesson.sections.map(normalizeSection)
      : [],
  };
}
