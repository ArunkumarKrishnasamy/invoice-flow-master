import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { InvoiceCard, type Invoice } from "@/components/invoices/InvoiceCard";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Invoices = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data - in a real app, this would come from an API
  const [invoices] = useState<Invoice[]>([
    {
      id: "1",
      number: "INV-001",
      amount: 1500,
      date: "2024-02-15",
      company: "Tech Corp",
      status: "pending",
    },
    {
      id: "2",
      number: "INV-002",
      amount: 2300,
      date: "2024-02-14",
      company: "Design Studios",
      status: "pending",
    },
    {
      id: "3",
      number: "INV-003",
      amount: 950,
      date: "2024-02-13",
      company: "Marketing Pro",
      status: "pending",
    },
  ]);

  const handleApprove = (id: string) => {
    toast({
      title: "Invoice Approved",
      description: `Invoice #${id} has been approved and sent for payment.`,
    });
  };

  const handleHold = (id: string) => {
    toast({
      title: "Invoice On Hold",
      description: `Invoice #${id} has been put on hold.`,
    });
  };

  const handleForward = (id: string) => {
    toast({
      title: "Invoice Forwarded",
      description: `Invoice #${id} has been forwarded to admin for review.`,
    });
  };

  const filteredInvoices = invoices.filter((invoice) =>
    invoice.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    invoice.number.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900">Invoices</h1>
        <p className="text-gray-500 mt-2">Manage and process incoming invoices</p>
      </div>

      <div className="mb-6">
        <Input
          type="search"
          placeholder="Search invoices..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredInvoices.map((invoice) => (
          <InvoiceCard
            key={invoice.id}
            invoice={invoice}
            onApprove={handleApprove}
            onHold={handleHold}
            onForward={handleForward}
          />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Invoices;