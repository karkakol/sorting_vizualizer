import React, {useState, createContext, ReactNode} from 'react';
import {AppRoute} from "../routing/app_routes";

interface SidebarProviderProps {
    children: ReactNode;
 // Replace string with the appropriate type
}

interface SidebarContextInterface {
    currValue: AppRoute,
    setCurrValue: (arg0: AppRoute) => void;
}

export const SidebarContext = createContext<SidebarContextInterface>({
    currValue: AppRoute.defaultUnauthRoute, setCurrValue: (_) => {
    }
});

export function SidebarProvider({children}: SidebarProviderProps) {
    const [currentItem, setCurrentItem] = useState(AppRoute.defaultUnauthRoute);
    return (
        <SidebarContext.Provider value={{currValue: currentItem, setCurrValue: setCurrentItem}}>
            {children}
        </SidebarContext.Provider>
    );
}