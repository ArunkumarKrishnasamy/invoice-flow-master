import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import Index from "./pages/Index";
import Invoices from "./pages/Invoices";
import EmailSetup from "./pages/EmailSetup";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/email-setup" element={<EmailSetup />} />
        </Routes>
      </DashboardLayout>
      <Toaster />
    </Router>
  );
}

export default App;