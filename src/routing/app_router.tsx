import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {SidebarContextProvider} from "../components/sidebar/sidebar_context";
import SidebarComponent from "../components/sidebar/sidebar_component";
import {routesNames} from "./app_routes";
import HomePage from "../pages/home_page";
import BubbleSortPage from "../pages/bubble_sort_page";
import InsertionSortPage from "../pages/insertion_sort_page";
import MergeSortPage from "../pages/merge_sort";
import React, {useContext} from "react";
import {UserContext} from "../providers/user_provider";
import LoginPage from "../pages/auth/login_page";
import RegisterPage from "../pages/auth/register_page";



const authRouter = createBrowserRouter([
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

const unAuthRouter = createBrowserRouter([
    {
        path: "/",
        errorElement: <div>Error</div>,
        children: [
            {
                path: "",
                element: <LoginPage/>,
            },
            {
                path: routesNames.login,
                element: <LoginPage/>,
            },
            {
                path: routesNames.register,
                element: <RegisterPage/>,
            },
        ],
    },
]);

export default function AppRouter() {
    const {isAuth,setAuth} = useContext(UserContext);

    return (

        <RouterProvider router={isAuth ? authRouter : unAuthRouter}/>

    )


}