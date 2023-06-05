import React, {useState, createContext, ReactNode} from 'react';

interface UserProviderProps {
    children: ReactNode;
}

interface UserContextInterface {
    isAuth: boolean,
    setAuth: (arg0: boolean) => void;
}

export const UserContext = createContext<UserContextInterface>({
    isAuth: false, setAuth: (_) => {
    }
});

export function UserProvider({children}: UserProviderProps) {
    const [currentItem, setCurrentItem] = useState(false);
    return (
        <UserContext.Provider value={{isAuth: currentItem, setAuth: setCurrentItem}}>
            {children}
        </UserContext.Provider>
    );
}