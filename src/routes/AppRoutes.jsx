import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import ContentPage from "../pages/ContentPage";
import LessonPage from "../pages/LessonPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />

            <Route path="/:courseId" element={<ContentPage />}>
                <Route index element={<LessonPage />} />
                <Route path=":lessonId" element={<LessonPage />} />
            </Route>
        </Routes>
    );
}
