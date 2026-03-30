import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { MainLayout } from "./layouts/MainLayout";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Overview } from "./pages/dashboard/Overview";
import { Schedule } from "./pages/dashboard/Schedule";
import { Emergency } from "./pages/dashboard/Emergency";
import { Appointments } from "./pages/dashboard/Appointments";
import { AdminHome } from "./pages/admin/AdminHome";
import { AdminServices } from "./pages/admin/AdminServices";
import { AdminCustomers } from "./pages/admin/AdminCustomers";
import { AdminAppointments } from "./pages/admin/AdminAppointments";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          <Route path="/login" element={<Login />} />

          {/* Customer Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout role="customer" />}>
            <Route index element={<Overview />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="emergency" element={<Emergency />} />
            <Route path="appointments" element={<Appointments />} />
          </Route>

          {/* Admin Dashboard Routes */}
          <Route path="/admin" element={<DashboardLayout role="admin" />}>
            <Route index element={<AdminHome />} />
            <Route path="services" element={<AdminServices />} />
            <Route path="customers" element={<AdminCustomers />} />
            <Route path="appointments" element={<AdminAppointments />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
