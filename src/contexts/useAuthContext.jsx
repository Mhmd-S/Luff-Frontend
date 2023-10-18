import { createContext, useState, useMemo, useEffect, useContext } from 'react';

import { userAPI } from '../api/userAPI';
import CheckCircle from '../components/icons/CheckCircle';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  const getUserInfo = async () => { // If the user is authenticated gets his info
    try {
      const isAuth = await userAPI.checkAuthStatus();
      if (isAuth.data.status == 'success') {
        const user = await userAPI.getSelf();
        setUser(user.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUserInfo()
      .finally(()=> setLoading(false)); // Set loading to false when the request is done
  }, []); // Remove 'user' from the dependency array

  const logout = () => {
    userAPI.logout().then(() => setUser(null));
  };

  const memoValue = useMemo(
    () => ({
      user,
      getUserInfo,
      setUser,
      logout,
    }),
    [user, logout]
  );

  if (loading) {
    return <CheckCircle/>
  }

  return (
    <AuthContext.Provider value={memoValue}>
      {children}
    </AuthContext.Provider>
  );
};


// Expor the hook instead of the context iteself
export const useAuth = () => {
  return useContext(AuthContext);
}