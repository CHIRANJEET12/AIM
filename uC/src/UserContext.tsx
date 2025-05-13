import { createContext } from 'react';

export interface User {
    name: string;
    email: string;
}

interface UserContextType {
    user: User;
    setUser: (user: User) => void;
}

export const UserContext = createContext<UserContextType>({
    user : {
        name: '',
        email: ''
    },
    setUser: () => {}
});