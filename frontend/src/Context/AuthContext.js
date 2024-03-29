import React,{createContext,useState,useEffect} from 'react';
import Authentication from '../Services/Authentication';


export const AuthContext = createContext();

export default ({ children })=>{
  const [user,setUser] = useState(null);
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const [isLoaded,setIsLoaded] = useState(false);

  useEffect(()=>{
    Authentication.isAuthenticated().then(data=>{
      setUser(data,user);
      setIsAuthenticated(data,isAuthenticated);
      setIsLoaded(true);
    });
  },[]);
  return(
    <div>
      {!isLoaded ? <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
   
  </div>
</div>:
      <AuthContext.Provider value={{user,setUser,isAuthenticated,setIsAuthenticated}}>
        { children}
        </AuthContext.Provider>}
    </div>
  )
}