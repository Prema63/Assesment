"use client";

import React, { useState, useEffect } from "react";
import { Search, Bell, Filter, ChevronDown, User } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState("Nov 20, 2022");
  const [selectedTime, setSelectedTime] = useState("10 AM");
  const [selectedCar, setSelectedCar] = useState("Car number");
  const [windowWidth, setWindowWidth] = useState(1024); // Default width
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  // Sample data for the chart
  const earningsData = [
    { month: "May", current: 150000, previous: 120000 },
    { month: "Jun", current: 180000, previous: 140000 },
    { month: "Jul", current: 200000, previous: 160000 },
    { month: "Aug", current: 220000, previous: 180000 },
    { month: "Sep", current: 240000, previous: 200000 },
    { month: "Oct", current: 250000, previous: 220000 },
  ];

  // Hire vs Cancel data for donut chart
  const hireData = [
    { name: "Total Hired", value: 54, color: "#3b82f6" },
    { name: "Total Canceled", value: 20, color: "#10b981" },
    { name: "Total Pending", value: 26, color: "#ef4444" },
  ];

  const carStatuses = [
    {
      no: "01",
      carNo: "6465",
      driver: "Alex Noman",
      status: "Completed",
      earning: "$ 35.44",
      statusColor: "bg-green-500",
    },
    {
      no: "02",
      carNo: "5665",
      driver: "Razib Rahman",
      status: "Pending",
      earning: "$ 0.00",
      statusColor: "bg-blue-500",
    },
    {
      no: "03",
      carNo: "1755",
      driver: "Luke Norton",
      status: "In route",
      earning: "$ 23.50",
      statusColor: "bg-red-500",
    },
  ];

  return (
    <div
      className="w-screen h-screen overflow-hidden bg-gray-50 flex flex-col"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Header - Fixed height */}
      <div className="flex-shrink-0 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 lg:pt-6 pb-2 sm:pb-3 lg:pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div className="min-w-0 flex-1">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 truncate">
              Today's Statistics
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">
              Tue, 14 Nov, 2022, 11:30 AM
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <div className="relative">
              <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4" />
              <input
                type="text"
                placeholder="Search here"
                className="pl-7 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-32 sm:w-48 lg:w-64 text-xs sm:text-sm"
              />
            </div>
            <button className="p-1.5 sm:p-2 text-gray-500 hover:bg-gray-100 rounded-lg relative flex-shrink-0">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-auto px-4 sm:px-6 lg:px-8 pb-3 sm:pb-4 lg:pb-6 hide-scrollbar">
        <div className="grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 gap-3 sm:gap-4 lg:gap-6 h-full">
          {/* Left Sidebar */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-3 sm:space-y-4 lg:space-y-6">
            {/* Income Card */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs sm:text-sm font-medium text-gray-600">Income</h3>
                <span className="text-xs text-gray-500">Today</span>
              </div>
              <div className="mb-3 sm:mb-4">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">$ 9460.00</h2>
                <p className="text-xs sm:text-sm text-red-500 flex items-center mt-1">
                  ↓ 1.5%
                </p>
              </div>
              <div className="text-xs text-gray-500 space-y-1">
                <p>Compared to $9940 yesterday</p>
                <p>Last week Income: <span className="font-semibold">$25658.00</span></p>
              </div>
            </div>

            {/* Expenses Card */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs sm:text-sm font-medium text-gray-600">Expenses</h3>
                <span className="text-xs text-gray-500">Today</span>
              </div>
              <div className="mb-3 sm:mb-4">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">$ 5660.00</h2>
                <p className="text-xs sm:text-sm text-green-500 flex items-center mt-1">
                  ↑ 2.5%
                </p>
              </div>
              <div className="text-xs text-gray-500 space-y-1">
                <p>Compared to $5240 yesterday</p>
                <p>Last week expenses: <span className="font-semibold">$22658.00</span></p>
              </div>
            </div>

            {/* Hire vs Cancel Chart */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 shadow-sm flex-1 min-h-0">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h3 className="text-xs sm:text-sm font-medium text-gray-600">Hire vs Cancel</h3>
                <span className="text-xs text-gray-500">Today</span>
              </div>

              <div className="relative flex justify-center mb-4 sm:mb-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={hireData}
                        cx="50%"
                        cy="50%"
                        innerRadius="45%"
                        outerRadius="80%"
                        startAngle={90}
                        endAngle={450}
                        dataKey="value"
                      >
                        {hireData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3">
                {[
                  { label: "Total Hired", value: "54%", color: "bg-blue-500", trend: "up" },
                  { label: "Total Canceled", value: "20%", color: "bg-green-500", trend: "up" },
                  { label: "Total Pending", value: "26%", color: "bg-red-500", trend: "down" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center min-w-0 flex-1">
                      <div
                        className={`w-2 h-2 sm:w-3 sm:h-3 ${item.color} rounded-full mr-2 flex-shrink-0`}
                      ></div>
                      <span className="text-xs sm:text-sm text-gray-600 truncate">{item.label}</span>
                    </div>
                    <div className="flex items-center flex-shrink-0">
                      <span className="text-xs sm:text-sm font-semibold">{item.value}</span>
                      <span
                        className={`text-xs ml-1 ${item.trend === "up" ? "text-green-500" : "text-red-500"
                          }`}
                      >
                        {item.trend === "up" ? "↑" : "↓"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-3 sm:space-y-4 lg:space-y-6 min-h-0">
            {/* Car Availability */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Car Availability</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
                <select
                  className="col-span-1 px-3 sm:px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
                  value={selectedCar}
                  onChange={(e) => setSelectedCar(e.target.value)}
                >
                  <option>Car number</option>
                  <option>6465</option>
                  <option>5665</option>
                  <option>1755</option>
                </select>
                <input
                  type="date"
                  className="col-span-1 px-3 sm:px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
                  defaultValue="2022-11-20"
                />
                <select
                  className="col-span-1 px-3 sm:px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  <option>10 AM</option>
                  <option>11 AM</option>
                  <option>12 PM</option>
                  <option>1 PM</option>
                </select>
                <button className="col-span-1 px-4 sm:px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-xs sm:text-sm font-medium">
                  Check
                </button>
              </div>
            </div>

            {/* Live Car Status */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 shadow-sm flex-1 min-h-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-2">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">Live Car Status</h3>
                <button className="flex items-center gap-2 px-3 sm:px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-xs sm:text-sm self-start sm:self-auto">
                  <Filter className="w-3 h-3 sm:w-4 sm:h-4" />
                  Filter
                </button>
              </div>

              <div className="overflow-x-auto hide-scrollbar -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
                <div className="min-w-full inline-block align-middle">
                  <table className="w-full min-w-[500px]">
                    <thead>
                      <tr className="text-left text-xs sm:text-sm text-gray-500 border-b">
                        <th className="pb-2 sm:pb-3 font-medium">No.</th>
                        <th className="pb-2 sm:pb-3 font-medium">Car no.</th>
                        <th className="pb-2 sm:pb-3 font-medium">Driver</th>
                        <th className="pb-2 sm:pb-3 font-medium">Status</th>
                        <th className="pb-2 sm:pb-3 font-medium">Earning</th>
                        <th className="pb-2 sm:pb-3 font-medium"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {carStatuses.map((car, index) => (
                        <tr key={index} className="border-b last:border-b-0">
                          <td className="py-3 sm:py-4 text-xs sm:text-sm text-gray-600">{car.no}</td>
                          <td className="py-3 sm:py-4 text-xs sm:text-sm font-medium">{car.carNo}</td>
                          <td className="py-3 sm:py-4">
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                                <User className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                              </div>
                              <span className="text-xs sm:text-sm font-medium truncate">{car.driver}</span>
                            </div>
                          </td>
                          <td className="py-3 sm:py-4">
                            <div className="flex items-center gap-1 sm:gap-2">
                              <div
                                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${car.statusColor}`}
                              ></div>
                              <span className="text-xs sm:text-sm">{car.status}</span>
                            </div>
                          </td>
                          <td className="py-3 sm:py-4 text-xs sm:text-sm font-medium">{car.earning}</td>
                          <td className="py-3 sm:py-4">
                            <button className="px-2 sm:px-4 py-1 bg-blue-500 text-white text-xs sm:text-sm rounded-lg hover:bg-blue-600 transition-colors">
                              Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                </div>
              </div>
            </div>

            {/* Earning Summary */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-6 gap-3 lg:gap-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">Earning Summary</h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <select className="px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Mar 2022 - Oct 2022</option>
                    <option>Jan 2022 - Dec 2022</option>
                  </select>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600">Last 6 months</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full"></div>
                      <span className="text-gray-600">Same period last year</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-48 sm:h-56 lg:h-64 xl:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={earningsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: windowWidth < 640 ? 10 : 12, fill: "#6b7280" }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: windowWidth < 640 ? 10 : 12, fill: "#6b7280" }}
                      tickFormatter={(value) => `${value / 1000}`}
                    />
                    <Line
                      type="monotone"
                      dataKey="current"
                      stroke="#3b82f6"
                      strokeWidth={windowWidth < 640 ? 2 : 3}
                      dot={{ r: windowWidth < 640 ? 3 : 4, fill: "#3b82f6" }}
                      activeDot={{ r: windowWidth < 640 ? 4 : 6, fill: "#3b82f6" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="previous"
                      stroke="#d1d5db"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={{ r: windowWidth < 640 ? 2 : 3, fill: "#d1d5db" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Dashboard;