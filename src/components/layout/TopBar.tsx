import { Bell, Globe, User, FilePlus } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const TopBar = () => {
  return (
    <div className="h-16 border-b bg-white px-4 flex items-center justify-between">
      <div className="flex-1" />
      
      <div className="flex items-center space-x-4">
        {/* Create Invoice Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary/90">
                <FilePlus className="w-4 h-4 mr-2" />
                Create Invoice
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-64 space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    New Invoice
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Import Invoice
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Bulk Create
                  </Button>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Language Selector */}
        <Button variant="ghost" size="icon">
          <Globe className="w-5 h-5" />
        </Button>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
        </Button>

        {/* Profile */}
        <Avatar>
          <AvatarFallback className="bg-primary/10 text-primary">
            <User className="w-5 h-5" />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};