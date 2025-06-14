import React from "react";
import { ContentWrapperSection } from "./sections/ContentWrapperSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationPanelSection } from "./sections/NavigationPanelSection/NavigationPanelSection";
import { SearchBarSection } from "./sections/SearchBarSection";
import { SidebarSection } from "./sections/SidebarSection";

export const FrameScreen = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col w-full min-h-screen">
      <HeaderSection />
      <div className="flex flex-1">
        <NavigationPanelSection />
        <div className="flex-1 flex flex-col">
          <SearchBarSection />
          <div className="flex flex-1">
            <div className="flex-1 flex flex-col">
              <ContentWrapperSection />
              <MainContentSection />
              <FooterSection />
            </div>
            <SidebarSection />
          </div>
        </div>
      </div>
    </div>
  );
};