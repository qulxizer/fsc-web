import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between border-b px-4 py-3">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold">Farm Management System</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Bell className="size-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="size-5" />
        </Button>
      </div>
    </header>
  );
}
