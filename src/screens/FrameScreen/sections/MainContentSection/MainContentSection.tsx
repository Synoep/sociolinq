import { CalendarIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const notifications = [
  {
    id: 1,
    title: "ABC Public School earned the Excellence Award!",
    date: "3rd Dec, 2023",
    timeAgo: "1 h ago",
    isHighlighted: true,
    bgColor: "bg-orange-50",
    iconBg: "bg-orange-400",
    icon: "🏆",
    hasMarkAsReadButton: true,
  },
  {
    id: 2,
    title: "ABC Public School earned the Excellence Award!",
    date: "3rd Dec, 2023",
    timeAgo: "1 h ago",
    isHighlighted: true,
    bgColor: "bg-orange-50",
    iconBg: "bg-orange-400",
    icon: "🏆",
    hasMarkAsReadButton: true,
  },
  {
    id: 3,
    title: "ABC Public School earned the Excellence Award!",
    date: "3rd Dec, 2023",
    timeAgo: "1 h ago",
    isHighlighted: false,
    bgColor: "bg-white",
    iconBg: "bg-blue-400",
    icon: "🏆",
    hasExpandButton: true,
  },
  {
    id: 4,
    title: "ABC Public School earned the Excellence Award!",
    date: "3rd Dec, 2023",
    timeAgo: "1 h ago",
    isHighlighted: false,
    bgColor: "bg-white",
    iconBg: "bg-purple-400",
    icon: "🏆",
    hasExpandButton: true,
  },
  {
    id: 5,
    title: "ABC Public School earned the Excellence Award!",
    date: "3rd Dec, 2023",
    timeAgo: "1 h ago",
    isHighlighted: false,
    bgColor: "bg-white",
    iconBg: "bg-pink-400",
    icon: "🏆",
    hasExpandButton: true,
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full px-6 py-4">
      <Card className="shadow-sm overflow-hidden">
        <CardContent className="p-0">
          {/* Header */}
          <div className="flex flex-col w-full p-6">
            <div className="flex items-start justify-between w-full">
              <h2 className="font-semibold text-xl text-gray-800">Recent updates</h2>
              <Button
                variant="link"
                className="text-blue-600 text-sm font-medium p-0"
              >
                Mark all as read
              </Button>
            </div>
            <Separator className="w-full mt-4" />
          </div>

          {/* Notification cards */}
          <div className="px-6 pb-6 space-y-3">
            {notifications.map((notification) => (
              <Card
                key={notification.id}
                className={`${notification.bgColor} ${notification.isHighlighted ? "border-2 border-orange-200" : "border border-gray-200"} rounded-lg`}
              >
                <CardContent className="p-0 flex items-center relative">
                  {/* Icon container */}
                  <div
                    className={`${notification.iconBg} w-16 h-16 rounded-l-lg flex items-center justify-center`}
                  >
                    <span className="text-2xl text-white">{notification.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col py-3 px-4 flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        {notification.isHighlighted ? (
                          <p className="font-semibold text-base">
                            <span className="text-gray-800">ABC Public School earned the </span>
                            <span className="text-red-600">Excellence</span>
                            <span className="text-gray-800"> Award!</span>
                          </p>
                        ) : (
                          <p className="font-semibold text-base text-gray-800">
                            {notification.title}
                          </p>
                        )}
                        <div className="flex items-center gap-2 mt-2">
                          <CalendarIcon className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">{notification.date}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-400">{notification.timeAgo}</span>
                        
                        {/* Action button */}
                        {notification.hasMarkAsReadButton && (
                          <Badge
                            variant="outline"
                            className="bg-blue-50 border-blue-200 text-blue-600 text-xs px-3 py-1"
                          >
                            Mark as read
                          </Badge>
                        )}

                        {/* Expand button */}
                        {notification.hasExpandButton && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="w-8 h-8 text-blue-600"
                          >
                            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                              <span className="text-white text-xs">▼</span>
                            </div>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};