import React, {MouseEventHandler, useContext} from 'react';

import {Outlet, useNavigate} from 'react-router-dom';
import {AppRoute} from "../../routing/app_routes";
import MenuComponent from "./menu_component";
import './sidebar_component_style.css';
import {SidebarContext} from "../../provider/sidebar_provider";

const sidebarTileStyleClass = 'sidebarElement';

function SidebarComponent() {
    const navigate = useNavigate();
    const {currValue, setCurrValue} = useContext(SidebarContext);
    const routes = Array.from(AppRoute.sidebarRoutes);
    const onTileTap = (route: AppRoute) => {
        if (route == currValue) return;
        setCurrValue(route);
        navigate(route.routeName);
    }
    const mappedItems = routes.map(([key, value]) => {
        return (
            SidebarTile(() => onTileTap(value), value.name, currValue === value)
        )
    });
    return (
        <div>
            <MenuComponent>
                <div>
                    <div className={sidebarTileStyleClass}
                         onClick={() => onTileTap(AppRoute.defaultUnauthRoute)}
                         style={{
                             paddingBottom: '20px',
                             paddingTop: '20px',
                             fontSize: '28px',
                             fontWeight: currValue === AppRoute.defaultUnauthRoute ? '500' : '300'
                         }}>
                        Home
                    </div>
                    {mappedItems}
                </div>
            </MenuComponent>

            <div style={{
                paddingLeft: '120px',
                height: '80px',
                width: 'calc(100% - 120px)',
                position: 'absolute',
                backgroundColor: '#151515',
                fontSize: 32,
                color: 'white',
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'center',
            }}>
                {currValue.name}
            </div>

            <Outlet/>


        </div>
    );
}


function SidebarTile(onTap: Function, label: string, selected: boolean) {
    return (
        <div onClick={() => onTap()} className={sidebarTileStyleClass} style={{fontWeight: selected ? '500' : '300'}}>
            {label}
        </div>
    );
}

export default SidebarComponent;
