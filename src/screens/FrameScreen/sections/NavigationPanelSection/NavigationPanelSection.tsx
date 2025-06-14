import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";

export const NavigationPanelSection = (): JSX.Element => {
  const navigationItems = [
    { icon: "👥", label: "Classmates", notifications: "9+" },
    { icon: "📝", label: "Assignments", notifications: "9+" },
    { icon: "📊", label: "Attendance", notifications: "9+" },
    { icon: "📢", label: "Announcement", notifications: "9+" },
    { icon: "📚", label: "Learn", notifications: "9+" },
    { icon: "📅", label: "Events", notifications: "9+" },
    { icon: "💳", label: "Fees", notifications: "9+" },
    { icon: "🏛️", label: "Clubs", notifications: "9+" },
  ];

  return (
    <div className="w-[220px] h-full bg-white border-r border-gray-200 flex flex-col">
      {/* User Profile Section */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
          <div className="relative">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/api/placeholder/48/48" alt="Milan Kr. Singh" />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-sm text-gray-800">Milan Kr. Singh</div>
            <Badge className="h-5 bg-blue-600 text-white text-xs px-2 mt-1 w-fit">
              Senior Admin
            </Badge>
            <div className="text-xs text-gray-600 mt-1">D1 Senior Manager</div>
          </div>
        </div>
      </div>

      {/* Main Navigation Menu */}
      <div className="flex-1 overflow-auto">
        <nav className="flex flex-col py-2">
          {navigationItems.map((item, index) => (
            <div key={index} className="h-12 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center justify-between px-4 h-full">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm text-gray-700">{item.label}</span>
                </div>
                <Badge className="w-6 h-4 bg-red-500 text-white text-xs flex items-center justify-center p-0 rounded-full">
                  {item.notifications}
                </Badge>
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Menu */}
      <div className="border-t border-gray-200">
        <nav className="flex flex-col py-2">
          <div className="h-12 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center px-4 h-full">
              <div className="flex items-center gap-3">
                <span className="text-lg">🌙</span>
                <span className="text-sm text-gray-700">Mode</span>
              </div>
            </div>
          </div>
          <div className="h-12 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center px-4 h-full">
              <div className="flex items-center gap-3">
                <span className="text-lg">🚪</span>
                <span className="text-sm text-gray-700">Logout</span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};