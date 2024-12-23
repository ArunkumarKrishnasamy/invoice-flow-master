import { motion } from "framer-motion";
import { Check, Clock, Forward } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

export interface Invoice {
  id: string;
  number: string;
  amount: number;
  date: string;
  company: string;
  status: "pending" | "approved" | "held" | "forwarded";
}

interface InvoiceCardProps {
  invoice: Invoice;
  onApprove: (id: string) => void;
  onHold: (id: string) => void;
  onForward: (id: string) => void;
}

export const InvoiceCard = ({
  invoice,
  onApprove,
  onHold,
  onForward,
}: InvoiceCardProps) => {
  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    approved: "bg-green-100 text-green-800",
    held: "bg-orange-100 text-orange-800",
    forwarded: "bg-purple-100 text-purple-800",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="glass-card p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{invoice.company}</h3>
            <p className="text-sm text-gray-500">Invoice #{invoice.number}</p>
          </div>
          <span
            className={`status-pill ${statusColors[invoice.status]}`}
          >
            {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
          </span>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-500">Amount</span>
            <span className="text-sm font-medium text-gray-900">
              ${invoice.amount.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Date</span>
            <span className="text-sm text-gray-900">{invoice.date}</span>
          </div>
        </div>

        <div className="flex gap-2 justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onHold(invoice.id)}
            disabled={invoice.status !== "pending"}
          >
            <Clock className="w-4 h-4 mr-2" />
            Hold
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onForward(invoice.id)}
            disabled={invoice.status !== "pending"}
          >
            <Forward className="w-4 h-4 mr-2" />
            Forward
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => onApprove(invoice.id)}
            disabled={invoice.status !== "pending"}
          >
            <Check className="w-4 h-4 mr-2" />
            Approve
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};