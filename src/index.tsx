import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {routesNames} from "./routing/app_routes";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import BubbleSortPage from "./pages/bubble_sort_page";
import InsertionSortPage from "./pages/insertion_sort_page";
import {SidebarContextProvider} from "./components/sidebar/sidebar_context";
import SidebarComponent from "./components/sidebar/sidebar_component";
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from "./pages/home_page";
import MergeSortPage from "./pages/merge_sort";


const router = createBrowserRouter([
    {
        path: "/",
        element: <SidebarContextProvider> <SidebarComponent/> </SidebarContextProvider>,
        errorElement: <div>Error</div>,
        children: [
            {
                path: routesNames.home,
                element: <HomePage/>,
            },
            {
                path: routesNames.bubble,
                element: <BubbleSortPage/>,
            },
            {
                path: routesNames.insertion,
                element: <InsertionSortPage/>,
            },
            {
                path: routesNames.merge,
                element: <MergeSortPage/>,
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


