import React, {useState, useEffect, useContext, createContext, ReactNode} from 'react';

interface SidebarProviderProps {
    children: ReactNode;
    defaultItem: string; // Replace string with the appropriate type
}

export const SidebarContext = createContext<any>(null);

export  function SidebarProvider({children, defaultItem}: SidebarProviderProps) {
    const [currentItem, setCurrentItem] = useState(defaultItem);
    useEffect(() => {
        if (defaultItem !== currentItem) {
            return setCurrentItem(defaultItem);
        }
    }, [currentItem, defaultItem]);
    return (
        <SidebarContext.Provider value={{ currentItem, setCurrentItem }}>
            {children}
        </SidebarContext.Provider>
    );
}

interface SidebarProps {
    isCollapsible: boolean;
    item: string;
    items: string[],
}

export const useSidebar = ({ isCollapsible, item, items  }:SidebarProps ) => {
    const { currentItem, setCurrentItem } = useContext(SidebarContext);
    const isActive = item === currentItem || items.includes(currentItem);
    const [isExpanded, setIsExpanded] = useState(isActive);

    useEffect(() => {
        if (!isActive && isExpanded) {
            return setIsExpanded(false);
        }
        if (isActive && !isExpanded) {
            return setIsExpanded(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentItem]);

    const onItemClick = () => {
        if (!isCollapsible) {
            setCurrentItem(item);
        }
        setIsExpanded((prev) => !prev);
    };

    return {
        isExpanded,
        isActive,
        onItemClick
    };
};
