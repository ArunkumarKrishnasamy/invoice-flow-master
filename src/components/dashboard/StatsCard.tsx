import { Card } from "../ui/card";
import { motion } from "framer-motion";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    label: string;
  };
}

export const StatsCard = ({ title, value, icon, trend }: StatsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="glass-card p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h3 className="text-2xl font-semibold text-gray-900 mt-2">{value}</h3>
            {trend && (
              <p className="text-sm mt-2">
                <span className={trend.value >= 0 ? "text-green-600" : "text-red-600"}>
                  {trend.value >= 0 ? "↑" : "↓"} {Math.abs(trend.value)}%
                </span>
                <span className="text-gray-500 ml-1">{trend.label}</span>
              </p>
            )}
          </div>
          <div className="p-3 bg-primary/10 rounded-lg">
            {icon}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};