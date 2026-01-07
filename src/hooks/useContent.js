import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadCourse } from "../utils/jsonLoader";

export default function useContent() {
  const { courseId, lessonId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    loadCourse(courseId).then(setCourse);
  }, [courseId]);

  if (!course) return {};

  const lesson = course.content[lessonId] || course.content["home"];

  return { course, lesson };
}
