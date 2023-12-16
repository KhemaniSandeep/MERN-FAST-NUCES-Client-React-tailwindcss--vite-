import { createContext } from "react";

export const GlobalContext = createContext()
const data={
    user: null
}
export default function contextProvider({children}){
    
    return (

        <GlobalContext.provider value={data}>
            {children}
        </GlobalContext.provider>
    )
}