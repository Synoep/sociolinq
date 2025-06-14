import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContentWrapperSection = (): JSX.Element => {
  return (
    <div className="w-full px-6 py-4">
      <Card className="w-full shadow-sm rounded-lg overflow-hidden">
        <CardContent className="p-0 relative h-48">
          {/* Background image with overlay */}
          <div className="relative h-full bg-gradient-to-r from-blue-900 to-purple-900">
            <div className="absolute inset-0 bg-black opacity-40" />
            
            {/* User profile information */}
            <div className="flex items-center gap-6 absolute bottom-6 left-6">
              {/* Avatar with glow effect */}
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-sm opacity-50"></div>
                <Avatar className="relative w-24 h-24 border-4 border-white">
                  <AvatarImage src="/api/placeholder/96/96" alt="Milan Kr. Singh" />
                  <AvatarFallback className="text-xl font-bold">MKS</AvatarFallback>
                </Avatar>
              </div>

              {/* User details */}
              <div className="flex flex-col">
                <h2 className="font-bold text-white text-2xl">Milan Kr. Singh</h2>
                <p className="text-gray-200 text-base">Senior Admin</p>
                <p className="text-gray-200 text-base">D1 Senior Manager</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};