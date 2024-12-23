import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Save } from "lucide-react";

export const EmailSetup = () => {
  const { toast } = useToast();

  const handleSaveEmailConfig = async () => {
    toast({
      title: "Email Configuration Saved",
      description: "Your email settings have been updated successfully.",
    });
  };

  return (
    <div className="container mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Email Configuration</h1>
        <p className="text-muted-foreground mt-2">
          Configure email settings for invoice processing
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Email Processing Settings</CardTitle>
            <CardDescription>
              Configure the email address that will receive invoice attachments
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="invoices@yourdomain.com"
                  className="w-full"
                />
              </div>
              <Button onClick={handleSaveEmailConfig}>
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Email Processing Rules</CardTitle>
            <CardDescription>
              Configure how incoming emails and attachments are processed
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">Allowed File Types</h3>
                  <p className="text-sm text-muted-foreground">
                    PDF, PNG, JPEG, DOC, DOCX
                  </p>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">Maximum File Size</h3>
                  <p className="text-sm text-muted-foreground">10 MB per file</p>
                </div>
                <Button variant="outline">Configure</Button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">Auto-Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Automatically process incoming invoices
                  </p>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmailSetup;