import UrlProvider from "@/hooks/urlProvider";
import  { createContext } from ("react");

const UserContext = createContext([])

export function UserProvider({ children }) {
    const urlProvider = UrlProvider();

    return (
        <UserContext.Provider value={urlProvider}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;