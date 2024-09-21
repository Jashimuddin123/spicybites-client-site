import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import axios from "axios";


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

            
    const unSubscribe= onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email|| user?.email
      const loguser = {
        email:userEmail
      }
      console.log('loguser', loguser);
      
        if (currentUser) 

          {
          
              setUser(currentUser)
              axios.post('https://spicybites-server-site.vercel.app/jwt', loguser, {
                withCredentials:true
              })
              .then(res=>console.log('auth res here',res)
              )
           .catch(error=>console.log(error)
           
           )
        }
        else{
          axios.post('https://spicybites-server-site.vercel.app/logout', loguser, {
            withCredentials:true
          })
          .then(res=>console.log('auth res here login out',res)
        )
     .catch(error=>console.log(error)
     
     )
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