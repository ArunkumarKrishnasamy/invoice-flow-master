import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Save, Lock } from "lucide-react";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  processingEmail: z.string().email("Invalid email address"),
  inboxEmail: z.string().email("Invalid email address"),
  appPassword: z.string().min(8, "App password must be at least 8 characters"),
});

export const EmailSetup = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      processingEmail: "",
      inboxEmail: "",
      appPassword: "",
    },
  });

  const handleSaveEmailConfig = async (values: z.infer<typeof formSchema>) => {
    console.log("Saving email configuration:", values);
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
              Configure the email addresses and credentials for invoice processing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSaveEmailConfig)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="processingEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Processing Email Address</FormLabel>
                      <div className="flex items-center space-x-4">
                        <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        <FormControl>
                          <Input
                            placeholder="invoices@yourdomain.com"
                            className="flex-1"
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="inboxEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Inbox Email Address</FormLabel>
                      <div className="flex items-center space-x-4">
                        <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        <FormControl>
                          <Input
                            placeholder="inbox@gmail.com"
                            className="flex-1"
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="appPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>App Password</FormLabel>
                      <div className="flex items-center space-x-4">
                        <Lock className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Enter your app password"
                            className="flex-1"
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Button type="submit">
                    <Save className="h-4 w-4 mr-2" />
                    Save Configuration
                  </Button>
                </div>
              </form>
            </Form>
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