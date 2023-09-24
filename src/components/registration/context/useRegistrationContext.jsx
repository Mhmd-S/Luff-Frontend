import { useContext, createContext, useState, useMemo } from "react";

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => { // I also included general error handling here hehehe
    const [ registrationStage, setRegistrationStage ] = useState(1);
    const [ userEmail, setUserEmail ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);

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
    isLoading,
    userEmail,
    setUserEmail,
    goNextStage,
    goPrevStage,
  }),[registrationStage, isLoading, userEmail]);

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
