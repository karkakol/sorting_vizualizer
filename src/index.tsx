import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {appRoutes} from "./routing/app_routes";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import BubbleSortPage from "./pages/bubble_sort_page";
import InsertionSortPage from "./pages/insertion_sort_page";
import {SidebarContext} from "./components/sidebar/sidebar_context";
import SidebarComponent from "./components/sidebar/sidebar_component";
import '@fortawesome/fontawesome-free/css/all.min.css';


const router = createBrowserRouter([
    {
        path: "/",
        element: <SidebarContext> <SidebarComponent/> </SidebarContext>,
        errorElement: <div>Error</div>,
        children: [
            {
                path: appRoutes.bubble,
                element: <BubbleSortPage/>,
            },
            {
                path: appRoutes.insertion,
                element: <InsertionSortPage/>,
            },
        ],
    },
]);

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);


