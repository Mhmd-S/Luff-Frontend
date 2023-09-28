import { createContext, useState, useMemo, useEffect, useContext } from 'react';

import { userAPI } from '../api/userAPI';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => { // I also included general error handling here hehehe
  const [user, setUser] = useState(null);

// Remove user login from here and add it to the useLogin.jsx hook

  // Check if user already has a session, if so, set the user state and finaly set the initail loading to false.
  useEffect(()=>{
    userAPI.checkAuthStatus()
      .then(data => setUser(data.user))
      .catch(err => {}) // Do nothing because there is no user session
    },[])

  // Make a request to the API to log the user out and then set the user state to null.
  const logout = () => {
    userAPI.logout().then(()=>setUser(null));
  };

  // We are using useMemo here to avoid re-rendering the context provider when the user state changes.
  // We are going only to re-render the context provider when the user, loading or error state changes.
  const memoValue = useMemo(()=>({
    user,
    setUser,
    logout
  }),[user]);

  return (
    <AuthContext.Provider value={memoValue}>
      {children}
    </AuthContext.Provider>
  )  
}

// Expor the hook instead of the context iteself
export default function useAuth() {
  return useContext(AuthContext);
}