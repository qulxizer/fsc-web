import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Home,
  Cloud,
  Wrench,
  Droplet,
  Settings,
  ChevronLeft,
  ChevronRight,
  Antenna,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: Home },
  { name: "Weather", icon: Cloud },
  { name: "Moisture Sensors", icon: Droplet },
  { name: "Equipment", icon: Wrench },
  { name: "Npk", icon: Antenna },
  { name: "Water Tank", icon: Droplet },
  { name: "Settings", icon: Settings },
];

interface SidebarProps {
  setActiveComponent: (name: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function Sidebar({
  setActiveComponent,
  isOpen,
  setIsOpen,
}: SidebarProps) {
  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-0 bg-black bg-opacity-50 md:hidden "
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 h-screen bg-background border-r transition-all duration-300 md:relative md:z-0
          ${isOpen ? "w-64 z-50" : "w-16 z-0"}
          ${isOpen ? "absolute" : "relative"} md:relative `}
      >
        <ScrollArea className="h-full">
          <div className="p-4">
            <div className="mb-4 flex items-center justify-between">
              {/* Only show title when expanded */}
              {isOpen && (
                <h2 className="text-xl font-bold text-nowrap">
                  Farm Dashboard
                </h2>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <ChevronLeft className="size-4" />
                ) : (
                  <ChevronRight className="size-4" />
                )}
              </Button>
            </div>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className={`w-full justify-start ${isOpen ? "" : "px-2"}`}
                  onClick={() => setActiveComponent(item.name)}
                >
                  <item.icon className={`size-4 ${isOpen ? "mr-2" : ""}`} />
                  {isOpen && <span>{item.name}</span>}
                </Button>
              ))}
            </nav>
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
