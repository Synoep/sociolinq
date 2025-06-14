import { SearchIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Input } from "../../../../components/ui/input";

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="w-full h-[60px] bg-[#2c3e50] flex items-center justify-between px-6">
      {/* Logo */}
      <div className="flex items-center">
        <div className="text-white font-bold text-lg">
          <span className="bg-white text-[#2c3e50] px-2 py-1 rounded mr-2">Logo</span>
          Logoipsum
        </div>
        <div className="text-white text-sm ml-2">Brand Standard</div>
      </div>

      {/* Search Bar */}
      <div className="relative w-[300px] h-8 bg-white rounded-full overflow-hidden">
        <div className="flex items-center h-full px-4">
          <Input
            className="border-none bg-transparent h-full p-0 placeholder:text-gray-400 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Search"
            type="text"
          />
          <SearchIcon className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* User Actions */}
      <div className="flex items-center gap-4">
        {/* Search Icon */}
        <SearchIcon className="w-5 h-5 text-white cursor-pointer" />
        
        {/* Notification Icon */}
        <div className="relative">
          <div className="w-5 h-5 text-white cursor-pointer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
            </svg>
          </div>
        </div>

        {/* User Avatar */}
        <Avatar className="w-8 h-8 bg-gray-300">
          <AvatarFallback className="text-xs font-medium text-gray-600">
            MK
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};