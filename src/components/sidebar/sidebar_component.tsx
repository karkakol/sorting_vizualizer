import React from 'react';

import {Outlet, useNavigate} from 'react-router-dom';
import {appRoutes} from "../../routing/app_routes";
import MenuComponent from "./menu_component";
import './sidebar_component_style.css';

function SidebarComponent() {
    const navigate = useNavigate();
    const className = 'sidebarElement';
    return (
        <div>
            <MenuComponent>
                <div>
                    <div onClick={() => navigate(appRoutes.insertion)} className={className}>
                        Insertion sort
                    </div>
                    <div onClick={() => navigate(appRoutes.bubble)} className={className}>
                        Bubble sort
                    </div>

                </div>
            </MenuComponent>
            <Outlet/>
        </div>



    );
}

export default SidebarComponent;
