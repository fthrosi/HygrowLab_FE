import { createContext, useContext } from "react";

const SidebarContext = createContext();

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({ children, open, toggleSidebar }) => (
  <SidebarContext.Provider value={{ open, toggleSidebar }}>
    {children}
  </SidebarContext.Provider>
);