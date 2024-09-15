import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";


export const AuthContext = createContext(null)

// social auth provider here
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);

      // Create user / registation   function
      const createUser = (email, password) =>{
        // setLoading(true)
        return  createUserWithEmailAndPassword(auth, email, password)
     };

    //  sing in /login function
    const signInUser = (email, password)=>{
      return signInWithEmailAndPassword(auth, email, password)
  }

   //  googleLogin authentication here
 const googleLogin = () =>{
  return signInWithPopup(auth, googleProvider)
   }



        //  logut 
const logOut = () =>{
  // setLoading(false)
  setUser(null)
  signOut(auth)
}


   // Observer
   useEffect(()=>{
            
    const unSubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
              setUser(user)
              
        }
      });
      return() =>{
        unSubscribe()
      }
},[])



    const spicyInfo = {
          user,
          createUser,
          signInUser,
          googleLogin,
          logOut 
          

    }
  return (
        <AuthContext.Provider value={spicyInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;