"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "./components/sidebar";
import { Header } from "./components/header";
import { WeatherCard } from "./components/weather-card";
import { WaterTankLevel } from "./components/water-tank";
import { EquipmentStatus } from "./components/equipment-status";
import { Settings } from "./components/settings";
import { MoistureSensors } from "./components/moisture-sensors";
import { Npk } from "./components/npk";
import { Valve } from "./components/valve";

export default function Dashboard() {
  const [activeComponent, setActiveComponent] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure localStorage is available
      if (localStorage.getItem("refreshInterval") === null) {
        localStorage.setItem("refreshInterval", "1000");
      }
    }
  }, []);

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "Weather":
        return <WeatherCard />;
      case "Equipment":
        return <EquipmentStatus />;
      case "Settings":
        return <Settings />;
      case "Water Tank":
        return <WaterTankLevel />;
      case "Moisture Sensors":
        return <MoistureSensors />;
      case "Npk":
        return <Npk />;
      default:
        return (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <WeatherCard />
            <EquipmentStatus />
            <WaterTankLevel />
            <MoistureSensors />
            <Npk />
            <Valve />
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        setActiveComponent={setActiveComponent}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4">
          <h2 className="mb-6 text-2xl font-bold">{activeComponent}</h2>
          {renderActiveComponent()}
        </main>
      </div>
    </div>
  );
}
