import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import Index from "./pages/Index";
import Invoices from "./pages/Invoices";
import EmailSetup from "./pages/EmailSetup";
import Login from "./pages/Login";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <DashboardLayout>
              <Routes>
                <Route index element={<Navigate to="/invoices" replace />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/email-setup" element={<EmailSetup />} />
              </Routes>
            </DashboardLayout>
          }
        />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;