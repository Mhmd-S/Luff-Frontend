import { useContext, createContext, useState, useMemo } from "react";

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => { 
  
    const [ registrationStage, setRegistrationStage ] = useState(0);
    const [ userInfo, setUserInfo ] = useState('');
    const [ loading, setLoading ] = useState(false);

    const goNextStage = () => {
        if (registrationStage < 3) {
            setRegistrationStage(registrationStage + 1);
        }
    }

    const goPrevStage = () => {
        if (registrationStage > 1) {
            setRegistrationStage(registrationStage - 1);
        }
    }

  const memoValue = useMemo(()=>({
    registrationStage,
    loading,
    userInfo,
    setLoading,
    setUserInfo,
    goNextStage,
    goPrevStage,
  }),[registrationStage, loading, userInfo]);

  return (
    <RegistrationContext.Provider value={memoValue}>
      {children}
    </RegistrationContext.Provider>
  )  
}

// Expor the hook instead of the context iteself
export default function useRegistrationContext() {
  return useContext(RegistrationContext);
}
