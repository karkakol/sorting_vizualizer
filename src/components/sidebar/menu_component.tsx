import React, {ReactNode, useState} from 'react';
// @ts-ignore
import {slide as Menu} from 'react-burger-menu';
import {Theme, useTheme} from "@mui/material";


const getMenuStyles = (theme: Theme) => ({
    bmBurgerButton: {
        position: 'absolute',
        width: 28,
        height: 24,
        left: 30,
        top: 30,
        zIndex: 19,

    },
    bmBurgerBars: {
        background: 'white'
    },
    bmBurgerBarsHover: {
        background: 'blue'
    },
    bmCrossButton: {
        display: 'none'
    },
    bmCross: {
        background: 'green'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        width: 255,
        zIndex: 30
    },
    bmMenu: {
        background: "#111111",
    },
    bmItem: {
        outline: 'none',
        '&:focus': {
            outline: 'none'
        }
    },
    bmMorphShape: {
        fill: 'gray'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.5)',
        zIndex: 20
    }
});

interface MenuComponentProps{
    children: ReactNode
}
function MenuComponent({children} : MenuComponentProps) {
    const theme = useTheme();
    const menuStyles = getMenuStyles(theme);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Menu
            isOpen={isOpen}
            disableCloseOnEsc
            styles={menuStyles}
            onStateChange={(state: { isOpen: boolean | ((prevState: boolean) => boolean); }) => setIsOpen(state.isOpen)}
        >
            {children}
        </Menu>
    );
}

export default MenuComponent;
