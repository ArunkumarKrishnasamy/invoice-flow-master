import { useState } from "react";
import { InvoiceCard, type Invoice } from "@/components/invoices/InvoiceCard";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, SlidersHorizontal } from "lucide-react";

const Invoices = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Mock data - in a real app, this would come from an API with proper pagination
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
      status: "approved",
    },
    {
      id: "3",
      number: "INV-003",
      amount: 950,
      date: "2024-02-13",
      company: "Marketing Pro",
      status: "held",
    },
    {
      id: "4",
      number: "INV-004",
      amount: 3200,
      date: "2024-02-12",
      company: "Global Services",
      status: "forwarded",
    },
    {
      id: "5",
      number: "INV-005",
      amount: 1800,
      date: "2024-02-11",
      company: "Innovation Labs",
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

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch = 
      invoice.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.number.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || invoice.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredInvoices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedInvoices = filteredInvoices.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Invoices</h1>
          <p className="text-gray-500 mt-2">Manage and process incoming invoices</p>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="search"
              placeholder="Search invoices..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-[300px]"
            />
          </div>
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-gray-400" />
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="held">Held</SelectItem>
                <SelectItem value="forwarded">Forwarded</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-280px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {paginatedInvoices.map((invoice) => (
            <InvoiceCard
              key={invoice.id}
              invoice={invoice}
              onApprove={handleApprove}
              onHold={handleHold}
              onForward={handleForward}
            />
          ))}
        </div>
      </ScrollArea>

      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={() => setCurrentPage(page)}
                    isActive={currentPage === page}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default Invoices;