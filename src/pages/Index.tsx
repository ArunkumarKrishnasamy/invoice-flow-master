import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { FileText, DollarSign, Clock, Forward } from "lucide-react";

const Index = () => {
  const stats = [
    {
      title: "Total Invoices",
      value: "156",
      icon: <FileText className="w-6 h-6 text-primary" />,
      trend: { value: 12, label: "vs last month" },
    },
    {
      title: "Pending Amount",
      value: "$45,231",
      icon: <DollarSign className="w-6 h-6 text-primary" />,
      trend: { value: -2, label: "vs last month" },
    },
    {
      title: "On Hold",
      value: "23",
      icon: <Clock className="w-6 h-6 text-primary" />,
      trend: { value: 8, label: "vs last month" },
    },
    {
      title: "Forwarded",
      value: "12",
      icon: <Forward className="w-6 h-6 text-primary" />,
      trend: { value: 4, label: "vs last month" },
    },
  ];

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-2">Welcome to your invoice management dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Index;