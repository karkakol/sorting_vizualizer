import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {UserProvider} from "./providers/user_provider";
import AppRouter from "./routing/app_router";
import { ToastContainer } from 'react-toastify';


// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <UserProvider>
            <AppRouter/>
            <ToastContainer />
        </UserProvider>
    </React.StrictMode>
);


