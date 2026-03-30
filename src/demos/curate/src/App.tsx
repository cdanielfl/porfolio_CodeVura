import { Routes, Route, Navigate } from 'react-router-dom';
import { PublicLayout } from './layouts/PublicLayout';
import { DashboardLayout } from './layouts/DashboardLayout';
import { LandingPage } from './pages/LandingPage';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { Dashboard } from './pages/Dashboard';
import { ResumeList } from './pages/ResumeList';
import { TemplateSelection } from './pages/TemplateSelection';
import { AIOnboarding } from './pages/AIOnboarding';
import { ResumeBuilder } from './pages/ResumeBuilder';
import { ResumePreview } from './pages/ResumePreview';
import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Route>

      {/* Dashboard Routes */}
      <Route element={<DashboardLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="resumes" element={<ResumeList />} />
        <Route path="templates" element={<TemplateSelection />} />
        <Route path="ai-onboarding" element={<AIOnboarding />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      {/* Full-screen Editor/Preview Routes */}
      <Route path="builder/:id" element={<ResumeBuilder />} />
      <Route path="preview/:id" element={<ResumePreview />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="." replace />} />
    </Routes>
  );
}
