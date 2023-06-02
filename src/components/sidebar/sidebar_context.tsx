import React from 'react';
import { useLocation } from 'react-router-dom';
import {SidebarProvider} from "../../hooks/use_sidebar";


// @ts-ignore
export function SidebarContext({ children }) {
    const { pathname } = useLocation();
    return <SidebarProvider children={children} defaultItem={pathname}></SidebarProvider>
}


export {};
