import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { CoursesPage } from './pages/CoursesPage';
import { ResourceDetailPage } from './pages/ResourceDetailPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';
import { HelpCenterPage } from './pages/HelpCenterPage';
import { YouTubeLearningPage } from './pages/YouTubeLearningPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Main Navigation Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />

        {/* Syllabus-Driven YouTube Learning */}
        <Route path="/youtube-learning" element={<YouTubeLearningPage />} />
        <Route path="/youtube-learning/:courseId" element={<YouTubeLearningPage />} />
        <Route path="/youtube-learning/:courseId/semester/:semesterNum" element={<YouTubeLearningPage />} />
        <Route path="/youtube-learning/:courseId/semester/:semesterNum/subject/:subjectId" element={<YouTubeLearningPage />} />
        <Route path="/youtube-learning/:courseId/semester/:semesterNum/subject/:subjectId/unit/:unitNum" element={<YouTubeLearningPage />} />
        <Route path="/youtube-learning/:courseId/semester/:semesterNum/subject/:subjectId/unit/:unitNum/topic/:topicNum" element={<YouTubeLearningPage />} />

        {/* Academic Hierarchy Routing */}
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:courseId" element={<CoursesPage />} />
        <Route path="/courses/:courseId/semester/:semesterNum" element={<CoursesPage />} />
        <Route path="/courses/:courseId/semester/:semesterNum/subject/:subjectId" element={<CoursesPage />} />
        <Route path="/courses/:courseId/semester/:semesterNum/subject/:subjectId/unit/:unitNum" element={<CoursesPage />} />

        {/* Category Shortcuts */}
        <Route path="/syllabus" element={<Navigate to="/courses/mca?category=syllabus" replace />} />
        <Route path="/notes" element={<Navigate to="/courses/mca?category=notes" replace />} />
        <Route path="/question-papers" element={<Navigate to="/courses/mca?category=pyq" replace />} />
        <Route path="/pyq" element={<Navigate to="/courses/mca?category=pyq" replace />} />

        {/* Dedicated Resource Page */}
        <Route path="/resource/:resourceId" element={<ResourceDetailPage />} />

        {/* Auth & Profile */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />

        {/* Student Help Centre */}
        <Route path="/help" element={<HelpCenterPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
