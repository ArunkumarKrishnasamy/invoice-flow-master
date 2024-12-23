import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8 animate-fade-in">
          {children}
        </main>
      </div>
    </div>
  );
};