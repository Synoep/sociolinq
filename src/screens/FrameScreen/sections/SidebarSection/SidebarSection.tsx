import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";

export const SidebarSection = (): JSX.Element => {
  const teamMembers = [
    { name: "Zane Sorell", role: "CEO", image: "/api/placeholder/60/60" },
    { name: "Maya Mathy", role: "Founder", image: "/api/placeholder/60/60" },
    { name: "Alexis Jensen", role: "CTO", image: "/api/placeholder/60/60" },
    { name: "Keira Battye", role: "Product Designer", image: "/api/placeholder/60/60" },
    { name: "Dominic Game", role: "3D Artist", image: "/api/placeholder/60/60" },
  ];

  const reminders = [
    {
      title: "Annual Sports Day",
      date: "3rd Dec, 2023",
      time: "09:30 AM",
      daysLeft: "In 3 days",
      icon: "⚽",
    },
    {
      title: "Annual Sports Day",
      date: "3rd Dec, 2023",
      time: "09:30 AM",
      daysLeft: "In 3 days",
      icon: "⚽",
    },
  ];

  const events = [
    {
      title: "Annual Function Day",
      date: "3rd Dec, 2023",
      time: "09:30 AM",
      daysLeft: "In 3 days",
      image: "/api/placeholder/80/50",
    },
    {
      title: "Annual Function Day",
      date: "3rd Dec, 2023",
      time: "09:30 AM",
      daysLeft: "In 3 days",
      image: "/api/placeholder/80/50",
    },
  ];

  return (
    <div className="w-[320px] bg-white p-4 flex flex-col gap-6 border-l border-gray-200">
      {/* Image Carousel */}
      <div className="relative">
        <div className="relative h-[140px] w-full rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt="Sports Day"
            src="/api/placeholder/300/140"
          />
          <Badge className="absolute bottom-2 left-2 bg-white text-black text-xs">
            Sports Day-Opening Event
          </Badge>
        </div>
        <div className="flex justify-center gap-1 mt-2">
          <div className="w-2 h-2 rounded-full bg-gray-800"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>

      {/* My Team Section */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">👥</span>
          <h2 className="font-bold text-lg text-gray-800">My Team</h2>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center gap-1 min-w-[60px]">
              <Avatar className="w-12 h-12">
                <AvatarImage src={member.image} alt={member.name} />
              </Avatar>
              <div className="flex flex-col items-center">
                <span className="text-xs font-semibold text-gray-800 text-center">
                  {member.name}
                </span>
                <span className="text-xs text-purple-600 text-center">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
          <button className="ml-2 text-gray-400">→</button>
        </div>
      </div>

      {/* Reminders Card */}
      <Card className="shadow-sm rounded-lg">
        <CardHeader className="flex flex-row items-center justify-between p-4 pb-2">
          <div className="flex items-center gap-2">
            <span className="text-lg">⏰</span>
            <CardTitle className="text-lg font-bold text-gray-800">Reminders</CardTitle>
          </div>
          <span className="text-gray-400">⋯</span>
        </CardHeader>
        <CardContent className="p-0">
          {reminders.map((reminder, index) => (
            <div key={index} className={`p-4 ${index === 0 ? "bg-gray-50" : ""}`}>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-sm text-gray-800">{reminder.title}</h3>
                <span className="text-lg">{reminder.icon}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <div className="flex gap-3">
                  <div className="flex items-center gap-1">
                    <span>📅</span>
                    <span className="text-gray-600">{reminder.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>🕘</span>
                    <span className="text-gray-600">{reminder.time}</span>
                  </div>
                </div>
                <span className="text-gray-400">{reminder.daysLeft}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Events Card */}
      <Card className="shadow-sm rounded-lg">
        <CardHeader className="flex flex-row items-center justify-between p-4 pb-2">
          <div className="flex items-center gap-2">
            <span className="text-lg">🎉</span>
            <CardTitle className="text-lg font-bold text-gray-800">Events</CardTitle>
          </div>
          <span className="text-gray-400">⋯</span>
        </CardHeader>
        <CardContent className="p-0">
          {events.map((event, index) => (
            <div key={index} className="p-4 flex justify-between items-start">
              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-sm text-gray-800">{event.title}</h3>
                  <span className="text-xs text-gray-400">{event.daysLeft}</span>
                </div>
                <div className="flex gap-3 text-xs">
                  <div className="flex items-center gap-1">
                    <span>📅</span>
                    <span className="text-gray-600">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>🕘</span>
                    <span className="text-gray-600">{event.time}</span>
                  </div>
                </div>
              </div>
              <img
                className="w-16 h-10 object-cover rounded ml-3"
                alt="Event"
                src={event.image}
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};