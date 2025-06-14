import React from "react";
import { Button } from "../../../../components/ui/button";

export const SearchBarSection = (): JSX.Element => {
  const filterButtons = [
    { id: 1, label: "Meeting", icon: "🤝" },
    { id: 2, label: "Classmates", icon: "👥" },
    { id: 3, label: "Announcement", icon: "📢" },
    { id: 4, label: "Assignments", icon: "📝" },
    { id: 5, label: "Attendance", icon: "📊" },
  ];

  return (
    <nav className="w-full h-12 py-2 bg-gray-50 border-b border-gray-200">
      <div className="flex items-center gap-3 ml-6">
        {filterButtons.map((button) => (
          <Button
            key={button.id}
            variant="outline"
            className="h-8 px-4 py-1 bg-white rounded-full hover:bg-gray-50 border border-gray-200"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm">{button.icon}</span>
              <span className="text-sm text-gray-600">{button.label}</span>
            </div>
          </Button>
        ))}
      </div>
    </nav>
  );
};