import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/Firebase.config";


export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);

      // Create user / registation   function
      const createUser = (email, password) =>{
        // setLoading(true)
        return  createUserWithEmailAndPassword(auth, email, password)
     };

    const spicyInfo = {
          user,
          createUser,
          

    }
  return (
        <AuthContext.Provider value={spicyInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;