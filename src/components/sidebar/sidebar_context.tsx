import React from 'react';
import { useLocation } from 'react-router-dom';
import {SidebarProvider} from "../../provider/sidebar_provider";


// @ts-ignore
export function SidebarContextProvider({ children }) {
    return <SidebarProvider children={children}></SidebarProvider>
}


export {};
