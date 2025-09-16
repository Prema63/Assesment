"use client";

import React, { useState } from "react";
import Link from "next/link";
import Loader from "./Loader";
import {
  LayoutDashboard,
  Users,
  Calendar,
  Bell,
  Settings,
  CreditCard,
  ArrowLeftRight,
  Car,
  LogOut,
  Menu,
  X,
} from "lucide-react";

export default function CarRentalSidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Drivers", icon: Users, path: "/driver" },
    { name: "Bookings", icon: Calendar, path: "/booking" },
    { name: "Notifications", icon: Bell, path: "/notification" },
    { name: "Settings", icon: Settings, path: "/setting" },
  ];

  const reportItems = [
    { name: "Payment Details", icon: CreditCard, path: "/payment-detail" },
    { name: "Transactions", icon: ArrowLeftRight, path: "/transactions" },
    { name: "Car Report", icon: Car, path: "/car-report" },
  ];

  const MenuItem = ({ item, isActive, onClick }) => (
    <Link
      href={item.path}
      onClick={() => onClick(item.name)}
      className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-200 hover:bg-gray-700 ${
        isActive
          ? "bg-blue-600 text-white border-r-2 border-blue-400"
          : "text-gray-300 hover:text-white"
      }`}
    >
      <item.icon className="h-5 w-5 flex-shrink-0" />
      <span className="font-medium">{item.name}</span>
    </Link>
  );

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    setIsMobileMenuOpen(false);
  };

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">V</span>
          </div>
          <span className="text-white text-xl font-bold">CAR RENT</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {menuItems.map((item) => (
          <MenuItem
            key={item.name}
            item={item}
            isActive={activeItem === item.name}
            onClick={handleItemClick}
          />
        ))}
      </nav>

      {/* Report Section */}
      <div className="px-2 py-4 border-t border-gray-700">
        <div className="px-4 py-2">
          <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">
            Report
          </span>
        </div>
        <div className="space-y-1">
          {reportItems.map((item) => (
            <MenuItem
              key={item.name}
              item={item}
              isActive={activeItem === item.name}
              onClick={handleItemClick}
            />
          ))}
        </div>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-gray-700">
        <Link
          href="/logout"
          className="w-full flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200 rounded-lg"
        >
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Logout</span>
        </Link>
      </div>
    </>
  );

  return (
    <div>
      {/* Mobile Menu Button - Moved to Right Side */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-gray-800 text-white rounded-md shadow-lg"
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
    fixed inset-y-0 left-0 z-40 w-64 h-screen bg-gray-800 transform transition-transform duration-300 ease-in-out
    lg:translate-x-0 lg:static lg:inset-0
    ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
  `}
      >
        <div className="flex flex-col h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900">
          <SidebarContent />
        </div>
      </div>
    </div>
  );
}
