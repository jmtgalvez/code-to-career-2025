import React from "react";
import { SidebarCustom } from "./sidebarCustom";

const ClientSessionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex bg-white dark:bg-designBackground overflow-hidden  min-h-screen">
      {<SidebarCustom />}
      {children}
    </div>
  );
};

export default ClientSessionWrapper;
