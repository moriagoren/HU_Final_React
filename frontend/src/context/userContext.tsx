import { ReactNode, createContext, useEffect, useState } from "react";
import { UserType } from "../interfaces/UserType";
import { getUser } from "../auth/TokenManager";

interface UserData extends UserType { }
interface Props {
    children: ReactNode;
}

type UserContextType = {
    userData: UserType | null;
    setUserData: (data: UserType | null) => void;
};

export const UserContext = createContext<UserContextType>({
    userData: null,
    setUserData: () => { },
});
const userFromToken = getUser();

export const UserProvider = ({ children }: Props) => {
    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {
        setUserData(userFromToken ? userFromToken : null);
    }, []);

    return <UserContext.Provider value={{ userData, setUserData }}>{children}</UserContext.Provider>;
};