import { createContext, useState, useMemo, useEffect, useContext } from 'react';

import { userAPI } from '../api/userAPI';
import CheckCircle from '../components/icons/CheckCircle';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    userAPI
      .checkAuthStatus()
      .then((data) => {
        setUser(data.data.data);
        setLoading(false); // Set loading to false when the user data is available
      })
      .catch((err) => {
        setLoading(false); // Set loading to false on error as well
      });
  }, []); // Remove 'user' from the dependency array

  const logout = () => {
    userAPI.logout().then(() => setUser(null));
  };

  const memoValue = useMemo(
    () => ({
      user,
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