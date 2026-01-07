import courses from "../data/courses.json";

export async function loadCourse(courseId) {
  for (const group of Object.values(courses)) {
    if (group.courses[courseId]) {
      const path = group.courses[courseId].file;
      const module = await import(`../data/${path}`);
      return module.default;
    }
  }
  return null;
}
