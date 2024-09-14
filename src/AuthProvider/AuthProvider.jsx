import { createContext } from "react";


export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {


    const spicyInfo = {
          
    }
  return (
        <AuthContext.Provider value={spicyInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;